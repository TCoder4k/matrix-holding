import React, { useState, useEffect } from 'react';

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  eyebrow = 'MATRIX HOLDING',
  title,
  subtitle,
}) => {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      setMounted(true);
      return;
    }

    const timer = setTimeout(() => {
      setMounted(true);
    }, 40);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden select-none py-14 sm:py-16 lg:py-[68px] min-h-[260px] sm:min-h-[280px] lg:min-h-[290px] flex flex-col justify-center"
      style={{
        background: 'linear-gradient(90deg, #03172F 0%, #08294d 48%, #154C78 100%)',
      }}
      aria-label={`Banner trang ${title}`}
    >
      {/* ========================================================================= */}
      {/* TRANG TRÍ PHÍA PHẢI: HÌNH CHỮ NHẬT NGHIÊNG OPACITY 0.05 THEO ẢNH MẪU     */}
      {/* ========================================================================= */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] max-w-[580px] pointer-events-none overflow-hidden hidden sm:block"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-white/[0.05] transform -skew-x-[22deg] translate-x-14 origin-top-right"
        />
      </div>

      {/* ========================================================================= */}
      {/* NỘI DUNG BANNER CĂN TRÁI TRONG CONTAINER CHUNG CỦA WEBSITE               */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-left">
        {/* Eyebrow: MATRIX HOLDING (13–14px, font-weight 600, letter-spacing 3px, cyan nhạt) */}
        <div
          className="text-[#00c2ff] text-[13px] sm:text-[14px] font-semibold tracking-[3px] uppercase transition-all duration-500 ease-out"
          style={{
            opacity: prefersReducedMotion || mounted ? 1 : 0,
            transform: prefersReducedMotion || mounted ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          {eyebrow}
        </div>

        {/* Title: Màu trắng, font-bold 700, 56–60px desktop, line-height 1.15, cách eyebrow 12–16px */}
        <h1
          className="text-white text-3xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-bold tracking-tight leading-[1.15] mt-3 sm:mt-4 transition-all duration-500 ease-out"
          style={{
            opacity: prefersReducedMotion || mounted ? 1 : 0,
            transform: prefersReducedMotion || mounted ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: prefersReducedMotion ? '0ms' : '70ms',
          }}
        >
          {title}
        </h1>

        {/* Subtitle: Trắng xám, 17–18px, line-height 1.6, max-width 850px, cách title 20–24px */}
        <p
          className="text-slate-200 text-base sm:text-[17px] lg:text-[18px] leading-[1.6] max-w-[850px] mt-4 sm:mt-5 transition-all duration-500 ease-out font-normal"
          style={{
            opacity: prefersReducedMotion || mounted ? 1 : 0,
            transform: prefersReducedMotion || mounted ? 'translateY(0)' : 'translateY(8px)',
            transitionDelay: prefersReducedMotion ? '0ms' : '140ms',
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};
