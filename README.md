# ANH KHOI — AI MEDIA

Website thương hiệu cá nhân, thư viện video AI, tin hot và công nghệ. Thiết kế dark futuristic với tông xanh điện và giao diện responsive.

## Tình trạng

**v0.1 — giao diện chạy được với nội dung minh họa.** Chưa kết nối Sanity CMS, chưa lấy video thực từ Facebook và chưa có trang quản trị. Không sử dụng ảnh minh họa như nội dung do Anh Khôi sáng tác.

## Công nghệ

- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS 4 và CSS tùy biến
- Lucide Icons
- Dữ liệu demo đặt trong \`lib/content.ts\`

Dự án được khởi tạo mới theo định hướng Next.js / Tailwind và các pattern blog của [Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog), **không phải bản sao đã fork/import toàn bộ repo gốc**. Giữ thông tin giấy phép của dự án gốc khi sao chép hoặc sử dụng mã gốc trong những lần cập nhật sau.

## Chạy cục bộ

Yêu cầu Node.js 20+.

\`\`\`bash
npm install
npm run dev
\`\`\`

Mở http://localhost:3000. Kiểm tra TypeScript: \`npm run lint\`. Build sản phẩm: \`npm run build\`.

## Chuyên mục

| URL | Mô tả |
| --- | --- |
| / | Trang chủ, giới thiệu, bài nổi bật và thư viện video |
| /videos | Danh sách video AI |
| /videos/[slug] | Trang chi tiết video và link Facebook dự phòng |
| /tin-hot | Tin hot |
| /cong-nghe | Bài viết công nghệ |
| /articles/[slug] | Trang đọc bài |
| /gallery | AI Gallery |
| /gioi-thieu | Trang về Anh Khôi |
| /lien-he | Liên hệ |

## Cập nhật nội dung mẫu

Chỉnh \`videoData\`, \`articles\`, \`facebook\` trong \`lib/content.ts\`. Video chưa có URL Reel thực tế nên hiện chỉ hiển thị poster và dẫn tới trang Facebook. Để bật Reel thực, cung cấp \`facebookUrl\` hợp lệ. Trình nhúng sẽ được bổ sung sau khi xác minh quyền nhúng các URL công khai.

## Việc cần làm trước khi mở công khai

1. Thay hình ảnh minh họa bằng ảnh và video sở hữu/quyền sử dụng hợp lệ.
2. Thay email \`hello@example.com\`, ảnh đại diện, thông tin giới thiệu; thiết lập domain chính thức và \`metadataBase\` trong \`app/layout.tsx\`.
3. Kết nối Sanity Studio bằng schema \`article\`, \`video\`, \`galleryItem\`, \`siteSettings\`. Phát triển layer API để thay dữ liệu mẫu, preview draft và xuất bản.
4. Bổ sung cơ chế Facebook embed/fallback cho Reels công khai; không lấy số lượt xem bằng scraping.
5. Kiểm chứng bản tin, trích nguồn và xử lý nội dung bản quyền.
6. Kiểm tra responsive, accessibility, hiệu năng và build trên CI.
7. Bật SEO index khi nội dung thật sẵn sàng (hiện \`robots.ts\` chặn index để tránh Google thu thập demo).

## Triển khai

Kết nối repository với Vercel, chọn framework Next.js. Không cần biến môi trường cho v0.1 demo. Khi tích hợp Sanity, thêm các biến cấu hình qua hosting và không commit token riêng tư.

## Giấy phép nội dung

Ảnh demo tải từ Unsplash theo URL từ xa. Những nội dung bài viết, video minh họa chỉ phục vụ phát triển giao diện, không được coi là bài báo, video hoặc thành tựu thật của Anh Khôi.
