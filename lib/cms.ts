import { articles as demoArticles, videoData as demoVideos, facebook as defaultFacebook, type Article, type Video } from '@/lib/content';
import { normalizeFacebookReelUrl } from '@/lib/facebook';

export type GalleryItem = { title: string; image: string; description?: string };
export type SiteSettings = { facebookUrl: string; heroTitle?: string; heroDescription?: string; heroCover?: string; avatar?: string; email?: string };
type Raw = Record<string, unknown>;
type RawBlock = { _type?: string; children?: Array<{text?: string}> };
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const configured = !!(projectId && /^[a-z0-9-]+$/.test(projectId) && /^[a-z0-9_-]+$/.test(dataset));

function text(v: unknown, fallback = ''): string { return typeof v === 'string' ? v.trim() : fallback; }
function date(v: unknown): string {
  const str = text(v); const timestamp = Date.parse(str);
  return str && Number.isFinite(timestamp) ? new Intl.DateTimeFormat('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric',timeZone:'UTC'}).format(timestamp) : '';
}
async function query<T>(groq: string): Promise<T | null> {
  if (!configured) return null;
  try {
    const endpoint = 'https://' + projectId + '.api.sanity.io/v2026-03-01/data/query/' + dataset + '?query=' + encodeURIComponent(groq);
    const token = process.env.SANITY_API_READ_TOKEN;
    const response = await fetch(endpoint, {
      headers: token ? {Authorization: 'Bearer ' + token} : {},
      next: { revalidate: 120 }
    });
    if (!response.ok) { console.error('Sanity HTTP ' + response.status); return null; }
    const data = await response.json() as {result?: T};
    return data.result ?? null;
  } catch(e) { console.error('Sanity fetch error',e); return null; }
}
export async function getVideos(): Promise<Video[]> {
  const result = await query<Raw[]>(String.raw`*[_type == "reel" && defined(slug.current)] | order(publishedAt desc) {
    title, "slug": slug.current, category, description, facebookUrl, duration, publishedAt,
    "image": cover.asset->url
  }`);
  if (!result) return demoVideos;
  return result.filter(v=>text(v.slug) && text(v.title)).map(v=>({
    slug:text(v.slug), title:text(v.title), category:text(v.category,'VIDEO AI'),
    description:text(v.description), facebookUrl:normalizeFacebookReelUrl(text(v.facebookUrl)),
    duration:text(v.duration,'REEL'), date:date(v.publishedAt),
    image:text(v.image,'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&q=85'),
    views:''
  }));
}
export async function getArticles(): Promise<Article[]> {
  const result = await query<Raw[]>(String.raw`*[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    title, "slug": slug.current, category, publishedAt, excerpt, readTime, featured,
    "image":cover.asset->url, body[]{_type, children[]{text}}
  }`);
  if (!result) return demoArticles;
  return result.filter(a=>text(a.title)&&text(a.slug)).map(a=>({
    slug:text(a.slug),title:text(a.title),
    category: (text(a.category)==='TIN HOT'?'TIN HOT':'CÔNG NGHỆ') as Article['category'],
    date: date(a.publishedAt),readTime:text(a.readTime,'4 phút'),
    image:text(a.image,'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1300&q=85'),
    excerpt:text(a.excerpt), featured:a.featured===true,
    body:Array.isArray(a.body)?(a.body as RawBlock[]).filter(b=>b._type==='block').map(b=>(b.children||[]).map(c=>text(c.text)).join('')).filter(Boolean):[]
  }));
}
export async function getGallery(): Promise<GalleryItem[]> {
  const result = await query<Raw[]>(String.raw`*[_type=="galleryItem"] | order(publishedAt desc) {
    title, description, "image":image.asset->url
  }`);
  if (!result) return demoVideos.map(v=>({title:v.title,image:v.image}));
  return result.filter(v=>text(v.title)&&text(v.image)).map(v=>({title:text(v.title),image:text(v.image),description:text(v.description)}));
}
export async function getSiteSettings(): Promise<SiteSettings> {
  const result = await query<Raw>(String.raw`*[_type=="siteSettings"] | order(_updatedAt desc)[0] {
    facebookUrl, heroTitle, heroDescription, email, "heroCover":heroCover.asset->url, "avatar":avatar.asset->url
  }`);
  return {facebookUrl: text(result?.facebookUrl,defaultFacebook),heroTitle:text(result?.heroTitle),heroDescription:text(result?.heroDescription),heroCover:text(result?.heroCover),avatar:text(result?.avatar),email:text(result?.email)};
}
export function isCmsConfigured() { return configured; }
