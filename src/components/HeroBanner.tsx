import { useState } from 'react';
import { ArrowDown, ArrowRight, FileText, Globe, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/conglomerateData';

interface HeroBannerProps {
  onOpenReport: () => void;
  lang: 'vi' | 'en';
}

export default function HeroBanner({ onOpenReport, lang }: HeroBannerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white pt-24 pb-8 sm:pb-12">
      {/* Background Hero Image - Full Bleed */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {!imageError ? (
          <img
            src={HERO_IMAGE}
            alt="Matrix Holding Corporate Skyscraper Headquarters at Twilight"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out ${
              imageLoaded ? 'opacity-100 filter-none' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Fallback CSS architectural backdrop if image fails to load */}
        {imageError && (
          <div className="w-full h-full bg-radial from-slate-900 via-slate-950 to-black" />
        )}

        {/* Multi-Layer Dark Overlay for Maximum Typography Pop */}
        {/* Layer 1: Dark gradient from bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />

        {/* Layer 2: Subtle radial darkening vignette in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(2,6,23,0.85)_100%)]" />

        {/* Layer 3: Hairline architectural grid pattern for institutional elegance */}
        <div
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area: Headline and Value Proposition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-12 sm:pt-16 pb-12">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Unboxed Kicker Metadata with Typographic Separator */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-slate-300 uppercase">
            <span>{lang === 'vi' ? 'TẬP ĐOÀN ĐA NGÀNH MATRIX' : 'MATRIX HOLDING GROUP'}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>{lang === 'vi' ? 'TIÊN PHONG VỊ THẾ BỀN VỮNG' : 'PIONEERING SUSTAINABLE LEADERSHIP'}</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>{lang === 'vi' ? 'HOSE: MTX' : 'HOSE: MTX'}</span>
          </div>

          {/* Main Headline - Bold Crisp White Typography */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance drop-shadow-sm">
            {lang === 'vi' ? (
              <>
                Định Hình Vị Thế Toàn Cầu Qua <span className="text-slate-100 underline decoration-slate-400/40 underline-offset-8">4 Trụ Cột Chiến Lược</span>
              </>
            ) : (
              <>
                Shaping Global Impact Through <span className="text-slate-100 underline decoration-slate-400/40 underline-offset-8">4 Strategic Pillars</span>
              </>
            )}
          </h1>

          {/* Subhead Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl text-balance">
            {lang === 'vi'
              ? 'Tập đoàn kinh doanh đa ngành tích hợp quy mô quốc tế: Công nghệ cao & Bán dẫn, Năng lượng tái tạo, Bất động sản công nghiệp sinh thái và Dịch vụ tài chính toàn cầu. Hướng tới mục tiêu Net-Zero 2040.'
              : 'A globally diversified conglomerate integrating Advanced Semiconductors, Renewable Clean Energy, Eco-Industrial Logistics, and Global Capital Services. Committed to Net-Zero 2040.'}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#sectors"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all rounded-sm shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <span>{lang === 'vi' ? 'Khám Phá Hệ Sinh Thái' : 'Explore Ecosystem'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenReport}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all rounded-sm whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-slate-300" />
              <span>{lang === 'vi' ? 'Báo Cáo Thường Niên 2026' : 'Annual Report 2026'}</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'vi' ? 'Định mức Tín nhiệm Quốc tế AAA' : 'International AAA Rating'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{lang === 'vi' ? 'Chuẩn mực Quản trị Minh bạch OECD' : 'OECD Governance Standards'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Metric Bar - Quantitative Rigor */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="border-t border-white/15 pt-6 pb-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white tabular-nums">
                $4.8B+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'vi' ? 'Tổng tài sản hợp nhất (USD)' : 'Consolidated Total Assets'}
              </div>
            </div>

            <div>
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white tabular-nums">
                18+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'vi' ? 'Năm phát triển bền vững' : 'Years of Sustainable Growth'}
              </div>
            </div>

            <div>
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white tabular-nums">
                12
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'vi' ? 'Quốc gia & Thị trường chiến lược' : 'Global Operating Markets'}
              </div>
            </div>

            <div>
              <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white tabular-nums">
                15,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'vi' ? 'Nhân sự & Chuyên gia quốc tế' : 'Specialists & Workforce'}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll affordance indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#philosophy"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            aria-label="Cuộn xuống khám phá"
          >
            <span>{lang === 'vi' ? 'Tiếp tục khám phá' : 'Scroll to explore'}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
