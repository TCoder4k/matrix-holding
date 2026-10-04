import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface MatrixNetworkModulesProps {
  onExplore?: () => void;
}

export const MatrixNetworkModules: React.FC<MatrixNetworkModulesProps> = ({ onExplore }) => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'coordination' | 'solutions'>('capabilities');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      key: 'capabilities' as const,
      label: 'Năng lực',
      desc: 'Quy tụ hơn 50 chuyên gia đầu ngành trong các lĩnh vực quản trị doanh nghiệp, pháp chế, tài chính và công nghệ cao.',
    },
    {
      key: 'coordination' as const,
      label: 'Phối hợp',
      desc: 'Liên kết chặt chẽ các đơn vị thành viên, chia sẻ hạ tầng chung và vận hành nhịp nhàng theo một tiêu chuẩn đồng bộ.',
    },
    {
      key: 'solutions' as const,
      label: 'Giải pháp',
      desc: 'Cung cấp bộ giải pháp toàn diện được may đo riêng cho từng quy mô và giai đoạn phát triển của doanh nghiệp đối tác.',
    },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[0];

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 10, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      id="section-network"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ, MÔ TẢ & TABS TƯƠNG TÁC */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase block mb-3">
              MATRIX NETWORK
            </span>

            {/* Tiêu đề 2 dòng lớn */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-3">
              Kết nối năng lực.<br />
              <span className="text-[#00c2ff]">Mở rộng giải pháp.</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Khám phá năng lực của Matrix Network trong hệ sinh thái Matrix.
            </p>

            {/* Đoạn mô tả theo tab được chọn */}
            <div className="min-h-[50px] mb-6">
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed transition-opacity duration-300">
                {currentTab.desc}
              </p>
            </div>

            {/* Nút hành động chính */}
            <div className="mb-10">
              <button
                type="button"
                onClick={onExplore}
                className="px-7 py-3.5 rounded-full bg-[#071629] hover:bg-[#009fe3] text-white font-bold text-sm inline-flex items-center gap-2.5 transition-colors cursor-pointer shadow-md"
              >
                <span>Khám phá Matrix Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* THANH BỘ 3 TAB: NĂNG LỰC — PHỐI HỢP — GIẢI PHÁP */}
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
                        isActive ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

          </div>

          {/* CỘT PHẢI: MÔ-ĐUN HÌNH HỌC 3D NĂNG LỰC GHÉP VÀO NHAU (Khớp ảnh 2) */}
          <div
            className="lg:col-span-7 flex items-center justify-center relative min-h-[400px] sm:min-h-[460px] will-change-transform"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center">
              
              {/* SVG ĐƯỜNG DẪN ÁNH SÁNG VÀNG KIM & CYAN XUYÊN QUA CÁC ĐIỂM TIẾP XÚC */}
              <svg viewBox="0 0 540 400" className="w-full h-full overflow-visible" fill="none">
                {/* Đường nối giữa các khối (sáng rực khi tab là 'coordination') */}
                <line
                  x1="180"
                  y1="140"
                  x2="290"
                  y2="190"
                  stroke={activeTab === 'coordination' ? '#00c2ff' : '#f59e0b'}
                  strokeWidth={activeTab === 'coordination' ? '3' : '1.8'}
                  opacity={activeTab === 'coordination' ? 1 : 0.75}
                  className="transition-all duration-500"
                />
                <line
                  x1="290"
                  y1="190"
                  x2="420"
                  y2="210"
                  stroke={activeTab === 'coordination' ? '#00c2ff' : '#f59e0b'}
                  strokeWidth={activeTab === 'coordination' ? '3' : '1.8'}
                  opacity={activeTab === 'coordination' ? 1 : 0.75}
                  className="transition-all duration-500"
                />
                <line
                  x1="190"
                  y1="280"
                  x2="290"
                  y2="190"
                  stroke={activeTab === 'coordination' ? '#00c2ff' : '#f59e0b'}
                  strokeWidth={activeTab === 'coordination' ? '3' : '1.8'}
                  opacity={activeTab === 'coordination' ? 1 : 0.75}
                  className="transition-all duration-500"
                />

                {/* Vệt photon laser chạy xuyên qua các mô-đun */}
                {isIntersecting && (
                  <circle cx="0" cy="0" r="4" fill="#00c2ff" filter="drop-shadow(0 0 6px #00c2ff)">
                    <animateMotion path="M 180 140 L 290 190 L 420 210" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>

              {/* KHỐI 1 (Trên Trái - Navy): Mô-đun tiến ra ngoài hoặc khớp vào */}
              <div
                className={`absolute top-6 left-12 sm:left-20 w-32 h-36 sm:w-36 sm:h-40 rounded-2xl bg-[#091a2e] border-r-4 border-amber-400 shadow-2xl p-4 flex flex-col justify-between transition-all duration-700 animate-float ${
                  activeTab === 'capabilities'
                    ? 'translate-x-[-15px] translate-y-[-10px] scale-105 z-30 ring-2 ring-sky-300'
                    : 'translate-x-0 translate-y-0 z-10'
                }`}
              >
                <div className="w-6 h-1.5 bg-amber-400 rounded-full" />
                <span className="text-white font-bold text-xs uppercase tracking-wider">Hạ tầng pháp lý</span>
              </div>

              {/* KHỐI 2 (Giữa Trái - Khối pha lê Cyan trong suốt): */}
              <div
                className={`absolute top-28 left-28 sm:left-36 w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#00c2ff]/30 backdrop-blur-md border-2 border-[#00c2ff] shadow-xl p-4 flex flex-col justify-between transition-all duration-700 z-20 animate-float-delayed ${
                  activeTab === 'solutions'
                    ? 'scale-110 shadow-cyan-500/40 ring-4 ring-sky-200'
                    : ''
                }`}
              >
                <div className="w-6 h-1.5 bg-[#00c2ff] rounded-full" />
                <span className="text-[#071629] font-black text-xs uppercase tracking-wider">Giải pháp AI</span>
              </div>

              {/* KHỐI 3 (Dưới Trái - Khối đá hoa cương trắng viền vàng): */}
              <div
                className={`absolute bottom-8 left-16 sm:left-24 w-32 h-36 sm:w-36 sm:h-40 rounded-2xl bg-slate-100 border border-slate-300 border-r-4 border-amber-400 shadow-xl p-4 flex flex-col justify-between transition-all duration-700 animate-float-slow ${
                  activeTab === 'capabilities'
                    ? 'translate-x-[-15px] translate-y-[10px] scale-105 z-30'
                    : 'translate-x-0 translate-y-0 z-10'
                }`}
              >
                <div className="w-6 h-1.5 bg-amber-400 rounded-full" />
                <span className="text-slate-800 font-bold text-xs uppercase tracking-wider">Tài chính & Vốn</span>
              </div>

              {/* CỤM KHỐI TRUNG TÂM & BÊN PHẢI (Cấu trúc hoàn chỉnh các mô-đun gắn kết): */}
              <div className="absolute right-8 sm:right-12 top-10 bottom-10 w-44 sm:w-52 flex flex-col gap-3 justify-center z-10">
                {/* Khối pha lê cyan lớn */}
                <div className="w-full h-28 rounded-2xl bg-[#009fe3]/25 border-2 border-[#00c2ff] backdrop-blur-md shadow-lg p-3 flex flex-col justify-between animate-float">
                  <div className="w-8 h-1 bg-[#00c2ff] rounded-full" />
                  <span className="text-[#071629] font-black text-xs uppercase">Vận hành đồng bộ</span>
                </div>
                {/* Khối đá hoa cương trắng */}
                <div className="w-full h-24 rounded-2xl bg-slate-50 border border-slate-200 border-l-4 border-[#071629] shadow-md p-3 flex flex-col justify-between animate-float-delayed">
                  <div className="w-6 h-1 bg-[#071629] rounded-full" />
                  <span className="text-slate-800 font-bold text-xs uppercase">Kiểm toán nội bộ</span>
                </div>
                {/* Khối navy đáy */}
                <div className="w-full h-24 rounded-2xl bg-[#071629] border-l-4 border-amber-400 shadow-xl p-3 flex flex-col justify-between animate-float-slow">
                  <div className="w-6 h-1 bg-amber-400 rounded-full" />
                  <span className="text-white font-bold text-xs uppercase">Tăng trưởng quy mô</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ĐƯỜNG DẪN CYAN KÉO XUỐNG SECTION TIẾP THEO (MATRIX CONNECT) */}
      <div className="w-full flex justify-center mt-12 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#00c2ff]/30 to-[#00c2ff]" />
      </div>

    </section>
  );
};
