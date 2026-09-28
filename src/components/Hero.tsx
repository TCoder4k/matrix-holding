interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="hero" id="dau-trang">
      {/* Dark overlay shade that darkens the left side for crisp white text */}
      <div className="hero-shade" />

      {/* Vertical decorative right badge matching mockup image */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-slate-400/80 font-mono select-none pointer-events-none z-10 text-right uppercase">
        <span className="opacity-40">CON</span>
        <span className="opacity-50">PEOPLE</span>
        <span className="opacity-60">BUSINESS</span>
        <span className="opacity-70">A BETTER</span>
        <span className="text-[#27d9ef] font-bold opacity-90">TOMORROW</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#27d9ef]/60 to-transparent mt-2" />
      </div>

      <div className="container-page hero-content">
        <p className="eyebrow">MATRIX HOLDING · THÀNH LẬP NĂM 2023</p>

        <h1>
          KIẾN TẠO HỆ SINH THÁI
          <span> KINH DOANH ĐA NGÀNH</span>
        </h1>

        <p className="hero-description">
          Kết nối nguồn lực, kiến tạo giá trị bền vững và đồng hành cùng sự phát triển của cộng đồng doanh nghiệp.
        </p>

        <div className="hero-actions">
          <a href="#he-sinh-thai" className="btn-cyan">
            Khám phá hệ sinh thái →
          </a>
          <a
            href="#lien-he"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="btn-outline-white"
          >
            Hợp tác đầu tư ↗
          </a>
        </div>

        {/* Bottom banner kicker matching Image 4 */}
        <div className="pt-16 sm:pt-20 flex items-center gap-3 text-xs tracking-[0.22em] text-slate-300/80 font-semibold uppercase">
          <span>— KẾT NỐI</span>
          <span>— KIẾN TẠO</span>
          <span>— PHÁT TRIỂN BỀN VỮNG —</span>
        </div>
      </div>
    </section>
  );
}
