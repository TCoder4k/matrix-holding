import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Layers, Sprout, Mountain } from 'lucide-react';

export const StrategicVisionSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      key: 'foundation',
      title: 'Nền tảng',
      desc: 'Xây dựng nền tảng vững chắc từ con người, hệ giá trị và tư duy dài hạn.',
      icon: Layers,
    },
    {
      key: 'expansion',
      title: 'Mở rộng',
      desc: 'Không ngừng tìm kiếm cơ hội, mở rộng kết nối và kiến tạo những giá trị mới.',
      icon: Sprout,
    },
    {
      key: 'future',
      title: 'Tương lai',
      desc: 'Cùng nhau kiến tạo những khả năng lớn hơn, vì một tương lai bền vững và thịnh vượng hơn.',
      icon: Mountain,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 sm:py-28 bg-[#040c17] text-white relative overflow-hidden select-none"
    >
      {/* Nền phong cảnh điện ảnh: Con đường chân trời lộng lẫy và thành phố đêm */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-60">
        <img
          src="/images/matrix_skyscraper_glass_1790826612996.jpg"
          alt="Vision Horizon Landscape"
          className="w-full h-full object-cover object-center mix-blend-screen scale-110"
          style={{
            transform: `scale(${1.1 + scrollProgress * 0.05}) translate3d(0, ${scrollProgress * -20}px, 0)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040c17] via-[#040c17]/70 to-[#040c17]/85" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* NỘI DUNG TRÊN: TIÊU ĐỀ ĐIỆN ẢNH & NHỮNG CÁNH CỔNG TIẾN VỀ CHÂN TRỜI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          
          {/* CỘT TRÁI: TIÊU ĐỀ */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                TẦM NHÌN CHIẾN LƯỢC
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.12] text-white mb-4">
              Nhìn xa hơn.<br />
              <span className="text-white">Tiến cùng nhau.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md font-normal mb-8">
              Matrix Holding kiến tạo những giá trị bền vững bằng tư duy dài hạn, tinh thần hợp tác và khát vọng vì một tương lai tốt đẹp hơn.
            </p>

            <div>
              <button
                type="button"
                className="px-7 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-700 hover:border-slate-500 inline-flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <span>TÌM HIỂU THÊM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CỘT PHẢI: NHỮNG CÁNH CỔNG THỜI GIAN LẦN LƯỢT DẪN VỀ TƯƠNG LAI */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[300px] sm:min-h-[360px]">
            <div className="relative w-full max-w-[560px] h-[300px] sm:h-[340px] flex items-center justify-center">
              
              {/* Con đường cong vươn ra biển đêm */}
              <svg viewBox="0 0 540 320" className="w-full h-full overflow-visible" fill="none">
                {/* Đường cong đại lộ ánh sáng */}
                <path
                  d="M 50 290 C 220 280, 360 210, 520 160"
                  stroke="#00c2ff"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity="0.8"
                />
                
                {/* Điểm sáng di chuyển dọc đại lộ */}
                <circle cx="0" cy="0" r="5" fill="#ffffff" filter="drop-shadow(0 0 10px #00c2ff)">
                  <animateMotion path="M 50 290 C 220 280, 360 210, 520 160" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Cánh cổng 1 (Gần nhất, lớn nhất) */}
                <g transform="translate(180, 60)">
                  <rect x="0" y="0" width="90" height="180" rx="8" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0.9" />
                  <rect x="8" y="8" width="74" height="164" rx="4" fill="#00c2ff" opacity="0.12" />
                  <line x1="0" y1="0" x2="90" y2="0" stroke="#fef08a" strokeWidth="4" />
                </g>

                {/* Cánh cổng 2 (Trung bình) */}
                <g transform="translate(320, 110)">
                  <rect x="0" y="0" width="70" height="130" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
                  <rect x="6" y="6" width="58" height="118" rx="3" fill="#00c2ff" opacity="0.1" />
                </g>

                {/* Cánh cổng 3 (Xa nhất, tiến về ánh sáng) */}
                <g transform="translate(430, 140)">
                  <rect x="0" y="0" width="50" height="90" rx="4" fill="none" stroke="#bae6fd" strokeWidth="2" opacity="0.7" />
                  <rect x="4" y="4" width="42" height="82" rx="2" fill="#00c2ff" opacity="0.1" />
                </g>
              </svg>

            </div>
          </div>

        </div>

        {/* BA GIAI ĐOẠN Ở ĐÁY: NỀN TẢNG — MỞ RỘNG — TƯƠNG LAI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-10 border-t border-slate-800">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.key}
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col cursor-pointer transition-all duration-300 p-5 rounded-2xl ${
                  isActive ? 'bg-slate-900/90 border border-sky-500/40 shadow-lg' : 'hover:bg-slate-900/50'
                }`}
              >
                {/* Node icon & Chấm vàng */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#00c2ff] text-[#040c17]' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      isActive ? 'bg-amber-400 ring-4 ring-amber-400/20' : 'bg-slate-600'
                    }`}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  {stage.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
