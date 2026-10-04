import React, { useState, useEffect, useRef } from 'react';

export const MissionBridgeSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [bridgeAssembled, setBridgeAssembled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      num: '01',
      title: 'Kết nối',
      desc: 'Mở rộng những điểm chạm giữa con người, nguồn lực và cơ hội, kiến tạo nền tảng cho những giá trị lớn hơn.',
    },
    {
      num: '02',
      title: 'Đồng hành',
      desc: 'Lắng nghe, thấu hiểu và cùng nhau vượt qua thách thức, tạo nên sức mạnh từ sự tin tưởng và hợp tác lâu dài.',
    },
    {
      num: '03',
      title: 'Phát triển',
      desc: 'Không ngừng đổi mới, mở ra những cơ hội mới và kiến tạo giá trị bền vững cho tương lai.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          const timer = setTimeout(() => {
            setBridgeAssembled(true);
          }, 600);
          return () => clearTimeout(timer);
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
    <section
      ref={containerRef}
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER VÀ MINH HỌA CÂY CẦU KẾT NỐI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* CỘT TRÁI: TIÊU ĐỀ SỨ MỆNH */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
                SỨ MỆNH DOANH NGHIỆP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-4">
              Kết nối để <br />
              <span className="text-[#009fe3]">cùng tiến xa.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Chúng tôi tin rằng những giá trị bền vững được kiến tạo khi con người, nguồn lực và cơ hội được kết nối đúng cách, cùng đồng hành và không ngừng phát triển.
            </p>
          </div>

          {/* CỘT PHẢI: MINH HỌA 3D NHỮNG MẢNH CẦU KẾT NỐI */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[260px] sm:min-h-[320px]">
            <div className="relative w-full max-w-[500px] h-[260px] sm:h-[300px] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800 flex items-center justify-center">
              
              {/* Ảnh nền núi non mây mù & hồ nước */}
              <img
                src="/images/matrix_skyscraper_glass_1790826612996.jpg"
                alt="Bridge Landscape"
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-[#061527]/70 to-[#061527]/80" />

              {/* CÂY CẦU NỐI 3D BẰNG SVG & PHA LÊ */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <svg viewBox="0 0 460 220" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="bridge-pillar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0369a1" />
                      <stop offset="100%" stopColor="#075985" />
                    </linearGradient>
                    <linearGradient id="bridge-gold-core" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                  </defs>

                  {/* Trụ cầu trái */}
                  <rect x="30" y="70" width="70" height="130" rx="6" fill="url(#bridge-pillar)" />
                  <rect x="75" y="55" width="25" height="145" rx="4" fill="#0284c7" opacity="0.6" />

                  {/* Mảnh cầu 1 (Kết nối) */}
                  <g
                    className="transition-transform duration-700 ease-out"
                    style={{
                      transform: isIntersecting ? 'translate(0, 0)' : 'translate(-30px, -20px)',
                      opacity: isIntersecting ? 1 : 0.4,
                    }}
                  >
                    <polygon points="105,95 160,85 160,115 105,125" fill="#38bdf8" opacity={activeStep === 0 ? 1 : 0.75} />
                    <line x1="105" y1="95" x2="160" y2="85" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Mảnh cầu 2 (Đồng hành - Vàng kim ở trung tâm) */}
                  <g
                    className="transition-transform duration-700 ease-out"
                    style={{
                      transform: bridgeAssembled ? 'translate(0, 0)' : 'translate(0, -35px)',
                      opacity: bridgeAssembled ? 1 : 0.3,
                    }}
                  >
                    <polygon points="165,85 240,75 240,105 165,115" fill="url(#bridge-gold-core)" />
                    <line x1="165" y1="85" x2="240" y2="75" stroke="#fef08a" strokeWidth="2" filter="drop-shadow(0 0 6px #f59e0b)" />
                  </g>

                  {/* Mảnh cầu 3 (Phát triển) */}
                  <g
                    className="transition-transform duration-700 ease-out"
                    style={{
                      transform: isIntersecting ? 'translate(0, 0)' : 'translate(30px, -20px)',
                      opacity: isIntersecting ? 1 : 0.4,
                    }}
                  >
                    <polygon points="245,75 300,65 300,95 245,105" fill="#00c2ff" opacity={activeStep === 2 ? 1 : 0.75} />
                    <line x1="245" y1="75" x2="300" y2="65" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Trụ cầu phải */}
                  <rect x="305" y="45" width="70" height="155" rx="6" fill="url(#bridge-pillar)" />
                  <rect x="350" y="30" width="25" height="170" rx="4" fill="#0284c7" opacity="0.6" />

                  {/* Vệt sáng chạy xuyên qua cầu khi hoàn thành */}
                  {bridgeAssembled && (
                    <circle cx="0" cy="0" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #00c2ff)">
                      <animateMotion path="M 90 110 L 320 80" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

            </div>
          </div>

        </div>

        {/* BA NỘI DUNG PHÍA DƯỚI: 01 KẾT NỐI - 02 ĐỒNG HÀNH - 03 PHÁT TRIỂN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-10 border-t border-slate-200">
          {pillars.map((pillar, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={pillar.num}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col cursor-pointer transition-all duration-300 p-5 rounded-2xl ${
                  isActive ? 'bg-sky-50/60 shadow-sm border border-sky-100' : 'hover:bg-slate-50'
                }`}
              >
                {/* Số thứ tự font thanh nhã màu vàng/cyan */}
                <span
                  className={`text-3xl sm:text-4xl font-light tracking-tight font-serif mb-2 transition-colors ${
                    isActive ? 'text-[#d97706]' : 'text-slate-300'
                  }`}
                >
                  {pillar.num}
                </span>

                {/* Tiêu đề */}
                <h3 className="text-xl sm:text-2xl font-black text-[#0d1d2f] tracking-tight mb-3">
                  {pillar.title}
                </h3>

                {/* Đoạn văn mô tả */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
