import React, { useState, useEffect, useRef } from 'react';

interface BrandStorySectionProps {
  onExplore?: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = () => {
  const [activeStage, setActiveStage] = useState<'start' | 'connect' | 'grow'>('connect');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      key: 'start' as const,
      label: 'Khởi đầu',
      title: 'Từ một ý niệm tiên phong.',
      highlight: 'Kiến tạo nền móng vững chắc.',
      subtitle: 'Khởi nguồn từ tầm nhìn kết nối các nguồn lực kinh doanh.',
      description:
        'Hành trình của Matrix Holding khởi sắc từ khát vọng của những người sáng lập trẻ tuổi: xây dựng một bệ phóng thực chất, giải quyết điểm nghẽn về vốn, pháp lý và công nghệ cho các doanh nghiệp khởi nghiệp.',
    },
    {
      key: 'connect' as const,
      label: 'Kết nối',
      title: 'Từ một kết nối.',
      highlight: 'Đến một hệ sinh thái.',
      subtitle: 'Mỗi kết nối mở ra một hành trình mới.',
      description:
        'Chúng tôi tin rằng mọi giá trị lớn đều bắt đầu từ những kết nối đúng thời điểm. Từ con người, ý tưởng đến cơ hội, Matrix Holding kiến tạo một hệ sinh thái nơi những kết nối hôm nay trở thành nền tảng cho những giá trị bền vững mai sau.',
    },
    {
      key: 'grow' as const,
      label: 'Phát triển',
      title: 'Hợp lực vươn tầm.',
      highlight: 'Kiến tạo tương lai thịnh vượng.',
      subtitle: 'Cùng nhau bứt phá quy mô và mở rộng thị trường quốc tế.',
      description:
        'Hệ sinh thái Matrix Holding hiện nay quy tụ hơn 8 đơn vị chuyên biệt, hỗ trợ hàng trăm doanh nghiệp thành viên tối ưu chi phí vận hành, tiếp cận các quỹ đầu tư uy tín và ứng dụng trí tuệ nhân tạo toàn diện.',
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
    setMouseOffset({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none"
    >
      {/* Nền chữ MATRIX wireframe mờ lớn phía sau */}
      <div className="absolute right-0 top-6 pointer-events-none select-none opacity-30 hidden lg:block">
        <svg width="600" height="240" viewBox="0 0 600 240" fill="none">
          <text
            x="50"
            y="180"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="180"
            fontWeight="900"
            stroke="#94a3b8"
            strokeWidth="1.5"
            fill="transparent"
            letterSpacing="8"
          >
            MATRIX
          </text>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: NỘI DUNG CHỮ THEO CHƯƠNG */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Nhãn nhỏ: CÂU CHUYỆN THƯƠNG HIỆU */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
                CÂU CHUYỆN THƯƠNG HIỆU
              </span>
            </div>

            {/* Tiêu đề chính lớn */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-3 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {currentStageData.title} <br />
              <span className="text-[#009fe3]">{currentStageData.highlight}</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-[#0d1d2f] font-bold text-lg sm:text-xl tracking-tight mb-5">
              {currentStageData.subtitle}
            </p>

            {/* Mô tả chi tiết */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 transition-opacity duration-300">
              {currentStageData.description}
            </p>

            {/* THANH TIẾN TRÌNH 3 MỐC: Khởi đầu — Kết nối — Phát triển */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-2 max-w-md">
              {stages.map((stage, idx) => {
                const isActive = activeStage === stage.key;
                return (
                  <button
                    key={stage.key}
                    type="button"
                    onClick={() => setActiveStage(stage.key)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-[#009fe3] bg-white ring-4 ring-sky-100'
                            : 'border-slate-300 bg-white group-hover:border-slate-400'
                        }`}
                      >
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-[#009fe3] m-auto mt-[2px]" />
                        )}
                      </div>
                      {idx < stages.length - 1 && (
                        <div className="w-16 sm:w-24 h-[1.5px] bg-slate-200 ml-4 hidden sm:block pointer-events-none" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-bold tracking-wider transition-colors ${
                        isActive ? 'text-[#0d1d2f]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CỘT PHẢI: BA LÁT ẢNH GHÉP VÀO NHAU (SLICES PHOTO) VỚI PARALLAX THEO CHUỘT */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[620px] h-[360px] sm:h-[420px] flex items-center justify-center gap-3 sm:gap-4 overflow-visible">
              
              {/* Lát ảnh 1 (Trái): Khúc sông & Cầu ban mai */}
              <div
                className={`relative w-1/3 h-full rounded-2xl overflow-hidden shadow-xl border border-white/60 transition-all duration-700 ease-out ${
                  isIntersecting ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 -rotate-3'
                }`}
                style={{
                  transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0)`,
                }}
              >
                <img
                  src="/src/assets/images/matrix_skyscraper_glass_1790826612996.jpg"
                  alt="Matrix Vision Slice 1"
                  className="w-full h-full object-cover object-left scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/60 via-transparent to-transparent" />
              </div>

              {/* Lát ảnh 2 (Giữa): Toàn cảnh thành phố hiện đại và dòng sông thịnh vượng */}
              <div
                className={`relative w-1/3 h-full rounded-2xl overflow-hidden shadow-2xl border border-white/80 transition-all duration-700 ease-out z-10 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
                }`}
                style={{
                  transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) scale(${
                    activeStage === 'connect' ? 1.04 : 1
                  })`,
                }}
              >
                <img
                  src="/src/assets/images/matrix_towers_financial_1790822854522.jpg"
                  alt="Matrix Vision Slice 2"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/40 via-transparent to-transparent" />
              </div>

              {/* Lát ảnh 3 (Phải): Tòa nhà công viên trên cao & Trụ sở Matrix */}
              <div
                className={`relative w-1/3 h-full rounded-2xl overflow-hidden shadow-xl border border-white/60 transition-all duration-700 ease-out ${
                  isIntersecting ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-3'
                }`}
                style={{
                  transform: `translate3d(${mouseOffset.x * 0.9}px, ${mouseOffset.y * 0.9}px, 0)`,
                }}
              >
                <img
                  src="/src/assets/images/matrix_curved_facade_1790829793623.jpg"
                  alt="Matrix Vision Slice 3"
                  className="w-full h-full object-cover object-right scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/60 via-transparent to-transparent" />
              </div>

              {/* Sợi chỉ ánh sáng cyan cong kết nối xuyên suốt 3 lát ảnh */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <svg className="w-full h-full" viewBox="0 0 600 400" fill="none">
                  <path
                    d="M 50 200 C 180 160, 340 240, 560 170"
                    stroke="#00c2ff"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  />
                  <circle cx="230" cy="180" r="4" fill="#00c2ff" />
                  <circle cx="420" cy="205" r="4" fill="#38bdf8" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
