'use client';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Facebook, Play, ShieldCheck } from 'lucide-react';
import { normalizeFacebookReelUrl } from '@/lib/facebook';

declare global { interface Window { FB?: { XFBML?: { parse: (element?: HTMLElement) => void } } } }

export function FacebookReelPlayer({url,title,image}:{url?:string;title:string;image:string}) {
  const safeUrl=normalizeFacebookReelUrl(url);
  const [consent,setConsent]=useState(false);
  const container=useRef<HTMLDivElement>(null);
  const [loaded,setLoaded]=useState(false);

  useEffect(()=>{
    if(!consent || !safeUrl)return;
    let cancelled=false;
    const parse=()=>{if(cancelled)return;window.FB?.XFBML?.parse(container.current||undefined);setLoaded(true)};
    if(window.FB?.XFBML){parse();return ()=>{cancelled=true}};
    let script=document.querySelector<HTMLScriptElement>('script[data-facebook-reels-sdk]');
    if(!script){
      script=document.createElement('script');
      script.setAttribute('data-facebook-reels-sdk','true');
      script.async=true;script.defer=true;
      script.src='https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v26.0';
      document.body.appendChild(script);
    }
    script.addEventListener('load',parse);
    return ()=>{cancelled=true;script?.removeEventListener('load',parse)};
  },[consent,safeUrl]);

  if(!safeUrl)return <div className="reel-placeholder" style={{backgroundImage:'linear-gradient(0deg,#060d1cbb,#060d1c22),url("'+image+'")'}}><div><Play size={32}/><h2>{title}</h2><p>Chưa có đường dẫn Facebook Reel hợp lệ. Người quản trị cần bổ sung URL trong Sanity.</p></div></div>;
  return <div className="reel-embed">
    {!consent?<button type="button" className="reel-consent" onClick={()=>setConsent(true)} style={{backgroundImage:'linear-gradient(0deg,#080e1be0,#080e1b50),url("'+image+'")'}}><span className="consent-play"><Play size={30} fill="currentColor"/></span><strong>Phát Reel từ Facebook</strong><small>Nhấn để tải trình phát Facebook. Facebook có thể sử dụng cookie và nhận thông tin trình duyệt của bạn.</small></button>:
      <div ref={container} className="facebook-sdk-container"><div className="fb-video" data-href={safeUrl} data-width="500" data-show-text="false" data-allowfullscreen="true"/><p className="fb-loading">{loaded?'Nếu video chưa hiển thị, hãy mở trên Facebook.':'Đang tải trình phát Facebook…'}</p></div>}
    <a className="btn btn-outline" target="_blank" rel="noopener noreferrer" href={safeUrl}><Facebook size={17}/> Xem trực tiếp trên Facebook <ExternalLink size={15}/></a>
    <p className="reel-privacy"><ShieldCheck size={14}/> Chỉ tải trình phát Facebook sau khi bạn bấm xem.</p>
  </div>
}
