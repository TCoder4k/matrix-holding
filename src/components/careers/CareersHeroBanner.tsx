import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';

interface CareersHeroBannerProps {
  keyword: string;
  onKeywordChange: (val: string) => void;
  onSearchSubmit: () => void;
}

export const CareersHeroBanner: React.FC<CareersHeroBannerProps> = ({
  keyword,
  onKeywordChange,
  onSearchSubmit,
}) => {
  const [entranceStage, setEntranceStage] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [statsCount, setStatsCount] = useState({ jobs: 0, companies: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sampleSuggestions = [
    'Chuyên viên Phân tích Tài chính',
    'Chuyên viên Kế toán Tổng hợp',
    'Chuyên viên Pháp lý',
    'Chuyên viên Nghiên cứu',
    'Matrix Finance',
    'Matrix Accounting',
  ];

  const filteredSuggestions = sampleSuggestions.filter((s) =>
    s.toLowerCase().includes(keyword.toLowerCase())
  );

  // Entrance animation stages (1 to 5 within 1.5s)
  useEffect(() => {
    // Stage 1: Navy background ready immediately
    setEntranceStage(1);
    // Stage 2: Kicker fades in 300ms
    const t1 = setTimeout(() => setEntranceStage(2), 250);
    // Stage 3: Title slides up 20px
    const t2 = setTimeout(() => setEntranceStage(3), 500);
    // Stage 4: 3 photo slices reveal with 100ms stagger
    const t3 = setTimeout(() => setEntranceStage(4), 800);
    // Stage 5: Cyan line drawn, stats count-up
    const t4 = setTimeout(() => {
      setEntranceStage(5);
      // Run stats counter from 0 to 13 and 5 in 600ms
      let frame = 0;
      const totalFrames = 24;
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setStatsCount({
          jobs: Math.min(13, Math.round(progress * 13)),
          companies: Math.min(5, Math.round(progress * 5)),
        });
        if (frame >= totalFrames) clearInterval(interval);
      }, 25);
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        setScrollY(-top * 0.15);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSuggestion = (val: string) => {
    onKeywordChange(val);
    setShowSuggestions(false);
    onSearchSubmit();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearchSubmit();
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 bg-[#051120] text-white overflow-hidden select-none"
    >
      {/* NỀN CHỮ WIREFRAME "NEXT" MỜ KHỔNG LỒ PHÍA SAU */}
      <div
        className="absolute right-4 lg:right-20 top-4 pointer-events-none select-none opacity-20 hidden lg:block"
        style={{ transform: `translate3d(0, ${scrollY * 0.5}px, 0)` }}
      >
        <svg width="600" height="260" viewBox="0 0 600 260" fill="none">
          <text
            x="50"
            y="200"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="220"
            fontWeight="900"
            stroke="#38bdf8"
            strokeWidth="2"
            fill="transparent"
            letterSpacing="12"
          >
            NEXT
          </text>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* CỘT TRÁI (6 CỘT): TIÊU ĐỀ, TÌM KIẾM & THỐNG KÊ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Kicker: MATRIX HOLDING CAREERS */}
            <div
              className={`flex items-center gap-2 mb-4 transition-all duration-500 ${
                entranceStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <span className="text-[#00c2ff] font-bold text-xs tracking-widest uppercase">
                MATRIX HOLDING CAREERS
              </span>
              <span className="w-8 h-[1.5px] bg-[#d97706]" />
            </div>

            {/* Tiêu đề 2 dòng: Cơ hội phù hợp cho / hành trình tiếp theo của bạn. */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.14] text-white mb-4 transition-all duration-700 ${
                entranceStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Cơ hội phù hợp cho <br />
              <span className="text-[#00c2ff]">hành trình tiếp theo</span> của bạn.
            </h1>

            {/* Phụ đề */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
              Khám phá các vị trí từ Matrix Holding và doanh nghiệp trong hệ sinh thái.
            </p>

            {/* Ô TÌM KIẾM PILL CÓ NÚT CYAN */}
            <div className="relative max-w-xl mb-6">
              <form onSubmit={handleFormSubmit} className="relative">
                <div
                  className={`w-full bg-white rounded-full p-2 pl-5 pr-2.5 flex items-center gap-3 shadow-2xl transition-all duration-200 ${
                    isFocused ? 'ring-3 ring-[#00c2ff]' : 'ring-1 ring-slate-200'
                  }`}
                >
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={keyword}
                    onFocus={() => {
                      setIsFocused(true);
                      if (keyword) setShowSuggestions(true);
                    }}
                    onBlur={() => {
                      setIsFocused(false);
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    onChange={(e) => {
                      onKeywordChange(e.target.value);
                      setShowSuggestions(true);
                    }}
                    placeholder="Tìm vị trí, công ty hoặc phòng ban"
                    className="w-full bg-transparent text-[#0d1d2f] placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-md shrink-0 active:scale-98"
                  >
                    <span>Tìm việc</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Danh sách gợi ý trượt xuống 8px */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {filteredSuggestions.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onMouseDown={() => handleSelectSuggestion(item)}
                      className="w-full text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#00c2ff] transition-colors flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CÁC CON SỐ THỐNG KÊ: 13 vị trí | 5 doanh nghiệp */}
            <div className="flex items-center gap-6 text-sm mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#00c2ff] font-mono">
                  {statsCount.jobs}
                </span>
                <span className="text-xs text-slate-300 font-medium">vị trí đang tuyển</span>
              </div>

              <span className="h-6 w-[1px] bg-slate-700" />

              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#00c2ff] font-mono">
                  {statsCount.companies}
                </span>
                <span className="text-xs text-slate-300 font-medium">doanh nghiệp trên trang</span>
              </div>
            </div>

            {/* Ghi chú nhỏ */}
            <span className="text-[11px] text-slate-500 flex items-center gap-1">
              <span>ⓘ</span> Dữ liệu minh họa
            </span>

          </div>

          {/* CỘT PHẢI (6 CỘT): BA LÁT ẢNH DỌC VƯƠN CAO VÀ ĐƯỜNG CONG ÁNH SÁNG CYAN */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px]">
            <div className="relative w-full max-w-[580px] h-[360px] sm:h-[440px] flex items-center justify-center gap-3 sm:gap-4 overflow-visible">
              
              {/* Lát ảnh 1: Nam quản lý trẻ tự tin bên cao ốc kính */}
              <div
                className={`relative w-1/3 h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 ease-out ${
                  entranceStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transform: `translate3d(0, ${scrollY * 0.8}px, 0)`,
                  transitionDelay: '0ms',
                }}
              >
                <img
                  src="/src/assets/images/matrix_executive_office_1790857252584.jpg"
                  alt="Nhân sự Matrix Holding 1"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051120]/80 via-transparent to-transparent" />
              </div>

              {/* Lát ảnh 2 (Nâng cao hơn): Nữ chuyên viên rạng rỡ với laptop */}
              <div
                className={`relative w-1/3 h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/30 transition-all duration-700 ease-out -translate-y-4 ${
                  entranceStage >= 4 ? 'opacity-100' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transform: `translate3d(0, ${-16 + scrollY * 1.2}px, 0)`,
                  transitionDelay: '100ms',
                }}
              >
                <img
                  src="/src/assets/images/matrix_creative_desk_1790825075738.jpg"
                  alt="Nhân sự Matrix Holding 2"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051120]/60 via-transparent to-transparent" />
              </div>

              {/* Lát ảnh 3: Kỹ sư/Chuyên viên phân tích nhìn ra trụ sở Matrix Holding */}
              <div
                className={`relative w-1/3 h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 ease-out ${
                  entranceStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transform: `translate3d(0, ${scrollY * 0.9}px, 0)`,
                  transitionDelay: '200ms',
                }}
              >
                <img
                  src="/src/assets/images/matrix_team_meeting_1790857862728.jpg"
                  alt="Nhân sự Matrix Holding 3"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051120]/80 via-transparent to-transparent" />

                {/* Nhãn tòa nhà Matrix Holding góc dưới */}
                <div className="absolute bottom-3 right-3 text-right pointer-events-none">
                  <span className="text-[10px] font-black tracking-widest text-amber-400 block uppercase">
                    MATRIX
                  </span>
                  <span className="text-[9px] font-bold text-white tracking-wider block uppercase">
                    HOLDING
                  </span>
                </div>
              </div>

              {/* ĐƯỜNG CONG ÁNH SÁNG CYAN UỐN LƯỢN QUA VÙNG ẢNH KẾT THÚC GẦN Ô TÌM KIẾM */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <svg className="w-full h-full" viewBox="0 0 580 440" fill="none">
                  <path
                    d="M 50 420 C 180 380, 360 410, 560 300"
                    stroke="#00c2ff"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    opacity={entranceStage >= 5 ? 0.9 : 0}
                    className="transition-opacity duration-700"
                  />
                  {entranceStage >= 5 && (
                    <circle cx="0" cy="0" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #00c2ff)">
                      <animateMotion path="M 50 420 C 180 380, 360 410, 560 300" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
