import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface MilestoneItem {
  id: string;
  year: string;
  stageName: string;
  subtitle: string;
  description: string;
  image1: string;
  image2: string;
}

export const HistoricalTimelineSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const milestones: MilestoneItem[] = [
    {
      id: 'm1',
      year: '2023',
      stageName: 'Khởi đầu',
      subtitle: 'Bắt đầu hành trình kiến tạo.',
      description: 'Chính thức thành lập Matrix Holding, quy tụ đội ngũ sáng lập dày dạn kinh nghiệm và định hình mô hình quản trị đầu tư thế hệ mới.',
      image1: '/src/assets/images/matrix_executive_office_1790857252584.jpg',
      image2: '/src/assets/images/matrix_villa_architecture_1790822760970.jpg',
    },
    {
      id: 'm2',
      year: '2024',
      stageName: 'Mở rộng',
      subtitle: 'Xây dựng mạng lưới liên minh.',
      description: 'Mở rộng hệ sinh thái lên 8 đơn vị thành viên, ra mắt quỹ Matrix Ventures và hoàn tất các thương vụ đầu tư chiến lược đầu tiên.',
      image1: '/src/assets/images/matrix_lounge_office_1790822492462.jpg',
      image2: '/src/assets/images/matrix_boardroom_skyline_1790822831335.jpg',
    },
    {
      id: 'm3',
      year: '2026',
      stageName: 'Kết nối',
      subtitle: 'Đồng hành vươn tầm quốc tế.',
      description: 'Phục vụ hơn 500 doanh nghiệp đối tác tại 3 miền, ứng dụng AI Agent vào toàn bộ hệ sinh thái và thiết lập quan hệ với các quỹ quốc tế.',
      image1: '/src/assets/images/matrix_towers_financial_1790822854522.jpg',
      image2: '/src/assets/images/matrix_curved_facade_1790829793623.jpg',
    },
  ];

  const current = milestones[activeStageIndex];

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER VÀ TRIỂN LÃM ẢNH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* CỘT TRÁI: TIÊU ĐỀ & ĐIỀU HƯỚNG */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
                LỊCH SỬ HÌNH THÀNH
              </span>
            </div>

            {/* Tiêu đề */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-[#0d1d2f] mb-6">
              Mỗi bước đi.<br />
              <span className="text-[#0d1d2f]">Một dấu ấn.</span>
            </h2>

            {/* Tên giai đoạn đang chọn */}
            <div className="mb-4">
              <span className="text-xs font-bold text-[#009fe3] uppercase tracking-wider block mb-1">
                NĂM {current.year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight">
                {current.stageName}
              </h3>
              <p className="text-slate-500 text-sm font-semibold mt-1">
                {current.subtitle}
              </p>
            </div>

            {/* Mô tả */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              {current.description}
            </p>

            {/* Nút mũi tên chuyển mốc */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#061527] text-white hover:bg-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Mốc trước"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#009fe3] text-slate-700 hover:text-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Mốc tiếp theo"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* CỘT PHẢI: 2 KHUNG ẢNH NẰM NGANG DẠNG TRIỂN LÃM */}
          <div className="lg:col-span-7 flex items-center gap-4 sm:gap-6 overflow-hidden">
            {/* Ảnh lớn chính */}
            <div className="flex-1 h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src={current.image1}
                alt={current.stageName}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Ảnh phụ cạnh bên */}
            <div className="w-1/3 h-[280px] sm:h-[340px] rounded-3xl overflow-hidden shadow-md border border-slate-100 hidden sm:block">
              <img
                src={current.image2}
                alt={current.subtitle}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* THANH TIẾN TRÌNH THỜI GIAN Ở ĐÁY: KHỞI ĐẦU — MỞ RỘNG — KẾT NỐI */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400">
          {milestones.map((m, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <div
                key={m.id}
                onClick={() => setActiveStageIndex(idx)}
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? 'bg-[#061527] ring-4 ring-slate-200' : 'bg-slate-300 group-hover:bg-slate-400'
                  }`}
                />
                <span
                  className={`transition-colors ${
                    isActive ? 'text-[#061527] font-bold' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {m.stageName}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
