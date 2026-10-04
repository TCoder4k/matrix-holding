import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { StoryItem } from './FeaturedStoriesCarousel';

interface DiscoverMoreNewsListProps {
  onOpenArticle: (article: StoryItem) => void;
}

export const DiscoverMoreNewsList: React.FC<DiscoverMoreNewsListProps> = ({ onOpenArticle }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const listItems: StoryItem[] = [
    {
      id: 'disc-1',
      num: '01',
      tabLabel: 'Kết nối doanh nghiệp',
      category: 'MATRIX HOLDING',
      title: 'Kết nối doanh nghiệp từ những cuộc gặp',
      excerpt: 'Mỗi cuộc đối thoại chất lượng mở ra cơ hội thiết lập liên minh và chia sẻ mạng lưới khách hàng.',
      image: '/images/matrix_networking_lounge_1790822870952.jpg',
      date: '02/09/2026',
      author: 'Ban Phát triển Kinh doanh · Matrix Connect',
      readTime: '4 phút đọc',
      content: [
        'Tại Matrix Holding, chúng tôi tin rằng giá trị lớn nhất của những cuộc gặp gỡ nằm ở sự tin cậy được thiết lập giữa các nhà lãnh đạo.',
      ],
    },
    {
      id: 'disc-2',
      num: '02',
      tabLabel: 'Góc nhìn phát triển',
      category: 'MATRIX CONNECT',
      title: 'Chia sẻ góc nhìn về phát triển bền vững',
      excerpt: 'Những trao đổi đa chiều về cách doanh nghiệp có thể tạo giá trị lâu dài thông qua tăng trưởng hài hòa với con người và môi trường.',
      image: '/images/matrix_curved_facade_1790829793623.jpg',
      date: '28/08/2026',
      author: 'Ban Nghiên cứu Chiến lược · Matrix Holding',
      readTime: '5 phút đọc',
      content: [
        'Tăng trưởng bền vững không chỉ là mục tiêu xa vời mà là chiến lược sống còn của mọi tổ chức trong kỷ nguyên mới.',
      ],
    },
    {
      id: 'disc-3',
      num: '03',
      tabLabel: 'Vai trò cộng đồng',
      category: 'MATRIX NETWORK',
      title: 'Vai trò của cộng đồng trong hợp tác',
      excerpt: 'Sức mạnh tập thể tạo nên sự lan tỏa mạnh mẽ và bệ phóng vững chắc cho các sáng kiến kinh doanh đột phá.',
      image: '/images/news_team_workshop_1790828163347.jpg',
      date: '22/08/2026',
      author: 'Khối Quan hệ Đối ngoại · Matrix Community',
      readTime: '4 phút đọc',
      content: [
        'Một cộng đồng doanh nghiệp gắn kết sẽ tạo ra sức mạnh cộng hưởng to lớn.',
      ],
    },
    {
      id: 'disc-4',
      num: '04',
      tabLabel: 'Năng lực hệ sinh thái',
      category: 'MATRIX VENTURES',
      title: 'Khám phá năng lực trong hệ sinh thái',
      excerpt: 'Tìm hiểu cách các mắt xích trong Matrix Holding bổ trợ lẫn nhau để tạo nên hệ thống giải pháp khép kín.',
      image: '/images/matrix_skyscraper_glass_1790826612996.jpg',
      date: '18/08/2026',
      author: 'Văn phòng Điều phối · Matrix Holding',
      readTime: '6 phút đọc',
      content: [
        'Sự kết hợp đồng bộ giữa các đơn vị thành viên mang lại giải pháp toàn diện cho doanh nghiệp.',
      ],
    },
    {
      id: 'disc-5',
      num: '05',
      tabLabel: 'Chuyển đổi số & AI',
      category: 'MATRIX NETWORK',
      title: 'Ứng dụng AI Agent vào tự động hóa quản trị',
      excerpt: 'Cách công nghệ mới giúp các doanh nghiệp tối ưu hóa quy trình ra quyết định và tiết kiệm chi phí vận hành.',
      image: '/images/matrix_boardroom_skyline_1790822831335.jpg',
      date: '12/08/2026',
      author: 'Trung tâm Công nghệ · Matrix Network',
      readTime: '5 phút đọc',
      content: [
        'Trí tuệ nhân tạo không thay thế con người, nhưng những doanh nghiệp ứng dụng AI sớm sẽ bứt phá.',
      ],
    },
  ];

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 2, listItems.length));
      setIsLoading(false);
    }, 400);
  };

  return (
    <section className="w-full py-14 sm:py-18 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE: Tiếp tục khám phá */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight inline-block relative pb-2">
            Tiếp tục khám phá
            <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#00c2ff] rounded-full" />
          </h2>
        </div>

        {/* DANH SÁCH DÒNG (Matching Image 1) */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200 mb-10">
          {listItems.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenArticle(item)}
              className="py-5 px-2 sm:px-4 transition-colors duration-200 cursor-pointer flex items-center justify-between group hover:bg-[#ECFAFF]"
            >
              <div className="flex items-center gap-6 sm:gap-12 flex-1 pr-4">
                <span className="text-xs font-bold text-[#00c2ff] uppercase tracking-wider w-36 sm:w-44 shrink-0">
                  {item.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#0d1d2f] tracking-tight group-hover:text-[#0077b6] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="text-[#00c2ff] shrink-0 transition-transform duration-200 group-hover:translate-x-1.5">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* NÚT XEM THÊM BÀI VIẾT */}
        {visibleCount < listItems.length && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleShowMore}
              disabled={isLoading}
              className="px-8 py-3.5 rounded-full border border-slate-300 hover:border-[#00c2ff] bg-white hover:bg-[#071629] text-[#0d1d2f] hover:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-60"
            >
              <span>{isLoading ? 'Đang tải...' : 'Xem thêm bài viết'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
