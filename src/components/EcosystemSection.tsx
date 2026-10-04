import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { MatrixLogo } from './MatrixLogo';

interface EcosystemPillar {
  id: string;
  index: string;
  name: string;
  description: string;
  cta: string;
  image: string;
  destination: 'ecosystem' | 'contact';
}

interface EcosystemSectionProps {
  onNavigate?: (key: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
  onOpenContact?: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Danh mục 4 mảnh ghép theo đúng nội dung yêu cầu
  const pillars: EcosystemPillar[] = [
    {
      id: 'network',
      index: '01',
      name: 'Matrix Network',
      description: 'Hệ sinh thái dịch vụ toàn diện',
      cta: 'Xem giải pháp',
      image: '/src/assets/images/matrix_team_meeting_1790857862728.jpg',
      destination: 'ecosystem',
    },
    {
      id: 'connect',
      index: '02',
      name: 'Matrix Connect',
      description: 'Hệ sinh thái kết nối kinh doanh',
      cta: 'Kết nối doanh nghiệp',
      image: '/src/assets/images/matrix_networking_lounge_1790822870952.jpg',
      destination: 'ecosystem',
    },
    {
      id: 'ventures',
      index: '03',
      name: 'Matrix Ventures',
      description: 'Hệ sinh thái kết nối đầu tư',
      cta: 'Tìm cơ hội đầu tư',
      image: '/src/assets/images/matrix_boardroom_skyline_1790822831335.jpg',
      destination: 'ecosystem',
    },
    {
      id: 'academy',
      index: '04',
      name: 'Matrix Academy',
      description: 'Hệ sinh thái đào tạo tinh hoa',
      cta: 'Đăng ký khóa học',
      image: '/src/assets/images/matrix_academy_seminar_1790860827960.jpg',
      destination: 'contact',
    },
  ];

  // 1. Kiểm tra prefers-reduced-motion và kích thước màn hình
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    }
    window.addEventListener('resize', checkMobile);

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 2. Kích hoạt hiệu ứng khi mép trên của grid bốn mảnh ghép đi đến khoảng 65–70% chiều cao màn hình
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsAssembled(true);
      return;
    }

    const checkScrollPosition = () => {
      if (isAssembled) return;
      const grid = gridRef.current;
      if (!grid) return;

      const rect = grid.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Đo mốc chuẩn: mép trên của grid đi đến 68% chiều cao màn hình tính từ trên xuống
      if (rect.top <= windowHeight * 0.68) {
        setIsAssembled(true);
      }
    };

    // Kiểm tra ngay khi tải trang nếu người dùng F5 hoặc cuộn tới sẵn
    checkScrollPosition();

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [isAssembled, prefersReducedMotion]);

  // Xử lý điều hướng khi bấm vào CTA của từng mảnh ghép
  const handleItemClick = (pillar: EcosystemPillar) => {
    if (pillar.destination === 'contact') {
      if (onOpenContact) {
        onOpenContact();
      } else if (onNavigate) {
        onNavigate('contact');
      }
    } else {
      if (onNavigate) {
        onNavigate('ecosystem');
      }
    }
  };

  // Tính toán class dịch chuyển ban đầu cho 4 góc đối xứng
  const getInitialTransformClass = (index: number) => {
    if (prefersReducedMotion) return 'opacity-100 translate-x-0 translate-y-0 scale-100';

    if (isMobile) {
      // Mobile: Trượt nhẹ 20–24px từ dưới lên, không bay chéo ngang
      return isAssembled
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-6 scale-100 pointer-events-none';
    }

    // Desktop 2x2:
    // 01 Network (Trái - Trên): đi từ trái trên (-45px, -45px)
    // 02 Connect (Phải - Trên): đi từ phải trên (45px, -45px)
    // 03 Ventures (Trái - Dưới): đi từ trái dưới (-45px, 45px)
    // 04 Academy (Phải - Dưới): đi từ phải dưới (45px, 45px)
    if (isAssembled) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    switch (index) {
      case 0:
        return 'opacity-0 -translate-x-[45px] -translate-y-[45px] scale-[0.97] pointer-events-none';
      case 1:
        return 'opacity-0 translate-x-[45px] -translate-y-[45px] scale-[0.97] pointer-events-none';
      case 2:
        return 'opacity-0 -translate-x-[45px] translate-y-[45px] scale-[0.97] pointer-events-none';
      case 3:
        return 'opacity-0 translate-x-[45px] translate-y-[45px] scale-[0.97] pointer-events-none';
      default:
        return 'opacity-0 scale-[0.97] pointer-events-none';
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-white text-[#0A192F] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* PHẦN TIÊU ĐỀ: 2 CỘT CĂN GIỮA THEO CHIỀU DỌC (65% / 35%)                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          
          {/* Cột trái: Tiêu đề 2 dòng lớn màu navy đậm (~65%) */}
          <div className="w-full md:w-[62%] lg:w-[64%]">
            <h2 className="text-[clamp(30px,3.8vw,52px)] font-black text-[#0A192F] leading-[1.15] tracking-tight">
              Bốn hệ sinh thái.<br />
              Một nền tảng phát triển.
            </h2>
          </div>

          {/* Cột phải: Đoạn mô tả với đường kẻ dọc mảnh 2px màu xanh dịu (~35%) */}
          <div className="w-full md:w-[38%] lg:w-[36%] flex items-center">
            {/* Đường kẻ dọc mảnh 2px màu xanh dịu cách chữ 20-24px */}
            <div
              className="w-[2px] h-12 sm:h-14 bg-sky-300 rounded-full shrink-0 mr-5 sm:mr-6"
              aria-hidden="true"
            />
            <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-[360px]">
              Kết nối dịch vụ, cộng đồng, đầu tư và đào tạo trong một hệ sinh thái.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BỐN MẢNH GHÉP: GRID 2 × 2 CÓ LOGO MATRIX NẰM TẠI GIAO ĐIỂM                 */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* 
            Wrapper Grid 2x2:
            - Khoảng cách giữa các ô 6–8px (gap-2 sm:gap-2.5)
            - Không dùng overflow-hidden ở đây để badge giao điểm nổi lên trên không bị cắt
          */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 relative"
          >
            {pillars.map((item, index) => {
              // Nhịp trễ stagger êm ái: 0ms, 160ms, 320ms, 480ms để các mảnh vào từ từ
              const transitionDelay = prefersReducedMotion ? '0ms' : `${index * 160}ms`;

              return (
                /* 
                  Wrapper hiệu ứng xuất hiện (Assemble Transform):
                  Thời gian kéo dài 1300ms với easing siêu êm cubic-bezier(0.16, 1, 0.3, 1) giúp chuyển động vào từ từ, thanh lịch
                */
                <div
                  key={item.id}
                  className={`w-full will-change-transform transition-all duration-[1300ms] ${getInitialTransformClass(
                    index
                  )}`}
                  style={{
                    transitionDelay,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* 
                    Thẻ mảnh ghép tương tác (Interactive Card):
                    - Tỷ lệ ~2:1 trên desktop (aspect-[2/1] hoặc aspect-[1.95/1]), mobile aspect-[4/3]
                    - Bo góc 14–16px (rounded-[16px])
                    - Wrapper ảnh bên trong dùng overflow-hidden
                  */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleItemClick(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleItemClick(item);
                      }
                    }}
                    aria-label={`${item.name} - ${item.description}`}
                    className="group/card relative w-full aspect-[4/3] sm:aspect-[1.9/1] lg:aspect-[2/1] rounded-[16px] overflow-hidden select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00c2ff] focus-visible:outline-offset-2 transition-shadow duration-300"
                  >
                    
                    {/* Ảnh nền với lớp phủ gradient chủ yếu ở phần dưới */}
                    <div className="absolute inset-0 overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transform transition-transform duration-[600ms] ease-out group-hover/card:scale-[1.04]"
                      />
                      {/* Gradient navy chỉ phủ tối ở phần dưới để chữ dễ đọc; phần trên vẫn sáng, thấy rõ con người và không gian */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/92 via-[#0A192F]/50 to-transparent pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Số thứ tự ở góc trên bên trái: 01, 02, 03, 04 trên nền navy bán trong suốt */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#0A192F]/65 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider border border-white/10 shadow-sm">
                        {item.index}
                      </span>
                    </div>

                    {/* Khối nội dung đặt ở góc dưới bên trái (Padding 24–32px) */}
                    <div className="relative z-20 p-6 sm:p-7 lg:p-8 flex flex-col justify-end h-full">
                      {/* Tên thương hiệu màu trắng */}
                      <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-black text-white tracking-tight leading-tight">
                        {item.name}
                      </h3>

                      {/* Mô tả màu trắng dịu */}
                      <p className="text-white/85 text-sm sm:text-base font-normal mt-1 leading-snug">
                        {item.description}
                      </p>

                      {/* CTA liên kết chữ cyan với gạch chân mảnh và mũi tên nhỏ hướng sang phải */}
                      <div className="mt-3.5">
                        <span className="inline-flex items-center gap-1.5 text-[#00c2ff] group-hover/card:text-white font-bold text-sm tracking-wide transition-colors">
                          <span className="border-b border-[#00c2ff]/60 group-hover/card:border-white transition-colors pb-0.5">
                            {item.cta}
                          </span>
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-1"
                            strokeWidth={2.4}
                          />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* 
            =======================================================================
            LOGO TẠI GIAO ĐIỂM (CENTER INTERSECTION BADGE)
            - Vòng tròn màu trắng nằm tại đúng tâm giao điểm 4 ô trên desktop/tablet
            - Kích thước 76–84px, viền xám nhạt, bóng nhẹ
            - Hiệu ứng xuất hiện sau cùng (opacity & scale 0.9 -> 1)
            - pointer-events: none để không chặn thao tác click của người dùng
            - Ẩn trên mobile khi chuyển sang 1 cột
            =======================================================================
          */}
          <div
            className={`hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-[1000ms] ${
              prefersReducedMotion || isAssembled
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-[0.9]'
            }`}
            style={{
              transitionDelay: prefersReducedMotion ? '0ms' : '620ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            aria-hidden="true"
          >
            <div className="w-[74px] h-[74px] lg:w-[82px] lg:h-[82px] rounded-full bg-white border border-slate-200/90 shadow-[0_8px_24px_rgba(10,25,47,0.12)] flex items-center justify-center p-3.5">
              <MatrixLogo size="sm" showText={false} className="w-8 h-8 lg:w-9 lg:h-9" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
