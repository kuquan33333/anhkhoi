import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Play, Clock3 } from 'lucide-react';
import type { Video,Article } from '@/lib/content';

export function SectionHeading({eyebrow,title,description,href,cta='Xem tất cả'}:{eyebrow:string;title:string;description?:string;href?:string;cta?:string}) {
  return <div className="ak-section-heading"><div className="ak-section-heading-copy"><span className="ak-section-kicker"><span/> {eyebrow}</span><h2>{title}<span className="ak-section-period">.</span></h2>{description&&<p>{description}</p>}</div>{href&&<Link className="ak-section-link" href={href}>{cta}<ArrowUpRight size={18}/></Link>}</div>
}
export function VideoCard({video,index}:{video:Video;index?:number}) {
  return <Link className="ak-reel-card" href={'/videos/'+video.slug}>
    <div className="ak-reel-art">
      <img src={video.image} alt="" loading="lazy" decoding="async"/>
      <span className="ak-reel-type">{video.facebookUrl?'FACEBOOK REEL':'AI STORIES'}</span>
      <span className="ak-reel-play"><Play size={22} fill="currentColor"/></span>
      <span className="ak-reel-duration">{video.facebookUrl?'XEM REEL':video.duration}</span>
    </div>
    <div className="ak-reel-text"><span className="ak-reel-meta">{video.category} <i/> {String((index??0)+1).padStart(2,'0')}</span><div><h3>{video.title}</h3><ArrowUpRight size={20}/></div></div>
  </Link>;
}
export function ArticleCard({article,large=false}:{article:Article;large?:boolean}) {
  return <Link className={'ak-story-card '+(large?'ak-story-lead':'')} href={'/articles/'+article.slug}>
    <div className="ak-story-image"><img src={article.image} alt="" loading="lazy" decoding="async"/><span className="ak-story-arrow"><ArrowUpRight size={19}/></span></div>
    <div className="ak-story-body"><span className="ak-story-category"><span/>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><div className="ak-story-meta"><span>{article.date}</span><span aria-hidden="true">·</span><span><Clock3 size={14}/>{article.readTime} đọc</span></div></div>
  </Link>;
}
export function EmptyContent(){
  return <div className="ak-empty"><p>Nội dung mới sẽ được cập nhật tại đây.</p><Link href="/" className="ak-button ak-button-dark">Về trang chủ <ArrowRight size={17}/></Link></div>;
}
