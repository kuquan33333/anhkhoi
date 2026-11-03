import {defineField,defineType} from 'sanity';
export const siteSettings=defineType({
  name:'siteSettings',type:'document',title:'Cài đặt website',
  fields:[
    defineField({name:'heroTitle',type:'string',title:'Tiêu đề banner',description:'Tối đa 100 ký tự',validation:Rule=>Rule.max(100)}),
    defineField({name:'heroDescription',type:'text',rows:3,title:'Giới thiệu ngắn'}),
    defineField({name:'heroCover',type:'image',title:'Ảnh banner thương hiệu',options:{hotspot:true}}),
    defineField({name:'avatar',type:'image',title:'Ảnh đại diện Anh Khôi',options:{hotspot:true}}),
    defineField({name:'facebookUrl',type:'url',title:'Facebook chính thức',validation:Rule=>Rule.uri({scheme:['https']})}),
    defineField({name:'email',type:'string',title:'Email hợp tác'})
  ],preview:{prepare:()=>({title:'Cài đặt Anh Khôi AI Media'})}
});
