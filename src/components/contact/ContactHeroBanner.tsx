import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface ContactHeroBannerProps {
  onScrollToForm: () => void;
  onScrollToInfo: () => void;
}

export const ContactHeroBanner: React.FC<ContactHeroBannerProps> = ({
  onScrollToForm,
  onScrollToInfo,
}) => {
  const [entranceStage, setEntranceStage] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Chuỗi xuất hiện 1 - 1.5s
  useEffect(() => {
    setEntranceStage(1); // Nền navy hiển thị ngay
    const t1 = setTimeout(() => setEntranceStage(2), 250); // Dòng "Liên hệ Matrix Holding"
    const t2 = setTimeout(() => setEntranceStage(3), 500); // Tiêu đề trượt từ dưới lên 16-20px
    const t3 = setTimeout(() => setEntranceStage(4), 800); // Hai dải hình tiến về trung tâm
    const t4 = setTimeout(() => setEntranceStage(5), 1100); // Điểm kết nối sáng lên & vẽ đường cyan

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Theo dõi khi banner vào / ra khỏi màn hình để tạm dừng hiệu ứng nền
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax theo chuột (nghiêng 2-3°, dịch chuyển 6-10px)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: -y * 6, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-16 sm:py-24 bg-[#051120] text-white overflow-hidden select-none"
    >
      {/* Vầng sáng nền cyan mờ */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00c2ff]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI (6 CỘT): TIÊU ĐỀ, CTAS & LIÊN HỆ NHANH */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Kicker */}
            <div
              className={`flex items-center gap-2 mb-4 transition-all duration-500 ${
                entranceStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                LIÊN HỆ MATRIX HOLDING
              </span>
            </div>

            {/* Tiêu đề 2 dòng: Một điểm chạm. / Mở nhiều kết nối. */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.14] text-white mb-4 transition-all duration-700 ${
                entranceStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Một điểm chạm.<br />
              <span className="text-[#00c2ff]">Mở nhiều kết nối.</span>
            </h1>

            {/* Phụ đề */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
              Chia sẻ nhu cầu của bạn để bắt đầu trao đổi cùng Matrix Holding.
            </p>

            {/* HAI NÚT CTA HÀNH ĐỘNG (Dùng được ngay, không cần chờ animation) */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Nút chính: Gửi thông tin hợp tác */}
              <button
                type="button"
                onClick={onScrollToForm}
                className="px-7 py-3.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-cyan-500/25 active:scale-98 group"
              >
                <span>Gửi thông tin hợp tác</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Nút phụ: Xem thông tin liên hệ */}
              <button
                type="button"
                onClick={onScrollToInfo}
                className="px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 inline-flex items-center gap-2 transition-all cursor-pointer group"
              >
                <span>Xem thông tin liên hệ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* LIÊN HỆ NHANH Ở ĐÁY: EMAIL & HOTLINE DOANH NGHIỆP */}
            <div className="flex items-center gap-8 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <a
                href="mailto:contact@matrixholding.vn"
                className="inline-flex items-center gap-2.5 hover:text-[#00c2ff] group transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 group-hover:bg-[#00c2ff]/20 flex items-center justify-center text-slate-400 group-hover:text-[#00c2ff] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="border-b border-transparent group-hover:border-[#00c2ff] pb-0.5">
                  Email doanh nghiệp
                </span>
              </a>

              <a
                href="tel:1900888666"
                className="inline-flex items-center gap-2.5 hover:text-[#00c2ff] group transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800/80 group-hover:bg-[#00c2ff]/20 flex items-center justify-center text-slate-400 group-hover:text-[#00c2ff] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="border-b border-transparent group-hover:border-[#00c2ff] pb-0.5">
                  Hotline doanh nghiệp
                </span>
              </a>
            </div>

            {/* Ghi chú nhỏ */}
            <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-4">
              <span>ⓘ</span> Thông tin minh họa
            </span>

          </div>

          {/* CỘT PHẢI (6 CỘT): HAI DẢI HÌNH ĐIÊU KHẮC GẶP NHAU VÀ TẠO ĐIỂM FUSION NEXUS (Khớp ảnh 1) */}
          <div
            className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px] will-change-transform"
            style={{
              transform: `perspective(1000px) rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="relative w-full max-w-[580px] aspect-[16/10] flex items-center justify-center">
              
              {/* SVG 2 DẢI ĐIÊU KHẮC LỤA ÁNH SÁNG & ĐIỂM GẶP NHAU */}
              <svg viewBox="0 0 580 380" className="w-full h-full overflow-visible" fill="none">
                <defs>
                  {/* Gradient dải bên trái (Cyan) */}
                  <linearGradient id="sculpture-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.2" />
                    <stop offset="60%" stopColor="#00c2ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>

                  {/* Gradient dải bên phải (Vàng kim nhẹ) */}
                  <linearGradient id="sculpture-gold" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="60%" stopColor="#fef08a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                  </linearGradient>

                  {/* Vầng hào quang tại tâm nexus */}
                  <radialGradient id="banner-contact-nexus" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#00c2ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. DẢI BÊN TRÁI TIẾN VỀ TÂM (X: 380, Y: 180) */}
                <g
                  className="transition-transform duration-1000 ease-out"
                  style={{
                    transform:
                      entranceStage >= 4
                        ? 'translate(0, 0)'
                        : 'translate(-40px, 0)',
                    opacity: entranceStage >= 4 ? 1 : 0.4,
                  }}
                >
                  <path
                    d="M 20 80 C 140 40, 260 280, 380 180"
                    stroke="url(#sculpture-cyan)"
                    strokeWidth="3.5"
                    opacity="0.9"
                  />
                  <path
                    d="M 40 100 C 160 60, 280 260, 380 180"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    opacity="0.6"
                  />
                  <path
                    d="M 60 120 C 180 80, 300 240, 380 180"
                    stroke="#7dd3fc"
                    strokeWidth="1"
                    opacity="0.35"
                  />
                </g>

                {/* 2. DẢI BÊN PHẢI TIẾN VỀ TÂM */}
                <g
                  className="transition-transform duration-1000 ease-out"
                  style={{
                    transform:
                      entranceStage >= 4
                        ? 'translate(0, 0)'
                        : 'translate(40px, 0)',
                    opacity: entranceStage >= 4 ? 1 : 0.4,
                  }}
                >
                  <path
                    d="M 560 300 C 460 320, 440 80, 380 180"
                    stroke="url(#sculpture-gold)"
                    strokeWidth="3.5"
                    opacity="0.9"
                  />
                  <path
                    d="M 540 280 C 440 300, 420 100, 380 180"
                    stroke="#fbbf24"
                    strokeWidth="1.8"
                    opacity="0.6"
                  />
                </g>

                {/* 3. ĐIỂM FUSION GẶP NHAU PHÁT SÁNG & TỎA VÒNG SÁNG (Stage >= 5) */}
                {entranceStage >= 5 && (
                  <g className="origin-center">
                    {/* Vầng hào quang lan ra */}
                    <circle cx="380" cy="180" r="35" fill="url(#banner-contact-nexus)" className="animate-pulse" />
                    
                    {/* Vòng nhẫn sóng phát ra */}
                    <circle cx="380" cy="180" r="24" stroke="#00c2ff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                    
                    {/* Tâm điểm sáng trắng */}
                    <circle cx="380" cy="180" r="5.5" fill="#ffffff" filter="drop-shadow(0 0 10px #00c2ff)" />
                  </g>
                )}

                {/* 4. ĐƯỜNG CYAN DẪN TỪ ĐIỂM GẶP NHAU VỀ PHÍA CTA BÊN TRÁI */}
                {entranceStage >= 5 && (
                  <g>
                    <path
                      d="M 380 180 C 300 240, 160 260, 20 260"
                      stroke="#00c2ff"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      opacity="0.8"
                    />
                    <circle cx="300" cy="235" r="3.5" fill="#00c2ff" />
                    
                    {/* Điểm sáng photon thỉnh thoảng chạy qua */}
                    {isIntersecting && (
                      <circle cx="0" cy="0" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #00c2ff)">
                        <animateMotion
                          path="M 380 180 C 300 240, 160 260, 20 260"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                )}
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
