import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { StoryItem } from './FeaturedStoriesCarousel';

interface LatestStaggeredNewsProps {
  onOpenArticle: (article: StoryItem) => void;
}

export const LatestStaggeredNews: React.FC<LatestStaggeredNewsProps> = ({ onOpenArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'holding', label: 'Matrix Holding' },
    { key: 'network', label: 'Matrix Network' },
    { key: 'connect', label: 'Matrix Connect' },
    { key: 'ventures', label: 'Matrix Ventures' },
  ];

  // Danh sách bài viết so le
  const articles: StoryItem[] = [
    {
      id: 'staggered-1',
      num: '01',
      tabLabel: 'Phối hợp nguồn lực',
      category: 'MATRIX NETWORK',
      title: 'Góc nhìn về phối hợp nguồn lực',
      excerpt: 'Khi nhiều nguồn lực cùng hướng về một mục tiêu chung, cơ hội được mở rộng và tạo ra những giá trị bền vững hơn.',
      image: '/src/assets/images/matrix_boardroom_skyline_1790822831335.jpg',
      date: '14/09/2026',
      author: 'Khối Vận hành Doanh nghiệp · Matrix Network',
      readTime: '5 phút đọc',
      content: [
        'Phối hợp nguồn lực hiệu quả không chỉ đơn thuần là việc tập hợp nhiều doanh nghiệp lại với nhau. Điều cốt lõi nằm ở việc thiết lập các chuẩn mực giao tiếp và cơ chế chia sẻ giá trị công bằng.',
        'Tại Matrix Network, chúng tôi xây dựng nền tảng quy chuẩn hóa để các thành viên có thể tận dụng tối đa năng lực lõi của nhau mà không phát sinh thêm chi phí quản trị cồng kềnh.',
      ],
    },
    {
      id: 'staggered-2',
      num: '02',
      tabLabel: 'Đối thoại kết nối',
      category: 'MATRIX CONNECT',
      title: 'Những kết nối bắt đầu từ đối thoại',
      excerpt: 'Đối thoại là điểm khởi đầu cho những kết nối bền vững, nơi các góc nhìn khác nhau gặp gỡ và mở ra nhiều khả năng hợp tác trong tương lai.',
      image: '/src/assets/images/news_team_workshop_1790828163347.jpg',
      date: '11/09/2026',
      author: 'Ban Phát triển Quan hệ Đối tác · Matrix Connect',
      readTime: '4 phút đọc',
      content: [
        'Những thương vụ hợp tác lớn nhất thường nảy mầm từ những cuộc trò chuyện cởi mở về khó khăn thực tế của doanh nghiệp.',
        'Matrix Connect định kỳ tổ chức các diễn đàn đối thoại chuyên đề, nơi các nhà sáng lập cùng trao đổi thẳng thắn và tìm thấy đối tác chiến lược phù hợp.',
      ],
    },
    {
      id: 'staggered-3',
      num: '03',
      tabLabel: 'Cơ hội hợp tác',
      category: 'MATRIX VENTURES',
      title: 'Mở rộng góc nhìn về cơ hội hợp tác',
      excerpt: 'Mỗi thị trường đều ẩn chứa những cơ hội mới, đòi hỏi góc nhìn linh hoạt và sự đồng hành từ nhiều phía để tạo nên giá trị thiết thực.',
      image: '/src/assets/images/matrix_towers_financial_1790822854522.jpg',
      date: '08/09/2026',
      author: 'Hội đồng Thẩm định Đầu tư · Matrix Ventures',
      readTime: '5 phút đọc',
      content: [
        'Thay vì chỉ nhìn vào các chỉ số tài chính ngắn hạn, Matrix Ventures đánh giá cao năng lực thích ứng và tư duy dài hạn của ban điều hành.',
        'Sự kết hợp giữa vốn chiến lược và hệ sinh thái bổ trợ tạo nên đòn bẩy vững chắc giúp các doanh nghiệp vươn tầm.',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category.toLowerCase().includes(activeCategory));

  const mainArticle = filteredArticles[0] || articles[0];
  const sideArticles = filteredArticles.slice(1);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 sm:py-20 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: KICKER, TIÊU ĐỀ & THANH LỌC DANH MỤC */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-medium">NỘI DUNG MINH HỌA</span>
          </div>

          <span className="text-xs sm:text-sm font-bold text-[#00c2ff] uppercase tracking-wider block mb-2">
            TIN TỨC MỚI NHẤT
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-8">
            Góc nhìn mới. Câu chuyện mới<span className="text-[#00c2ff]">.</span>
          </h2>

          {/* DẢI TAB LỌC DANH MỤC VỚI THANH CYAN TRƯỢT */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto border-b border-slate-200 pb-3 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className="flex flex-col items-start gap-2 group cursor-pointer focus:outline-none shrink-0"
                >
                  <span
                    className={`text-xs sm:text-sm font-bold transition-colors ${
                      isActive ? 'text-[#0d1d2f]' : 'text-slate-500 group-hover:text-slate-800'
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span
                    className={`h-[2px] transition-all duration-300 ${
                      isActive ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* BỐ CỤC SO LE: BÀI LỚN BÊN TRÁI, 2 BÀI NHỎ XẾP CHỒNG BÊN PHẢI (Khớp ảnh 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* CỘT TRÁI (BÀI LỚN 01): XUẤT HIỆN TRƯỚC */}
          <div
            onClick={() => onOpenArticle(mainArticle)}
            className={`lg:col-span-7 flex flex-col justify-between group cursor-pointer transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Khung ảnh bài lớn với watermark trên cửa kính */}
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg bg-slate-900 mb-6">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Dòng chữ nghệ thuật trên mặt kính phòng họp */}
              <div className="absolute right-6 top-8 text-right text-white/80 pointer-events-none select-none hidden sm:block">
                <p className="text-[10px] tracking-[0.2em] font-mono leading-relaxed">
                  PEOPLE<br />
                  IDEAS<br />
                  CONNECTIONS<br />
                  A BRIGHTER<br />
                  TOMORROW
                </p>
                <div className="w-6 h-[1px] bg-white/60 ml-auto mt-2" />
              </div>
            </div>

            {/* Thông tin bài lớn */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-400">01</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-bold text-[#00c2ff] uppercase tracking-wider">
                  {mainArticle.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight leading-snug mb-3 group-hover:text-[#00c2ff] transition-colors">
                {mainArticle.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                {mainArticle.excerpt}
              </p>

              <div className="text-xs sm:text-sm font-bold text-[#00c2ff] inline-flex items-center gap-1.5">
                <span className="border-b border-[#00c2ff] pb-0.5">Xem chi tiết</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (2 BÀI NHỎ 02 & 03): XUẤT HIỆN SAU 100MS */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 sm:gap-10">
            {sideArticles.map((article, idx) => {
              return (
                <div
                  key={article.id}
                  onClick={() => onOpenArticle(article)}
                  className={`flex flex-col sm:flex-row gap-5 group cursor-pointer transition-all duration-700 delay-100 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Ảnh nhỏ vuông */}
                  <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Nội dung bài nhỏ */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-slate-400">0{idx + 2}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs font-bold text-[#00c2ff] uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-[#0d1d2f] leading-snug tracking-tight mb-2 group-hover:text-[#00c2ff] transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="text-xs font-bold text-[#00c2ff] inline-flex items-center gap-1.5">
                      <span className="border-b border-[#00c2ff] pb-0.5">Xem chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
