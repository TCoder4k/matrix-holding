import React, { useState, useEffect, useRef } from 'react';
import { Building2, MapPin, Mail, Phone, Copy, Check, Navigation, ChevronRight } from 'lucide-react';

interface CorporateInfoSectionProps {
  onScrollToMap: () => void;
}

export const CorporateInfoSection: React.FC<CorporateInfoSectionProps> = ({ onScrollToMap }) => {
  const [activeRow, setActiveRow] = useState<number>(2); // Mặc định dòng 2 (Email) nổi bật nền cyan nhạt như ảnh 2
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const corporateData = {
    companyName: 'Matrix Holding',
    headquarters: 'Tầng 28, Tòa tháp Tài chính Matrix, Số 1 Phố Doanh Nhân, Hà Nội',
    email: 'contact@matrixholding.vn',
    hotline: '1900 888 666',
    hotlineIntl: '+84 (24) 7300 8888',
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

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section
      ref={containerRef}
      id="section-corporate-info"
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION (Khớp 100% ảnh 2) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="relative">
            {/* Chữ số Watermark 01 mờ khổng lồ */}
            <span className="absolute -top-10 left-0 text-7xl sm:text-8xl font-black text-slate-100 font-mono select-none pointer-events-none -z-10">
              01
            </span>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
                LIÊN HỆ
              </span>
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight">
              Gặp gỡ và kết nối <br />
              cùng <span className="text-[#00c2ff]">chúng tôi.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
            Matrix Holding luôn sẵn sàng lắng nghe và trao đổi cùng bạn về những cơ hội hợp tác phù hợp.
          </p>
        </div>

        {/* BỐ CỤC 2 CỘT: CỘT TRÁI ẢNH ĐẠI SẢNH QUY MÔ / CỘT PHẢI CÁC DÒNG THÔNG TIN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI (6 CỘT): ẢNH ĐẠI SẢNH VĂN PHÒNG QUY MÔ MATRIX HOLDING */}
          <div
            className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 h-[380px] sm:h-[460px] bg-slate-900 transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src="/images/matrix_night_lobby_1790830296234.jpg"
              alt="Đại sảnh Matrix Holding"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Dòng chữ nẹp góc chân ảnh */}
            <div className="absolute bottom-6 left-6 text-white pointer-events-none flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              <span>MATRIX HOLDING</span>
              <span className="w-6 h-[1px] bg-amber-400" />
            </div>
          </div>

          {/* CỘT PHẢI (6 CỘT): CÁC DÒNG THÔNG TIN TƯƠNG TÁC */}
          <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-slate-100">
            
            {/* Dòng 1: Tên doanh nghiệp */}
            <div
              onMouseEnter={() => setActiveRow(0)}
              className={`py-5 px-4 sm:px-6 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                activeRow === 0 ? 'bg-[#f0f9ff]' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeRow === 0 ? 'bg-sky-100 text-[#00c2ff]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-0.5">
                    Tên doanh nghiệp
                  </span>
                  <span className="text-base sm:text-lg font-black text-[#0d1d2f]">
                    {corporateData.companyName}
                  </span>
                </div>
              </div>
            </div>

            {/* Dòng 2: Trụ sở chính */}
            <div
              onMouseEnter={() => setActiveRow(1)}
              className={`py-5 px-4 sm:px-6 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                activeRow === 1 ? 'bg-[#f0f9ff]' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4 flex-1 pr-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    activeRow === 1 ? 'bg-sky-100 text-[#00c2ff]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-0.5">
                    Trụ sở chính
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0d1d2f] leading-snug">
                    {corporateData.headquarters}
                  </span>
                </div>
              </div>

              {/* Nút Chỉ đường */}
              <button
                type="button"
                onClick={onScrollToMap}
                className="text-xs sm:text-sm font-bold text-[#d97706] hover:text-amber-700 flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <Navigation className="w-4 h-4 rotate-45" />
                <span>Chỉ đường</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dòng 3: Email (Active mặc định như ảnh 2) */}
            <div
              onMouseEnter={() => setActiveRow(2)}
              className={`py-5 px-4 sm:px-6 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                activeRow === 2 ? 'bg-[#f0f9ff]' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4 flex-1 pr-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    activeRow === 2 ? 'bg-sky-100 text-[#00c2ff]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-0.5">
                    Email
                  </span>
                  <a
                    href={`mailto:${corporateData.email}`}
                    className="text-sm sm:text-base font-bold text-[#0d1d2f] hover:text-[#00c2ff] transition-colors"
                  >
                    {corporateData.email}
                  </a>
                </div>
              </div>

              {/* Nút Sao chép */}
              <button
                type="button"
                onClick={() => handleCopy(corporateData.email, 'email')}
                className="text-xs sm:text-sm font-bold text-[#00c2ff] hover:text-[#0096c7] flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                {copiedItem === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Dòng 4: Hotline */}
            <div
              onMouseEnter={() => setActiveRow(3)}
              className={`py-5 px-4 sm:px-6 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                activeRow === 3 ? 'bg-[#f0f9ff]' : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4 flex-1 pr-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    activeRow === 3 ? 'bg-sky-100 text-[#00c2ff]' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-0.5">
                    Hotline
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#0d1d2f]">
                    {corporateData.hotline} · {corporateData.hotlineIntl}
                  </span>
                </div>
              </div>

              {/* Nút Gọi ngay */}
              <a
                href={`tel:${corporateData.hotline.replace(/\s+/g, '')}`}
                className="text-xs sm:text-sm font-bold text-[#d97706] hover:text-amber-700 flex items-center gap-1 shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi ngay</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Chú thích cuối */}
            <div className="pt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span>ⓘ Thông tin liên hệ cần được xác nhận trước khi công bố.</span>
              <span className="hidden sm:inline">Thông tin minh họa</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
