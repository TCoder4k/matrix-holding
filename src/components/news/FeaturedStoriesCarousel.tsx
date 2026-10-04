import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface StoryItem {
  id: string;
  num: string;
  tabLabel: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}

interface FeaturedStoriesCarouselProps {
  onOpenArticle: (article: StoryItem) => void;
}

export const FeaturedStoriesCarousel: React.FC<FeaturedStoriesCarouselProps> = ({ onOpenArticle }) => {
  const featuredStory: StoryItem = {
    id: 'feat-1',
    num: '01',
    tabLabel: 'Kết nối mạng lưới',
    category: 'MATRIX CONNECT',
    title: 'Xây dựng mạng lưới liên minh đối tác cùng chia sẻ giá trị',
    excerpt: 'Từ những cuộc gặp gỡ đầu tiên đến các hoạt động hợp tác chiến lược, bền vững mang lại giá trị thực chất.',
    image: '/images/matrix_networking_lounge_1790822870952.jpg',
    date: '15/09/2026',
    author: 'Ban Phát triển Quan hệ Đối tác · Matrix Connect',
    readTime: '5 phút đọc',
    content: [
      'Từ những cuộc gặp gỡ đầu tiên đến các hoạt động hợp tác chiến lược, bền vững mang lại giá trị thực chất.',
      'Cộng đồng doanh nhân không chỉ đơn thuần là nơi trao đổi danh thiếp, mà là không gian để các ý tưởng lớn cộng hưởng và cùng giải quyết các bài toán hóc búa của thị trường.',
      'Hệ sinh thái Matrix Connect kết nối hơn 500 nhà sáng lập và chuyên gia, mở ra vô số cơ hội phân phối chéo sản phẩm và liên minh chiến lược.',
    ],
  };

  return (
    <section className="w-full pt-10 sm:pt-14 pb-12 sm:pb-16 bg-white select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE: Tin nổi bật */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight inline-block relative pb-2">
            Tin nổi bật
            <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#00c2ff] rounded-full" />
          </h2>
        </div>

        {/* FEATURED CARD (Image Left, Text Right - Matching Image 1) */}
        <div
          onClick={() => onOpenArticle(featuredStory)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer group"
        >
          {/* CỘT TRÁI: ẢNH LỚN */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl bg-slate-900 relative h-[320px] sm:h-[420px]">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* CỘT PHẢI: NỘI DUNG */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold text-[#00c2ff] uppercase tracking-wider block mb-3">
              {featuredStory.category}
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d1d2f] leading-snug tracking-tight mb-4 group-hover:text-[#0077b6] transition-colors">
              {featuredStory.title}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {featuredStory.excerpt}
            </p>

            <div className="text-sm sm:text-base font-bold text-[#00c2ff] group-hover:text-[#0077b6] inline-flex items-center gap-2 transition-colors">
              <span>Đọc bài viết</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
