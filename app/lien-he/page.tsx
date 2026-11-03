import type {Metadata} from 'next';
import {Facebook,ArrowUpRight,Mail} from 'lucide-react';
import {facebook} from '@/lib/content';
export const metadata:Metadata={title:'Liên hệ & Hợp tác'};
export default function Contact(){return <main><div className="container detail-page detail-page-narrow"><span className="eyebrow">LET'S CONNECT</span><h1 className="listing-title">Cùng tạo nên <span>điều khác biệt.</span></h1><p className="listing-subtitle">Kết nối để chia sẻ ý tưởng, trao đổi về sáng tạo AI và cơ hội hợp tác nội dung.</p><div className="contact-options"><a className="btn btn-primary" href={facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18}/> Liên hệ qua Facebook <ArrowUpRight size={17}/></a></div><div className="demo-note">Email và biểu mẫu liên hệ sẽ được kích hoạt sau khi chủ website cung cấp thông tin liên lạc và cấu hình dịch vụ gửi thư. Chưa có form xử lý dữ liệu ở phiên bản này.</div></div></main>}
