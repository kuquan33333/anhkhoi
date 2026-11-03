import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
 const live=process.env.SITE_INDEXING_ENABLED==='true' && !!process.env.NEXT_PUBLIC_SITE_URL;
 return {rules:{userAgent:'*',allow:live?'/':undefined,disallow:live?undefined:'/'}};
}
