# ANH KHOI — AI MEDIA

Website thương hiệu cá nhân: Facebook Reels, tin hot, công nghệ và thư viện sáng tạo AI. Giao diện dark futuristic, responsive, dùng Next.js 15 / React 19 / Tailwind CSS 4.

## Trạng thái v0.2

- **Đã viết mã:** Trang chủ, trang tin, trang bài viết, thư viện Reels lọc theo danh mục và từ khóa, trang chi tiết Reel tích hợp Meta Facebook SDK theo thao tác bấm xem (click-to-load), AI Gallery, trang giới thiệu, liên hệ, SEO cơ bản và sitemap.
- **Đã viết mã:** Adapter đọc nội dung Sanity CMS cùng fallback dữ liệu demo, standalone Sanity Studio ở \`studio/\`, schema quản trị Tin tức, Reel, Gallery, Cài đặt website.
- **Cần tài khoản/chạy thử:** Chưa có Sanity project ID, dataset thực, quyền hosting, domain, ảnh chân dung và ảnh bìa gốc. Chưa kiểm chứng video nhúng Facebook hoạt động trên domain thật. Các URL/tác phẩm demo không có nguồn thật được ghi rõ.
- **Một URL Facebook Reel được đọc từ ảnh chụp do chủ website cung cấp:** \`https://www.facebook.com/reel/2691758154613464/\`. Ảnh bìa và tiêu đề tương ứng trong demo chỉ là placeholder; chưa xác minh khả năng nhúng hoặc nội dung video.
- Repo này được **khởi tạo Next.js mới theo định hướng Tailwind Next.js Starter Blog**, không phải fork/import nguyên bản \`timlrx/tailwind-nextjs-starter-blog\`.

## Chạy website

Cần Node.js 22.12+.

\`\`\`bash
npm install
npm run dev
# localhost:3000
\`\`\`

Kiểm tra TypeScript và bản build:

\`\`\`bash
npm run lint
npm run build
\`\`\`

Khi chưa kết nối Sanity, nội dung demo nằm trong \`lib/content.ts\`.

## Bước 1 — Tạo tài khoản và project Sanity

1. Mở https://www.sanity.io/manage, đăng nhập và tạo **một project mới**, dataset **production** (có thể chọn public để đọc nội dung công khai mà không cần token).
2. Sao chép project ID. Đừng gửi token bí mật lên GitHub.
3. Chạy Studio từ thư mục \`studio\`:

\`\`\`bash
cd studio
cp .env.example .env.local
# Điền SANITY_STUDIO_PROJECT_ID trong .env.local
npm install
npm run dev
# localhost:3333
\`\`\`

Nếu trên Windows Command Prompt, dùng \`copy .env.example .env.local\` thay vì \`cp\`.

4. Đăng nhập Sanity Studio, vào **Cài đặt website** để nhập Facebook URL, email hợp tác và upload ảnh bìa, avatar.
5. Tạo **Facebook Reels**, dán URL Reel công khai, upload thumbnail 9:16, chọn danh mục và nhấn Publish.
6. Tạo **Tin tức & Công nghệ** hoặc **AI Gallery** và Publish.

**Studio có xác thực và phân quyền của Sanity**, không phải trang quản trị mở cho mọi khách truy cập. Có thể deploy Studio độc lập bằng \`cd studio && npm run deploy\` sau khi cấu hình project, hoặc deploy qua Sanity dashboard.

## Bước 2 — Kết nối website với Sanity

Ở thư mục website gốc:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Điền:

\`\`\`dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=PROJECT_ID_CUA_BAN
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

Với dataset public, **không cần** \`SANITY_API_READ_TOKEN\`. Nếu dataset private, token chỉ cấu hình ở server/hosting, không thêm tiền tố \`NEXT_PUBLIC_\`.

Bật lại website: \`npm run dev\`. Các trang chủ, Reels, tin hot, công nghệ, gallery và thông tin thương hiệu tự đọc các bài đã Publish từ Sanity qua API. Cache mặc định tối đa 120 giây (có thể cần thêm thời gian để CDN cập nhật).

**Lưu ý:** Khi Sanity hoạt động nhưng chưa có nội dung, trang có thể hiển thị danh sách trống. Khi chưa có project ID hoặc API lỗi, website hiển thị dữ liệu mẫu để tránh lỗi toàn trang. Nếu cần môi trường production chỉ hiển thị dữ liệu thật, hãy bổ sung chính sách lỗi nghiêm ngặt trước khi công khai.

## Bước 3 — Nhúng Facebook Reels

1. Trên Facebook, mở **Reel công khai** > **Chia sẻ** > **Sao chép liên kết**.
2. Trong Studio > **Facebook Reels** > **Create**, điền tiêu đề, slug, ảnh bìa, danh mục và trường \`facebookUrl\` dạng \`https://www.facebook.com/reel/123456789/\`.
3. Publish. Reel xuất hiện ở \`/videos\`. Khi người xem mở \`/videos/slug\` và bấm **Phát Reel từ Facebook**, website tải Meta Facebook SDK và thử nhúng video.
4. Nút **Xem trực tiếp trên Facebook** luôn có sẵn nếu nhúng bị hạn chế, Reel bị xóa, quyền riêng tư không công khai hoặc trình duyệt chặn Meta.

**Không scrape Facebook, không tự thu thập lượt xem**. Meta có cơ chế oEmbed chính thức nhưng không bảo đảm mọi Reel đều phát được trên mọi site. Hãy thử trực tiếp với các video thật và trình duyệt khác nhau. Trang này cố ý không tự tải cookie/script Facebook trước khi người xem bấm xem.

## Bước 4 — Triển khai bằng Vercel

1. Mở https://vercel.com/new, chọn repo \`kuquan33333/anhkhoi\`, root directory = \`./\`, Framework = **Next.js**.
2. Thêm \`NEXT_PUBLIC_SANITY_PROJECT_ID\`, \`NEXT_PUBLIC_SANITY_DATASET\`, \`NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban\`.
3. Lần đầu giữ \`SITE_INDEXING_ENABLED=false\` để không index demo. Khi ảnh/nội dung có nguồn và quyền sử dụng, trang đã được test thì chỉnh thành \`true\` rồi redeploy.
4. Kích hoạt HTTPS, thêm tên miền, thử Reels và liên hệ trên điện thoại.

Sanity Studio được deploy **riêng**, không deploy thư mục \`studio/\` như một Next.js route. Cấu hình CORS project trên Sanity Manage khi sử dụng Studio/frontends tại các origin tùy chỉnh.

## Các trang

- \`/\`: Trang chủ và nội dung nổi bật
- \`/videos\`: Thư viện Reels có lọc và tìm kiếm
- \`/videos/[slug]\`: Video Facebook click-to-load
- \`/tin-hot\`, \`/cong-nghe\`, \`/articles/[slug]\`: Tin và bài viết
- \`/gallery\`: Hình ảnh sáng tạo
- \`/gioi-thieu\`: Thông tin thương hiệu, avatar từ Sanity
- \`/lien-he\`: Facebook và email hợp tác (khi đã cấu hình)

## Kiểm thử & việc còn lại

- CI GitHub Actions kiểm tra TypeScript và Next.js build sau khi push.
- Cần kiểm thử trình nhúng Facebook thực tế, build, Studio đăng nhập và kết nối API với project thật.
- Bổ sung ảnh bìa chất lượng cao và avatar gốc; ảnh demo Unsplash chỉ là placeholder.
- Khi xuất bản bài tin, cần ghi rõ nguồn, thời gian, tác giả, quyền sử dụng hình ảnh và kiểm tra nội dung trước khi đăng. Schema đã có \`sourceName\`, \`sourceUrl\`, \`authorName\`, nhưng chưa có hiển thị chi tiết các trường này ở frontend.
- Chưa có form liên hệ gửi email; hiện chỉ cung cấp link Facebook và \`mailto:\` nếu email đã được cấu hình.
- Chưa tự động đồng bộ toàn bộ thư viện Reels từ Facebook (chủ website chủ động thêm URL vào Sanity).

## Nguồn tài liệu

- Facebook / Meta Embeds: https://github.com/facebook/meta-embeds-for-wordpress
- Sanity Docs: https://www.sanity.io/docs/studio/configuration
- Sanity + Next.js: https://www.sanity.io/docs/nextjs/introduction
- Tailwind Next.js Starter Blog (tham khảo): https://github.com/timlrx/tailwind-nextjs-starter-blog
