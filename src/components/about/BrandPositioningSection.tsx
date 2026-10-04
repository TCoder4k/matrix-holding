import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface BrandPositioningSectionProps {
  onExploreEcosystem?: () => void;
}

export const BrandPositioningSection: React.FC<BrandPositioningSectionProps> = ({ onExploreEcosystem }) => {
  const [selectedConcept, setSelectedConcept] = useState<'resources' | 'connection' | 'value'>('connection');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const concepts = {
    resources: {
      title: 'Nguồn lực',
      subtitle: 'HỘI TỤ NĂNG LỰC, KIẾN TẠO TIỀM NĂNG',
      detail: 'Tập hợp các nguồn lực then chốt từ vốn đầu tư mạo hiểm, hạ tầng pháp chế chuẩn quốc tế đến công nghệ lõi AI.',
    },
    connection: {
      title: 'Kết nối',
      subtitle: 'MỞ RỘNG QUAN HỆ, DẪN LỐI CƠ HỘI',
      detail: 'Kiến tạo cầu nối vững chắc giữa doanh nghiệp thành viên, mạng lưới đối tác chiến lược và thị trường tiềm năng.',
    },
    value: {
      title: 'Giá trị',
      subtitle: 'KIẾN TẠO GIÁ TRỊ, VỮNG BỀN TƯƠNG LAI',
      detail: 'Đo lường thành công bằng sự tăng trưởng bền vững, tối ưu hóa chi phí vận hành và lan tỏa giá trị cộng đồng.',
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.2 }
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
    setTilt({ x: -y * 8, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full py-16 sm:py-24 bg-[#050f1c] text-white relative overflow-hidden select-none"
    >
      {/* Vầng sáng nền tinh tế */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00c2ff]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                ĐỊNH VỊ THƯƠNG HIỆU
              </span>
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
            </div>

            {/* Tiêu đề 2 dòng */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.15] text-white mb-4">
              Một điểm kết nối.<br />
              <span className="text-white">Nhiều hướng phát triển.</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Kết nối các năng lực để mở ra cơ hội hợp tác.
            </p>

            {/* Khối mô tả khái niệm đang chọn */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-8 max-w-md">
              <span className="text-[#00c2ff] font-bold text-xs uppercase tracking-wider block mb-1">
                {concepts[selectedConcept].title}
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {concepts[selectedConcept].detail}
              </p>
            </div>

            {/* Nút CTA Khám phá hệ sinh thái */}
            <div>
              <button
                type="button"
                onClick={onExploreEcosystem}
                className="px-7 py-3 rounded-full bg-slate-900/80 hover:bg-[#00c2ff] text-white hover:text-[#050f1c] font-bold text-sm sm:text-base border border-slate-700 hover:border-[#00c2ff] flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-lg active:scale-98"
              >
                <span>Khám phá hệ sinh thái</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CỘT PHẢI: LOGO MATRIX 3D PHA LÊ & 3 KHÁI NIỆM NỐI QUANH */}
          <div
            className="lg:col-span-7 flex items-center justify-center relative min-h-[420px] sm:min-h-[480px]"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="relative w-full max-w-[560px] aspect-[4/3] flex items-center justify-center">
              
              {/* SVG Đường nối và quỹ đạo quanh logo */}
              <svg viewBox="0 0 560 420" className="w-full h-full overflow-visible" fill="none">
                {/* Vòng elip quỹ đạo */}
                <ellipse cx="280" cy="230" rx="200" ry="60" stroke="#00c2ff" strokeWidth="1" strokeDasharray="3 5" opacity="0.3" transform="rotate(-10 280 230)" />
                <ellipse cx="280" cy="230" rx="160" ry="45" stroke="#38bdf8" strokeWidth="1.2" opacity="0.4" transform="rotate(15 280 230)" />

                {/* Đường nối lên Top: Nguồn lực */}
                <path
                  d="M 280 180 L 280 70"
                  stroke={selectedConcept === 'resources' ? '#00c2ff' : '#00c2ff'}
                  strokeWidth={selectedConcept === 'resources' ? '2.5' : '1.2'}
                  opacity={selectedConcept === 'resources' ? 1 : 0.4}
                />
                <circle cx="280" cy="70" r="4" fill="#00c2ff" />

                {/* Đường nối xuống Dưới Trái: Kết nối */}
                <path
                  d="M 230 250 C 180 270, 150 280, 120 290"
                  stroke={selectedConcept === 'connection' ? '#00c2ff' : '#00c2ff'}
                  strokeWidth={selectedConcept === 'connection' ? '2.5' : '1.2'}
                  opacity={selectedConcept === 'connection' ? 1 : 0.4}
                />
                <circle cx="120" cy="290" r="4" fill="#00c2ff" />

                {/* Đường nối xuống Dưới Phải: Giá trị */}
                <path
                  d="M 330 250 C 380 270, 410 280, 440 290"
                  stroke={selectedConcept === 'value' ? '#00c2ff' : '#00c2ff'}
                  strokeWidth={selectedConcept === 'value' ? '2.5' : '1.2'}
                  opacity={selectedConcept === 'value' ? 1 : 0.4}
                />
                <circle cx="440" cy="290" r="4" fill="#00c2ff" />
              </svg>

              {/* KHỐI LOGO 3D MATRIX CHÍNH THỨC Ở TÂM GIỮA */}
              <div
                className={`relative z-10 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="absolute inset-0 bg-[#00c2ff]/30 blur-[40px] rounded-full pointer-events-none" />
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,194,255,0.45)]">
                  <defs>
                    <linearGradient id="bp-left-stem" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00c2ff" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="bp-center-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0369a1" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="bp-center-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                    <linearGradient id="bp-center-right" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="bp-right-stem" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#075985" />
                    </linearGradient>
                  </defs>

                  <polygon points="14,16 32,16 32,84 14,84" fill="url(#bp-left-stem)" />
                  <polygon points="32,16 50,56 40,66 22,26" fill="url(#bp-center-left)" />
                  <polygon points="46,48 54,48 50,68 46,58" fill="url(#bp-center-gold)" filter="drop-shadow(0 0 8px #f59e0b)" />
                  <polygon points="50,56 68,16 78,26 60,66" fill="url(#bp-center-right)" />
                  <polygon points="68,16 86,16 86,84 68,84" fill="url(#bp-right-stem)" />
                  <polyline points="14,16 32,16 50,56 68,16 86,16" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                </svg>
              </div>

              {/* 3 KHÁI NIỆM GẮN TẠI ĐẦU MÚT */}
              {/* 1. Nguồn lực (Trên) */}
              <div
                onClick={() => setSelectedConcept('resources')}
                className={`absolute top-2 left-1/2 -translate-x-1/2 text-center cursor-pointer transition-all duration-300 ${
                  selectedConcept === 'resources' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="text-white font-bold text-sm block">Nguồn lực</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider block mt-0.5 uppercase">
                  HỘI TỤ NĂNG LỰC, KIẾN TẠO TIỀM NĂNG
                </span>
              </div>

              {/* 2. Kết nối (Dưới Trái) */}
              <div
                onClick={() => setSelectedConcept('connection')}
                className={`absolute bottom-6 left-2 sm:left-6 text-left cursor-pointer transition-all duration-300 ${
                  selectedConcept === 'connection' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="text-white font-bold text-sm block">Kết nối</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider block mt-0.5 uppercase">
                  MỞ RỘNG QUAN HỆ, DẪN LỐI CƠ HỘI
                </span>
              </div>

              {/* 3. Giá trị (Dưới Phải) */}
              <div
                onClick={() => setSelectedConcept('value')}
                className={`absolute bottom-6 right-2 sm:right-6 text-right cursor-pointer transition-all duration-300 ${
                  selectedConcept === 'value' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <span className="text-white font-bold text-sm block">Giá trị</span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider block mt-0.5 uppercase">
                  KIẾN TẠO GIÁ TRỊ, VỮNG BỀN TƯƠNG LAI
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
