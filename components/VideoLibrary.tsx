'use client';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import {VideoCard} from '@/components/cards';
import type {Video} from '@/lib/content';
export default function VideoLibrary({videos}:{videos:Video[]}){
  const [category,setCategory]=useState('TẤT CẢ');
  const [search,setSearch]=useState('');
  const categories=['TẤT CẢ',...Array.from(new Set(videos.map(v=>v.category)))];
  const filtered=useMemo(()=>videos.filter(v=>(category==='TẤT CẢ'||v.category===category)&&(v.title+' '+v.description).toLocaleLowerCase('vi').includes(search.toLocaleLowerCase('vi'))),[videos,category,search]);
  return <><div className="library-controls"><div className="filter-tabs" role="group" aria-label="Lọc video">{categories.map(c=><button type="button" key={c} onClick={()=>setCategory(c)} className={category===c?'active':''}>{c}</button>)}</div><label className="library-search"><Search size={18}/><input aria-label="Tìm kiếm video" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Tìm video AI..."/></label></div><p className="result-count">{filtered.length} VIDEO</p>{filtered.length?<div className="videos-grid">{filtered.map((v,i)=><VideoCard video={v} index={i} key={v.slug}/>)}</div>:<div className="empty-content">Không tìm thấy video phù hợp. Hãy thử từ khóa khác.</div>}</>
}
