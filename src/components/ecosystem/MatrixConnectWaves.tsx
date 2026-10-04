import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface MatrixConnectWavesProps {
  onExplore?: () => void;
}

export const MatrixConnectWaves: React.FC<MatrixConnectWavesProps> = ({ onExplore }) => {
  const [activeStage, setActiveStage] = useState<'meet' | 'exchange' | 'collaborate'>('exchange');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      key: 'meet' as const,
      label: 'Gặp gỡ',
      desc: 'Tìm kiếm điểm chạm và các cơ hội phù hợp giữa nhu cầu của doanh nghiệp và thế mạnh của hệ sinh thái.',
    },
    {
      key: 'exchange' as const,
      label: 'Trao đổi',
      desc: 'Đối thoại cởi mở, phân tích mô hình kinh doanh và xác định phương án cộng hưởng nguồn lực tối ưu.',
    },
    {
      key: 'collaborate' as const,
      label: 'Hợp tác',
      desc: 'Ký kết thỏa thuận liên minh chiến lược, triển khai phân phối chéo và cùng chia sẻ giá trị tăng trưởng.',
    },
  ];

  const currentStageData = stages.find((s) => s.key === activeStage) || stages[1];

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
      id="section-connect"
      className="w-full py-16 sm:py-24 bg-[#051120] text-white relative overflow-hidden select-none border-t border-slate-800"
    >
      {/* Vầng sáng nền tinh tế */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00c2ff]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ & TIẾN TRÌNH 3 BƯỚC */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                MATRIX CONNECT
              </span>
            </div>

            {/* Tiêu đề */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-white mb-3">
              Gặp đúng kết nối.<br />
              <span className="text-[#00c2ff]">Mở thêm cơ hội.</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Khám phá không gian kết nối và hợp tác của Matrix Connect.
            </p>

            {/* Đoạn mô tả theo trạng thái */}
            <div className="min-h-[46px] mb-6">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed transition-opacity duration-300">
                {currentStageData.desc}
              </p>
            </div>

            {/* Nút hành động cyan: Khám phá Matrix Connect → */}
            <div className="mb-10">
              <button
                type="button"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                onClick={onExplore}
                className={`px-7 py-3.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-sm inline-flex items-center gap-2.5 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/25 active:scale-98 ${
                  isHoveringCTA ? 'shadow-[0_0_30px_rgba(0,194,255,0.7)]' : ''
                }`}
              >
                <span>Khám phá Matrix Connect</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHoveringCTA ? 'translate-x-1.5' : ''
                  }`}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* THANH TIẾN TRÌNH: GẶP GỠ — TRAO ĐỔI — HỢP TÁC */}
            <div className="flex items-center justify-between gap-4 max-w-sm border-t border-slate-800/80 pt-5">
              {stages.map((st, idx) => {
                const isActive = activeStage === st.key;
                return (
                  <button
                    key={st.key}
                    type="button"
                    onClick={() => setActiveStage(st.key)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-[#00c2ff] bg-[#00c2ff] ring-4 ring-cyan-500/30'
                            : 'border-slate-500 bg-transparent group-hover:border-slate-400'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-bold transition-colors ${
                        isActive ? 'text-[#00c2ff]' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      {st.label}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* CỘT PHẢI: HAI DẢI SÓNG CYBER MESH WAVE TIẾN TỚI ĐIỂM GẶP NHAU (Khớp 100% ảnh 3) */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[620px] aspect-[16/10] flex items-center justify-center">
              
              {/* SVG 2 DẢI SÓNG NĂNG LƯỢNG HỘI TỤ */}
              <svg viewBox="0 0 620 380" className="w-full h-full overflow-visible" fill="none">
                <defs>
                  {/* Gradient dải sóng Cyan (Bên trái) */}
                  <linearGradient id="connect-cyan-wave" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#00c2ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>

                  {/* Gradient dải sóng Vàng Kim (Bên phải) */}
                  <linearGradient id="connect-gold-wave" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>

                  {/* Quầng sáng điểm gặp nhau */}
                  <radialGradient id="nexus-flare" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#00c2ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. DẢI SÓNG CYAN (Từ bên trái vươn sang giữa) */}
                <g
                  className="transition-transform duration-700 ease-out"
                  style={{
                    transform:
                      activeStage === 'meet'
                        ? 'translate(-40px, 0)'
                        : 'translate(0, 0)',
                  }}
                >
                  {/* Ribbon 1 */}
                  <path
                    d="M 20 240 C 120 280, 200 80, 310 190"
                    stroke="url(#connect-cyan-wave)"
                    strokeWidth="3"
                    opacity="0.9"
                  />
                  {/* Ribbon 2 mờ */}
                  <path
                    d="M 30 220 C 130 260, 210 100, 310 190"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  {/* Ribbon 3 siêu mỏng */}
                  <path
                    d="M 40 200 C 140 240, 220 120, 310 190"
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    opacity="0.4"
                  />

                  {/* Các node kết nối trên dải cyan */}
                  <circle cx="120" cy="220" r="4.5" fill="#00c2ff" filter="drop-shadow(0 0 6px #00c2ff)" />
                  <circle cx="210" cy="130" r="4" fill="#38bdf8" />
                  <circle cx="250" cy="180" r="3.5" fill="#00c2ff" />
                </g>

                {/* 2. DẢI SÓNG VÀNG KIM (Từ bên phải vươn sang giữa) */}
                <g
                  className="transition-transform duration-700 ease-out"
                  style={{
                    transform:
                      activeStage === 'meet'
                        ? 'translate(40px, 0)'
                        : 'translate(0, 0)',
                  }}
                >
                  {/* Ribbon vàng 1 */}
                  <path
                    d="M 600 120 C 500 80, 420 280, 310 190"
                    stroke="url(#connect-gold-wave)"
                    strokeWidth="3"
                    opacity="0.9"
                  />
                  {/* Ribbon vàng 2 mờ */}
                  <path
                    d="M 590 140 C 490 100, 410 260, 310 190"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  {/* Ribbon vàng 3 siêu mỏng */}
                  <path
                    d="M 580 160 C 480 120, 400 240, 310 190"
                    stroke="#fde68a"
                    strokeWidth="1"
                    opacity="0.4"
                  />

                  {/* Các node kết nối trên dải vàng */}
                  <circle cx="500" cy="140" r="4.5" fill="#fbbf24" filter="drop-shadow(0 0 6px #f59e0b)" />
                  <circle cx="430" cy="240" r="4" fill="#fde68a" />
                  <circle cx="370" cy="205" r="3.5" fill="#fbbf24" />
                </g>

                {/* 3. ĐIỂM FUSION NEXUS TẠI TÂM GẶP NHAU (310, 190) */}
                {(activeStage === 'exchange' || activeStage === 'collaborate') && (
                  <g className="origin-center transition-all duration-500">
                    {/* Hào quang lan tỏa */}
                    <circle
                      cx="310"
                      cy="190"
                      r={activeStage === 'collaborate' ? 45 : 25}
                      fill="url(#nexus-flare)"
                      className="animate-pulse"
                    />

                    {/* Vòng nhẫn sáng kép khi ở trạng thái Hợp tác */}
                    {activeStage === 'collaborate' && (
                      <circle
                        cx="310"
                        cy="190"
                        r="32"
                        stroke="#00c2ff"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity="0.8"
                      />
                    )}

                    {/* Điểm sáng trắng trung tâm */}
                    <circle
                      cx="310"
                      cy="190"
                      r={isHoveringCTA ? 8 : 6}
                      fill="#ffffff"
                      filter="drop-shadow(0 0 12px #00c2ff)"
                      className="transition-all duration-300"
                    />
                  </g>
                )}

                {/* Điểm photon di chuyển qua lại giữa 2 phía */}
                {isIntersecting && (
                  <circle cx="0" cy="0" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 6px #00c2ff)">
                    <animateMotion
                      path="M 80 240 C 180 200, 440 180, 540 140"
                      dur="3.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </svg>

            </div>
          </div>

        </div>
      </div>

      {/* ĐƯỜNG DẪN CYAN KÉO XUỐNG SECTION TIẾP THEO (MATRIX VENTURES) */}
      <div className="w-full flex justify-center mt-12 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#00c2ff] to-[#00c2ff]/30" />
      </div>

    </section>
  );
};
