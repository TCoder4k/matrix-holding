import { useState, useMemo } from 'react';
import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  User,
  Share2,
  Check,
  X,
  ExternalLink,
} from 'lucide-react';
import {
  NewsArticle,
  spotlightArticle,
  featuredNewsList,
  latestNewsList,
} from '../data/newsArticles';
import aboutHeroBg from '../assets/images/about_hero_skyscraper_network_1790691420935.jpg';

interface NewsPageProps {
  onOpenContact: (topic?: string) => void;
}

export default function NewsPage({ onOpenContact }: NewsPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [showAllArticles, setShowAllArticles] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ['Tất cả', 'Hoạt động', 'Hệ sinh thái', 'Góc nhìn', 'Truyền thông'];

  // All available articles combined
  const allArticles = useMemo(() => {
    return [spotlightArticle, ...featuredNewsList, ...latestNewsList];
  }, []);

  // Filtered featured row (top stories)
  const filteredFeatured = useMemo(() => {
    let list = featuredNewsList;
    if (activeCategory !== 'Tất cả') {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tag.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  // Filtered latest row
  const filteredLatest = useMemo(() => {
    let list = latestNewsList;
    if (activeCategory !== 'Tất cả') {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tag.toLowerCase().includes(q)
      );
    }
    return showAllArticles ? list : list.slice(0, 3);
  }, [activeCategory, searchQuery, showAllArticles]);

  // Check if spotlight matches current filter/search
  const spotlightMatches = useMemo(() => {
    if (activeCategory !== 'Tất cả' && spotlightArticle.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        spotlightArticle.title.toLowerCase().includes(q) ||
        spotlightArticle.excerpt.toLowerCase().includes(q) ||
        spotlightArticle.tag.toLowerCase().includes(q)
      );
    }
    return true;
  }, [activeCategory, searchQuery]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. HERO BANNER - Matching Mockup 100% */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-[#081c31] overflow-hidden text-white pt-28 pb-16">
        {/* Background Laser lines & constellation particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full opacity-35" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <line x1="120" y1="0" x2="800" y2="600" stroke="#27d9ef" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="850" y1="0" x2="1440" y2="500" stroke="#27d9ef" strokeWidth="1" opacity="0.6" />
            <line x1="700" y1="200" x2="1350" y2="200" stroke="#27d9ef" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
            <circle cx="850" cy="180" r="4" fill="#27d9ef" />
            <circle cx="1180" cy="360" r="3" fill="#27d9ef" />
            <circle cx="650" cy="420" r="3.5" fill="#27d9ef" />
          </svg>
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#27d9ef]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-2xl">
              {/* Kicker */}
              <div className="text-xs sm:text-sm font-bold tracking-[0.24em] text-slate-300 uppercase mb-4 flex items-center gap-2">
                <span>MATRIX JOURNAL</span>
                <span className="text-slate-400">/</span>
                <span className="text-[#27d9ef]">TIN TỨC & GÓC NHÌN</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
                Góc nhìn mới.
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_25px_rgba(39,217,239,0.35)]">
                  Kết nối tương lai.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Cập nhật câu chuyện, hoạt động và góc nhìn từ hệ sinh thái Matrix Holding.
              </p>
            </div>

            {/* Right Typography Lockup matching Mockup */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="text-right text-xs tracking-[0.24em] text-slate-300 font-semibold space-y-1.5 uppercase border-r-2 border-[#27d9ef]/60 pr-5 py-2">
                <div className="w-8 h-[2px] bg-[#27d9ef] ml-auto mb-2" />
                <div className="text-slate-400">PEOPLE</div>
                <div className="text-white">BUSINESS</div>
                <div className="text-white">IDEAS</div>
                <div className="text-[#27d9ef]">A BETTER</div>
                <div className="text-white font-bold">TOMORROW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT FEATURED ARTICLE CARD - Matching Mockup 100% */}
      {spotlightMatches && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="container-page">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                {/* Left: Image with Cyan L-frame Accent */}
                <div className="lg:col-span-7 relative p-4 sm:p-6 lg:p-8">
                  <div className="relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => setSelectedArticle(spotlightArticle)}>
                    {/* Cyan L-shaped accent */}
                    <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#27d9ef] z-10 pointer-events-none" />

                    <img
                      src={spotlightArticle.image}
                      alt={spotlightArticle.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Right: Article Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-[#e0f7fa] text-[#0891b2] font-bold text-xs uppercase px-3.5 py-1.5 rounded-full inline-block tracking-wider">
                      {spotlightArticle.tag}
                    </span>
                  </div>

                  <h2
                    onClick={() => setSelectedArticle(spotlightArticle)}
                    className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-950 tracking-tight leading-[1.22] mb-4 hover:text-[#0284c7] transition-colors cursor-pointer"
                  >
                    {spotlightArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {spotlightArticle.excerpt}
                  </p>

                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(spotlightArticle)}
                      className="inline-flex items-center gap-1.5 text-[#0284c7] hover:text-[#0369a1] font-bold text-sm sm:text-base group cursor-pointer transition-colors"
                    >
                      <span className="border-b border-[#0284c7] pb-0.5 group-hover:border-[#0369a1]">
                        Đọc bài viết
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CATEGORY TABS & SEARCH BAR - Matching Mockup 100% */}
      <section className="py-6 bg-white border-y border-slate-100">
        <div className="container-page flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#27d9ef] text-[#081c31] font-bold shadow-xs'
                      : 'bg-[#f1f5f9] text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar matching mockup */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm bài viết"
              className="w-full pl-9 pr-8 py-2 bg-[#f8fafc] border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. TOP STORIES ROW (3 Cards with Card 3 as Dark Navy Feature) */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container-page">
          {filteredFeatured.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              Không tìm thấy bài viết nào phù hợp với bộ lọc hiện tại.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatured.map((item) => {
                if (item.isDarkCard) {
                  // Special Dark Card matching Mockup (Card 3: GÓC NHÌN)
                  return (
                    <div
                      key={item.id}
                      className="bg-[#081c31] rounded-2xl p-7 sm:p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden border border-white/10 group cursor-pointer hover:border-[#27d9ef]/50 transition-all duration-300"
                      onClick={() => setSelectedArticle(item)}
                    >
                      {/* Subtle geometric laser graphic inside dark card */}
                      <svg
                        className="absolute -right-10 -bottom-10 w-64 h-64 opacity-20 pointer-events-none"
                        viewBox="0 0 200 200"
                      >
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="4 4" />
                        <line x1="0" y1="200" x2="200" y2="0" stroke="#27d9ef" strokeWidth="1" />
                      </svg>

                      <div>
                        <div className="mb-6">
                          <span className="bg-[#27d9ef]/20 text-[#27d9ef] border border-[#27d9ef]/40 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
                            {item.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4 group-hover:text-[#27d9ef] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-4">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 text-[#27d9ef] font-bold text-sm group-hover:text-[#20c4d8] transition-colors"
                        >
                          <span className="border-b border-[#27d9ef] pb-0.5">
                            Đọc bài viết
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                }

                // Standard Cards (Card 1 & Card 2)
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                    onClick={() => setSelectedArticle(item)}
                  >
                    {item.image && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-3">
                          <span className="bg-[#e0f7fa] text-[#0891b2] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                            {item.tag}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-[#0284c7] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 text-[#0284c7] hover:text-[#0369a1] font-bold text-xs sm:text-sm group-hover:translate-x-0.5 transition-all"
                        >
                          <span>Đọc bài viết</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. BRAND STATEMENT BANNER - Matching Mockup 100% */}
      <section className="relative py-20 lg:py-24 bg-[#081c31] text-white overflow-hidden">
        {/* Ambient background rays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <line x1="1200" y1="0" x2="1440" y2="320" stroke="#27d9ef" strokeWidth="1.5" />
            <line x1="1100" y1="0" x2="1440" y2="200" stroke="#27d9ef" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="1200" cy="190" r="3" fill="#27d9ef" />
          </svg>
        </div>

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Giant Glowing Cyan 'M' architectural mark */}
            <div className="lg:col-span-3 flex justify-start items-center">
              <div className="relative select-none pointer-events-none">
                <span className="text-[120px] sm:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#27d9ef] via-[#27d9ef]/60 to-transparent leading-none drop-shadow-[0_0_40px_rgba(39,217,239,0.4)]">
                  M
                </span>
              </div>
            </div>

            {/* Center: Headline & Slogan */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
                MATRIX HOLDING
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Ý tưởng được kết nối.
                <br />
                <span className="text-[#27d9ef]">Giá trị được lan tỏa.</span>
              </h2>
            </div>

            {/* Right: Typography Lockup matching Mockup */}
            <div className="hidden lg:flex lg:col-span-3 justify-end">
              <div className="text-right text-xs tracking-[0.24em] text-slate-300 font-semibold space-y-1 uppercase border-r border-[#27d9ef]/50 pr-4 py-1">
                <div className="text-slate-400">IDEAS</div>
                <div className="text-white">PEOPLE</div>
                <div className="text-white">PARTNERSHIP</div>
                <div className="text-[#27d9ef] font-bold">GROWTH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BÀI VIẾT MỚI SECTION - Matching Mockup 100% */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
                BÀI VIẾT MỚI
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-slate-500">
              Khám phá thêm những câu chuyện, hoạt động và góc nhìn từ Matrix Holding.
            </div>
          </div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLatest.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setSelectedArticle(item)}
              >
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <span className="bg-[#e0f7fa] text-[#0891b2] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-[#0284c7] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-[#0284c7] hover:text-[#0369a1] font-bold text-xs sm:text-sm group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Đọc bài viết</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Xem thêm bài viết Button matching Mockup */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllArticles(!showAllArticles)}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-md border border-[#27d9ef] text-[#0284c7] font-semibold text-sm hover:bg-[#27d9ef]/10 hover:border-[#0284c7] transition-all cursor-pointer shadow-xs"
            >
              <span>{showAllArticles ? 'Thu gọn danh sách' : 'Xem thêm bài viết'}</span>
              <ArrowRight className="w-4 h-4 text-[#0284c7]" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CÙNG KIẾN TẠO GIÁ TRỊ - BOTTOM BANNER - Matching Mockup 100% */}
      <section className="relative py-16 sm:py-20 bg-[#081c31] text-white overflow-hidden">
        {/* Background Skyscraper / Laser Grid */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt="Matrix Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31] via-[#081c31]/90 to-[#081c31]/75" />
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#27d9ef]">
                <span className="w-5 h-[2px] bg-[#27d9ef] inline-block" />
                <span>CÙNG KIẾN TẠO GIÁ TRỊ</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Cùng mở ra cơ hội hợp tác
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Kết nối với Matrix Holding để cùng thảo luận về cơ hội hợp tác và phát triển.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact('Hợp tác kinh doanh & đầu tư')}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.35)] hover:shadow-[0_0_30px_rgba(39,217,239,0.6)] hover:scale-105 cursor-pointer"
              >
                <span>Liên hệ Matrix Holding</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white w-full max-w-3xl border border-slate-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="font-bold text-[#0891b2] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full uppercase">
                  {selectedArticle.tag}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-900"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image (if any) */}
            {selectedArticle.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="p-4 bg-slate-50 border-l-3 border-[#27d9ef] text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic rounded-r-lg">
                {selectedArticle.excerpt}
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#0891b2]" />
                  <span>Tác giả: {selectedArticle.author}</span>
                </div>
                <div>Chuyên mục: {selectedArticle.category}</div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đã sao chép link</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Chia sẻ bài viết</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenContact(`Liên hệ từ bài viết: ${selectedArticle.title}`);
                  }}
                  className="px-4 py-2 text-xs font-bold text-[#081c31] bg-[#27d9ef] hover:bg-[#20c4d8] rounded-full transition-colors"
                >
                  Liên hệ hợp tác
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#081c31] hover:bg-slate-800 rounded-full transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
