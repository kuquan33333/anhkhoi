import type {Metadata} from 'next';
import {articles} from '@/lib/content';
import {ArticleCard,EmptyContent} from '@/components/cards';
export const metadata:Metadata={title:'Tin Hot'};
export default function News(){const items=articles.filter(a=>a.category==='TIN HOT');return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / TIN HOT</div><span className="eyebrow">WHAT'S HAPPENING</span><h1 className="listing-title">Luôn bắt nhịp <span>câu chuyện mới.</span></h1><p className="listing-subtitle">Những xu hướng và câu chuyện đang được quan tâm. Nội dung hiện tại là bài viết mẫu, chưa phải bản tin đã kiểm chứng.</p></div></div><section className="container listing-section">{items.length?<div className="article-grid">{items.map(a=><ArticleCard key={a.slug} article={a}/>)}</div>:<EmptyContent/>}</section></main>}
