import type {Metadata} from 'next';
import {getArticles} from '@/lib/cms';
import {ArticleCard,EmptyContent} from '@/components/cards';
export const metadata:Metadata={title:'Công nghệ'};
export default async function Tech(){
 const items=(await getArticles()).filter(a=>a.category==='CÔNG NGHỆ');
 return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / CÔNG NGHỆ</div><span className="eyebrow">NEXT GENERATION TECH</span><h1 className="listing-title">Công nghệ kiến tạo <span>tương lai.</span></h1><p className="listing-subtitle">Khám phá những xu hướng AI, ý tưởng sáng tạo và góc nhìn về thế giới số.</p></div></div><section className="container listing-section">{items.length?<div className="article-grid">{items.map(a=><ArticleCard key={a.slug} article={a}/>)}</div>:<EmptyContent/>}</section></main>
}
