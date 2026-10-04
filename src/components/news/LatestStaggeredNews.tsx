import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { StoryItem } from './FeaturedStoriesCarousel';

interface LatestStaggeredNewsProps {
  onOpenArticle: (article: StoryItem) => void;
}

export const LatestStaggeredNews: React.FC<LatestStaggeredNewsProps> = ({ onOpenArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isFading, setIsFading] = useState(false);

  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'holding', label: 'Matrix Holding' },
    { key: 'network', label: 'Matrix Network' },
    { key: 'connect', label: 'Matrix Connect' },
    { key: 'ventures', label: 'Matrix Ventures' },
  ];

  const articles: StoryItem[] = [
    {
      id: 'latest-1',
      num: '01',
      tabLabel: 'Phối hợp nguồn lực',
      category: 'MATRIX NETWORK',
      title: 'Góc nhìn về phối hợp nguồn lực',
      excerpt: 'Những kinh nghiệm và sáng kiến thực tiễn trong việc thúc đẩy phối hợp và chia sẻ nguồn lực hiệu quả.',
      image: '/images/matrix_boardroom_skyline_1790822831335.jpg',
      date: '14/09/2026',
      author: 'Khối Vận hành Doanh nghiệp · Matrix Network',
      readTime: '5 phút đọc',
      content: [
        'Phối hợp nguồn lực hiệu quả không chỉ đơn thuần là việc tập hợp nhiều doanh nghiệp lại với nhau.',
        'Tại Matrix Network, chúng tôi xây dựng nền tảng quy chuẩn hóa để các thành viên tận dụng tối đa năng lực lõi của nhau.',
      ],
    },
    {
      id: 'latest-2',
      num: '02',
      tabLabel: 'Đối thoại kết nối',
      category: 'MATRIX CONNECT',
      title: 'Những kết nối bắt đầu từ đối thoại',
      excerpt: 'Đối thoại là điểm khởi đầu cho những cơ hội hợp tác mới, tạo dựng các giá trị chung và hướng tới những mục tiêu dài hạn.',
      image: '/images/news_team_workshop_1790828163347.jpg',
      date: '11/09/2026',
      author: 'Ban Phát triển Quan hệ Đối tác · Matrix Connect',
      readTime: '4 phút đọc',
      content: [
        'Những thương vụ hợp tác lớn nhất thường nảy mầm từ những cuộc trò chuyện cởi mở về khó khăn thực tế của doanh nghiệp.',
      ],
    },
    {
      id: 'latest-3',
      num: '03',
      tabLabel: 'Cơ hội hợp tác',
      category: 'MATRIX VENTURES',
      title: 'Mở rộng góc nhìn về cơ hội hợp tác',
      excerpt: 'Những tín hiệu tích cực từ thị trường và cộng đồng mở ra nhiều cơ hội mới, thúc đẩy hợp tác chiến lược bền vững.',
      image: '/images/matrix_towers_financial_1790822854522.jpg',
      date: '08/09/2026',
      author: 'Hội đồng Thẩm định Đầu tư · Matrix Ventures',
      readTime: '5 phút đọc',
      content: [
        'Thay vì chỉ nhìn vào các chỉ số tài chính ngắn hạn, Matrix Ventures đánh giá cao năng lực thích ứng và tư duy dài hạn của ban điều hành.',
      ],
    },
  ];

  const handleCategoryChange = (key: string) => {
    if (key === activeCategory) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(key);
      setIsFading(false);
    }, 150);
  };

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category.toLowerCase().includes(activeCategory));

  return (
    <section className="w-full py-14 sm:py-18 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER: Tin mới nhất */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight inline-block relative pb-2 mb-6">
            Tin mới nhất
            <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#00c2ff] rounded-full" />
          </h2>

          {/* DẢI TAB LỌC DANH MỤC */}
          <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className="flex flex-col items-start gap-1 group cursor-pointer focus:outline-none shrink-0 py-1"
                >
                  <span
                    className={`text-xs sm:text-sm font-bold transition-colors ${
                      isActive ? 'text-[#0077b6]' : 'text-slate-500 group-hover:text-slate-800'
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span
                    className={`h-[2px] rounded-full transition-all duration-250 ${
                      isActive ? 'w-full bg-[#0077b6]' : 'w-0 group-hover:w-full bg-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* LƯỚI 3 BÀI VIẾT (Matching Image 1) */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm font-medium">
            Chưa có bài viết trong danh mục này.
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ${
              isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="flex flex-col group cursor-pointer"
              >
                {/* Ảnh bài viết */}
                <div className="w-full h-52 sm:h-60 rounded-3xl overflow-hidden shadow-md bg-slate-900 mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-450 group-hover:scale-103"
                  />
                </div>

                {/* Nội dung */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#00c2ff] uppercase tracking-wider block mb-2">
                      {article.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-black text-[#0d1d2f] leading-snug tracking-tight mb-2 group-hover:text-[#0077b6] group-hover:underline transition-all">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-[#00c2ff] group-hover:text-[#0077b6] inline-flex items-center gap-1.5 pt-1">
                    <span>Đọc bài viết</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
