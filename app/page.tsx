import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Play, Sparkles, Clapperboard, Cpu, Flame, Images, Facebook, Radio, CirclePlay, MoveUpRight, Zap } from 'lucide-react';
import {getVideos,getArticles,getSiteSettings} from '@/lib/cms';
import {SectionHeading,VideoCard,ArticleCard} from '@/components/cards';

export default async function Home(){
  const [videos,articles,settings] = await Promise.all([getVideos(), getArticles(), getSiteSettings()]);
  const featured = videos[0];
  const heroImage = settings.heroCover || 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1800&q=90';
  return <main>
    <section className="ak-hero">
      <div className="ak-hero-lights" aria-hidden="true"/>
      <div className="container ak-hero-grid">
        <div className="ak-hero-copy">
          <div className="ak-label ak-label-on-dark"><span className="ak-indicator"/> ANH KHOI · AI MEDIA <span className="ak-label-tail">/ 2026</span></div>
          <h1>Khám phá<br/>thế giới <span>theo cách mới.</span></h1>
          <p className="ak-hero-desc">{settings.heroDescription || 'Tin đang được quan tâm, những video AI ấn tượng và góc nhìn mới về công nghệ — tất cả trong không gian sáng tạo của Anh Khôi.'}</p>
          <div className="ak-hero-actions">
            <Link href="/videos" className="ak-button ak-button-primary"><CirclePlay size={19}/> Xem video AI <ArrowUpRight size={17}/></Link>
            <Link href="/tin-hot" className="ak-button ak-button-ghost">Khám phá tin hot <ArrowRight size={17}/></Link>
          </div>
          <div className="ak-creator-line">
            <span className="ak-creator-avatar">{settings.avatar?<img alt="Ảnh đại diện Anh Khôi" src={settings.avatar}/>:<>AK</>}</span>
            <span><strong>ANH KHÔI</strong><small>Digital Creator · AI Storytelling · Tech</small></span>
            <span className="ak-creator-separator"/>
            <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Theo dõi Facebook Anh Khôi"><Facebook size={16}/></a>
          </div>
        </div>
        <div className="ak-hero-art">
          <div className="ak-hero-art-back" aria-hidden="true"/>
          <div className="ak-hero-frame">
            <img className="ak-hero-photo" src={heroImage} alt={settings.heroCover?'Ảnh bìa thương hiệu Anh Khôi':'Hình ảnh minh họa thế giới sáng tạo số'} fetchPriority="high"/>
            <div className="ak-hero-photo-shade"/>
            <span className="ak-image-number">AK — 001</span>
            <div className="ak-photo-headline"><span>THE CREATIVE SIDE OF TECHNOLOGY</span><strong>IDEAS<br/>WITHOUT<br/>LIMITS<span className="ak-period">.</span></strong></div>
            <span className="ak-photo-corner">✳ / 2026</span>
          </div>
          <Link className="ak-feature-floating" href={featured?'/videos/'+featured.slug:'/videos'}>
            <span className="ak-feature-play"><Play size={18} fill="currentColor"/></span>
            <span><small>KHÁM PHÁ NGAY</small><strong>{featured?'Video mới trong thư viện':'Thư viện Video AI'}</strong></span>
            <ArrowUpRight size={17}/>
          </Link>
          <span className="ak-art-index" aria-hidden="true">AK/AI — 01</span>
        </div>
      </div>
      <div className="container ak-hero-foot">
        <span>INDEPENDENT CREATIVE MEDIA</span>
        <span>SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span>
      </div>
    </section>
    <div className="ak-ticker" aria-label="Chủ đề sáng tạo">
      <div className="container ak-ticker-inner">
        <span><Sparkles size={18}/> AI & CREATIVITY</span>
        <i/>
        <span><Flame size={18}/> TRENDING STORIES</span>
        <i/>
        <span><Cpu size={18}/> FUTURE TECHNOLOGY</span>
        <i/>
        <span><Clapperboard size={18}/> SHORT FORM VIDEO</span>
      </div>
    </div>

    <section className="ak-section ak-section-reels container" id="videos">
      <SectionHeading eyebrow="01 — KHÔNG GIAN VIDEO" title="Video AI nổi bật" description="Mỗi khung hình là một câu chuyện. Khám phá những ý tưởng táo bạo được kể bằng hình ảnh." href="/videos" cta="Khám phá tất cả"/>
      {videos.length?<div className="videos-grid">{videos.slice(0,4).map((v,i)=><VideoCard video={v} index={i} key={v.slug}/>)}</div>:<div className="ak-empty">Video mới sẽ được cập nhật tại đây.</div>}
      <div className="ak-section-end"><span><span className="ak-live-dot"/> TRẢI NGHIỆM REELS NGAY TRÊN WEBSITE</span><Link href="/videos">Tất cả video <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className="ak-feature-band">
      <div className="container ak-feature-band-inner">
        <div className="ak-feature-band-copy">
          <span className="ak-label ak-label-on-dark"><span className="ak-indicator"/> SÁNG TẠO KHÔNG GIỚI HẠN</span>
          <h2>Trí tưởng tượng<br/><em>không có điểm dừng.</em></h2>
          <p>Robot, vũ trụ, tương lai và những thế giới chưa từng tồn tại. Tất cả bắt đầu từ một ý tưởng.</p>
          <Link className="ak-button ak-button-white" href="/gallery">Khám phá AI Gallery <ArrowUpRight size={18}/></Link>
        </div>
        <div className="ak-feature-band-art" aria-hidden="true">
          <span className="ak-feature-orbit ak-feature-orbit-a"/>
          <span className="ak-feature-orbit ak-feature-orbit-b"/>
          <div className="ak-feature-monogram">AI<span>✳</span></div>
          <div className="ak-feature-grid"/>
        </div>
      </div>
    </section>

    <section className="ak-section ak-section-editorial container">
      <SectionHeading eyebrow="02 — BẢN TIN SÁNG TẠO" title="Góc nhìn mới mỗi ngày" description="Tin hot, ý tưởng AI và những điều thú vị đang định hình thế giới số." href="/tin-hot" cta="Xem chuyên mục"/>
      {articles.length?<div className="article-grid">{articles.slice(0,3).map((a,i)=><ArticleCard key={a.slug} article={a} large={i===0}/>)}</div>:<div className="ak-empty">Những bài viết mới sẽ xuất hiện tại đây.</div>}
      <div className="ak-topic-list">
        <Link href="/tin-hot"><span className="ak-topic-icon ak-topic-orange"><Flame size={20}/></span><span><strong>Tin hot</strong><small>Cập nhật câu chuyện đang được chú ý</small></span><ArrowUpRight size={20}/></Link>
        <Link href="/cong-nghe"><span className="ak-topic-icon ak-topic-blue"><Cpu size={20}/></span><span><strong>Công nghệ</strong><small>AI, ứng dụng mới và xu hướng tương lai</small></span><ArrowUpRight size={20}/></Link>
        <Link href="/gallery"><span className="ak-topic-icon ak-topic-purple"><Images size={20}/></span><span><strong>AI Gallery</strong><small>Thư viện hình ảnh sáng tạo</small></span><ArrowUpRight size={20}/></Link>
      </div>
    </section>

    <section className="ak-about-section">
      <div className="container ak-about-grid">
        <div className="ak-about-art">
          <div className="ak-about-art-grid" aria-hidden="true"/>
          {settings.avatar?<img src={settings.avatar} alt="Chân dung Anh Khôi" className="ak-about-avatar"/>:<div className="ak-about-mark">AK<span>.</span></div>}
          <div className="ak-about-art-footer"><span>CREATOR / STORYTELLER</span><span>EST. 2026</span></div>
        </div>
        <div className="ak-about-copy">
          <span className="ak-label"><span className="ak-indicator"/> 03 — ĐỨNG SAU MỌI CÂU CHUYỆN</span>
          <h2>Xin chào,<br/>mình là <span>Anh Khôi.</span></h2>
          <p>Mình chia sẻ những điều đáng chú ý về AI, sáng tạo video và công nghệ theo cách dễ tiếp cận, nhiều cảm hứng và gần gũi hơn.</p>
          <p>Trang web này là ngôi nhà riêng của những ý tưởng, trải nghiệm và câu chuyện mình muốn gửi tới cộng đồng.</p>
          <div className="ak-about-actions">
            <Link className="ak-button ak-button-dark" href="/gioi-thieu">Tìm hiểu về mình <ArrowUpRight size={18}/></Link>
            <a className="ak-inline-link" href={settings.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={18}/> Theo dõi Facebook</a>
          </div>
        </div>
      </div>
    </section>

    <section className="ak-bottom-cta container">
      <span className="ak-label">LET'S STAY CURIOUS</span>
      <div className="ak-bottom-cta-row"><h2>Có gì mới trong<br/><span>thế giới AI?</span></h2><a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="ak-button ak-button-primary">Theo dõi Anh Khôi <ArrowUpRight size={18}/></a></div>
      <p>Những điều thú vị tiếp theo đang chờ bạn ở phía trước.</p>
    </section>
  </main>
}
