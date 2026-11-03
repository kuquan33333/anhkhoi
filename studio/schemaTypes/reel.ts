import {defineField,defineType} from 'sanity';
export const reel=defineType({
  name:'reel',type:'document',title:'Facebook Reels',
  fields:[
    defineField({name:'title',type:'string',title:'Tiêu đề',validation:Rule=>Rule.required()}),
    defineField({name:'slug',type:'slug',title:'Đường dẫn',options:{source:'title',maxLength:96},validation:Rule=>Rule.required()}),
    defineField({name:'category',type:'string',title:'Danh mục',options:{list:['AI CINEMATIC','AI FUTURE','TECH STORIES','TIN HOT','KHÁM PHÁ','AI ART']},initialValue:'AI CINEMATIC'}),
    defineField({name:'description',type:'text',rows:3,title:'Mô tả'}),
    defineField({name:'facebookUrl',type:'url',title:'Link Facebook Reel công khai',description:'Ví dụ: https://www.facebook.com/reel/123456789. Video phải đặt chế độ công khai.',validation:Rule=>Rule.required().uri({scheme:['https']}).custom(value=>{
      if(!value)return true;
      try{const u=new URL(value);return ['facebook.com','www.facebook.com','m.facebook.com'].includes(u.hostname) && (/^\/reel\/[a-zA-Z0-9]+\/?$/.test(u.pathname)||/^\/[^/]+\/videos\/[a-zA-Z0-9]+\/?$/.test(u.pathname)||u.pathname==='/watch/') ? true : 'Chỉ chấp nhận URL video hoặc Reel từ facebook.com';}catch{return 'URL không hợp lệ';}
    })}),
    defineField({name:'cover',type:'image',title:'Ảnh bìa 9:16',options:{hotspot:true},validation:Rule=>Rule.required()}),
    defineField({name:'duration',type:'string',title:'Thời lượng hiển thị',description:'Ví dụ 00:38'}),
    defineField({name:'publishedAt',type:'datetime',title:'Ngày xuất bản',initialValue:()=>new Date().toISOString(),validation:Rule=>Rule.required()})
  ],preview:{select:{title:'title',subtitle:'category',media:'cover'}}
});
