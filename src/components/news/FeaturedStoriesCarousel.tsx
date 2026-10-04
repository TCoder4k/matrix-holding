import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stories: StoryItem[] = [
    {
      id: 'feat-1',
      num: '01',
      tabLabel: 'Kết nối nguồn lực',
      category: 'MATRIX HOLDING',
      title: 'Kết nối nguồn lực để cùng phát triển',
      excerpt: 'Khám phá những góc nhìn về kết nối và hợp tác trong hệ sinh thái Matrix.',
      image: '/images/matrix_team_meeting_1790857862728.jpg',
      date: '15/09/2026',
      author: 'Ban Chiến lược Doanh nghiệp · Matrix Holding',
      readTime: '5 phút đọc',
      content: [
        'Trong bối cảnh nền kinh tế số và môi trường kinh doanh chuyển dịch nhanh chóng, sự khác biệt lớn nhất giữa một doanh nghiệp tăng trưởng bứt phá và một doanh nghiệp chững lại nằm ở năng lực kết nối và phân bổ nguồn lực đúng thời điểm.',
        'Matrix Holding ra đời với định hướng là một hệ sinh thái hỗ trợ toàn diện. Thông qua cơ chế chia sẻ tài nguyên dùng chung, từ hạ tầng pháp lý, chuẩn mực quản trị đến công nghệ AI, các doanh nghiệp thành viên có thể rút ngắn đáng kể thời gian thử nghiệm và tối ưu chi phí vận hành.',
        'Mô hình liên minh đa chiều tạo điều kiện cho các doanh nghiệp vừa là đối tác cung cấp dịch vụ, vừa là khách hàng tin cậy của nhau, xây dựng chuỗi giá trị bền vững và gia tăng sức chống chịu trước mọi biến động thị trường.',
      ],
    },
    {
      id: 'feat-2',
      num: '02',
      tabLabel: 'Góc nhìn doanh nghiệp',
      category: 'MATRIX NETWORK',
      title: 'Chuẩn hóa quy trình vận hành và quản trị rủi ro',
      excerpt: 'Lắng nghe những chia sẻ thực tiễn về cách các nhà lãnh đạo tái cơ cấu nguồn vốn và bộ máy thực thi.',
      image: '/images/matrix_boardroom_skyline_1790822831335.jpg',
      date: '10/09/2026',
      author: 'Khối Tư vấn Tái cấu trúc · Matrix Network',
      readTime: '6 phút đọc',
      content: [
        'Một doanh nghiệp muốn vươn tầm quy mô lớn bắt buộc phải sở hữu hệ thống dữ liệu minh bạch và quy trình làm việc chuẩn mực.',
        'Khi bộ máy vận hành được tự động hóa và đồng bộ, ban điều hành sẽ có đủ không gian tư duy chiến lược để đón đầu các làn sóng đổi mới sáng tạo.',
      ],
    },
    {
      id: 'feat-3',
      num: '03',
      tabLabel: 'Câu chuyện cộng đồng',
      category: 'MATRIX CONNECT',
      title: 'Xây dựng mạng lưới liên minh đối tác cùng chia sẻ giá trị',
      excerpt: 'Từ những cuộc gặp gỡ đầu tiên đến các hợp đồng hợp tác chiến lược bền vững mang lại giá trị thực chất.',
      image: '/images/matrix_lounge_office_1790822492462.jpg',
      date: '05/09/2026',
      author: 'Ban Phát triển Quan hệ Đối tác · Matrix Connect',
      readTime: '4 phút đọc',
      content: [
        'Cộng đồng doanh nhân không chỉ đơn thuần là nơi trao đổi danh thiếp, mà là không gian để các ý tưởng lớn cộng hưởng và cùng giải quyết các bài toán hóc búa của thị trường.',
        'Hệ sinh thái Matrix Connect kết nối hơn 500 nhà sáng lập và chuyên gia, mở ra vô số cơ hội phân phối chéo sản phẩm và liên minh chiến lược.',
      ],
    },
  ];

  const current = stories[activeIndex];

  const handleSelectStory = (idx: number) => {
    if (idx === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsTransitioning(false);
    }, 280);
  };

  const handlePrev = () => {
    const nextIdx = activeIndex === 0 ? stories.length - 1 : activeIndex - 1;
    handleSelectStory(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === stories.length - 1 ? 0 : activeIndex + 1;
    handleSelectStory(nextIdx);
  };

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

  return (
    <section ref={containerRef} className="w-full pt-10 sm:pt-14 pb-12 sm:pb-16 bg-white select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION: MATRIX JOURNAL — / Những câu chuyện đáng chú ý. */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#00c2ff] font-bold text-xs sm:text-sm tracking-widest uppercase">
                MATRIX JOURNAL
              </span>
              <span className="w-8 h-[1.5px] bg-[#00c2ff]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0d1d2f] tracking-tight leading-tight">
              Những câu chuyện đáng chú ý<span className="text-[#00c2ff]">.</span>
            </h1>
          </div>

          <span className="hidden sm:inline-block text-xs text-slate-400 font-medium">
            Nội dung minh họa
          </span>
        </div>

        {/* HERO CARD CHÍNH: CHUYỂN BÀI NHƯ ĐỔI TRANG BÌA */}
        <div className="w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/90 shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] sm:min-h-[500px]">
          
          {/* CỘT TRÁI (40%): SỐ THỨ TỰ WATERMARK, NỘI DUNG VÀ LIÊN KẾT */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-white z-10">
            
            {/* Chữ số Watermark mờ khổng lồ */}
            <div className="relative">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-100 font-mono select-none block -mb-2 transition-all duration-300">
                {current.num}
              </span>

              {/* Danh mục */}
              <span className="text-xs sm:text-sm font-bold text-[#00c2ff] uppercase tracking-wider block mb-3">
                {current.category}
              </span>

              {/* Tiêu đề bài viết */}
              <h2
                className={`text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0d1d2f] leading-snug tracking-tight mb-4 transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                {current.title}
              </h2>

              {/* Tóm tắt */}
              <p
                className={`text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                {current.excerpt}
              </p>
            </div>

            {/* Nút Xem chi tiết → */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenArticle(current)}
                className="text-sm sm:text-base font-bold text-[#00c2ff] hover:text-[#0096c7] inline-flex items-center gap-2 group cursor-pointer"
              >
                <span className="border-b border-[#00c2ff] group-hover:border-[#0096c7] pb-0.5 transition-colors">
                  Xem chi tiết
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* CỘT PHẢI (60%): ẢNH BÌA LỚN VỚI HIỆU ỨNG PHÓNG NHẸ VÀ TRƯỢT VÀO KHUNG */}
          <div
            onClick={() => onOpenArticle(current)}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            className="lg:col-span-7 relative overflow-hidden bg-slate-900 cursor-pointer min-h-[300px] sm:min-h-[380px]"
          >
            <img
              src={current.image}
              alt={current.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isTransitioning ? 'opacity-30 scale-105' : 'opacity-100'
              } ${isHoveringImage ? 'scale-105' : 'scale-100'}`}
            />
            
            {/* Lớp phủ chuyển sắc nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Huy hiệu mở bài nhanh khi hover */}
            <div
              className={`absolute bottom-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#0d1d2f] font-bold text-xs shadow-lg transition-all duration-300 flex items-center gap-1.5 ${
                isHoveringImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span>Đọc toàn bộ</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00c2ff]" />
            </div>
          </div>

        </div>

        {/* THANH ĐIỀU HƯỚNG NỀN TỐI Ở ĐÁY: 3 TAB CÂU CHUYỆN & 2 NÚT MŨI TÊN */}
        <div className="w-full bg-[#071629] rounded-[22px] sm:rounded-[26px] mt-4 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Danh sách 3 Tab câu chuyện */}
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {stories.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelectStory(idx)}
                  className="flex flex-col items-start gap-1.5 group cursor-pointer focus:outline-none shrink-0"
                >
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {s.tabLabel}
                  </span>

                  {/* Thanh trượt cyan */}
                  <span
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* 2 Nút mũi tên chuyển bài tròn */}
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Câu chuyện trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#00c2ff] bg-[#00c2ff]/10 hover:bg-[#00c2ff] text-[#00c2ff] hover:text-[#071629] flex items-center justify-center transition-colors cursor-pointer shadow-md"
              aria-label="Câu chuyện tiếp theo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
