import React, { useState } from 'react';

interface WorkflowStep {
  num: string;
  name: string;
  desc: string;
  image: string;
}

export const WorkflowRoadmapSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1); // Mặc định bước 02: Đề xuất nổi bật như ảnh mẫu

  const steps: WorkflowStep[] = [
    {
      num: '01',
      name: 'Lắng nghe',
      desc: 'Tìm hiểu nhu cầu, mục tiêu và bối cảnh riêng của từng khách hàng.',
      image: '/images/matrix_skyscraper_glass_1790826612996.jpg',
    },
    {
      num: '02',
      name: 'Đề xuất',
      desc: 'Cùng xác định hướng hợp tác phù hợp và tối ưu nguồn lực.',
      image: '/images/matrix_night_lobby_1790830296234.jpg',
    },
    {
      num: '03',
      name: 'Triển khai',
      desc: 'Phối hợp chặt chẽ để hiện thực hóa kế hoạch một cách hiệu quả.',
      image: '/images/matrix_curved_facade_1790829793623.jpg',
    },
    {
      num: '04',
      name: 'Đồng hành',
      desc: 'Luôn sát cánh trong suốt hành trình, sẵn sàng thích ứng và mở rộng cơ hội cùng nhau.',
      image: '/images/matrix_towers_financial_1790822854522.jpg',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
            <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
              QUY TRÌNH LÀM VIỆC
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-4">
            Từ trao đổi đến đồng hành.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi tin rằng những giá trị bền vững luôn bắt đầu từ sự thấu hiểu. Quy trình làm việc được thiết kế tinh gọn, minh bạch và linh hoạt, để cùng khách hàng kiến tạo những cơ hội phù hợp và dài hạn.
          </p>
        </div>

        {/* 4 BƯỚC QUY TRÌNH CÓ ĐƯỜNG DẪN CYAN UỐN LƯỢN XUYÊN SUỐT */}
        <div className="relative">
          
          {/* Đường dẫn cyan uốn lượn xuyên suốt 4 bước */}
          <div className="absolute top-[48%] left-0 right-0 pointer-events-none z-20 hidden md:block">
            <svg className="w-full h-12" viewBox="0 0 1200 48" fill="none">
              <path
                d="M 50 24 C 200 40, 400 10, 600 24 C 800 38, 1000 10, 1180 24"
                stroke="#00c2ff"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.8"
              />
              <circle cx="200" cy="28" r="4.5" fill="#00c2ff" />
              <circle cx="500" cy="18" r="5" fill="#f59e0b" filter="drop-shadow(0 0 6px #f59e0b)" />
              <circle cx="800" cy="30" r="4.5" fill="#00c2ff" />
              <circle cx="1100" cy="18" r="4.5" fill="#00c2ff" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#071629] text-white shadow-2xl ring-2 ring-[#00c2ff] scale-102'
                      : 'bg-slate-50 text-[#0d1d2f] border border-slate-200/80 hover:bg-slate-100/80'
                  }`}
                >
                  {/* Phần trên: Số thứ tự, Tên bước & Mô tả */}
                  <div className="p-6">
                    <span
                      className={`text-3xl sm:text-4xl font-light font-serif block mb-2 transition-colors ${
                        isActive ? 'text-[#f59e0b] font-bold' : 'text-slate-300'
                      }`}
                    >
                      {step.num}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                      {step.name}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isActive ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Phần dưới: Ảnh minh họa phong cảnh uốn lượn */}
                  <div className="h-32 sm:h-36 w-full overflow-hidden relative mt-4">
                    <img
                      src={step.image}
                      alt={step.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isActive
                          ? 'bg-gradient-to-t from-[#071629] via-transparent to-[#071629]/40'
                          : 'bg-gradient-to-t from-slate-200/40 via-transparent to-transparent'
                      }`}
                    />
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
