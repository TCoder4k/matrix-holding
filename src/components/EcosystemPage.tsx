import React, { useState, useEffect } from 'react';
import { PageBanner } from './PageBanner';
import { ArrowRight, Sparkles, Handshake, Building2 } from 'lucide-react';
import { EcosystemRingModel } from './ecosystem/EcosystemRingModel';
import { MatrixNetworkModules } from './ecosystem/MatrixNetworkModules';
import { MatrixConnectWaves } from './ecosystem/MatrixConnectWaves';
import { MatrixVenturesFrames } from './ecosystem/MatrixVenturesFrames';

interface EcosystemPageProps {
  onContactClick: () => void;
  onNavigateHome: () => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({
  onContactClick,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('section-overview');

  const navItems = [
    { id: 'section-overview', label: 'Vòng kết nối' },
    { id: 'section-network', label: 'Matrix Network' },
    { id: 'section-connect', label: 'Matrix Connect' },
    { id: 'section-ventures', label: 'Matrix Ventures' },
    { id: 'section-collab', label: 'Cơ hội hợp tác' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* BANNER TIÊU ĐỀ ĐẦU TRANG THEO THIẾT KẾ ĐÍCH */}
      <PageBanner
        eyebrow="MATRIX HOLDING"
        title="Hệ sinh thái"
        subtitle="Kết nối nguồn lực. Cùng nhau phát triển."
      />

      {/* THANH STICKY PILL NAV ĐIỀU HƯỚNG NHANH CÁC PHẦN HỆ SINH THÁI */}
      <div className="sticky top-20 lg:top-[84px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 overflow-x-auto scrollbar-none flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#061527] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0d1d2f] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. MÔ HÌNH HỆ SINH THÁI — HÌNH THÀNH VÒNG KẾT NỐI (ẢNH 1)                  */}
      {/* ========================================================================= */}
      <EcosystemRingModel onSelectUnitSection={scrollToSection} />

      {/* ========================================================================= */}
      {/* 2. MATRIX NETWORK — NHỮNG MẢNH NĂNG LỰC GHÉP THÀNH MỘT CẤU TRÚC (ẢNH 2)    */}
      {/* ========================================================================= */}
      <MatrixNetworkModules onExplore={() => scrollToSection('section-collab')} />

      {/* ========================================================================= */}
      {/* 3. MATRIX CONNECT — TỪ GẶP GỠ ĐẾN HỢP TÁC (ẢNH 3)                         */}
      {/* ========================================================================= */}
      <MatrixConnectWaves onExplore={() => scrollToSection('section-collab')} />

      {/* ========================================================================= */}
      {/* 4. MATRIX VENTURES — MỞ CÁC LỚP GÓC NHÌN (ẢNH 4)                          */}
      {/* ========================================================================= */}
      <MatrixVenturesFrames onExplore={() => scrollToSection('section-collab')} />

      {/* ========================================================================= */}
      {/* 5. PHẦN KẾT: ĐƯỜNG DẪN CYAN KẾT THÚC GẦN LỜI MỜI LIÊN HỆ HỢP TÁC           */}
      {/* ========================================================================= */}
      <section id="section-collab" className="py-16 sm:py-24 bg-[#071629] text-white relative overflow-hidden border-t border-slate-800">
        
        {/* Điểm kết thúc của đường dẫn cyan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 flex flex-col items-center pointer-events-none">
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#00c2ff] to-[#00c2ff]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00c2ff] shadow-[0_0_10px_#00c2ff]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 text-center">
          <span className="text-[#00c2ff] font-bold text-xs uppercase tracking-widest block mb-3">
            CỘNG HƯỞNG & ĐỒNG HÀNH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-white mb-4 max-w-2xl mx-auto">
            Sẵn sàng mở rộng khả năng cùng <span className="text-[#00c2ff]">Matrix Holding?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Chúng tôi luôn chào đón các doanh nghiệp, tổ chức và nhà đầu tư có chung tầm nhìn, cùng hợp lực để kiến tạo giá trị thịnh vượng bền vững.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="px-8 py-3.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071629] font-black text-sm sm:text-base inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-cyan-500/25 active:scale-98"
            >
              <span>Liên hệ hợp tác ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-800/80 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[#00c2ff] font-bold text-xs block mb-1">Matrix Network</span>
              <p className="text-slate-400 text-xs leading-relaxed">Bộ giải pháp hạ tầng quản trị, pháp trị & tài chính toàn diện.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[#00c2ff] font-bold text-xs block mb-1">Matrix Connect</span>
              <p className="text-slate-400 text-xs leading-relaxed">Cộng đồng kết nối giao thương B2B & liên minh mở rộng doanh thu.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-[#00c2ff] font-bold text-xs block mb-1">Matrix Ventures</span>
              <p className="text-slate-400 text-xs leading-relaxed">Vốn đầu tư chiến lược, thẩm định tài chính & ươm mầm tăng tốc.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
