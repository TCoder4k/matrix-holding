import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Share2, ArrowRight } from 'lucide-react';

interface ArticleItem {
  id: string;
  brand: string;
  category: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

interface NewsSectionProps {
  onExploreAll?: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onExploreAll }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // Tham chiếu khối wrapper chứa ảnh bài nổi bật và danh sách tin
  const newsGridWrapperRef = useRef<HTMLDivElement>(null);
  const featuredImgRef = useRef<HTMLImageElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  // Trạng thái animation & progressive enhancement
  const [isLogicReady, setIsLogicReady] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [curtainComplete, setCurtainComplete] = useState(false);
  const [isFeaturedImgLoaded, setIsFeaturedImgLoaded] = useState(false);
  const [isFeaturedImgError, setIsFeaturedImgError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Trạng thái kích hoạt từng hàng tin trên mobile (quan sát từng hàng riêng)
  const [rowsInView, setRowsInView] = useState<boolean[]>([false, false, false]);

  // Dữ liệu bài viết nổi bật (Bên trái) - Khớp 100% nội dung & hình ảnh kiến trúc biệt thự có hồ bơi
  const featuredArticle: ArticleItem = {
    id: 'featured-1',
    brand: 'MATRIX HOLDING',
    category: 'Chiến lược phát triển',
    date: '26/09/2026',
    image: '/images/matrix_villa_architecture_1790822760970.jpg',
    title: 'Matrix Holding: Từ khát vọng khởi nghiệp đến hệ sinh thái kinh doanh đa ngành',
    summary:
      'Hành trình kiến tạo một mô hình tập đoàn đầu tư và vận hành thế hệ mới tại Việt Nam, lấy công nghệ và sự cộng hưởng đa ngành làm bệ phóng vững chắc cho các doanh nghiệp thành viên.',
    content:
      'Được thành lập với sứ mệnh tiên phong kiến tạo giá trị tốt đẹp hơn cho cộng đồng doanh nghiệp Việt Nam, Matrix Holding đã không ngừng mở rộng hệ sinh thái khép kín từ đầu tư tài chính, công nghệ lõi AI, chuỗi bán lẻ hiện đại, đến kho vận logistics thông minh và truyền thông tích hợp. Bằng việc lấy công nghệ làm đòn bẩy và sự minh bạch trong quản trị ESG làm kim chỉ nam, Matrix Holding tự hào đồng hành cùng các startup và doanh nghiệp tiềm năng trên hành trình vươn tầm Kỳ lân.',
  };

  // Dữ liệu 3 bài viết bên phải - Giữ nguyên tên thương hiệu gốc: Matrix Network, Matrix Capital, Matrix Community
  const sideArticles: ArticleItem[] = [
    {
      id: 'side-1',
      brand: 'MATRIX NETWORK',
      category: 'Hệ sinh thái dịch vụ',
      date: '26/09/2026',
      image: '/images/matrix_lounge_office_1790822492462.jpg',
      title: 'Matrix Network: Hệ sinh thái dịch vụ toàn diện dành cho doanh nghiệp tại Việt Nam',
      summary:
        'Cung cấp bộ giải pháp trọn gói từ tư vấn chiến lược, pháp lý, kế toán quản trị đến chuyển đổi số cho các doanh nghiệp vừa và nhỏ.',
      content:
        'Matrix Network chính thức giới thiệu gói hỗ trợ tăng trưởng toàn diện cho hơn 500 doanh nghiệp đối tác tại 3 miền. Nhờ nền tảng quản trị tập trung và mạng lưới chuyên gia cố vấn hàng đầu, các doanh nghiệp thành viên tiết giảm tới 35% chi phí vận hành và rút ngắn thời gian tiếp cận thị trường.',
    },
    {
      id: 'side-2',
      brand: 'MATRIX CAPITAL',
      category: 'Đầu tư & Vốn',
      date: '19/09/2026',
      image: '/images/matrix_towers_financial_1790822854522.jpg',
      title: 'Matrix Capital: Hệ sinh thái cộng đồng kết nối đầu tư Việt Nam',
      summary:
        'Cầu nối vững chắc giữa các nhà đầu tư tổ chức, quỹ mạo hiểm quốc tế với các dự án kinh doanh sáng tạo nội địa.',
      content:
        'Nhánh đầu tư Matrix Capital tiếp tục ghi dấu ấn với việc hoàn tất giải ngân gói vốn chiến lược cho các dự án công nghệ xanh và chuỗi cung ứng tự động hóa. Diễn đàn kết nối đầu tư thường niên của Matrix Capital quy tụ hơn 40 đại diện các quỹ đầu tư uy tín từ Singapore, Nhật Bản và Hàn Quốc.',
    },
    {
      id: 'side-3',
      brand: 'MATRIX COMMUNITY',
      category: 'Cộng đồng doanh nhân',
      date: '19/09/2026',
      image: '/images/matrix_networking_lounge_1790822870952.jpg',
      title: 'Matrix Community: Hệ sinh thái cộng đồng kết nối kinh doanh Việt Nam',
      summary:
        'Môi trường giao thương cởi mở, nơi các nhà sáng lập chia sẻ tri thức thực chiến, hợp tác chéo và phát triển chuỗi giá trị bền vững.',
      content:
        'Hơn 2,000 chủ doanh nghiệp đã tham gia chuỗi tọa đàm chuyên đề do Matrix Community tổ chức trong quý vừa qua. Mạng lưới mang lại cơ hội hợp tác kinh doanh thực chất, thúc đẩy các giao dịch B2B nội khối và đào tạo thế hệ lãnh đạo trẻ có tư duy toàn cầu.',
    },
  ];

  // 1. Kiểm tra prefers-reduced-motion, kích thước màn hình và cache ảnh
  useEffect(() => {
    setIsLogicReady(true);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    }
    window.addEventListener('resize', checkMobile);

    // Kiểm tra ảnh bài nổi bật đã nằm trong cache trình duyệt chưa
    if (featuredImgRef.current?.complete && featuredImgRef.current.naturalWidth > 0) {
      setIsFeaturedImgLoaded(true);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 2. Kích hoạt hiệu ứng khi mép trên wrapper khối tin đi đến khoảng 70% chiều cao viewport
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsTriggered(true);
      setCurtainComplete(true);
      setRowsInView([true, true, true]);
      return;
    }

    const checkTrigger = () => {
      if (isTriggered) return;
      const target = newsGridWrapperRef.current;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Đo mốc chuẩn: mép trên wrapper đi đến 70% chiều cao màn hình từ trên xuống
      if (rect.top <= windowHeight * 0.7) {
        setIsTriggered(true);

        // Trên desktop: kích hoạt cả 3 hàng tin theo nhịp so le
        if (window.innerWidth >= 768) {
          setRowsInView([true, true, true]);
        }
      }
    };

    // Kiểm tra ngay khi tải trang nếu khối tin đã nằm trong vùng kích hoạt
    checkTrigger();

    window.addEventListener('scroll', checkTrigger, { passive: true });
    window.addEventListener('resize', checkTrigger, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkTrigger);
      window.removeEventListener('resize', checkTrigger);
    };
  }, [isTriggered, prefersReducedMotion]);

  // 3. Quan sát từng hàng tin riêng trên Mobile (chỉ chạy khi hàng đó đi vào vùng nhìn thấy)
  useEffect(() => {
    if (!isMobile || prefersReducedMotion) return;

    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setRowsInView((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isMobile, prefersReducedMotion]);

  // 4. Mở lớp che sau khi ĐỒNG THỜI: đã chạm ngưỡng 70% VÀ ảnh đã tải xong (hoặc lỗi)
  const isCurtainOpening = isTriggered && (isFeaturedImgLoaded || isFeaturedImgError);

  useEffect(() => {
    if (isCurtainOpening && !curtainComplete && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setCurtainComplete(true);
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [isCurtainOpening, curtainComplete, prefersReducedMotion]);

  // Hỗ trợ accessibility: Khi người dùng focus bàn phím vào khối chưa hiện, lập tức kích hoạt
  const handleFocusReveal = () => {
    if (!isTriggered) {
      setIsTriggered(true);
      setRowsInView([true, true, true]);
    }
  };

  // Xử lý khi bấm "Xem tất cả"
  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreAll) {
      onExploreAll();
    }
  };

  return (
    <section id="news" className="w-full py-16 sm:py-20 lg:py-24 bg-white text-[#0A192F]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* PHẦN TIÊU ĐỀ: BÊN TRÁI TIÊU ĐỀ SERIF, BÊN PHẢI LIÊN KẾT XEM TẤT CẢ          */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div>
            {/* Nhãn nhỏ phía trên: TIN TỨC VÀ SỰ KIỆN */}
            <span className="text-[#009fe3] font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">
              TIN TỨC VÀ SỰ KIỆN
            </span>

            {/* Tiêu đề 2 dòng: Tin tức mới nhất \n từ Matrix Holding. (Chuẩn font Plus Jakarta Sans không chân hiện đại) */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A192F] leading-[1.18] tracking-tight">
              Tin tức mới nhất<br />
              từ Matrix Holding.
            </h2>
          </div>

          {/* Liên kết "Xem tất cả →" bên phải, có gạch chân mảnh */}
          <div className="shrink-0 pb-1">
            <button
              type="button"
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0A192F] hover:text-[#009fe3] border-b border-[#0A192F] hover:border-[#009fe3] pb-0.5 transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009fe3] focus-visible:outline-offset-2"
            >
              <span>Xem tất cả</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WRAPPER KHỐI TIN: QUAN SÁT KÍCH HOẠT HIỆU ỨNG TẠI ĐÂY (NGƯỠNG 70% VIEWPORT)*/}
        {/* ========================================================================= */}
        <div
          ref={newsGridWrapperRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start"
        >
          
          {/* ========================================================================= */}
          {/* CỘT TRÁI: BÀI NỔI BẬT LỚN (~54%) - CÓ HIỆU ỨNG MỞ TRANG TẠP CHÍ             */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            <article
              role="button"
              tabIndex={0}
              onClick={() => setSelectedArticle(featuredArticle)}
              onFocus={handleFocusReveal}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(featuredArticle);
                }
              }}
              className="group cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#009fe3] focus-visible:outline-offset-4 rounded-2xl"
              aria-label={featuredArticle.title}
            >
              
              {/* 
                =======================================================================
                KHUNG ẢNH BÀI NỔI BẬT VỚI HIỆU ỨNG "MỞ TRANG TẠP CHÍ"
                - Khung ảnh: relative, overflow-hidden, rounded-2xl, aspect-[16/10]
                - Lớp che màu trắng (trùng màu nền section) thu từ dưới lên bằng scaleY(1) -> scaleY(0) với origin-top
                - Duration: 850–950ms (900ms), Easing: cubic-bezier(0.22, 1, 0.36, 1)
                - Ảnh scale(1.05) -> scale(1) trong 1100ms
                - Chỉ bắt đầu mở màn khi ảnh đã tải xong để không bao giờ lộ khung trống
                =======================================================================
              */}
              <div className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                
                {/* Lớp che mở trang tạp chí (Màu trắng trùng nền, thu lên trên origin-top) */}
                {!curtainComplete && !prefersReducedMotion && isLogicReady && (
                  <div
                    className="absolute inset-0 bg-white z-20 pointer-events-none origin-top transition-transform duration-[900ms]"
                    style={{
                      transform: isCurtainOpening ? 'scaleY(0)' : 'scaleY(1)',
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Wrapper ảnh chuyển động xuất hiện: scale(1.05) -> scale(1) */}
                <div
                  className="w-full h-full transition-transform duration-[1100ms]"
                  style={{
                    transform:
                      !isLogicReady || prefersReducedMotion || isCurtainOpening
                        ? 'scale(1)'
                        : 'scale(1.05)',
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  {/* Wrapper hover riêng biệt (scale 1.035) để không ghi đè transform xuất hiện */}
                  <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.035]">
                    <img
                      ref={featuredImgRef}
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      loading="lazy"
                      onLoad={() => setIsFeaturedImgLoaded(true)}
                      onError={() => {
                        setIsFeaturedImgLoaded(true);
                        setIsFeaturedImgError(true);
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Fallback gọn nếu ảnh lỗi */}
                {isFeaturedImgError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 text-white p-6 text-center">
                    <p className="font-bold text-base">{featuredArticle.title}</p>
                    <p className="text-xs text-slate-300 mt-1">Hình ảnh kiến trúc hệ sinh thái Matrix Holding</p>
                  </div>
                )}

              </div>

              {/* 
                =======================================================================
                NỘI DUNG BÀI NỔI BẬT: Metadata, Tiêu đề, CTA xuất hiện tiếp nối
                - Stagger nhẹ 70–90ms (Metadata 280ms, Tiêu đề 360ms, CTA 440ms)
                - Opacity: 0 -> 1, translateY: 20px -> 0
                =======================================================================
              */}
              <div className="mt-5 sm:mt-6">
                
                {/* 1. Metadata: MATRIX HOLDING | 26/09/2026 */}
                <div
                  className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                    !isLogicReady || prefersReducedMotion || isTriggered
                      ? 'opacity-100 translate-y-0'
                      : `opacity-0 ${isMobile ? 'translate-y-3.5' : 'translate-y-5'}`
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion || !isLogicReady ? '0ms' : '280ms',
                  }}
                >
                  <span className="text-[#009fe3] font-bold text-xs uppercase tracking-wider">
                    {featuredArticle.brand}
                  </span>
                  <span className="text-slate-300 font-normal">|</span>
                  <span className="text-slate-400 text-xs font-medium">
                    {featuredArticle.date}
                  </span>
                </div>

                {/* 2. Tiêu đề bài viết: Font Plus Jakarta Sans hiện đại, cân đối, chống rớt từ lẻ loi "ngành" */}
                <h3
                  className={`font-['Plus_Jakarta_Sans',sans-serif] text-xl sm:text-2xl lg:text-[25px] xl:text-[27px] font-extrabold text-[#0A192F] leading-[1.3] tracking-tight mt-3 mb-3 group-hover:text-[#009fe3] transition-colors ${
                    !isLogicReady || prefersReducedMotion || isTriggered
                      ? 'opacity-100 translate-y-0'
                      : `opacity-0 ${isMobile ? 'translate-y-3.5' : 'translate-y-5'}`
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion || !isLogicReady ? '0ms' : '360ms',
                    textWrap: 'balance',
                  }}
                >
                  Matrix Holding: Từ khát vọng khởi nghiệp<br className="hidden sm:inline" /> đến hệ sinh thái kinh doanh đa&nbsp;ngành
                </h3>

                {/* 2.5. Tóm tắt bài viết nổi bật: Tạo nhịp đọc dày dặn, lấp khoảng trống bất hợp lý để cân xứng chiều cao với 3 bài bên phải */}
                <p
                  className={`text-slate-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-2 mb-4 font-normal max-w-[620px] transition-all duration-600 ease-out ${
                    !isLogicReady || prefersReducedMotion || isTriggered
                      ? 'opacity-100 translate-y-0'
                      : `opacity-0 ${isMobile ? 'translate-y-3.5' : 'translate-y-5'}`
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion || !isLogicReady ? '0ms' : '400ms',
                  }}
                >
                  {featuredArticle.summary}
                </p>

                {/* 3. CTA: "Xem bài viết →" gạch chân cyan */}
                <div
                  className={`transition-all duration-600 ease-out ${
                    !isLogicReady || prefersReducedMotion || isTriggered
                      ? 'opacity-100 translate-y-0'
                      : `opacity-0 ${isMobile ? 'translate-y-3.5' : 'translate-y-5'}`
                  }`}
                  style={{
                    transitionDelay: prefersReducedMotion || !isLogicReady ? '0ms' : '440ms',
                  }}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0A192F] group-hover:text-[#009fe3] transition-colors">
                    <span className="border-b-2 border-sky-400 pb-0.5 group-hover:border-[#009fe3] transition-colors">
                      Xem bài viết
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>

              </div>

            </article>
          </div>

          {/* ========================================================================= */}
          {/* CỘT PHẢI: BA HÀNG TIN PHẲNG, PHÂN CÁCH BẰNG ĐƯỜNG KẺ MẢNH (~46%)            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-slate-200/80">
            {sideArticles.map((article, idx) => {
              // Hàng 1 bắt đầu sau 200ms; mỗi hàng tiếp theo cách 120ms (200ms, 320ms, 440ms)
              const staggerDelay = prefersReducedMotion || !isLogicReady ? 0 : 200 + idx * 120;
              const isRowVisible = !isLogicReady || prefersReducedMotion || (isMobile ? rowsInView[idx] : isTriggered);

              return (
                <article
                  key={article.id}
                  ref={(el) => {
                    rowRefs.current[idx] = el;
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedArticle(article)}
                  onFocus={handleFocusReveal}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }
                  }}
                  className={`group cursor-pointer select-none py-6 sm:py-7 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center transition-all duration-600 ease-out focus-visible:outline-2 focus-visible:outline-[#009fe3] focus-visible:outline-offset-2 rounded-xl ${
                    isRowVisible
                      ? 'opacity-100 translate-y-0'
                      : `opacity-0 ${isMobile ? 'translate-y-3.5' : 'translate-y-6'}`
                  }`}
                  style={{
                    transitionDelay: isMobile ? '0ms' : `${staggerDelay}ms`,
                  }}
                  aria-label={article.title}
                >
                  {/* Thumbnail ảnh: aspect-[16/10], bo góc rounded-xl, hover zoom nhẹ 1.035 */}
                  <div className="w-full sm:w-[190px] md:w-[210px] aspect-[16/10] rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.035]">
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Nội dung tin tức bên phải thumbnail */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Metadata: BRAND | DATE */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[#009fe3] font-bold text-[11px] sm:text-xs uppercase tracking-wider">
                          {article.brand}
                        </span>
                        <span className="text-slate-300 font-normal">|</span>
                        <span className="text-slate-400 text-[11px] sm:text-xs font-medium">
                          {article.date}
                        </span>
                      </div>

                      {/* Tiêu đề tin tức: Font Plus Jakarta Sans hiện đại, cân đối */}
                      <h4
                        className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-[15px] lg:text-[16px] font-bold text-[#0A192F] leading-snug tracking-tight mb-2.5 group-hover:text-[#009fe3] transition-colors"
                        style={{ textWrap: 'balance' }}
                      >
                        {article.title}
                      </h4>
                    </div>

                    {/* CTA: Xem bài viết → */}
                    <div className="pt-0.5">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A192F] group-hover:text-[#009fe3] transition-colors">
                        <span className="border-b-2 border-sky-400 pb-0.5 group-hover:border-[#009fe3] transition-colors">
                          Xem bài viết
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL CHI TIẾT BÀI VIẾT (GIỮ NGUYÊN NGUỒN DỮ LIỆU ĐỌC BÀI THỰC TẾ)        */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-white bg-black/40 hover:bg-black/70 rounded-full backdrop-blur-md transition-colors"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                  <span>·</span>
                  <span>{selectedArticle.brand}</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg sm:text-2xl font-bold leading-snug text-white">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-slate-900 bg-sky-50/80 p-4 rounded-2xl border border-sky-100 text-justify sm:text-left">
                {selectedArticle.summary}
              </p>

              <p className="text-justify sm:text-left">
                {selectedArticle.content}
              </p>

              <p className="text-justify sm:text-left">
                Trong giai đoạn tiếp theo, Matrix Holding tiếp tục đẩy mạnh các chương trình hợp tác quốc tế, mở rộng các diễn đàn kinh doanh dành riêng cho các thành viên, đồng thời thúc đẩy chuyển đổi số ứng dụng AI thế hệ mới trên toàn hệ sinh thái.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Share2 className="w-4 h-4 text-[#009fe3]" />
                <span>Chia sẻ tin tức Matrix Holding</span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#0A192F] text-white hover:bg-[#009fe3] text-xs font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
