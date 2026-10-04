import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { StoryItem } from './FeaturedStoriesCarousel';

interface DiscoverMoreNewsListProps {
  onOpenArticle: (article: StoryItem) => void;
}

export const DiscoverMoreNewsList: React.FC<DiscoverMoreNewsListProps> = ({ onOpenArticle }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(1); // Mặc định bài 02: Chia sẻ góc nhìn về phát triển bền vững (như ảnh 1)
  const [visibleCount, setVisibleCount] = useState(4);
  const [isTransitioningImage, setIsTransitioningImage] = useState(false);

  const listItems: StoryItem[] = [
    {
      id: 'disc-1',
      num: '01',
      tabLabel: 'Kết nối doanh nghiệp',
      category: 'KẾT NỐI',
      title: 'Kết nối doanh nghiệp từ những cuộc gặp',
      excerpt: 'Mỗi cuộc đối thoại chất lượng mở ra cơ hội thiết lập liên minh và chia sẻ mạng lưới khách hàng.',
      image: '/images/matrix_networking_lounge_1790822870952.jpg',
      date: '02/09/2026',
      author: 'Ban Phát triển Kinh doanh · Matrix Connect',
      readTime: '4 phút đọc',
      content: [
        'Tại Matrix Holding, chúng tôi tin rằng giá trị lớn nhất của những cuộc gặp gỡ nằm ở sự tin cậy được thiết lập giữa các nhà lãnh đạo.',
        'Khi sự thấu hiểu được đặt lên hàng đầu, các thương vụ hợp tác sẽ diễn ra tự nhiên, thực chất và bền vững lâu dài.',
      ],
    },
    {
      id: 'disc-2',
      num: '02',
      tabLabel: 'Góc nhìn phát triển',
      category: 'GÓC NHÌN',
      title: 'Chia sẻ góc nhìn về phát triển bền vững',
      excerpt: 'Những trao đổi đa chiều về cách doanh nghiệp có thể tạo giá trị lâu dài thông qua tăng trưởng hài hòa với con người và môi trường.',
      image: '/images/matrix_curved_facade_1790829793623.jpg',
      date: '28/08/2026',
      author: 'Ban Nghiên cứu Chiến lược · Matrix Holding',
      readTime: '5 phút đọc',
      content: [
        'Tăng trưởng bền vững không chỉ là mục tiêu xa vời mà là chiến lược sống còn của mọi tổ chức trong kỷ nguyên mới.',
        'Áp dụng các tiêu chuẩn ESG và đầu tư vào phúc lợi của người lao động chính là đòn bẩy vững chắc để doanh nghiệp duy trì lợi thế cạnh tranh dài hạn.',
      ],
    },
    {
      id: 'disc-3',
      num: '03',
      tabLabel: 'Vai trò cộng đồng',
      category: 'CỘNG ĐỒNG',
      title: 'Vai trò của cộng đồng trong hợp tác',
      excerpt: 'Sức mạnh tập thể tạo nên sự lan tỏa mạnh mẽ và bệ phóng vững chắc cho các sáng kiến kinh doanh đột phá.',
      image: '/images/news_team_workshop_1790828163347.jpg',
      date: '22/08/2026',
      author: 'Khối Quan hệ Đối ngoại · Matrix Community',
      readTime: '4 phút đọc',
      content: [
        'Một cộng đồng doanh nghiệp gắn kết sẽ tạo ra sức mạnh cộng hưởng to lớn, giúp các đơn vị thành viên vượt qua các giai đoạn biến động của nền kinh tế.',
        'Matrix Community liên tục mở rộng các chương trình kết nối thực chất, tạo điều kiện cho các doanh nghiệp học hỏi và chia sẻ kinh nghiệm quản trị.',
      ],
    },
    {
      id: 'disc-4',
      num: '04',
      tabLabel: 'Năng lực hệ sinh thái',
      category: 'HỆ SINH THÁI',
      title: 'Khám phá năng lực trong hệ sinh thái',
      excerpt: 'Tìm hiểu cách các mắt xích trong Matrix Holding bổ trợ lẫn nhau để tạo nên hệ thống giải pháp khép kín.',
      image: '/images/matrix_skyscraper_glass_1790826612996.jpg',
      date: '18/08/2026',
      author: 'Văn phòng Điều phối · Matrix Holding',
      readTime: '6 phút đọc',
      content: [
        'Sự kết hợp đồng bộ giữa Matrix Network, Matrix Connect, Matrix Ventures và Matrix Academy mang lại giải pháp toàn diện cho doanh nghiệp từ lúc khởi sự đến khi mở rộng quy mô lớn.',
      ],
    },
    {
      id: 'disc-5',
      num: '05',
      tabLabel: 'Chuyển đổi số & AI',
      category: 'CÔNG NGHỆ',
      title: 'Ứng dụng AI Agent vào tự động hóa quản trị',
      excerpt: 'Cách công nghệ mới giúp các doanh nghiệp tối ưu hóa quy trình ra quyết định và tiết kiệm 40% chi phí vận hành.',
      image: '/images/matrix_boardroom_skyline_1790822831335.jpg',
      date: '12/08/2026',
      author: 'Trung tâm Công nghệ · Matrix Network',
      readTime: '5 phút đọc',
      content: [
        'Trí tuệ nhân tạo không thay thế con người, nhưng những doanh nghiệp ứng dụng AI sớm sẽ bứt phá vượt bậc so với đối thủ cạnh tranh.',
      ],
    },
    {
      id: 'disc-6',
      num: '06',
      tabLabel: 'Chiến lược tài chính',
      category: 'TÀI CHÍNH',
      title: 'Tái cơ cấu dòng tiền trong giai đoạn tăng trưởng nóng',
      excerpt: 'Lời khuyên từ các chuyên gia tài chính về việc quản trị thanh khoản và đòn bẩy nợ hợp lý.',
      image: '/images/news_financial_audit_1790828142642.jpg',
      date: '05/08/2026',
      author: 'Hội đồng Tài chính · Matrix Ventures',
      readTime: '6 phút đọc',
      content: [
        'Kiểm soát dòng tiền chặt chẽ là chìa khóa giúp doanh nghiệp giữ vững sự chủ động tài chính trước mọi cơ hội thâu tóm và mở rộng.',
      ],
    },
  ];

  const handleHoverRow = (index: number) => {
    if (index === activeItemIndex) return;
    setIsTransitioningImage(true);
    setActiveItemIndex(index);
    setTimeout(() => {
      setIsTransitioningImage(false);
    }, 250);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, listItems.length));
  };

  const currentPreview = listItems[activeItemIndex] || listItems[0];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold text-[#00c2ff] uppercase tracking-wider block mb-2">
              TIN TỨC KHÁC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight">
              Tiếp tục khám phá<span className="text-[#00c2ff]">.</span>
            </h2>
          </div>

          <span className="hidden sm:inline-block text-xs text-slate-400 font-medium">
            Nội dung minh họa
          </span>
        </div>

        {/* BỐ CỤC 2 CỘT: CỘT TRÁI DANH SÁCH BÀI / CỘT PHẢI ẢNH XEM TRƯỚC STICKY (Khớp ảnh 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* CỘT TRÁI (7 CỘT): DANH SÁCH BÀI VIẾT NẰM NGANG */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Lưới các dòng bài viết */}
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {listItems.slice(0, visibleCount).map((item, idx) => {
                const isActive = activeItemIndex === idx;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleHoverRow(idx)}
                    onClick={() => onOpenArticle(item)}
                    className={`py-6 px-4 sm:px-6 transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#f0f9ff]/90 border-l-4 border-[#00c2ff]'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Cột số thứ tự + Danh mục & Tiêu đề */}
                    <div className="flex items-center gap-4 sm:gap-8 flex-1 pr-4">
                      {/* Số thứ tự */}
                      <span
                        className={`text-xl sm:text-2xl font-light font-serif tracking-tight transition-colors ${
                          isActive ? 'text-[#00c2ff] font-bold' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        {item.num}
                      </span>

                      {/* Danh mục & Tiêu đề */}
                      <div className="flex-1">
                        <span
                          className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider block mb-1 transition-colors ${
                            isActive ? 'text-[#00c2ff]' : 'text-slate-400'
                          }`}
                        >
                          {item.category}
                        </span>

                        <h3
                          className={`text-base sm:text-lg font-black tracking-tight leading-snug transition-colors ${
                            isActive ? 'text-[#00c2ff]' : 'text-[#0d1d2f] group-hover:text-[#00c2ff]'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Nút Xem chi tiết → */}
                    <div
                      className={`text-xs font-bold flex items-center gap-1 shrink-0 transition-colors ${
                        isActive ? 'text-[#00c2ff]' : 'text-slate-400 group-hover:text-[#00c2ff]'
                      }`}
                    >
                      <span className="hidden sm:inline-block">Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nút Xem thêm bài viết → (Bo tròn pill chuẩn ảnh) */}
            {visibleCount < listItems.length && (
              <div className="pt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleShowMore}
                  className="px-8 py-3 rounded-full border border-slate-700 hover:border-[#00c2ff] hover:bg-[#00c2ff]/5 text-[#0d1d2f] hover:text-[#00c2ff] font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Xem thêm bài viết</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* CỘT PHẢI (5 CỘT): VÙNG ẢNH XEM TRƯỚC STICKY & TÓM TẮT BÀI ĐANG CHỌN */}
          <div className="lg:col-span-5 sticky top-28 flex flex-col">
            
            {/* Khung ảnh preview */}
            <div
              onClick={() => onOpenArticle(currentPreview)}
              className="relative w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl bg-slate-900 mb-5 cursor-pointer group"
            >
              <img
                src={currentPreview.image}
                alt={currentPreview.title}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  isTransitioningImage ? 'opacity-40 scale-102' : 'opacity-100 scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thông tin bài đang xem trước */}
            <div className="px-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#00c2ff] uppercase tracking-wider">
                  {currentPreview.category}
                </span>

                <span className="text-[11px] text-slate-400 font-medium">
                  Ảnh xem trước
                </span>
              </div>

              <h4
                onClick={() => onOpenArticle(currentPreview)}
                className="text-xl sm:text-2xl font-black text-[#0d1d2f] leading-snug tracking-tight mb-2 hover:text-[#00c2ff] transition-colors cursor-pointer"
              >
                {currentPreview.title}
              </h4>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {currentPreview.excerpt}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
