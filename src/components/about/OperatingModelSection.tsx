import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface UnitItem {
  id: string;
  name: string;
  title: string;
  description: string;
  badge: string;
  color: string;
}

export const OperatingModelSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>('connect');

  const units: Record<string, UnitItem> = {
    network: {
      id: 'network',
      name: 'MATRIX NETWORK',
      badge: 'DỊCH VỤ DOANH NGHIỆP',
      title: 'Hệ sinh thái dịch vụ toàn diện',
      description: 'Cung cấp bộ giải pháp trọn gói từ tư vấn chiến lược, pháp lý, kế toán quản trị đến chuyển đổi số cho doanh nghiệp.',
      color: '#0284c7',
    },
    connect: {
      id: 'connect',
      name: 'MATRIX CONNECT',
      badge: 'KẾT NỐI KINH DOANH',
      title: 'Kết nối doanh nghiệp',
      description: 'Tạo dựng cầu nối giữa doanh nghiệp, mở rộng cơ hội hợp tác và phát triển bền vững trong hệ sinh thái Matrix.',
      color: '#00c2ff',
    },
    ventures: {
      id: 'ventures',
      name: 'MATRIX VENTURES',
      badge: 'ĐẦU TƯ & TÀI CHÍNH',
      title: 'Vườn ươm & Đầu tư vốn mạo hiểm',
      description: 'Hỗ trợ vốn chiến lược, thẩm định tài chính và thúc đẩy các startup tiềm năng tăng tốc mở rộng quy mô.',
      color: '#f59e0b',
    },
    academy: {
      id: 'academy',
      name: 'MATRIX ACADEMY',
      badge: 'ĐÀO TẠO & NHÂN LỰC',
      title: 'Đào tạo lãnh đạo & Nhân tài',
      description: 'Học viện đào tạo thực chiến, nâng cao năng lực quản trị cho ban điều hành và thế hệ lãnh đạo kế thừa.',
      color: '#d97706',
    },
  };

  const currentUnit = units[selectedUnitId] || units.connect;
  const unitKeys = Object.keys(units);

  const handleNextUnit = () => {
    const currentIndex = unitKeys.indexOf(selectedUnitId);
    const nextIndex = (currentIndex + 1) % unitKeys.length;
    setSelectedUnitId(unitKeys[nextIndex]);
  };

  const handlePrevUnit = () => {
    const currentIndex = unitKeys.indexOf(selectedUnitId);
    const prevIndex = (currentIndex - 1 + unitKeys.length) % unitKeys.length;
    setSelectedUnitId(unitKeys[prevIndex]);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ & CARD MÔ TẢ ĐƠN VỊ ĐƯỢC CHỌN */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
                MÔ HÌNH HOẠT ĐỘNG
              </span>
            </div>

            {/* Tiêu đề */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-4">
              Liên kết năng lực.<br />
              <span className="text-[#009fe3]">Vận hành đồng bộ.</span>
            </h2>

            {/* Đoạn giới thiệu */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Matrix Holding kiến tạo hệ sinh thái với các mảnh ghép bổ trợ, cùng chung tầm nhìn, khác biệt về chức năng và cộng hưởng về giá trị. Chúng tôi liên kết năng lực, vận hành đồng bộ để tạo ra nhiều cơ hội hơn cho doanh nghiệp và cộng đồng.
            </p>

            {/* Nút điều hướng đơn vị */}
            <div className="flex items-center gap-2 mb-4">
              <button
                type="button"
                onClick={handlePrevUnit}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#009fe3] text-slate-500 hover:text-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đơn vị trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextUnit}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-[#009fe3] text-slate-500 hover:text-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đơn vị tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* CARD THÔNG TIN ĐƠN VỊ ĐANG CHỌN (Khớp ảnh mẫu) */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative overflow-hidden transition-all duration-300">
              <span className="text-[#d97706] font-bold text-xs uppercase tracking-wider block mb-1">
                {currentUnit.name}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1d2f] tracking-tight mb-2">
                {currentUnit.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {currentUnit.description}
              </p>
              <button
                type="button"
                className="text-xs font-bold text-[#009fe3] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Khám phá</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* CỘT PHẢI: MÔ HÌNH ISOMETRIC 3D CAMPUS MATRIX */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[420px] sm:min-h-[480px]">
            <div className="relative w-full max-w-[580px] aspect-[4/3] flex items-center justify-center">
              
              {/* Sơ đồ liên kết SVG các cầu nối trên không */}
              <svg viewBox="0 0 580 440" className="w-full h-full overflow-visible" fill="none">
                {/* Đường nối từ Holding (Tâm: 290, 220) tới 4 đơn vị */}
                {/* 1. Nối Network (Top-Left: 140, 90) */}
                <path d="M 290 220 L 150 110" stroke="#00c2ff" strokeWidth={selectedUnitId === 'network' ? '4' : '2'} opacity="0.8" />
                {/* 2. Nối Ventures (Top-Right: 430, 90) */}
                <path d="M 290 220 L 430 110" stroke="#f59e0b" strokeWidth={selectedUnitId === 'ventures' ? '4' : '2'} opacity="0.8" />
                {/* 3. Nối Connect (Bottom-Left: 140, 330) */}
                <path d="M 290 220 L 150 330" stroke="#00c2ff" strokeWidth={selectedUnitId === 'connect' ? '4' : '2'} opacity="0.8" />
                {/* 4. Nối Academy (Bottom-Right: 430, 330) */}
                <path d="M 290 220 L 430 330" stroke="#d97706" strokeWidth={selectedUnitId === 'academy' ? '4' : '2'} opacity="0.8" />

                {/* Hạt photon di chuyển */}
                <circle cx="0" cy="0" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 6px #00c2ff)">
                  <animateMotion path="M 290 220 L 150 330" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* TÂM GIỮA: MATRIX HOLDING HUB */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-32 h-24 sm:w-36 sm:h-28 rounded-2xl bg-[#071629] border-2 border-amber-400/80 shadow-2xl flex flex-col items-center justify-center p-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-1">
                    <span className="font-black text-lg font-mono">M</span>
                  </div>
                  <span className="font-black text-xs sm:text-sm tracking-tight">Matrix Holding</span>
                </div>
              </div>

              {/* 4 ĐƠN VỊ VỆ TINH BAO QUANH */}
              {/* 1. Matrix Network (Top-Left) */}
              <div
                onClick={() => setSelectedUnitId('network')}
                className={`absolute top-6 left-6 sm:top-8 sm:left-10 z-10 cursor-pointer transition-all duration-300 ${
                  selectedUnitId === 'network' ? 'scale-110' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="w-28 sm:w-32 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-2">
                  <div className="w-6 h-6 rounded-md bg-sky-100 text-[#0284c7] flex items-center justify-center mb-1 text-xs font-bold">
                    N
                  </div>
                  <span className="font-bold text-[11px] sm:text-xs text-[#0d1d2f]">Matrix Network</span>
                </div>
              </div>

              {/* 2. Matrix Ventures (Top-Right) */}
              <div
                onClick={() => setSelectedUnitId('ventures')}
                className={`absolute top-6 right-6 sm:top-8 sm:right-10 z-10 cursor-pointer transition-all duration-300 ${
                  selectedUnitId === 'ventures' ? 'scale-110' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="w-28 sm:w-32 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-2">
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-600 flex items-center justify-center mb-1 text-xs font-bold">
                    V
                  </div>
                  <span className="font-bold text-[11px] sm:text-xs text-[#0d1d2f]">Matrix Ventures</span>
                </div>
              </div>

              {/* 3. Matrix Connect (Bottom-Left) */}
              <div
                onClick={() => setSelectedUnitId('connect')}
                className={`absolute bottom-6 left-6 sm:bottom-8 sm:left-10 z-10 cursor-pointer transition-all duration-300 ${
                  selectedUnitId === 'connect' ? 'scale-110' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="w-28 sm:w-32 h-20 rounded-2xl bg-white border-2 border-[#00c2ff] shadow-xl flex flex-col items-center justify-center p-2 ring-4 ring-sky-100">
                  <div className="w-6 h-6 rounded-md bg-sky-100 text-[#00c2ff] flex items-center justify-center mb-1 text-xs font-bold">
                    C
                  </div>
                  <span className="font-bold text-[11px] sm:text-xs text-[#0d1d2f]">Matrix Connect</span>
                </div>
              </div>

              {/* 4. Matrix Academy (Bottom-Right) */}
              <div
                onClick={() => setSelectedUnitId('academy')}
                className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-10 cursor-pointer transition-all duration-300 ${
                  selectedUnitId === 'academy' ? 'scale-110' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <div className="w-28 sm:w-32 h-20 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-2">
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center mb-1 text-xs font-bold">
                    A
                  </div>
                  <span className="font-bold text-[11px] sm:text-xs text-[#0d1d2f]">Matrix Academy</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
