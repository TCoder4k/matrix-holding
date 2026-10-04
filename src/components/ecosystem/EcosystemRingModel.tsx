import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import EcosystemOrbit from './EcosystemOrbit';

interface EcosystemRingModelProps {
  onSelectUnitSection?: (sectionId: string) => void;
}

export const EcosystemRingModel: React.FC<EcosystemRingModelProps> = ({ onSelectUnitSection }) => {
  const [selectedUnit, setSelectedUnit] = useState<'network' | 'connect' | 'ventures' | 'academy'>('connect');

  const unitsData = {
    network: {
      id: 'network',
      name: 'Matrix Network',
      role: 'Dịch vụ doanh nghiệp',
      desc: 'Cung cấp hạ tầng dịch vụ toàn diện từ tư vấn chiến lược, pháp lý, kế toán quản trị đến giải pháp công nghệ chuyển đổi số.',
      sectionId: 'section-network',
    },
    connect: {
      id: 'connect',
      name: 'Matrix Connect',
      role: 'Kết nối doanh nghiệp',
      desc: 'Thúc đẩy hợp tác, mở rộng cơ hội và tạo ra giá trị chung giữa các bên trong hệ sinh thái.',
      sectionId: 'section-connect',
    },
    ventures: {
      id: 'ventures',
      name: 'Matrix Ventures',
      role: 'Đầu tư & Vốn chiến lược',
      desc: 'Hỗ trợ ươm mầm, đầu tư vốn mạo hiểm và tăng tốc quy mô cho các mô hình kinh doanh tiềm năng phát triển vượt bậc.',
      sectionId: 'section-ventures',
    },
    academy: {
      id: 'academy',
      name: 'Matrix Academy',
      role: 'Đào tạo lãnh đạo tinh hoa',
      desc: 'Học viện huấn luyện thực chiến, chuyển giao tri thức quản trị hiện đại và phát triển nguồn nhân lực chất lượng cao.',
      sectionId: 'section-academy',
    },
  };

  const currentUnit = unitsData[selectedUnit] || unitsData.connect;

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
                className="w-full h-13 sm:h-14 py-3.5 px-6 rounded-xl bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071626] font-bold text-sm sm:text-[14.5px] shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]"
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

          {/* CỘT PHẢI (7 CỘT): ECOSYSTEM ORBIT COMPONENT */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            <EcosystemOrbit
              selectedId={selectedUnit}
              onSelect={(id) => setSelectedUnit(id as any)}
            />
          </div>

        </div>

      </div>

      <div className="w-full flex justify-center mt-14 pointer-events-none">
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-[#00c2ff] to-[#00c2ff]/30" />
      </div>

    </section>
  );
};
