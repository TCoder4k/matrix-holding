import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  iconSymbol: string;
}

export const StrategicPartnersSection: React.FC = () => {
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(2); // Mặc định Đối tác 03 ở giữa
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const partners: PartnerItem[] = [
    {
      id: 'p1',
      name: 'Đối tác 01',
      category: 'Tài chính & Ngân hàng',
      title: 'Tối ưu dòng vốn & Quản trị rủi ro thanh khoản.',
      description: 'Hợp tác cùng các định chế tài chính uy tín nhằm cung cấp giải pháp tín dụng doanh nghiệp và bảo lãnh nguồn vốn dài hạn.',
      iconSymbol: 'A',
    },
    {
      id: 'p2',
      name: 'Đối tác 02',
      category: 'Chuỗi cung ứng Bán lẻ',
      title: 'Phát triển mạng lưới phân phối đa kênh.',
      description: 'Đồng hành phát triển chuỗi bán lẻ hiện đại, tối ưu hóa chi phí logistics và gia tăng tốc độ thâm nhập thị trường.',
      iconSymbol: 'M',
    },
    {
      id: 'p3',
      name: 'Đối tác 03',
      category: 'Hạ tầng Công nghệ AI',
      title: 'Kết nối chuyên môn. Đồng hành phát triển.',
      description: 'Cùng chia sẻ tầm nhìn, chúng tôi tạo nên những giá trị thiết thực, bền vững và mở ra nhiều cơ hội mới cho tương lai.',
      iconSymbol: 'C',
    },
    {
      id: 'p4',
      name: 'Đối tác 04',
      category: 'Vận hành & Pháp chế',
      title: 'Chuẩn hóa quy trình quản trị chuẩn quốc tế.',
      description: 'Kiện toàn hệ thống pháp trị, kiểm toán độc lập và bảo hộ sở hữu trí tuệ cho các doanh nghiệp thành viên.',
      iconSymbol: 'O',
    },
    {
      id: 'p5',
      name: 'Đối tác 05',
      category: 'Đào tạo & Nhân lực',
      title: 'Phát triển nguồn nhân lực chất lượng cao.',
      description: 'Cung cấp các chương trình huấn luyện lãnh đạo, tư vấn chiến lược nhân tài và văn hóa doanh nghiệp đổi mới sáng tạo.',
      iconSymbol: 'X',
    },
  ];

  const currentPartner = partners[selectedPartnerIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 sm:py-24 bg-white relative overflow-hidden select-none border-t border-slate-100"
    >
      {/* Nền phong cảnh kiến trúc hiện đại và mái vòm uốn cong chân trời */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <img
          src="/images/matrix_curved_facade_1790829793623.jpg"
          alt="Modern Architectural Balcony"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/95" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
            <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
              ĐỐI TÁC CHIẾN LƯỢC
            </span>
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-4">
            Cùng nhau mở rộng <span className="text-[#009fe3]">khả năng.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi hợp tác cùng những đối tác có chung tầm nhìn, kết hợp thế mạnh để tạo nên những giá trị bền vững và mở ra nhiều cơ hội mới.
          </p>
        </div>

        {/* DẢI KẾT NỐI VÒNG CUNG CHỨA CÁC ĐỐI TÁC VÀ CARD TRUNG TÂM */}
        <div className="relative py-8 sm:py-12">
          
          {/* Đường cong uốn lượn SVG nối các logo */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 1200 360" fill="none">
              <path
                d="M 50 180 C 250 140, 400 240, 600 210 C 800 180, 950 240, 1150 180"
                stroke="#00c2ff"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.6"
                style={{
                  strokeDashoffset: isIntersecting ? 0 : 600,
                  transition: 'stroke-dashoffset 1.5s ease-out',
                }}
              />
            </svg>
          </div>

          {/* LƯỚI LOGO ĐỐI TÁC VÀ CARD NỔI BẬT Ở TÂM GIỮA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            
            {/* Đối tác 01 & 02 (Bên trái) */}
            <div className="flex items-center gap-6 sm:gap-8 order-2 md:order-1">
              {[0, 1].map((idx) => {
                const p = partners[idx];
                const isSelected = selectedPartnerIndex === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPartnerIndex(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none transition-transform hover:scale-110"
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-[#061527] text-white ring-4 ring-sky-300'
                          : 'bg-white text-[#061527] border border-slate-200 hover:border-[#00c2ff]'
                      }`}
                    >
                      <span className="font-black text-xl sm:text-2xl font-mono">{p.iconSymbol}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 group-hover:text-[#009fe3] transition-colors">
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CARD TRUNG TÂM NỔI BẬT: ĐỐI TÁC ĐANG CHỌN (Hình oval tối sang trọng như ảnh mẫu) */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[36px] bg-[#071629] text-white p-7 sm:p-9 shadow-2xl border border-slate-700/80 flex flex-col items-center text-center relative z-20 order-1 md:order-2 transition-all duration-500">
              {/* Logo / Biểu tượng đối tác mạ vàng kim */}
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-500/10">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
                </svg>
              </div>

              {/* Tên đối tác */}
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                {currentPartner.name}
              </span>

              {/* Tiêu đề hợp tác */}
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight mb-3">
                {currentPartner.title}
              </h3>

              {/* Mô tả chi tiết */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {currentPartner.description}
              </p>

              {/* Nút hành động tròn */}
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-amber-500/70 hover:bg-amber-500 text-amber-400 hover:text-[#071629] flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Xem chi tiết đối tác"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Đối tác 04 & 05 (Bên phải) */}
            <div className="flex items-center gap-6 sm:gap-8 order-3">
              {[3, 4].map((idx) => {
                const p = partners[idx];
                const isSelected = selectedPartnerIndex === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPartnerIndex(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none transition-transform hover:scale-110"
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-[#061527] text-white ring-4 ring-sky-300'
                          : 'bg-white text-[#061527] border border-slate-200 hover:border-[#00c2ff]'
                      }`}
                    >
                      <span className="font-black text-xl sm:text-2xl font-mono">{p.iconSymbol}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 group-hover:text-[#009fe3] transition-colors">
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
