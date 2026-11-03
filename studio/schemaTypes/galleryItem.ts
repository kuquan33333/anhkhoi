import {defineField,defineType} from 'sanity';
export const galleryItem=defineType({
  name:'galleryItem',type:'document',title:'AI Gallery',
  fields:[
    defineField({name:'title',type:'string',title:'Tiêu đề',validation:Rule=>Rule.required()}),
    defineField({name:'image',type:'image',title:'Hình ảnh',options:{hotspot:true},validation:Rule=>Rule.required()}),
    defineField({name:'description',type:'text',title:'Mô tả',rows:3}),
    defineField({name:'publishedAt',type:'datetime',title:'Ngày đăng',initialValue:()=>new Date().toISOString()})
  ],preview:{select:{title:'title',media:'image'}}
});
