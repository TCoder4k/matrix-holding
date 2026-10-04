import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface MatrixVenturesFramesProps {
  onExplore?: () => void;
}

export const MatrixVenturesFrames: React.FC<MatrixVenturesFramesProps> = ({ onExplore }) => {
  const [activeTab, setActiveTab] = useState<'perspective' | 'potential' | 'companion'>('potential');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      key: 'perspective' as const,
      label: 'Góc nhìn',
      desc: 'Nhìn nhận thị trường bằng tư duy dài hạn, nhận diện các xu hướng công nghệ tương lai và cơ hội tăng trưởng phi mã.',
    },
    {
      key: 'potential' as const,
      label: 'Tiềm năng',
      desc: 'Thẩm định thực chất mô hình kinh doanh, năng lực đội ngũ sáng lập và tiềm năng nhân rộng quy mô doanh nghiệp.',
    },
    {
      key: 'companion' as const,
      label: 'Đồng hành',
      desc: 'Rót vốn thông minh kết hợp bảo trợ toàn diện về pháp lý, công nghệ và thị trường, cùng kiến tạo giá trị thịnh vượng.',
    },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      id="section-ventures"
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ & BỘ TABS */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                MATRIX VENTURES
              </span>
            </div>

            {/* Tiêu đề 2 dòng */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-3">
              Mở góc nhìn.<br />
              <span className="text-[#0d1d2f]">Khám phá tiềm năng.</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Tìm hiểu định hướng kết nối đầu tư của Matrix Ventures.
            </p>

            {/* Đoạn mô tả theo tab được chọn */}
            <div className="min-h-[46px] mb-6">
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed transition-opacity duration-300">
                {currentTab.desc}
              </p>
            </div>

            {/* Nút hành động chính */}
            <div className="mb-10">
              <button
                type="button"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                onClick={onExplore}
                className="px-7 py-3.5 rounded-full bg-[#071629] hover:bg-[#009fe3] text-white font-bold text-sm inline-flex items-center gap-2.5 transition-colors cursor-pointer shadow-md"
              >
                <span>Khám phá Matrix Ventures</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHoveringCTA ? 'translate-x-1.5' : ''
                  }`}
                />
              </button>
            </div>

            {/* THANH BỘ 3 TAB Ở ĐÁY: GÓC NHÌN — TIỀM NĂNG — ĐỒNG HÀNH */}
            <div className="flex items-center gap-8 border-t border-slate-100 pt-5">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className="flex flex-col items-start gap-1 group cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-[#0d1d2f]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`h-[2px] transition-all duration-300 ${
                        isActive ? 'w-full bg-[#d97706]' : 'w-0 bg-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

          </div>

          {/* CỘT PHẢI: 3 KHUNG KÍNH XẾP THEO CHIỀU SÂU NHÌN RA CHÂN TRỜI (Khớp ảnh 4) */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[620px] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 flex items-center justify-center">
              
              {/* Ảnh nền đô thị và dòng sông thịnh vượng dưới nắng sớm */}
              <img
                src="/images/matrix_skyscraper_glass_1790826612996.jpg"
                alt="City Horizon Skyline"
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30" />

              {/* TIA SÁNG VÀNG KIM XUYÊN SUỐT 3 KHUNG KÍNH */}
              <div className="absolute inset-0 pointer-events-none z-30">
                <svg className="w-full h-full" viewBox="0 0 600 360" fill="none">
                  <path
                    d="M 50 250 C 200 230, 360 160, 560 120"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />
                  {/* Điểm photon di chuyển dọc tia sáng */}
                  {isIntersecting && (
                    <circle cx="0" cy="0" r="4.5" fill="#fef08a" filter="drop-shadow(0 0 8px #f59e0b)">
                      <animateMotion path="M 50 250 C 200 230, 360 160, 560 120" dur="3s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

              {/* 3 KHUNG KÍNH XẾP THỨ TỰ THEO CHIỀU SÂU */}
              
              {/* Khung 1 (Gần nhất - Phía trước bên trái, màu cyan sáng): */}
              <div
                onClick={() => setActiveTab('perspective')}
                className={`absolute top-10 left-10 sm:left-16 w-40 sm:w-48 h-64 sm:h-72 rounded-2xl border-4 border-[#00c2ff] backdrop-blur-[2px] shadow-2xl transition-all duration-700 cursor-pointer ${
                  activeTab === 'perspective'
                    ? 'scale-105 z-30 ring-4 ring-sky-300 shadow-cyan-500/30'
                    : 'scale-95 z-20 opacity-90'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 194, 255, 0.25), rgba(255, 255, 255, 0.1))',
                }}
              >
                <div className="absolute top-3 left-3 text-[10px] font-bold text-sky-900 bg-white/70 px-2 py-0.5 rounded-md">
                  Góc nhìn
                </div>
              </div>

              {/* Khung 2 (Ở giữa - Tiến lên khi chọn Tiềm năng): */}
              <div
                onClick={() => setActiveTab('potential')}
                className={`absolute top-16 left-36 sm:left-48 w-40 sm:w-48 h-64 sm:h-72 rounded-2xl border-4 border-amber-300 backdrop-blur-[3px] shadow-2xl transition-all duration-700 cursor-pointer ${
                  activeTab === 'potential'
                    ? 'scale-110 z-30 ring-4 ring-amber-300 shadow-amber-500/30 -translate-y-2'
                    : 'scale-90 z-15 opacity-85'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(255, 255, 255, 0.1))',
                }}
              >
                <div className="absolute top-3 left-3 text-[10px] font-bold text-amber-900 bg-white/70 px-2 py-0.5 rounded-md">
                  Tiềm năng
                </div>
              </div>

              {/* Khung 3 (Xa nhất bên phải - Mở ra chân trời khi chọn Đồng hành): */}
              <div
                onClick={() => setActiveTab('companion')}
                className={`absolute top-20 right-10 sm:right-16 w-40 sm:w-48 h-64 sm:h-72 rounded-2xl border-4 border-amber-500 backdrop-blur-[4px] shadow-2xl transition-all duration-700 cursor-pointer ${
                  activeTab === 'companion'
                    ? 'scale-105 z-30 ring-4 ring-amber-400 shadow-amber-500/40'
                    : 'scale-85 z-10 opacity-75'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.25), rgba(255, 255, 255, 0.1))',
                }}
              >
                <div className="absolute top-3 left-3 text-[10px] font-bold text-amber-950 bg-white/70 px-2 py-0.5 rounded-md">
                  Đồng hành
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
