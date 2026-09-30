import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section id="ve-chung-toi" className="py-16 sm:py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-100 overflow-hidden relative">
      <div className="container-page">
        {/* ================================================================= */}
        {/* TOP SPLIT: Cột 1 (Intro & 3D Glass Ribbon) + Cột 2 (Sứ mệnh & Tầm nhìn) */}
        {/* Strictly balanced 12-column grid matching target mockup 100%       */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch relative">
          
          {/* --------------------------------------------------------------- */}
          {/* CỘT 1: Left-aligned Content with 3D Translucent Glass Ribbon   */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-6 relative flex flex-col justify-between min-h-[480px] lg:min-h-[520px]">
            {/* Elevated Left-Aligned Content Group */}
            <div className="relative z-10 space-y-6 max-w-xl text-left">
              {/* Eyebrow - Left aligned with horizontal dash */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#00aef0]">
                  VỀ CHÚNG TÔI
                </span>
                <span className="w-8 h-[2px] bg-[#00aef0] inline-block" />
              </div>

              {/* Main Title - Left aligned */}
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 leading-[1.12] tracking-tight text-left">
                Vì những giá trị
                <br />
                <span className="text-[#00aef0]">tốt đẹp hơn</span>
              </h2>

              {/* Paragraph Description - Left aligned */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-left max-w-lg">
                MATRIX HOLDING là hệ sinh thái doanh nghiệp đa ngành, hướng tới kiến tạo những giá trị bền vững thông qua sự cộng hưởng giữa con người, công nghệ và cơ hội, đóng góp tích cực cho cộng đồng và xã hội.
              </p>

              {/* CTA Button with soft cyan glow shadow */}
              <div className="pt-1 text-left">
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="bg-[#041628] hover:bg-[#072440] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-3 shadow-[0_8px_25px_rgba(2,132,199,0.35)] hover:shadow-[0_12px_30px_rgba(2,132,199,0.5)] hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High-Fidelity 3D Translucent Glass Ribbon Background Graphic */}
            {/* Seamlessly integrated into the background with zero box/borders */}
            <div className="pointer-events-none select-none absolute bottom-0 left-0 w-full h-[280px] sm:h-[320px] -mb-6 -ml-4 z-0 overflow-visible">
              <svg
                viewBox="0 0 700 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-contain object-bottom-left"
              >
                <defs>
                  {/* Subtle Ambient Glow filter */}
                  <filter id="glassGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="16" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Translucent Glass Gradients */}
                  <linearGradient id="glassWaveBody1" x1="0%" y1="100%" x2="70%" y2="0%">
                    <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" />
                    <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.45" />
                    <stop offset="75%" stopColor="#00aef0" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="glassWaveBody2" x1="10%" y1="90%" x2="90%" y2="10%">
                    <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.25" />
                    <stop offset="45%" stopColor="#0284c7" stopOpacity="0.35" />
                    <stop offset="85%" stopColor="#00aef0" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                  </linearGradient>

                  <linearGradient id="glassFoldDepth" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0369a1" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>

                  {/* Razor Sharp Specular Edge Glows */}
                  <linearGradient id="specularHighlight1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="30%" stopColor="#bae6fd" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#00aef0" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>

                  <linearGradient id="specularHighlight2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.75" />
                    <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.95" />
                    <stop offset="75%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Soft Sky-Blue Ambient Aura in the background */}
                <ellipse cx="420" cy="220" rx="220" ry="120" fill="#e0f2fe" fillOpacity="0.45" />

                {/* Back Fold 1 (Left Wave Depth) */}
                <path
                  d="M 10 360 C 60 270, 120 220, 180 210 C 245 200, 295 270, 360 360 Z"
                  fill="url(#glassFoldDepth)"
                />

                {/* Left Wave Front Translucent Body */}
                <path
                  d="M -15 360 C 45 260, 105 205, 175 200 C 250 195, 305 265, 380 360 Z"
                  fill="url(#glassWaveBody1)"
                />
                {/* Left Wave Specular Blade Edge */}
                <path
                  d="M 15 355 C 65 262, 115 210, 180 202 C 240 198, 295 250, 355 340"
                  stroke="url(#specularHighlight1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Main Prominent 3D Glass Wave Crest (Soaring Right Triangular Peak) */}
                <path
                  d="M 230 360 C 310 270, 410 130, 510 95 C 575 72, 635 110, 690 175 C 700 188, 700 360, 700 360 Z"
                  fill="url(#glassWaveBody2)"
                />

                {/* Inner Glass Refraction Thickness Layer */}
                <path
                  d="M 280 360 C 360 275, 445 160, 525 118 C 585 86, 630 120, 675 190 L 690 360 Z"
                  fill="url(#glassFoldDepth)"
                />

                {/* Razor Sharp Glowing Specular Ridge (Sweeps up to the apex) */}
                <path
                  d="M 245 355 C 320 270, 420 140, 515 97 C 575 72, 635 110, 690 175"
                  stroke="url(#specularHighlight2)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />

                {/* Subtle Highlights on Secondary Glass Edge */}
                <path
                  d="M 290 360 C 370 285, 460 175, 530 125 C 578 95, 620 125, 665 190"
                  stroke="#ffffff"
                  strokeWidth="1.4"
                  strokeOpacity="0.85"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* CỘT 2: Mission (01) & Vision (02) Feature Cards                 */}
          {/* Tight vertical spacing (space-y-4), spacious padding inside     */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Card 1: 01 Sứ mệnh (Deep Navy with 3D glowing waves & laser beam) */}
            <div className="rounded-[32px] pt-9 sm:pt-11 px-8 sm:px-10 pb-8 sm:pb-9 bg-[#06182c] text-white relative overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
              {/* Background 3D Blue Waves with glowing light ribbons */}
              <div className="absolute inset-0 pointer-events-none select-none">
                <svg
                  viewBox="0 0 500 240"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                >
                  <defs>
                    <linearGradient id="missionDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#082f49" stopOpacity="0.85" />
                      <stop offset="40%" stopColor="#0284c7" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
                    </linearGradient>
                    <linearGradient id="laserLightBeam" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Dark Blue Wave Fill */}
                  <path
                    d="M 160 240 C 240 180, 310 100, 390 40 C 440 2, 470 0, 500 0 L 500 240 Z"
                    fill="url(#missionDarkGrad)"
                  />
                  <path
                    d="M 220 240 C 290 190, 360 120, 430 60 C 470 25, 490 10, 500 0 L 500 240 Z"
                    fill="#0369a1"
                    fillOpacity="0.35"
                  />

                  {/* Razor Sharp Glowing Light Arcs */}
                  <path
                    d="M 180 240 C 260 185, 330 110, 410 48 C 455 12, 480 2, 500 0"
                    stroke="url(#laserLightBeam)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 280 240 C 340 190, 400 130, 470 75 L 500 50"
                    stroke="#38bdf8"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                  />

                  {/* Star Flare at the crest */}
                  <circle cx="410" cy="48" r="3.5" fill="#ffffff" />
                  <circle cx="410" cy="48" r="9" fill="#38bdf8" fillOpacity="0.45" />
                </svg>
              </div>

              {/* Gradient Overlay for high text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06182c] via-[#06182c]/85 to-transparent pointer-events-none" />

              {/* Content with comfortable padding */}
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#38bdf8] font-mono tracking-wider">
                  <span>01</span>
                  <span className="w-7 h-[1.5px] bg-[#38bdf8] inline-block" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Sứ mệnh
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  Kết nối nguồn lực, tạo dựng hệ sinh thái doanh nghiệp vững mạnh, kiến tạo giá trị thiết thực cho khách hàng, đối tác và cộng đồng.
                </p>
              </div>
            </div>

            {/* Card 2: 02 Tầm nhìn (Soft Ice-Blue with large 3D translucent wave) */}
            <div className="rounded-[32px] pt-9 sm:pt-11 px-8 sm:px-10 pb-8 sm:pb-9 bg-[#f4f9fd] border border-[#dbeafe]/80 text-slate-900 relative overflow-hidden shadow-sm group hover:shadow-md transition-all">
              {/* Background Large 3D Translucent Wave matching Card 1 & Cột 1 */}
              <div className="absolute inset-0 pointer-events-none select-none">
                <svg
                  viewBox="0 0 500 240"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                >
                  <defs>
                    <linearGradient id="visionGlassGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.15" />
                      <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.45" />
                      <stop offset="85%" stopColor="#00aef0" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
                    </linearGradient>
                    <linearGradient id="visionSpecularGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                      <stop offset="60%" stopColor="#00aef0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Flowing Translucent Glass Ribbon */}
                  <path
                    d="M 170 240 C 265 170, 360 90, 460 25 C 480 12, 495 5, 500 0 L 500 240 Z"
                    fill="url(#visionGlassGrad)"
                  />
                  <path
                    d="M 220 240 C 305 180, 395 110, 480 50 L 500 35 L 500 240 Z"
                    fill="#38bdf8"
                    fillOpacity="0.2"
                  />

                  {/* Razor Sharp Glowing Cyan / Specular Ridge */}
                  <path
                    d="M 180 240 C 275 172, 370 92, 465 28 C 482 16, 495 6, 500 0"
                    stroke="url(#visionSpecularGrad)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Gradient Overlay for high text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4f9fd] via-[#f4f9fd]/90 to-transparent pointer-events-none" />

              {/* Content with exact spelling & spacing */}
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#00aef0] font-mono tracking-wider">
                  <span>02</span>
                  <span className="w-7 h-[1.5px] bg-[#00aef0] inline-block" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Tầm nhìn
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Trở thành tập đoàn đầu tư và phát triển hệ sinh thái đa ngành uy tín, tiên phong kiến tạo những giá trị bền vững tại Việt Nam và khu vực.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================================================================= */}
        {/* BOTTOM HORIZONTAL STRIP: Giá trị cốt lõi                          */}
        {/* Title left, 4 architectural columns right with dividers           */}
        {/* ================================================================= */}
        <div className="pt-16 sm:pt-20 border-t border-slate-200/80 mt-16 sm:mt-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            {/* Title on the Left */}
            <div className="lg:w-1/4 shrink-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight text-left">
                Giá trị cốt lõi
              </h3>
            </div>

            {/* 4 Architectural Columns on the Right with Divider Lines */}
            <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-slate-200">
              {/* 01: Chính trực */}
              <div className="space-y-1.5 lg:pl-0 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00aef0] font-mono">
                  <span>01</span>
                  <span className="w-5 h-[1.5px] bg-[#00aef0] inline-block" />
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                  Chính trực
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  là nền tảng
                </div>
              </div>

              {/* 02: Hợp tác */}
              <div className="space-y-1.5 lg:pl-8 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00aef0] font-mono">
                  <span>02</span>
                  <span className="w-5 h-[1.5px] bg-[#00aef0] inline-block" />
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                  Hợp tác
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  để cùng lớn mạnh
                </div>
              </div>

              {/* 03: Đổi mới */}
              <div className="space-y-1.5 lg:pl-8 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00aef0] font-mono">
                  <span>03</span>
                  <span className="w-5 h-[1.5px] bg-[#00aef0] inline-block" />
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                  Đổi mới
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  để tạo giá trị khác biệt
                </div>
              </div>

              {/* 04: Phát triển bền vững */}
              <div className="space-y-1.5 lg:pl-8 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00aef0] font-mono">
                  <span>04</span>
                  <span className="w-5 h-[1.5px] bg-[#00aef0] inline-block" />
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                  Phát triển bền vững
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  vì cộng đồng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
