'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Facebook, Mail } from 'lucide-react';
import {facebook,menu} from '@/lib/content';

export function Header({facebookUrl=facebook}:{facebookUrl?:string}) {
  const pathname=usePathname(); const [open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[pathname]);
  return <>
    <div className="ak-announcement"><div className="container ak-announcement-inner"><span><Sparkles size={13}/> CREATIVE MEDIA — MADE FOR THE CURIOUS</span><span className="ak-announcement-right">AI / VIDEO / TECHNOLOGY <span aria-hidden="true">✦</span> ANH KHOI</span></div></div>
    <header className="site-header"><div className="container nav-inner">
      <Link href="/" className="ak-brand" aria-label="Anh Khôi AI Media - Trang chủ" onClick={()=>setOpen(false)}><span className="ak-brand-symbol">AK<span>.</span></span><span className="ak-brand-label"><strong>ANH KHOI</strong><small>AI MEDIA STUDIO</small></span></Link>
      <nav className={'nav-links'+(open?' open':'')} aria-label="Điều hướng chính">{menu.map(item=><Link key={item.href} href={item.href} className={pathname===item.href?'active':''} onClick={()=>setOpen(false)}>{item.label}</Link>)}</nav>
      <div className="nav-actions"><a className="ak-follow" target="_blank" rel="noopener noreferrer" href={facebookUrl}><Facebook size={17}/> Theo dõi <ArrowUpRight size={16}/></a><button type="button" className="mobile-toggle" aria-label={open?'Đóng menu':'Mở menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={24}/>:<Menu size={24}/>}</button></div>
    </div></header>
  </>;
}
export function Footer({facebookUrl=facebook,email}:{facebookUrl?:string;email?:string}) {
  return <footer className="footer"><div className="container">
    <div className="ak-footer-main"><div><Link href="/" className="ak-footer-brand">ANH KHOI<span>.</span></Link><span className="ak-footer-tag">CREATIVE AI MEDIA</span><p>Một không gian dành cho những ý tưởng mới, câu chuyện đáng chú ý và công nghệ của tương lai.</p></div>
      <div className="ak-footer-nav"><span>KHÁM PHÁ</span><Link href="/videos">Video AI & Reels</Link><Link href="/tin-hot">Tin hot</Link><Link href="/cong-nghe">Công nghệ</Link><Link href="/gallery">AI Gallery</Link></div>
      <div className="ak-footer-nav"><span>KẾT NỐI</span><Link href="/gioi-thieu">Về Anh Khôi</Link><Link href="/lien-he">Liên hệ hợp tác</Link><a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14}/></a>{email&&<a href={'mailto:'+email}>Email <Mail size={14}/></a>}</div>
    </div>
    <div className="ak-footer-bottom"><span>© {new Date().getFullYear()} ANH KHOI AI MEDIA. ALL RIGHTS RESERVED.</span><span>BUILT WITH CURIOSITY <span aria-hidden="true">✳</span> VIETNAM</span></div>
  </div></footer>;
}
