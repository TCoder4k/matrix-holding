import { useState } from 'react';
import { ArrowUpRight, Cpu, Wind, Building2, TrendingUp } from 'lucide-react';
import { BUSINESS_SECTORS } from '../data/conglomerateData';
import { BusinessSector } from '../types';

interface SectorsShowcaseProps {
  onSelectSector: (sector: BusinessSector) => void;
  lang: 'vi' | 'en';
}

export default function SectorsShowcase({ onSelectSector, lang }: SectorsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'technology-semiconductor':
        return <Cpu className="w-5 h-5" />;
      case 'green-energy':
        return <Wind className="w-5 h-5" />;
      case 'industrial-real-estate':
        return <Building2 className="w-5 h-5" />;
      case 'capital-finance':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const filteredSectors = selectedCategory === 'all'
    ? BUSINESS_SECTORS
    : BUSINESS_SECTORS.filter((s) => s.id === selectedCategory);

  return (
    <section id="sectors" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {lang === 'vi' ? 'HỆ SINH THÁI TẬP ĐOÀN' : 'BUSINESS PORTFOLIO'}
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 text-balance">
              {lang === 'vi'
                ? '4 Trụ Cột Chiến Lược Thúc Đẩy Tăng Trưởng Toàn Cầu'
                : '4 Strategic Pillars Driving Global Sustainable Growth'}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'vi'
              ? 'Tận dụng hiệp lực liên ngành để giải quyết những thách thức lớn nhất của thời đại: an ninh năng lượng xanh, tự chủ bán dẫn và tối ưu hóa hạ tầng kinh tế.'
              : 'Harnessing cross-sector synergies to solve critical modern challenges: clean energy security, chip sovereignty, and resilient industrial infrastructure.'}
          </p>
        </div>

        {/* Filter Bar (Buttons with active states, clean segmented layout) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-slate-950 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {lang === 'vi' ? 'Tất Cả 4 Trụ Cột' : 'All 4 Pillars'}
          </button>
          {BUSINESS_SECTORS.map((sector) => (
            <button
              key={sector.id}
              type="button"
              onClick={() => setSelectedCategory(sector.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === sector.id
                  ? 'bg-slate-950 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {getSectorIcon(sector.id)}
              <span>{lang === 'vi' ? sector.name : sector.englishName.split(' ')[1] || sector.name}</span>
            </button>
          ))}
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSectors.map((sector, idx) => (
            <div
              key={sector.id}
              className="group bg-[#F8FAFC] border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Media Slot with Fallback Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={sector.image}
                  alt={sector.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Sector Index & Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-mono font-bold tracking-wider text-slate-200">
                    0{idx + 1}. PILLAR
                  </span>
                  <div className="p-1.5 bg-black/40 backdrop-blur-md rounded text-white">
                    {getSectorIcon(sector.id)}
                  </div>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-slate-300">
                    {sector.englishName}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mt-1 text-white">
                    {lang === 'vi' ? sector.name : sector.englishName}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {sector.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Quantitative Metrics (Tabular figures, clean unboxed typography) */}
                  <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-2 gap-4">
                    {sector.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Subsidiaries list preview */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      {lang === 'vi' ? 'Đơn vị thành viên tiêu biểu:' : 'Key Subsidiaries:'}
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-600">
                      {sector.subsidiaries.map((sub, sIdx) => (
                        <div key={sub.name} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400" />
                          <span className="font-medium text-slate-800">{sub.name}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 truncate">{sub.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Card Action */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {lang === 'vi' ? `${sector.keyProjects.length} Dự án trọng điểm` : `${sector.keyProjects.length} Flagship Projects`}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectSector(sector)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-950 hover:text-slate-700 transition-colors"
                  >
                    <span>{lang === 'vi' ? 'Xem Hồ Sơ Chi Tiết' : 'View Full Dossier'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
