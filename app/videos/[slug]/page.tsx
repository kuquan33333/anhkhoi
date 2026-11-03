import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {getVideos,isCmsConfigured} from '@/lib/cms';
import {FacebookReelPlayer} from '@/components/FacebookReelPlayer';
export async function generateStaticParams(){return (await getVideos()).map(v=>({slug:v.slug}))}
export default async function VideoDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const videos=await getVideos();
 const video=videos.find(v=>v.slug===slug);if(!video)notFound();
 return <main className="container detail-page"><Link className="back-link" href="/videos"><ArrowLeft size={16}/> Quay lại thư viện video</Link><div className="video-detail-layout"><FacebookReelPlayer url={video.facebookUrl} title={video.title} image={video.image}/><div className="video-detail-info"><span className="eyebrow">{video.category} / {video.date}</span><h1>{video.title}</h1><p>{video.description}</p>{!video.facebookUrl&&<div className="demo-note">{isCmsConfigured()?'Hãy thêm URL Facebook Reel công khai trong Sanity Studio để phát video.':'Đây là video mẫu chưa có URL Facebook. Sau khi cấu hình Sanity Studio, nhập URL Reel công khai để bật trình phát.'}</div>}<div className="video-more"><span className="eyebrow">KHÁM PHÁ TIẾP</span>{videos.filter(v=>v.slug!==slug).slice(0,3).map(v=><Link key={v.slug} href={'/videos/'+v.slug}><img src={v.image} alt=""/><span>{v.title}</span><ArrowUpRight size={16}/></Link>)}</div></div></div></main>
}
