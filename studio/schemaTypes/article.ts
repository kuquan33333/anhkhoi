import {defineField,defineType} from 'sanity';
export const article = defineType({
  name:'article',type:'document',title:'Tin tức & Công nghệ',
  fields:[
    defineField({name:'title',type:'string',title:'Tiêu đề',validation:Rule=>Rule.required().min(8)}),
    defineField({name:'slug',type:'slug',title:'Đường dẫn',options:{source:'title',maxLength:96},validation:Rule=>Rule.required()}),
    defineField({name:'category',type:'string',title:'Chuyên mục',options:{list:[{title:'Tin Hot',value:'TIN HOT'},{title:'Công nghệ',value:'CÔNG NGHỆ'}],layout:'radio'},initialValue:'CÔNG NGHỆ',validation:Rule=>Rule.required()}),
    defineField({name:'excerpt',type:'text',rows:3,title:'Mô tả ngắn',validation:Rule=>Rule.required().max(250)}),
    defineField({name:'cover',type:'image',title:'Ảnh bìa',options:{hotspot:true},fields:[defineField({name:'alt',type:'string',title:'Mô tả ảnh'})]}),
    defineField({name:'body',type:'array',title:'Nội dung bài viết',of:[{type:'block'}],validation:Rule=>Rule.required().min(1)}),
    defineField({name:'publishedAt',type:'datetime',title:'Ngày xuất bản',initialValue:()=>new Date().toISOString(),validation:Rule=>Rule.required()}),
    defineField({name:'readTime',type:'string',title:'Thời gian đọc',initialValue:'4 phút'}),
    defineField({name:'featured',type:'boolean',title:'Nổi bật trên trang chủ',initialValue:false}),
    defineField({name:'sourceName',type:'string',title:'Tên nguồn tin (nếu có)'}),
    defineField({name:'sourceUrl',type:'url',title:'URL nguồn tin'}),
    defineField({name:'authorName',type:'string',title:'Tác giả / người biên tập',initialValue:'Anh Khôi'})
  ],
  preview:{select:{title:'title',subtitle:'category',media:'cover'}}
});
