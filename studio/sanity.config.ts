import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'anh-khoi-ai-media',
  title: 'Anh Khôi AI Media — Quản trị',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool({
    structure: S => S.list().title('Nội dung').items([
      S.listItem().title('Cài đặt website').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('article').title('Tin tức & Công nghệ'),
      S.documentTypeListItem('reel').title('Facebook Reels'),
      S.documentTypeListItem('galleryItem').title('AI Gallery')
    ])
  })],
  schema: {types:schemaTypes},
  document: {
    newDocumentOptions: prev=>prev.filter(item=>item.templateId!=='siteSettings')
  }
});
