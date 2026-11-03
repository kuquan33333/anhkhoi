import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {getArticles,isCmsConfigured} from '@/lib/cms';
export async function generateStaticParams(){return (await getArticles()).map(a=>({slug:a.slug}))}
export default async function ArticleDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const articles=await getArticles();const article=articles.find(a=>a.slug===slug);if(!article)notFound();
 return <main className="container detail-page detail-page-narrow"><Link href={article.category==='TIN HOT'?'/tin-hot':'/cong-nghe'} className="back-link"><ArrowLeft size={16}/> Quay lại chuyên mục</Link><article className="article-detail"><span className="eyebrow">{article.category} / {article.date} / {article.readTime} ĐỌC</span><h1>{article.title}</h1><p className="detail-lead">{article.excerpt}</p><div className="detail-cover" role="img" aria-label={article.title} style={{backgroundImage:'url("'+article.image+'")'}}/>{!isCmsConfigured()&&<div className="demo-note"><strong>Nội dung mẫu:</strong> Bài viết chỉ minh họa giao diện, chưa phải bản tin xác thực.</div>}<div className="article-body">{article.body.map((p,i)=><p key={i}>{p}</p>)}</div><Link href={article.category==='TIN HOT'?'/tin-hot':'/cong-nghe'} className="btn btn-outline">Khám phá thêm bài viết <ArrowUpRight size={16}/></Link></article></main>
}
