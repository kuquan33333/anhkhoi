import type {Metadata} from 'next';
import {videoData} from '@/lib/content';
import {VideoCard} from '@/components/cards';
export const metadata:Metadata={title:'Video AI & Reels'};
export default function Videos(){return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / VIDEO AI</div><span className="eyebrow">THE VISUAL UNIVERSE</span><h1 className="listing-title">Những thước phim từ <span>trí tưởng tượng.</span></h1><p className="listing-subtitle">Video AI, khám phá vũ trụ, ý tưởng tương lai và những câu chuyện độc đáo. Các poster hiện là dữ liệu minh họa.</p></div></div><section className="container listing-section"><div className="filter-tabs"><span className="eyebrow">TẤT CẢ VIDEO / {videoData.length} TÁC PHẨM MẪU</span></div><div className="videos-grid">{videoData.map((v,i)=><VideoCard video={v} index={i} key={v.slug}/>)}</div></section></main>}
