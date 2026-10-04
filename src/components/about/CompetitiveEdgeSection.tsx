import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface EdgeLayer {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
}

export const CompetitiveEdgeSection: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  const layers: EdgeLayer[] = [
    {
      id: 'e1',
      num: '01',
      title: 'Kết nối nguồn lực',
      desc: 'Khai mở tiềm năng từ sự kết nối đa chiều, tạo nền tảng vững chắc cho những cơ hội lớn hơn.',
      image: '/src/assets/images/matrix_skyscraper_glass_1790826612996.jpg',
    },
    {
      id: 'e2',
      num: '02',
      title: 'Phối hợp chuyên môn',
      desc: 'Hài hòa giữa các lĩnh vực, kiến tạo giải pháp toàn diện và bền vững.',
      image: '/src/assets/images/matrix_towers_financial_1790822854522.jpg',
    },
    {
      id: 'e3',
      num: '03',
      title: 'Đồng hành phát triển',
      desc: 'Cùng kiến tạo giá trị dài hạn, vì những mục tiêu lớn hơn trong tương lai.',
      image: '/src/assets/images/matrix_curved_facade_1790829793623.jpg',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#050f1c] text-white relative overflow-hidden select-none border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#d97706]" />
              <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                LỢI THẾ CẠNH TRANH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight">
              Sức mạnh đến từ <span className="text-[#f59e0b]">sự liên kết.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm max-w-xs font-normal">
            Mỗi năng lực góp phần tạo nên giá trị chung.
          </p>
        </div>

        {/* 3 LỚP KÍNH XẾP CHỒNG (OVERLAPPING GLASS LAYERS) TRONG KHÔNG GIAN 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center mb-10">
          {layers.map((layer, idx) => {
            const isActive = activeLayerIndex === idx;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveLayerIndex(idx)}
                className={`relative rounded-3xl overflow-hidden p-7 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] cursor-pointer transition-all duration-500 border ${
                  isActive
                    ? 'border-[#00c2ff] bg-gradient-to-t from-[#061527] via-[#061527]/80 to-transparent shadow-[0_15px_40px_rgba(0,194,255,0.25)] scale-102 z-20'
                    : 'border-slate-800 bg-[#071629]/70 hover:border-slate-700 opacity-75 hover:opacity-100 z-10'
                }`}
              >
                {/* Ảnh kiến trúc kính phản chiếu */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                  <img
                    src={layer.image}
                    alt={layer.title}
                    className="w-full h-full object-cover opacity-35 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-[#061527]/70 to-[#061527]/90" />
                </div>

                {/* Phần trên: Số thứ tự */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-sky-400 tracking-wider">
                      {layer.num}
                    </span>
                    <span className="w-8 h-[1px] bg-sky-400/60" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                    {layer.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
                    {layer.desc}
                  </p>
                </div>

                {/* Phần đáy: Nút mũi tên tròn */}
                <div className="relative z-10 pt-6 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      isActive
                        ? 'border-[#00c2ff] text-[#00c2ff] bg-sky-950/60'
                        : 'border-slate-700 text-slate-400'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PHÂN TRANG Ở ĐÁY: 01 — 02 — 03 */}
        <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-wider">
          {layers.map((l, i) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveLayerIndex(i)}
              className={`cursor-pointer transition-colors pb-1 border-b-2 ${
                activeLayerIndex === i
                  ? 'border-[#f59e0b] text-[#f59e0b]'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {l.num}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
