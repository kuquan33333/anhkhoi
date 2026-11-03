import type {Metadata} from 'next';
import {Facebook,ArrowUpRight,Mail} from 'lucide-react';
import {getSiteSettings} from '@/lib/cms';
export const metadata:Metadata={title:'Liên hệ & Hợp tác'};
export default async function Contact(){
 const settings=await getSiteSettings();
 return <main><div className="container detail-page detail-page-narrow"><span className="eyebrow">LET'S CONNECT</span><h1 className="listing-title">Cùng tạo nên <span>điều khác biệt.</span></h1><p className="listing-subtitle">Kết nối để chia sẻ ý tưởng, trao đổi về sáng tạo AI và cơ hội hợp tác nội dung.</p><div className="contact-options"><a className="btn btn-primary" href={settings.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={18}/> Liên hệ Facebook <ArrowUpRight size={17}/></a>{settings.email&&<a className="btn btn-outline" href={'mailto:'+settings.email}><Mail size={18}/> Email hợp tác</a>}</div>{!settings.email&&<div className="demo-note">Email hợp tác chưa được cấu hình. Thêm email trong Sanity Studio để mở nút liên hệ qua thư.</div>}</div></main>
}
