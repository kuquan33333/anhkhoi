import type {Metadata} from 'next';
import {getVideos} from '@/lib/cms';
import VideoLibrary from '@/components/VideoLibrary';
export const metadata:Metadata={title:'Video AI & Reels'};
export default async function Videos(){
 const videos=await getVideos();
 return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / VIDEO AI</div><span className="eyebrow">THE VISUAL UNIVERSE</span><h1 className="listing-title">Những thước phim từ <span>trí tưởng tượng.</span></h1><p className="listing-subtitle">Video AI, khám phá vũ trụ và những câu chuyện độc đáo. Chọn danh mục hoặc tìm tên video để khám phá.</p></div></div><section className="container listing-section"><VideoLibrary videos={videos}/></section></main>
}
