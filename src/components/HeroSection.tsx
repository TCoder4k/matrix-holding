import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Handshake, TrendingUp, GraduationCap } from 'lucide-react';

interface HeroSectionProps {
  onLearnMoreClick: () => void;
  onNavigate?: (tab: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onLearnMoreClick,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const svgLayerRef = useRef<HTMLDivElement>(null);

  // SVG path refs for accurate getTotalLength()
  const pathRef0 = useRef<SVGPathElement>(null);
  const pathRef1 = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const pathRef3 = useRef<SVGPathElement>(null);

  // Slide state cho chỉ báo "01 / 03" có chức năng chuyển đổi nội dung thực tế
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      indexText: '01 / 03',
      label: 'Kết nối nguồn lực',
      eyebrow: 'MATRIX HOLDING · VIỆT NAM',
      line1: 'Kiến tạo hệ sinh thái',
      line2: 'kinh doanh đa ngành.',
      desc: 'Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả, nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.',
    },
    {
      indexText: '02 / 03',
      label: 'Hợp tác toàn diện',
      eyebrow: 'HỢP TÁC CHIẾN LƯỢC · 2026',
      line1: 'Mở rộng mạng lưới',
      line2: 'liên minh doanh nghiệp.',
      desc: 'Quy tụ các đối tác hàng đầu trong các lĩnh vực tài chính, công nghệ và dịch vụ cao cấp nhằm cộng hưởng sức mạnh, kiến tạo giá trị đột phá cho thị trường.',
    },
    {
      indexText: '03 / 03',
      label: 'Giá trị bền vững',
      eyebrow: 'ĐỊNH HƯỚNG TƯƠNG LAI',
      line1: 'Phát triển bền vững',
      line2: 'vươn tầm quốc tế.',
      desc: 'Cam kết chuẩn mực quản trị ESG, đồng hành cùng các doanh nghiệp thành viên từng bước hiện thực hóa khát vọng trở thành kỳ lân kinh tế trong kỷ nguyên mới.',
    },
  ];

  // Timeline animation states (Hướng B: "Khung cửa mở ra")
  const [animStage, setAnimStage] = useState({
    bgLoaded: false,     // 0–900ms: Khung ảnh mở từ dải hẹp sang toàn bộ chiều rộng, ảnh thu 104% -> 100%
    eyebrow: false,      // 200–600ms: Eyebrow opacity 0 -> 1, translateY 10px -> 0
    headlineL1: false,   // 300–950ms: Dòng 1 translateY 105% -> 0
    headlineL2: false,   // 420–1070ms: Dòng 2 translateY 105% -> 0 (lệch 100ms)
    desc: false,         // 700–1150ms: Mô tả opacity 0 -> 1, translateY 14px -> 0
    cta1: false,         // 850–1200ms: Nút chính opacity 0 -> 1, translateY 12px -> 0
    cta2: false,         // 930–1280ms: Nút phụ
    nexus: false,        // 700ms: Điểm tâm scale 0.6 -> 1, opacity 0 -> 1
    branches: [false, false, false, false], // Vẽ 4 nhánh trong 800ms
    nodes: [false, false, false, false],    // Node hiện khi đường chạm tới
  });

  const [pathLengths, setPathLengths] = useState([500, 500, 420, 320]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [activePhotonBranch, setActivePhotonBranch] = useState<number | null>(null);
  const [hoverPhotonBranch, setHoverPhotonBranch] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInViewport, setIsInViewport] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Direct rAF mouse parallax (Không re-render React liên tục)
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rAfId = useRef<number | null>(null);

  // Bốn nhánh kết nối chính xác theo tọa độ viewBox 1672 x 941
  const branchData = [
    {
      id: 'network',
      name: 'Network',
      icon: Users,
      cx: 986.5,
      cy: 264.4,
      d: 'M 1215.5 709.5 C 1130 520, 1055 380, 986.5 264.4',
    },
    {
      id: 'connect',
      name: 'Connect',
      icon: Handshake,
      cx: 1441.3,
      cy: 264.4,
      d: 'M 1215.5 709.5 C 1285 500, 1375 370, 1441.3 264.4',
    },
    {
      id: 'ventures',
      name: 'Ventures',
      icon: TrendingUp,
      cx: 1515.0,
      cy: 437.6,
      d: 'M 1215.5 709.5 C 1355 600, 1450 515, 1515.0 437.6',
    },
    {
      id: 'academy',
      name: 'Academy',
      icon: GraduationCap,
      cx: 1485.0,
      cy: 618.2,
      d: 'M 1215.5 709.5 C 1335 680, 1415 650, 1485.0 618.2',
    },
  ];

  // =========================================================================
  // 1. TIMELINE XUẤT HIỆN: HƯỚNG B "KHUNG CỬA MỞ RA" (900MS)
  // =========================================================================
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Đo chiều dài thực tế các nhánh bằng getTotalLength()
    const l0 = pathRef0.current?.getTotalLength() || 500;
    const l1 = pathRef1.current?.getTotalLength() || 500;
    const l2 = pathRef2.current?.getTotalLength() || 420;
    const l3 = pathRef3.current?.getTotalLength() || 320;
    setPathLengths([l0, l1, l2, l3]);

    if (motionQuery.matches) {
      setAnimStage({
        bgLoaded: true,
        eyebrow: true,
        headlineL1: true,
        headlineL2: true,
        desc: true,
        cta1: true,
        cta2: true,
        nexus: true,
        branches: [true, true, true, true],
        nodes: [true, true, true, true],
      });
      return;
    }

    // 0–1400ms: Khung ảnh mở chậm rãi từ dải hẹp sang toàn bộ chiều rộng
    const tBg = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, bgLoaded: true }));
    }, 80);

    // 350–1000ms: Eyebrow
    const tEyebrow = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, eyebrow: true }));
    }, 350);

    // 550–1500ms: Dòng 1 tiêu đề đi lên nhẹ nhàng
    const tL1 = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, headlineL1: true }));
    }, 550);

    // 750–1700ms: Dòng 2 tiêu đề (lệch 200ms)
    const tL2 = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, headlineL2: true }));
    }, 750);

    // 1100–1800ms: Đoạn mô tả
    const tDesc = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, desc: true }));
    }, 1100);

    // 1350–1900ms: Nút CTA 1
    const tCta1 = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, cta1: true }));
    }, 1350);

    // 1500–2100ms: Nút CTA 2
    const tCta2 = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, cta2: true }));
    }, 1500);

    // 1000ms: Điểm trung tâm sáng lên
    const tNexus = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, nexus: true }));
    }, 1000);

    // Bốn đường cong được vẽ ra êm ái trong 1300ms
    const tBranch0 = setTimeout(() => {
      setAnimStage((prev) => {
        const b = [...prev.branches];
        b[0] = true;
        return { ...prev, branches: b };
      });
    }, 1150);

    const tBranch1 = setTimeout(() => {
      setAnimStage((prev) => {
        const b = [...prev.branches];
        b[1] = true;
        return { ...prev, branches: b };
      });
    }, 1350);

    const tBranch2 = setTimeout(() => {
      setAnimStage((prev) => {
        const b = [...prev.branches];
        b[2] = true;
        return { ...prev, branches: b };
      });
    }, 1550);

    const tBranch3 = setTimeout(() => {
      setAnimStage((prev) => {
        const b = [...prev.branches];
        b[3] = true;
        return { ...prev, branches: b };
      });
    }, 1750);

    // Icon và tên hiện khi đường chạm tới
    const tNodes = setTimeout(() => {
      setAnimStage((prev) => ({ ...prev, nodes: [true, true, true, true] }));
    }, 2200);

    return () => {
      clearTimeout(tBg);
      clearTimeout(tEyebrow);
      clearTimeout(tL1);
      clearTimeout(tL2);
      clearTimeout(tDesc);
      clearTimeout(tCta1);
      clearTimeout(tCta2);
      clearTimeout(tNexus);
      clearTimeout(tBranch0);
      clearTimeout(tBranch1);
      clearTimeout(tBranch2);
      clearTimeout(tBranch3);
      clearTimeout(tNodes);
    };
  }, []);

  // =========================================================================
  // 2. PARALLAX CHUỘT VỚI requestAnimationFrame (HIỆU NĂNG CAO, KHÔNG RE-RENDER)
  // =========================================================================
  useEffect(() => {
    if (prefersReducedMotion) return;

    const animateLoop = () => {
      const ease = isHovering.current ? 0.08 : 0.06;
      mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * ease;
      mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * ease;

      const mx = mouseCurrent.current.x;
      const my = mouseCurrent.current.y;

      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `translate3d(${mx * 4}px, ${my * 4}px, 0)`;
      }

      if (svgLayerRef.current) {
        svgLayerRef.current.style.transform = `translate3d(${mx * 8}px, ${my * 8}px, 0)`;
      }

      rAfId.current = requestAnimationFrame(animateLoop);
    };

    rAfId.current = requestAnimationFrame(animateLoop);

    return () => {
      if (rAfId.current) cancelAnimationFrame(rAfId.current);
    };
  }, [prefersReducedMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseTarget.current = { x: nx, y: ny };
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    mouseTarget.current = { x: 0, y: 0 };
    isHovering.current = false;
  };

  // =========================================================================
  // 3. THEO DÕI CUỘN & TỰ ĐỘNG CHẠY CHẤM SÁNG (MỖI 5–8 GIÂY)
  // =========================================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleVisibility = () => {
      setIsTabVisible(!document.hidden);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Chấm sáng ambient: khoảng 5–8 giây mới có một chấm sáng chạy qua một nhánh
  useEffect(() => {
    if (prefersReducedMotion || !isInViewport || !isTabVisible) return;

    let branchCounter = 0;
    const interval = setInterval(() => {
      setActivePhotonBranch(branchCounter % 4);
      branchCounter++;

      setTimeout(() => {
        setActivePhotonBranch(null);
      }, 1600);
    }, 6500); // 6.5s (nằm trong khoảng 5–8s)

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isInViewport, isTabVisible]);

  // Tự động chuyển slide nhẹ nhàng mỗi 7.5s
  useEffect(() => {
    if (!isInViewport || !isTabVisible) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 11000); // 11 giây mỗi slide, thư thả và dễ đọc hơn

    return () => clearInterval(timer);
  }, [isInViewport, isTabVisible, heroSlides.length]);

  // Xử lý khi hover một node: Chỉ nhánh đó sáng hơn + Bắn một chấm chạy từ tâm tới icon
  const handleNodeMouseEnter = (idx: number) => {
    setHoveredNode(idx);
    setHoverPhotonBranch(idx);
    setTimeout(() => {
      setHoverPhotonBranch((curr) => (curr === idx ? null : curr));
    }, 2000);
  };

  const handleNodeMouseLeave = () => {
    setHoveredNode(null);
  };

  const handleGoToEcosystem = () => {
    if (onNavigate) {
      onNavigate('ecosystem');
    } else {
      onLearnMoreClick();
    }
  };

  const handleGoToContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      onLearnMoreClick();
    }
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100dvh] bg-[#051120] text-white flex flex-col justify-between select-none"
      style={{ isolation: 'isolate' }}
    >
      {/* ========================================================================= */}
      {/* 1. KHUNG CỬA MỞ RA (HƯỚNG B): KHUNG MỞ TỪ DẢI HẸP RA TOÀN BỘ TRONG 1400MS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#051120]">
        <div
          ref={bgImgRef}
          className="w-full h-full will-change-transform"
          style={{
            clipPath: animStage.bgLoaded ? 'inset(0% 0% 0% 0%)' : 'inset(0% 46% 0% 46%)',
            transition: 'clip-path 1400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Ảnh bên trong thu nhẹ từ 104% về 100% trong 1400ms */}
          <img
            src="/images/matrix_hero_skyline_terrace_1791017043448.jpg"
            alt="Đại sảnh Matrix Holding nhìn ra thành phố"
            className="w-full h-full object-cover object-center"
            style={{
              transform: `${animStage.bgLoaded ? 'scale(1)' : 'scale(1.04)'} translate3d(0, ${Math.min(scrollY * 0.12, 28)}px, 0)`,
              opacity: animStage.bgLoaded ? 1 : 0.75,
              transition: 'transform 1400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1200ms ease-out',
            }}
          />

          {/* Lớp overlay navy sạch bên trái và giảm dần sang phải để thành phố sáng rực */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051120] via-[#051120]/75 via-42% to-transparent" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HỆ SINH THÁI BÊN PHẢI (SVG CÔNG NGHỆ CHUẨN XÁC VIEWBOX 1672 x 941)     */}
      {/* ========================================================================= */}
      <div
        ref={svgLayerRef}
        className="hidden lg:block absolute inset-0 pointer-events-none z-20 will-change-transform"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1672 941"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* Tia sáng bình thường */}
            <linearGradient id="curve-cyan-subtle" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
            </linearGradient>

            {/* Tia sáng khi hover: Rực rỡ và nổi bật */}
            <linearGradient id="curve-cyan-highlight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#00c2ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
            </linearGradient>

            {/* Hào quang tâm */}
            <radialGradient id="nexus-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="35%" stopColor="#00c2ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* BỐN ĐƯỜNG CONG BÉZIER: Vẽ ra chậm rãi trong 1300ms từ tâm */}
          <g>
            {branchData.map((b, idx) => {
              const isHovered = hoveredNode === idx;
              return (
                <path
                  key={b.id}
                  ref={idx === 0 ? pathRef0 : idx === 1 ? pathRef1 : idx === 2 ? pathRef2 : pathRef3}
                  id={`hero-path-${idx}`}
                  d={b.d}
                  stroke={isHovered ? 'url(#curve-cyan-highlight)' : 'url(#curve-cyan-subtle)'}
                  strokeWidth={isHovered ? 2.2 : 1.3}
                  strokeDasharray={pathLengths[idx]}
                  strokeDashoffset={animStage.branches[idx] ? 0 : pathLengths[idx]}
                  style={{
                    transition: 'stroke-dashoffset 1300ms cubic-bezier(0.16, 1, 0.3, 1), stroke-width 300ms ease, opacity 300ms ease',
                    opacity: hoveredNode !== null && !isHovered ? 0.3 : 1,
                  }}
                />
              );
            })}
          </g>

          {/* CHẤM SÁNG CHẠY KHI ĐỨNG XEM: Chạy lướt êm ái trong 2.5s */}
          {activePhotonBranch !== null && (
            <circle cx="0" cy="0" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 6px #00c2ff)">
              <animateMotion
                href={`#hero-path-${activePhotonBranch}`}
                dur="2.5s"
                repeatCount="1"
                fill="freeze"
              />
            </circle>
          )}

          {/* CHẤM SÁNG CHẠY KHI HOVER: Chạy từ tâm tới icon trong 1.8s */}
          {hoverPhotonBranch !== null && (
            <circle cx="0" cy="0" r="4" fill="#ffffff" filter="drop-shadow(0 0 8px #00c2ff)">
              <animateMotion
                href={`#hero-path-${hoverPhotonBranch}`}
                dur="1.8s"
                repeatCount="1"
                fill="freeze"
              />
            </circle>
          )}

          {/* ĐIỂM TRUNG TÂM (1215.5, 709.5) */}
          <g
            className="transition-all duration-700"
            style={{
              opacity: animStage.nexus ? 1 : 0,
              transformOrigin: '1215.5px 709.5px',
              transform: animStage.nexus ? 'scale(1)' : 'scale(0.6)',
            }}
          >
            {/* Vòng hào quang pulse chu kỳ 3s */}
            <circle
              cx="1215.5"
              cy="709.5"
              r="24"
              fill="url(#nexus-core-glow)"
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            {/* Lõi giữ ổn định */}
            <circle
              cx="1215.5"
              cy="709.5"
              r="4.5"
              fill="#ffffff"
              filter="drop-shadow(0 0 10px #00c2ff)"
            />
          </g>

          {/* CÁC NODE VÀ TÊN ĐƠN VỊ TRONG SVG */}
          {branchData.map((branch, idx) => (
            <g
              key={branch.id}
              className="cursor-pointer pointer-events-auto group focus:outline-none"
              tabIndex={0}
              onClick={handleGoToEcosystem}
              onMouseEnter={() => handleNodeMouseEnter(idx)}
              onMouseLeave={handleNodeMouseLeave}
              onFocus={() => handleNodeMouseEnter(idx)}
              onBlur={handleNodeMouseLeave}
              style={{
                opacity: animStage.nodes[idx] ? 1 : 0,
                transform: animStage.nodes[idx] ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 600ms ease, transform 600ms ease',
              }}
            >
              {/* Tên đơn vị nằm bên phải vòng tròn: Chữ giữ nguyên vị trí khi hover */}
              <text
                x={branch.cx + 38}
                y={branch.cy + 5.5}
                fill="#ffffff"
                fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
                fontSize="17"
                fontWeight="500"
                letterSpacing="0.2px"
                className="select-none transition-colors duration-200"
                style={{
                  fill: hoveredNode === idx ? '#00c2ff' : '#ffffff',
                }}
              >
                {branch.name}
              </text>
            </g>
          ))}
        </svg>

        {/* 4 ICON VÒNG TRÒN ĐÚNG TỶ LỆ 1:1 TUYỆT ĐỐI (w-[52px] h-[52px] rounded-full) */}
        {branchData.map((branch, idx) => {
          const IconComp = branch.icon;
          const isHovered = hoveredNode === idx;
          return (
            <div
              key={branch.id}
              onClick={handleGoToEcosystem}
              onMouseEnter={() => handleNodeMouseEnter(idx)}
              onMouseLeave={handleNodeMouseLeave}
              className={`absolute z-30 pointer-events-auto cursor-pointer rounded-full flex items-center justify-center transition-all duration-200 border ${
                isHovered
                  ? 'border-[#00c2ff] bg-[#071526]/80 shadow-[0_0_14px_rgba(0,194,255,0.7)] scale-105'
                  : 'border-[#00c2ff]/60 bg-[#071526]/50 shadow-[0_0_6px_rgba(0,194,255,0.3)]'
              }`}
              style={{
                left: `${(branch.cx / 1672) * 100}%`,
                top: `${(branch.cy / 941) * 100}%`,
                width: '52px',
                height: '52px',
                transform: `translate(-50%, -50%)`,
                opacity: animStage.nodes[idx] ? 1 : 0,
              }}
              title={branch.name}
            >
              <IconComp
                className={`w-5 h-5 transition-colors duration-200 ${
                  isHovered ? 'text-[#00c2ff]' : 'text-white'
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. KHỐI NỘI DUNG BÊN TRÁI: DÒNG ĐI LÊN TỪ VÙNG CHE, MÔ TẢ & 2 CTA          */}
      {/* ========================================================================= */}
      <div
        className="relative z-30 w-full flex-1 flex flex-col justify-center pointer-events-none"
        style={{
          paddingLeft: '5.4vw',
          paddingRight: '2vw',
          paddingTop: 'clamp(90px, 16vh, 180px)',
        }}
      >
        <div className="pointer-events-auto text-left w-full lg:max-w-[780px] xl:max-w-[860px]">
          {/* Eyebrow: 350–1000ms */}
          <div
            className="text-[13px] text-slate-400 font-semibold uppercase mb-4 transition-all duration-700 ease-out"
            style={{
              letterSpacing: '5px',
              opacity: animStage.eyebrow ? 1 : 0,
              transform: animStage.eyebrow ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            {currentSlideData.eyebrow}
          </div>

          {/* Tiêu đề chính: HAI DÒNG ĐI LÊN TỪ VÙNG CHE (950ms, chuyển động thư thả và mượt) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[58px] 2xl:text-[66px] font-black tracking-tight leading-[1.1] text-white">
            {/* Dòng 1 */}
            <span className="block overflow-hidden pt-1 pb-2 pr-4">
              <span
                key={`l1-${currentSlide}`}
                className="block transition-transform duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:whitespace-nowrap"
                style={{
                  transform: animStage.headlineL1 ? 'translateY(0)' : 'translateY(105%)',
                }}
              >
                {currentSlideData.line1}
              </span>
            </span>

            {/* Dòng 2: màu cyan #00c2ff */}
            <span className="block overflow-hidden pt-1 pb-2 pr-4">
              <span
                key={`l2-${currentSlide}`}
                className="block text-[#00c2ff] transition-transform duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:whitespace-nowrap"
                style={{
                  transform: animStage.headlineL2 ? 'translateY(0)' : 'translateY(105%)',
                }}
              >
                {currentSlideData.line2}
              </span>
            </span>
          </h1>

          {/* Đoạn mô tả: Cỡ 19–22px, line-height 1.6 */}
          <p
            key={`desc-${currentSlide}`}
            className="text-slate-300 text-base sm:text-lg lg:text-[19px] xl:text-[21px] leading-[1.6] font-normal mt-6 xl:mt-7 max-w-[620px] transition-all duration-700 ease-out"
            style={{
              opacity: animStage.desc ? 1 : 0,
              transform: animStage.desc ? 'translateY(0)' : 'translateY(14px)',
            }}
          >
            {currentSlideData.desc}
          </p>

          {/* HAI NÚT CTA: Cao 58px, Bo góc 12px, cách 20px, whitespace-nowrap */}
          <div className="flex flex-wrap items-center gap-5 mt-8 xl:mt-[38px]">
            {/* Nút chính: Nền cyan, chữ navy */}
            <button
              type="button"
              onClick={onLearnMoreClick}
              className="h-14 lg:h-[58px] px-7 sm:px-8 rounded-[12px] bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071526] font-bold text-[15px] sm:text-[16px] inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                opacity: animStage.cta1 ? 1 : 0,
                transform: animStage.cta1 ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out, background-color 200ms ease',
              }}
            >
              <span className="whitespace-nowrap">Khám phá Matrix Holding</span>
              <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Nút phụ: Nền trong suốt, viền cyan, chữ trắng */}
            <button
              type="button"
              onClick={handleGoToContact}
              className="h-14 lg:h-[58px] px-7 sm:px-8 rounded-[12px] bg-transparent hover:bg-[#00c2ff]/10 text-white font-bold text-[15px] sm:text-[16px] border border-[#00c2ff] inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-all cursor-pointer active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2ff]"
              style={{
                opacity: animStage.cta2 ? 1 : 0,
                transform: animStage.cta2 ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out, background-color 200ms ease',
              }}
            >
              <span className="whitespace-nowrap">Hợp tác đầu tư</span>
            </button>
          </div>

          {/* DÀNH CHO MOBILE: 4 nút chạm nhỏ gọn */}
          <div className="lg:hidden mt-8 pt-5 border-t border-slate-800/60 max-w-sm">
            <div className="grid grid-cols-2 gap-2">
              {branchData.map((b) => {
                const IconComp = b.icon;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={handleGoToEcosystem}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    <IconComp className="w-4 h-4 text-[#00c2ff]" />
                    <span>{b.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. PHẦN ĐÁY HERO: "01 / 03" CÓ CHỨC NĂNG CHUYỂN NỘI DUNG THỰC TẾ          */}
      {/* ========================================================================= */}
      <div
        className="w-full flex items-center justify-between pb-8 lg:pb-9 pointer-events-auto z-30"
        style={{
          paddingLeft: '5.4vw',
          paddingRight: '5.4vw',
        }}
      >
        {/* Góc dưới trái: Gợi ý cuộn (dừng khi cuộn > 20) */}
        <div className="flex items-center gap-3">
          <div className="h-6 w-[1.5px] bg-slate-600 relative overflow-hidden flex items-center justify-center">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-white absolute transition-opacity duration-300 ${
                scrollY > 20 ? 'opacity-40' : 'animate-bounce'
              }`}
              style={{
                animationDuration: '1.8s',
              }}
            />
          </div>
          <span className="text-slate-400 text-xs sm:text-[13px] font-normal">
            Cuộn để khám phá
          </span>
        </div>

        {/* Góc dưới phải: "01 / 03" TƯƠNG TÁC CHUYỂN SLIDE THỰC TẾ */}
        <div className="flex items-center gap-4 bg-[#051120]/40 backdrop-blur-xs py-1.5 px-3 rounded-xl border border-slate-700/30">
          {/* Số hiển thị: Có thể click chuyển tiếp */}
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="font-semibold text-white font-mono text-[14px] hover:text-[#00c2ff] transition-colors cursor-pointer focus:outline-none"
            title="Click để chuyển nội dung tiếp theo"
          >
            {currentSlideData.indexText}
          </button>

          {/* Ba vạch ngang có thể click chọn trực tiếp */}
          <div className="flex items-center gap-1.5">
            {heroSlides.map((_, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => setCurrentSlide(sIdx)}
                className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === sIdx
                    ? 'w-9 bg-[#00c2ff] shadow-[0_0_8px_#00c2ff]'
                    : 'w-7 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Chuyển tới slide ${sIdx + 1}`}
              />
            ))}
          </div>

          {/* Phân cách dọc */}
          <span className="h-3.5 w-[1px] bg-slate-600 mx-0.5" />

          {/* Tên nội dung tương ứng */}
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="text-slate-300 hover:text-white text-xs sm:text-[13px] font-medium hidden sm:inline transition-colors cursor-pointer text-left focus:outline-none"
          >
            {currentSlideData.label}
          </button>
        </div>
      </div>
    </section>
  );
};
