import type {MetadataRoute} from 'next';
import {getArticles,getVideos} from '@/lib/cms';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com').replace(/\/+$/,'');
 const [articles,videos]=await Promise.all([getArticles(),getVideos()]);
 const staticRoutes=['/','/videos','/tin-hot','/cong-nghe','/gallery','/gioi-thieu','/lien-he'];
 return [...staticRoutes.map(path=>({url:base+path,lastModified:new Date(),changeFrequency:'weekly' as const,priority:path==='/'?1:.6})),
 ...articles.map(a=>({url:base+'/articles/'+encodeURIComponent(a.slug),lastModified:new Date(),changeFrequency:'weekly' as const,priority:.7})),
 ...videos.map(v=>({url:base+'/videos/'+encodeURIComponent(v.slug),lastModified:new Date(),changeFrequency:'weekly' as const,priority:.7}))];
}
