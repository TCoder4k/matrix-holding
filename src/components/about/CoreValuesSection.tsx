import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ValueItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  colorType: 'amber' | 'cyan' | 'slate' | 'gold';
}

export const CoreValuesSection: React.FC = () => {
  const [activeValueId, setActiveValueId] = useState<string>('02');

  const values: ValueItem[] = [
    {
      id: '01',
      num: '01',
      name: 'Chính trực',
      desc: 'Minh bạch trong quản trị, chuẩn mực trong cam kết và lấy đạo đức kinh doanh làm gốc rễ cho mọi hợp tác.',
      colorType: 'slate',
    },
    {
      id: '02',
      num: '02',
      name: 'Hợp tác',
      desc: 'Cùng chia sẻ nguồn lực và tạo giá trị chung, lấy sự thành công của đối tác làm thước đo tăng trưởng.',
      colorType: 'cyan',
    },
    {
      id: '03',
      num: '03',
      name: 'Đổi mới',
      desc: 'Không ngừng tư duy đột phá, ứng dụng công nghệ lõi và tối ưu hóa giải pháp giải quyết bài toán thị trường.',
      colorType: 'slate',
    },
    {
      id: '04',
      num: '04',
      name: 'Bền vững',
      desc: 'Kiến tạo giá trị trường tồn theo tiêu chuẩn ESG, hài hòa lợi ích doanh nghiệp và trách nhiệm cộng đồng.',
      colorType: 'gold',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f8fafc] text-[#0A192F] relative overflow-hidden select-none border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: DANH SÁCH 4 GIÁ TRỊ CỐT LÕI */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                GIÁ TRỊ CỐT LÕI
              </span>
            </div>

            {/* Tiêu đề */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight text-[#0d1d2f] mb-8">
              Giá trị dẫn lối <br />
              <span className="text-[#0d1d2f]">hành động.</span>
            </h2>

            {/* 4 Mục giá trị */}
            <div className="space-y-4">
              {values.map((v) => {
                const isActive = activeValueId === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setActiveValueId(v.id)}
                    className="cursor-pointer group py-3 border-b border-slate-200/80 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span
                          className={`text-2xl sm:text-3xl font-light font-serif transition-colors ${
                            isActive ? 'text-[#009fe3] font-bold' : 'text-slate-300 group-hover:text-slate-500'
                          }`}
                        >
                          {v.num}
                        </span>

                        <span
                          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                            isActive ? 'text-[#009fe3]' : 'text-slate-700 group-hover:text-[#0d1d2f]'
                          }`}
                        >
                          {v.name}
                        </span>
                      </div>

                      {isActive && (
                        <ArrowRight className="w-5 h-5 text-[#009fe3] animate-pulse" />
                      )}
                    </div>

                    {isActive && (
                      <div className="mt-3 pl-14 sm:pl-16 pr-4">
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* CỘT PHẢI: 4 KHỐI PHA LÊ TƯƠNG TÁC ISOMETRIC */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[380px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center">
              
              {/* Vầng sáng vàng kim mờ phía sau */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />

              {/* Khối 1: Chính trực (Phía trên) */}
              <div
                onClick={() => setActiveValueId('01')}
                className={`absolute top-4 left-1/2 -translate-x-1/2 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-5 shadow-xl border backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activeValueId === '01'
                    ? 'bg-[#00c2ff]/90 text-white border-white scale-110 z-30 shadow-cyan-500/30'
                    : 'bg-white/80 text-slate-800 border-white/90 z-10'
                }`}
                style={{ transform: 'rotate(-12deg)' }}
              >
                <span className="font-bold text-sm tracking-wider uppercase mb-1">Chính trực</span>
                <span className="w-6 h-[1.5px] bg-amber-400" />
              </div>

              {/* Khối 2: Hợp tác (Bên Trái - Vị trí nổi bật màu cyan) */}
              <div
                onClick={() => setActiveValueId('02')}
                className={`absolute top-24 left-6 sm:left-12 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-5 shadow-2xl border backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activeValueId === '02'
                    ? 'bg-[#009fe3] text-white border-white scale-110 z-30 shadow-sky-500/40 ring-4 ring-sky-200'
                    : 'bg-[#009fe3]/80 text-white border-white/60 z-20'
                }`}
                style={{ transform: 'rotate(8deg)' }}
              >
                <span className="font-bold text-sm tracking-wider uppercase mb-1">Hợp tác</span>
                <span className="w-6 h-[1.5px] bg-amber-400" />
              </div>

              {/* Khối 3: Đổi mới (Bên Phải) */}
              <div
                onClick={() => setActiveValueId('03')}
                className={`absolute top-24 right-6 sm:right-12 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-5 shadow-xl border backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activeValueId === '03'
                    ? 'bg-[#00c2ff]/90 text-white border-white scale-110 z-30 shadow-cyan-500/30'
                    : 'bg-white/85 text-slate-800 border-white z-10'
                }`}
                style={{ transform: 'rotate(-5deg)' }}
              >
                <span className="font-bold text-sm tracking-wider uppercase mb-1">Đổi mới</span>
                <span className="w-6 h-[1.5px] bg-amber-400" />
              </div>

              {/* Khối 4: Bền vững (Phía Dưới - Mạ vàng kim) */}
              <div
                onClick={() => setActiveValueId('04')}
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-5 shadow-xl border backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-105 ${
                  activeValueId === '04'
                    ? 'bg-[#d97706] text-white border-white scale-110 z-30 shadow-amber-500/30'
                    : 'bg-amber-50/90 text-amber-900 border-amber-200 z-10'
                }`}
                style={{ transform: 'rotate(10deg)' }}
              >
                <span className="font-bold text-sm tracking-wider uppercase mb-1">Bền vững</span>
                <span className="w-6 h-[1.5px] bg-amber-400" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
