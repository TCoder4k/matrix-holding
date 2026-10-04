import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ChairmanDeclarationSectionProps {
  onContactClick?: () => void;
}

export const ChairmanDeclarationSection: React.FC<ChairmanDeclarationSectionProps> = ({ onContactClick }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: DẤU NGOẶC KÉP, TUYÊN NGÔN & CTA KẾT TRANG */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                TUYÊN NGÔN CỦA CHỦ TỊCH
              </span>
            </div>

            {/* Dấu ngoặc kép cyan khổng lồ */}
            <div className="text-[#009fe3] font-serif text-7xl sm:text-8xl leading-none select-none font-black -mb-4">
              “
            </div>

            {/* Lời tuyên ngôn đắt giá */}
            <blockquote className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] leading-[1.18] tracking-tight mb-6">
              Giá trị lâu dài bắt đầu từ những kết nối có trách nhiệm.
            </blockquote>

            {/* Chữ ký & Chức danh */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-[1.5px] bg-[#d97706]" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Thông điệp từ Chủ tịch Matrix Holding
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0d1d2f] tracking-tight">
                Ông Hồ Anh Tuấn
              </h4>
            </div>

            {/* Khối CTA kết trang: Cùng viết tiếp hành trình */}
            <div className="pt-6 border-t border-slate-100">
              <span className="font-bold text-base sm:text-lg text-[#0d1d2f] block mb-3">
                Cùng viết tiếp hành trình
              </span>

              <button
                type="button"
                onClick={onContactClick}
                className="px-8 py-3.5 rounded-full bg-[#071629] hover:bg-[#009fe3] text-white font-bold text-sm inline-flex items-center gap-2.5 transition-colors cursor-pointer shadow-md"
              >
                <span>Liên hệ chúng tôi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* CỘT PHẢI: CHÂN DUNG CHỦ TỊCH BÊN KHUNG VÒM KIẾN TRÚC */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[500px] h-[440px] sm:h-[520px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-100">
              {/* Ảnh chân dung Chủ tịch Hồ Anh Tuấn */}
              <img
                src="/images/chairman_ho_anh_tuan_1790825054856.jpg"
                alt="Chủ tịch Matrix Holding Hồ Anh Tuấn"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              
              {/* Lớp bóng mờ tinh tế */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
