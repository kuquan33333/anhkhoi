import type {Metadata} from 'next';
import {articles} from '@/lib/content';
import {ArticleCard} from '@/components/cards';
export const metadata:Metadata={title:'Công nghệ'};
export default function Tech(){return <main><div className="listing-hero"><div className="container"><div className="breadcrumb">TRANG CHỦ / CÔNG NGHỆ</div><span className="eyebrow">NEXT GENERATION TECH</span><h1 className="listing-title">Công nghệ kiến tạo <span>tương lai.</span></h1><p className="listing-subtitle">Khám phá những xu hướng AI, ý tưởng sáng tạo và góc nhìn về thế giới số.</p></div></div><section className="container listing-section"><div className="article-grid">{articles.filter(a=>a.category==='CÔNG NGHỆ').map(a=><ArticleCard key={a.slug} article={a}/>)}</div></section></main>}
