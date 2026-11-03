import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/chrome';
import {getSiteSettings} from '@/lib/cms';
export const metadata: Metadata = {metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),title:{default:'Anh Khôi AI Media | AI • Tin hot • Công nghệ',template:'%s | Anh Khôi AI Media'},description:'Không gian khám phá video AI, tin hot và xu hướng công nghệ cùng Anh Khôi.',openGraph:{title:'Anh Khôi AI Media',description:'Sáng tạo nội dung AI • Hình ảnh • Video • Công nghệ',type:'website'},robots:{index:process.env.SITE_INDEXING_ENABLED==='true',follow:process.env.SITE_INDEXING_ENABLED==='true'}};
export default async function RootLayout({children}:{children:React.ReactNode}) {const settings=await getSiteSettings();return <html lang="vi"><body><div className="site-grain"/><Header facebookUrl={settings.facebookUrl}/>{children}<Footer facebookUrl={settings.facebookUrl} email={settings.email}/></body></html>}
