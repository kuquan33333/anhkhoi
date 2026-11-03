import type {Metadata} from 'next';
import {ArrowUpRight,Facebook,Mail} from 'lucide-react';
import {getSiteSettings} from '@/lib/cms';
export const metadata:Metadata={title:'Về Anh Khôi'};
export default async function About(){
 const settings=await getSiteSettings();
 return <main><div className="container detail-page"><div className="about-hero"><div><span className="eyebrow">THE CREATOR BEHIND ANH KHOI AI MEDIA</span><h1 className="listing-title">Xin chào, mình là <span>Anh Khôi.</span></h1><p className="listing-subtitle">Mình sáng tạo và chia sẻ nội dung về trí tuệ nhân tạo, video, hình ảnh, những câu chuyện đang được quan tâm và thế giới công nghệ.</p><p className="listing-subtitle">Anh Khôi AI Media là nơi tổng hợp các khám phá, trải nghiệm và ý tưởng của mình. Mình mong mỗi nội dung đều khơi gợi sự tò mò và cảm hứng.</p><div className="contact-options"><a className="btn btn-primary" href={settings.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={17}/> Kết nối Facebook <ArrowUpRight size={16}/></a>{settings.email&&<a className="btn btn-outline" href={'mailto:'+settings.email}><Mail size={17}/> Email hợp tác</a>}</div>{!settings.avatar&&<div className="demo-note">Hãy tải ảnh đại diện thật lên mục “Cài đặt website” trong Sanity Studio để thay thế logo AK hiện tại.</div>}</div><div className={'about-panel'+(settings.avatar?' has-image':'')} style={settings.avatar?{backgroundImage:'url('+JSON.stringify(settings.avatar)+')'}:undefined}>{!settings.avatar&&<span>AK<b>.</b></span>}</div></div></div></main>
}
