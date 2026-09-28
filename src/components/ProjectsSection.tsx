import { useState } from 'react';
import { ArrowRight, Folder } from 'lucide-react';
import { projectCategories } from '../content';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="du-an" className="py-20 sm:py-24 bg-[#081c31] text-white">
      <div className="container-page">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#27d9ef]">
              DỰ ÁN
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Những lĩnh vực chúng tôi đang phát triển
            </h2>
          </div>

          <a
            href="#he-sinh-thai"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#27d9ef] transition-colors whitespace-nowrap"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs using React State */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#27d9ef] text-[#081c31] shadow-sm'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty State / In-Development Display Box matching Mockup */}
        <div className="mt-10 bg-slate-900/60 border border-white/10 rounded-xl p-16 sm:p-24 text-center flex flex-col items-center justify-center space-y-4 shadow-inner">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-2">
            <Folder className="w-8 h-8 text-slate-300 stroke-[1.5]" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white">
            Các dự án đang được cập nhật
          </h3>

          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Vui lòng quay lại trong thời gian tới để khám phá những dự án mới từ MATRIX HOLDING.
          </p>

          {activeCategory !== 'all' && (
            <div className="pt-2 text-xs text-[#27d9ef] font-medium">
              Đang tổng hợp dữ liệu lĩnh vực: {projectCategories.find((c) => c.id === activeCategory)?.label}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
