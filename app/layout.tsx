import type { Metadata } from 'next';
import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/500.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/be-vietnam-pro/800.css';
import '@fontsource/be-vietnam-pro/900.css';
import './globals.css';
import './premium.css';
import { Header, Footer } from '@/components/chrome';
import {getSiteSettings} from '@/lib/cms';
export const metadata: Metadata = {
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anhkhoi.pages.dev'),
  title:{default:'Anh Khôi AI Media | Video AI, Tin hot & Công nghệ',template:'%s | Anh Khôi AI Media'},
  description:'Anh Khôi AI Media — tin hot, video sáng tạo AI và công nghệ. Khám phá những câu chuyện mới qua góc nhìn khác biệt.',
  openGraph:{title:'Anh Khôi AI Media',description:'Video AI • Tin hot • Công nghệ • Sáng tạo',type:'website'},
  robots:{index:process.env.SITE_INDEXING_ENABLED==='true',follow:process.env.SITE_INDEXING_ENABLED==='true'}
};
export default async function RootLayout({children}:{children:React.ReactNode}) {
  const settings=await getSiteSettings();
  return <html lang="vi"><body><Header facebookUrl={settings.facebookUrl}/>{children}<Footer facebookUrl={settings.facebookUrl} email={settings.email}/></body></html>;
}
