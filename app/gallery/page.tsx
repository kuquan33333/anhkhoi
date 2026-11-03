import type {Metadata} from 'next';
import {getGallery} from '@/lib/cms';
import {EmptyContent} from '@/components/cards';
export const metadata:Metadata={title:'AI Gallery'};
export default async function Gallery(){
 const gallery=await getGallery();
 return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / AI GALLERY</div><span className="eyebrow">IMAGINATION, UNFRAMED</span><h1 className="listing-title">Bước vào <span>thế giới hình ảnh AI.</span></h1><p className="listing-subtitle">Không gian trưng bày các tác phẩm sáng tạo. Khi chưa kết nối Sanity, hình ảnh chỉ mang tính minh họa.</p></div></div><section className="container listing-section">{gallery.length?<div className="gallery-grid">{gallery.map((v,i)=><div key={i} className="gallery-item" style={{backgroundImage:'url("'+v.image+'")'}} role="img" aria-label={v.title}><span>{v.title}</span></div>)}</div>:<EmptyContent/>}</section></main>
}
