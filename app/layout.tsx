import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/chrome';
export const metadata: Metadata = {metadataBase:new URL('https://example.com'),title:{default:'Anh Khôi AI Media | AI • Tin hot • Công nghệ',template:'%s | Anh Khôi AI Media'},description:'Không gian khám phá video AI, tin hot và xu hướng công nghệ cùng Anh Khôi.',openGraph:{title:'Anh Khôi AI Media',description:'Sáng tạo nội dung AI • Hình ảnh • Video • Công nghệ',type:'website'},robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="vi"><body><div className="site-grain"/><Header/>{children}<Footer/></body></html>}
