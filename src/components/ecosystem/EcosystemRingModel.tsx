import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Link2, Share2, TrendingUp, GraduationCap } from 'lucide-react';

interface EcosystemRingModelProps {
  onSelectUnitSection?: (sectionId: string) => void;
}

export const EcosystemRingModel: React.FC<EcosystemRingModelProps> = ({ onSelectUnitSection }) => {
  const [selectedUnit, setSelectedUnit] = useState<'network' | 'connect' | 'ventures' | 'academy'>('connect');
  const [hoveredUnit, setHoveredUnit] = useState<string | null>(null);
  const [entranceProgress, setEntranceProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const unitsData = {
    network: {
      id: 'network',
      name: 'Matrix Network',
      role: 'Dịch vụ doanh nghiệp',
      desc: 'Cung cấp hạ tầng dịch vụ toàn diện từ tư vấn chiến lược, pháp lý, kế toán quản trị đến giải pháp công nghệ chuyển đổi số.',
      sectionId: 'section-network',
      icon: Share2,
      // Exact center coordinates on ellipse (cx=370, cy=200, rx=260, ry=110, angle = -90deg)
      x: 370,
      y: 90,
    },
    connect: {
      id: 'connect',
      name: 'Matrix Connect',
      role: 'Kết nối doanh nghiệp',
      desc: 'Thúc đẩy hợp tác, mở rộng cơ hội và tạo ra giá trị chung giữa các bên trong hệ sinh thái.',
      sectionId: 'section-connect',
      icon: Link2,
      // angle = -18deg
      x: 617,
      y: 166,
    },
    ventures: {
      id: 'ventures',
      name: 'Matrix Ventures',
      role: 'Đầu tư & Vốn chiến lược',
      desc: 'Hỗ trợ ươm mầm, đầu tư vốn mạo hiểm và tăng tốc quy mô cho các mô hình kinh doanh tiềm năng phát triển vượt bậc.',
      sectionId: 'section-ventures',
      icon: TrendingUp,
      // angle = 142deg
      x: 165,
      y: 267,
    },
    academy: {
      id: 'academy',
      name: 'Matrix Academy',
      role: 'Đào tạo lãnh đạo tinh hoa',
      desc: 'Học viện huấn luyện thực chiến, chuyển giao tri thức quản trị hiện đại và phát triển nguồn nhân lực chất lượng cao.',
      sectionId: 'section-academy',
      icon: GraduationCap,
      // angle = 42deg
      x: 370 + 260 * Math.cos((42 * Math.PI) / 180),
      y: 200 + 110 * Math.sin((42 * Math.PI) / 180), // ~ 563, 273.5
    },
  };

  const currentUnit = unitsData[selectedUnit];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entranceProgress === 0) {
          setEntranceProgress(1);
          setTimeout(() => setEntranceProgress(2), 250);
          setTimeout(() => setEntranceProgress(3), 600);
          setTimeout(() => setEntranceProgress(4), 1000);
          setTimeout(() => setEntranceProgress(5), 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [entranceProgress]);

  const handleUnitClick = (key: 'network' | 'connect' | 'ventures' | 'academy') => {
    setSelectedUnit(key);
  };

  const handleExploreUnit = () => {
    if (onSelectUnitSection) {
      onSelectUnitSection(currentUnit.sectionId);
    } else {
      const el = document.getElementById(currentUnit.sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="section-overview"
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none"
    >
      {/* Nền phản quang mềm mại */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-l from-sky-50/70 via-sky-50/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* CỘT TRÁI (5 CỘT): TIÊU ĐỀ + CARD CHI TIẾT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#00c2ff]" />
                <span className="text-[#009fe3] font-bold text-xs tracking-widest uppercase">
                  HỆ SINH THÁI MATRIX
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] text-[#0A192F] mb-3">
                Một hệ sinh thái.<br />
                <span className="text-[#00c2ff]">Nhiều nguồn lực.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Khám phá cách các đơn vị thành viên kết nối, cộng hưởng sức mạnh và bổ trợ nguồn lực lẫn nhau trong mô hình tăng trưởng bền vững của Matrix Holding.
              </p>
            </div>

            {/* CARD THÔNG TIN ĐƠN VỊ ĐANG CHỌN */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden transition-all duration-300 w-full max-w-[460px]">
              
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-[#009fe3] shadow-md shadow-sky-500/25 flex items-center justify-center text-white shrink-0">
                  <div className="w-6 h-6 border-2 border-white/90 rounded-md rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-xs" />
                  </div>
                </div>

                <div>
                  <h3 className="font-black text-xl text-[#0A192F] tracking-tight">
                    {currentUnit.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                    {currentUnit.role}
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-5" />

              <p
                key={currentUnit.id}
                className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300 min-h-[48px]"
              >
                {currentUnit.desc}
              </p>

              <button
                type="button"
                onClick={handleExploreUnit}
                className="w-full h-13 sm:h-14 py-3.5 px-6 rounded-xl bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071526] font-bold text-sm sm:text-[14.5px] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]"
              >
                <span>Khám phá đơn vị</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 pl-1">
              <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_6px_#00c2ff] animate-pulse" />
              <span>Nhấp chọn đơn vị trên sơ đồ quỹ đạo để xem chi tiết</span>
            </div>

          </div>

          {/* CỘT PHẢI (7 CỘT): MÔ HÌNH VÒNG OVAL VÀ CÁC NODE */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
            <div className="relative w-full max-w-[740px] aspect-[16/10] flex items-center justify-center">
              
              {/* SVG VÒNG OVAL & ĐƯỜNG NỐI (CHUẨN HÓA TỌA ĐỘ TÂM (370, 200)) */}
              <svg viewBox="0 0 740 400" className="w-full h-full overflow-visible" fill="none">
                <defs>
                  <linearGradient id="laser-cyan-beam" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00c2ff" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* VÒNG OVAL NÉT MẢNH (rx=260, ry=110) ÔM ĐỀU CÁC NÚT VỆ TINH */}
                <ellipse
                  cx="370"
                  cy="200"
                  rx="260"
                  ry="110"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  opacity={entranceProgress >= 4 ? 1 : 0}
                  className="transition-opacity duration-700"
                />

                {/* ĐƯỜNG NỐI TỪ TÂM (370, 200) ĐẾN TÂM CỦA 4 NÚT VỆ TINH */}
                <g opacity={entranceProgress >= 3 ? 1 : 0} className="transition-opacity duration-500">
                  {/* Nối Network */}
                  <line
                    x1="370"
                    y1="200"
                    x2={unitsData.network.x}
                    y2={unitsData.network.y}
                    stroke="#00c2ff"
                    strokeWidth={selectedUnit === 'network' || hoveredUnit === 'network' ? '2.5' : '1.5'}
                    opacity={selectedUnit === 'network' || hoveredUnit === 'network' ? 1 : 0.4}
                    className="transition-all duration-300"
                  />
                  {/* Nối Connect */}
                  <line
                    x1="370"
                    y1="200"
                    x2={unitsData.connect.x}
                    y2={unitsData.connect.y}
                    stroke="#00c2ff"
                    strokeWidth={selectedUnit === 'connect' || hoveredUnit === 'connect' ? '2.5' : '1.5'}
                    opacity={selectedUnit === 'connect' || hoveredUnit === 'connect' ? 1 : 0.4}
                    className="transition-all duration-300"
                  />
                  {/* Nối Ventures */}
                  <line
                    x1="370"
                    y1="200"
                    x2={unitsData.ventures.x}
                    y2={unitsData.ventures.y}
                    stroke="#00c2ff"
                    strokeWidth={selectedUnit === 'ventures' || hoveredUnit === 'ventures' ? '2.5' : '1.5'}
                    opacity={selectedUnit === 'ventures' || hoveredUnit === 'ventures' ? 1 : 0.4}
                    className="transition-all duration-300"
                  />
                  {/* Nối Academy */}
                  <line
                    x1="370"
                    y1="200"
                    x2={unitsData.academy.x}
                    y2={unitsData.academy.y}
                    stroke="#00c2ff"
                    strokeWidth={selectedUnit === 'academy' || hoveredUnit === 'academy' ? '2.5' : '1.5'}
                    opacity={selectedUnit === 'academy' || hoveredUnit === 'academy' ? 1 : 0.4}
                    className="transition-all duration-300"
                  />
                </g>

                {/* ĐIỂM SÁNG PHOTON CHẠY NHẸ TRÊN ĐƯỜNG NỐI */}
                {entranceProgress >= 4 && (
                  <circle cx="0" cy="0" r="3" fill="#00c2ff" filter="drop-shadow(0 0 5px #00c2ff)">
                    <animateMotion path={`M 370 200 L ${unitsData.connect.x} ${unitsData.connect.y}`} dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>

              {/* TRUNG TÂM: MATRIX HOLDING (Tọa độ gốc chuẩn xác tuyệt đối qua translate(-50%, -50%)) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-out flex flex-col items-center select-none ${
                  entranceProgress >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="relative w-38 h-38 sm:w-42 sm:h-42 rounded-full bg-[#0A192F] border-2 border-[#00c2ff] shadow-xl flex flex-col items-center justify-center text-white">
                  {/* Logo gốc M */}
                  <div className="w-10 h-10 mb-1 flex items-center justify-center">
                    <img
                      src="/images/logo-matrix-holding.svg"
                      alt="Matrix Holding"
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,194,255,0.4)]"
                    />
                  </div>
                  <span className="font-black text-xs sm:text-sm tracking-tight text-white uppercase text-center px-2">
                    Matrix Holding
                  </span>
                </div>
              </div>

              {/* 4 ĐƠN VỊ VỆ TINH (Định vị chuẩn xác tuyệt đối theo hệ tọa độ SVG ellipse bằng % CSS) */}
              
              {/* 1. Matrix Network */}
              <button
                type="button"
                onClick={() => handleUnitClick('network')}
                onMouseEnter={() => setHoveredUnit('network')}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{
                  left: `${(unitsData.network.x / 740) * 100}%`,
                  top: `${(unitsData.network.y / 400) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  selectedUnit === 'network' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-all ${
                    selectedUnit === 'network'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff] ring-2 ring-sky-200/50 shadow-sky-100'
                      : hoveredUnit === 'network'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff]'
                      : 'bg-white border-[1.5px] border-[#E2E8F0] shadow-slate-200/50 hover:border-[#00c2ff]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0077b6] mb-1.5">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[11.5px] sm:text-xs text-[#0A192F] tracking-tight">Matrix Network</span>
                </div>
              </button>

              {/* 2. Matrix Connect */}
              <button
                type="button"
                onClick={() => handleUnitClick('connect')}
                onMouseEnter={() => setHoveredUnit('connect')}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{
                  left: `${(unitsData.connect.x / 740) * 100}%`,
                  top: `${(unitsData.connect.y / 400) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  selectedUnit === 'connect' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-all ${
                    selectedUnit === 'connect'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff] ring-2 ring-sky-200/50 shadow-sky-100'
                      : hoveredUnit === 'connect'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff]'
                      : 'bg-white border-[1.5px] border-[#E2E8F0] shadow-slate-200/50 hover:border-[#00c2ff]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0077b6] mb-1.5">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[11.5px] sm:text-xs text-[#0A192F] tracking-tight">Matrix Connect</span>
                </div>
              </button>

              {/* 3. Matrix Ventures */}
              <button
                type="button"
                onClick={() => handleUnitClick('ventures')}
                onMouseEnter={() => setHoveredUnit('ventures')}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{
                  left: `${(unitsData.ventures.x / 740) * 100}%`,
                  top: `${(unitsData.ventures.y / 400) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  selectedUnit === 'ventures' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-all ${
                    selectedUnit === 'ventures'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff] ring-2 ring-sky-200/50 shadow-sky-100'
                      : hoveredUnit === 'ventures'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff]'
                      : 'bg-white border-[1.5px] border-[#E2E8F0] shadow-slate-200/50 hover:border-[#00c2ff]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0077b6] mb-1.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[11.5px] sm:text-xs text-[#0A192F] tracking-tight">Matrix Ventures</span>
                </div>
              </button>

              {/* 4. Matrix Academy */}
              <button
                type="button"
                onClick={() => handleUnitClick('academy')}
                onMouseEnter={() => setHoveredUnit('academy')}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{
                  left: `${(unitsData.academy.x / 740) * 100}%`,
                  top: `${(unitsData.academy.y / 400) * 100}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-200 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  selectedUnit === 'academy' ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center shadow-md transition-all ${
                    selectedUnit === 'academy'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff] ring-2 ring-sky-200/50 shadow-sky-100'
                      : hoveredUnit === 'academy'
                      ? 'bg-[#ECFAFF] border-2 border-[#00c2ff]'
                      : 'bg-white border-[1.5px] border-[#E2E8F0] shadow-slate-200/50 hover:border-[#00c2ff]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0077b6] mb-1.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[11.5px] sm:text-xs text-[#0A192F] tracking-tight">Matrix Academy</span>
                </div>
              </button>

            </div>
          </div>

        </div>

      </div>

      <div className="w-full flex justify-center mt-14 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#00c2ff] to-[#00c2ff]/30" />
      </div>

    </section>
  );
};
