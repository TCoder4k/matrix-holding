import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Link2, Share2, TrendingUp, GraduationCap } from 'lucide-react';

interface EcosystemRingModelProps {
  onSelectUnitSection?: (sectionId: string) => void;
}

export const EcosystemRingModel: React.FC<EcosystemRingModelProps> = ({ onSelectUnitSection }) => {
  const [selectedUnit, setSelectedUnit] = useState<'network' | 'connect' | 'ventures' | 'academy'>('connect');
  const [hoveredUnit, setHoveredUnit] = useState<string | null>(null);
  const [entranceProgress, setEntranceProgress] = useState(0); // 0 to 5 animation stages
  const containerRef = useRef<HTMLDivElement>(null);

  const unitsData = {
    network: {
      id: 'network',
      name: 'Matrix Network',
      role: 'Dịch vụ doanh nghiệp',
      desc: 'Cung cấp hạ tầng dịch vụ toàn diện từ tư vấn chiến lược, pháp lý, kế toán quản trị đến giải pháp công nghệ chuyển đổi số.',
      sectionId: 'section-network',
      badgeColor: '#00c2ff',
    },
    connect: {
      id: 'connect',
      name: 'Matrix Connect',
      role: 'Kết nối doanh nghiệp',
      desc: 'Thúc đẩy hợp tác, mở rộng cơ hội và tạo ra giá trị chung giữa các bên trong hệ sinh thái.',
      sectionId: 'section-connect',
      badgeColor: '#00c2ff',
    },
    ventures: {
      id: 'ventures',
      name: 'Matrix Ventures',
      role: 'Đầu tư & Vốn chiến lược',
      desc: 'Hỗ trợ ươm mầm, đầu tư vốn mạo hiểm và tăng tốc quy mô cho các mô hình kinh doanh tiềm năng phát triển vượt bậc.',
      sectionId: 'section-ventures',
      badgeColor: '#f59e0b',
    },
    academy: {
      id: 'academy',
      name: 'Matrix Academy',
      role: 'Đào tạo lãnh đạo tinh hoa',
      desc: 'Học viện huấn luyện thực chiến, chuyển giao tri thức quản trị hiện đại và phát triển nguồn nhân lực chất lượng cao.',
      sectionId: 'section-academy',
      badgeColor: '#d97706',
    },
  };

  const currentUnit = unitsData[selectedUnit];

  // Kích hoạt chuỗi diễn biến 1.5 - 2s khi người xem cuộn tới
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entranceProgress === 0) {
          // Giai đoạn 1: Biểu tượng Holding hiện lên (0ms)
          setEntranceProgress(1);
          // Giai đoạn 2: 4 đơn vị xuất hiện lần lượt (250ms)
          setTimeout(() => setEntranceProgress(2), 250);
          // Giai đoạn 3: Các đường nối được vẽ từ Holding (600ms)
          setTimeout(() => setEntranceProgress(3), 600);
          // Giai đoạn 4: Vòng ngoài được vẽ hoàn chỉnh khép lại (1000ms)
          setTimeout(() => setEntranceProgress(4), 1000);
          // Giai đoạn 5: Điểm sáng chạy quanh vòng kết thúc phần giới thiệu (1500ms)
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
        
        {/* BỐ CỤC 2 CỘT CĂN GIỮA THEO CHIỀU DỌC (items-center) GIẢI QUYẾT KHOẢNG TRỐNG GIỮA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* CỘT TRÁI (5 CỘT): TIÊU ĐỀ + CARD CHI TIẾT + NÚT BẤM THOÁNG ĐÃNG */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Cụm tiêu đề section kết nối liền mạch với card bên dưới */}
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
              
              {/* Header card: Icon khối lập phương cyan + Tên + Vai trò */}
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

              {/* Dải phân cách mờ */}
              <div className="w-full h-[1px] bg-slate-100 mb-5" />

              {/* Đoạn mô tả với hiệu ứng chuyển cảnh mờ + trượt nhẹ */}
              <p
                key={currentUnit.id}
                className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300 min-h-[48px]"
              >
                {currentUnit.desc}
              </p>

              {/* Nút hành động cyan: TĂNG CHIỀU CAO & PADDING ĐỂ NÚT THOÁNG ĐÃNG, KHÔNG BỊ ĐÈ CHỮ */}
              <button
                type="button"
                onClick={handleExploreUnit}
                className="w-full h-13 sm:h-14 py-3.5 px-6 rounded-xl bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071526] font-bold text-sm sm:text-[14.5px] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]"
              >
                <span>Khám phá đơn vị</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Dòng trợ giúp tinh tế thay cho icon emoji bàn tay rớt dòng */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 pl-1">
              <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_6px_#00c2ff] animate-pulse" />
              <span>Nhấp chọn đơn vị trên sơ đồ quỹ đạo để xem chi tiết</span>
            </div>

          </div>

          {/* CỘT PHẢI (7 CỘT): MÔ HÌNH VÒNG OVAL MỞ RỘNG THOÁNG ĐÃNG */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
            <div className="relative w-full max-w-[740px] aspect-[16/10] flex items-center justify-center">
              
              {/* SVG VÒNG OVAL KIM LOẠI MỞ RỘNG VIEWBOX 740 x 400 */}
              <svg viewBox="0 0 740 400" className="w-full h-full overflow-visible" fill="none">
                <defs>
                  {/* Gradient viền kim loại cho vòng oval */}
                  <linearGradient id="metallic-oval-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="30%" stopColor="#f1f5f9" />
                    <stop offset="60%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>

                  {/* Gradient vàng kim cho viền đế */}
                  <linearGradient id="gold-metal-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>

                  {/* Gradient đường nối cyan phát sáng */}
                  <linearGradient id="laser-cyan-beam" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00c2ff" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* 1. VÒNG OVAL NGOÀI: MỞ RỘNG rx=295, ry=128 (Không đè sát viền quả cầu) */}
                <ellipse
                  cx="370"
                  cy="200"
                  rx="295"
                  ry="128"
                  stroke="url(#metallic-oval-ring)"
                  strokeWidth="8"
                  opacity={entranceProgress >= 4 ? 0.9 : 0}
                  className="transition-opacity duration-700"
                  filter="drop-shadow(0 15px 30px rgba(0,0,0,0.08))"
                />
                {/* Viền sáng mạ vàng kim kẹp trong vòng */}
                <ellipse
                  cx="370"
                  cy="200"
                  rx="289"
                  ry="123"
                  stroke="url(#gold-metal-ring)"
                  strokeWidth="1.8"
                  opacity={entranceProgress >= 4 ? 0.8 : 0}
                  className="transition-opacity duration-700"
                />

                {/* 2. CÁC ĐƯỜNG NỐI XUYÊN TÂM TỪ HOLDING RA 4 VỆ TINH */}
                <g opacity={entranceProgress >= 3 ? 1 : 0} className="transition-opacity duration-500">
                  {/* Nối Network (Top: 350, 82) */}
                  <line
                    x1="370"
                    y1="200"
                    x2="350"
                    y2="82"
                    stroke="url(#laser-cyan-beam)"
                    strokeWidth={selectedUnit === 'network' || hoveredUnit === 'network' ? '3.2' : '1.8'}
                    opacity={selectedUnit === 'network' || hoveredUnit === 'network' ? 1 : 0.5}
                    className="transition-all duration-300"
                  />

                  {/* Nối Connect (Right: 595, 160) */}
                  <line
                    x1="370"
                    y1="200"
                    x2="595"
                    y2="160"
                    stroke="url(#laser-cyan-beam)"
                    strokeWidth={selectedUnit === 'connect' || hoveredUnit === 'connect' ? '3.5' : '1.8'}
                    opacity={selectedUnit === 'connect' || hoveredUnit === 'connect' ? 1 : 0.5}
                    className="transition-all duration-300"
                  />

                  {/* Nối Ventures (Bottom-Left: 200, 290) */}
                  <line
                    x1="370"
                    y1="200"
                    x2="200"
                    y2="290"
                    stroke="url(#laser-cyan-beam)"
                    strokeWidth={selectedUnit === 'ventures' || hoveredUnit === 'ventures' ? '3.2' : '1.8'}
                    opacity={selectedUnit === 'ventures' || hoveredUnit === 'ventures' ? 1 : 0.5}
                    className="transition-all duration-300"
                  />

                  {/* Nối Academy (Bottom-Right: 540, 320) */}
                  <line
                    x1="370"
                    y1="200"
                    x2="540"
                    y2="320"
                    stroke="url(#laser-cyan-beam)"
                    strokeWidth={selectedUnit === 'academy' || hoveredUnit === 'academy' ? '3.2' : '1.8'}
                    opacity={selectedUnit === 'academy' || hoveredUnit === 'academy' ? 1 : 0.5}
                    className="transition-all duration-300"
                  />
                </g>

                {/* 3. ĐIỂM SÁNG PHOTON CHẠY QUANH VÒNG NGOÀI */}
                {entranceProgress >= 5 && (
                  <circle cx="0" cy="0" r="4.5" fill="#00c2ff" filter="drop-shadow(0 0 8px #00c2ff)">
                    <animateMotion
                      path="M 75 200 C 75 72, 665 72, 665 200 C 665 328, 75 328, 75 200"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Điểm photon trên đường nối Connect */}
                {entranceProgress >= 4 && (
                  <circle cx="0" cy="0" r="3.5" fill="#38bdf8" filter="drop-shadow(0 0 6px #00c2ff)">
                    <animateMotion path="M 370 200 L 595 160" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>

              {/* TÂM GIỮA: NÚT TRỤC CHÍNH MATRIX HOLDING (Tròn kim loại đen + viền sáng xanh + logo M) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-out flex flex-col items-center select-none ${
                  entranceProgress >= 1
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
              >
                {/* Ánh sáng dạ quang xanh dưới đáy */}
                <div className="absolute inset-0 rounded-full bg-[#00c2ff]/30 blur-xl scale-125" />

                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-[#091a2e] to-[#040d18] border-4 border-[#153456] shadow-2xl flex flex-col items-center justify-center text-white ring-2 ring-[#00c2ff]/60">
                  {/* Logo 3D M */}
                  <div className="w-10 h-10 mb-1 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">
                      <polygon points="14,16 32,16 32,84 14,84" fill="#00c2ff" />
                      <polygon points="32,16 50,56 40,66 22,26" fill="#0284c7" />
                      <polygon points="46,48 54,48 50,68 46,58" fill="#f59e0b" />
                      <polygon points="50,56 68,16 78,26 60,66" fill="#38bdf8" />
                      <polygon points="68,16 86,16 86,84 68,84" fill="#0369a1" />
                    </svg>
                  </div>
                  <span className="font-black text-sm tracking-tight text-white uppercase">Matrix Holding</span>
                </div>
              </div>

              {/* 4 ĐƠN VỊ VỆ TINH TRÊN VÒNG (Xuất hiện lần lượt khi entranceProgress >= 2) */}
              
              {/* 1. Matrix Network (Top) */}
              <button
                type="button"
                onClick={() => handleUnitClick('network')}
                onMouseEnter={() => setHoveredUnit('network')}
                onMouseLeave={() => setHoveredUnit(null)}
                className={`absolute top-[4%] left-[47%] -translate-x-1/2 z-30 transition-all duration-300 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  selectedUnit === 'network'
                    ? 'scale-110 -translate-y-2'
                    : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 flex flex-col items-center justify-center shadow-xl transition-all ${
                    selectedUnit === 'network'
                      ? 'border-[#00c2ff] ring-4 ring-sky-200'
                      : 'border-slate-200 hover:border-[#00c2ff]'
                  }`}
                >
                  <Share2 className="w-6 h-6 text-[#0A192F] mb-1" />
                  <span className="font-bold text-[11px] sm:text-xs text-[#0A192F]">Matrix Network</span>
                </div>
              </button>

              {/* 2. Matrix Connect (Right) - SỬA LỖI TƯƠNG PHẢN CHỮ: Chữ trắng đậm, bóng đen rõ ràng, không bị nhòe bởi glow */}
              <button
                type="button"
                onClick={() => handleUnitClick('connect')}
                onMouseEnter={() => setHoveredUnit('connect')}
                onMouseLeave={() => setHoveredUnit(null)}
                className={`absolute top-[26%] right-[2%] sm:right-[3%] z-30 transition-all duration-300 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  selectedUnit === 'connect'
                    ? 'scale-110 -translate-y-2'
                    : 'hover:scale-105'
                }`}
              >
                {/* Quầng sáng cyan đặt phía sau (-z-10) để không làm mờ hoặc lem vào chữ */}
                <div className="absolute -inset-1.5 rounded-full bg-[#00c2ff]/40 blur-md -z-10" />

                <div className="relative w-25 h-25 sm:w-29 sm:h-29 rounded-full bg-[#061527] border-2 border-[#00c2ff] flex flex-col items-center justify-center shadow-2xl transition-all ring-4 ring-cyan-400/40 text-white">
                  <div className="w-8 h-8 rounded-full bg-[#00c2ff]/25 flex items-center justify-center text-[#00c2ff] mb-1.5 shadow-inner">
                    <Link2 className="w-4 h-4 text-[#00c2ff]" />
                  </div>
                  {/* Chữ trắng nét đậm font-bold/font-extrabold với drop-shadow đen sắc nét, tương phản tối đa */}
                  <span className="font-extrabold text-[11.5px] sm:text-[12.5px] text-white tracking-tight drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.95)]">
                    Matrix Connect
                  </span>
                </div>
              </button>

              {/* 3. Matrix Ventures (Bottom-Left) */}
              <button
                type="button"
                onClick={() => handleUnitClick('ventures')}
                onMouseEnter={() => setHoveredUnit('ventures')}
                onMouseLeave={() => setHoveredUnit(null)}
                className={`absolute bottom-[6%] left-[23%] -translate-x-1/2 z-30 transition-all duration-300 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  selectedUnit === 'ventures'
                    ? 'scale-110 -translate-y-2'
                    : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 flex flex-col items-center justify-center shadow-xl transition-all ${
                    selectedUnit === 'ventures'
                      ? 'border-[#f59e0b] ring-4 ring-amber-200'
                      : 'border-slate-200 hover:border-[#f59e0b]'
                  }`}
                >
                  <TrendingUp className="w-6 h-6 text-[#d97706] mb-1" />
                  <span className="font-bold text-[11px] sm:text-xs text-[#0A192F]">Matrix Ventures</span>
                </div>
              </button>

              {/* 4. Matrix Academy (Bottom-Right) */}
              <button
                type="button"
                onClick={() => handleUnitClick('academy')}
                onMouseEnter={() => setHoveredUnit('academy')}
                onMouseLeave={() => setHoveredUnit(null)}
                className={`absolute bottom-[3%] right-[17%] sm:right-[19%] z-30 transition-all duration-300 cursor-pointer focus:outline-none flex flex-col items-center ${
                  entranceProgress >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  selectedUnit === 'academy'
                    ? 'scale-110 -translate-y-2'
                    : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 flex flex-col items-center justify-center shadow-xl transition-all ${
                    selectedUnit === 'academy'
                      ? 'border-[#00c2ff] ring-4 ring-sky-200'
                      : 'border-slate-200 hover:border-[#00c2ff]'
                  }`}
                >
                  <GraduationCap className="w-6 h-6 text-[#0A192F] mb-1" />
                  <span className="font-bold text-[11px] sm:text-xs text-[#0A192F]">Matrix Academy</span>
                </div>
              </button>

            </div>
          </div>

        </div>

      </div>

      {/* ĐƯỜNG DẪN CYAN KÉO XUỐNG SECTION TIẾP THEO (MATRIX NETWORK) */}
      <div className="w-full flex justify-center mt-14 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#00c2ff] to-[#00c2ff]/30" />
      </div>

    </section>
  );
};
