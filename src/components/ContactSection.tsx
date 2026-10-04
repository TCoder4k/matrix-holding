import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Send,
  X,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Building2,
  Handshake,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  onNavigate?: (tab: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  // Trạng thái cuộn và hiển thị hiệu ứng
  const sectionRef = useRef<HTMLElement>(null);
  const [isEntered, setIsEntered] = useState(false);
  const [logoRevealed, setLogoRevealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Hiệu ứng hover nút "Liên hệ chúng tôi" -> điểm sáng hội tụ 1 lần, nút sáng nhẹ
  const [isHoveringContact, setIsHoveringContact] = useState(false);

  // Hiệu ứng nghiêng 3D theo chuột cho hình minh họa (chữ đứng yên)
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Modal gửi thông tin liên hệ / đối tác
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Dữ liệu form liên hệ
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'investment',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Kiểm tra kích thước màn hình và reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();

    const handleMotion = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotion);
    }
    window.addEventListener('resize', checkMobile);

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotion);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // IntersectionObserver kích hoạt hiệu ứng vẽ đường nối và hội tụ
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsEntered(true);
      setLogoRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsEntered(true);
          // Sau khi các đường nối vẽ dần từ ngoài vào trong ~700ms, biểu tượng Matrix hiện lên
          const timer = setTimeout(() => {
            setLogoRevealed(true);
          }, 700);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );

    const target = sectionRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [prefersReducedMotion]);

  // Theo dõi chuột: chỉ nghiêng nhẹ hình minh họa bên phải để tạo chiều sâu, chữ bên trái đứng yên
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    // Giới hạn góc nghiêng nhẹ nhàng (-8 độ đến +8 độ)
    setTilt({
      x: -relY * 10,
      y: relX * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Xử lý nộp form đối tác
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        interest: 'investment',
        message: '',
      });
      setTimeout(() => {
        setIsSuccess(false);
        setIsContactModalOpen(false);
      }, 2500);
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#050f1c] relative overflow-hidden select-none"
    >
      {/* Vầng sáng nền tinh tế */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00c2ff]/5 blur-[140px] pointer-events-none select-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* BANNER "NGUỒN LỰC HỘI TỤ" CHUẨN XÁC THEO ẢNH CONCEPT                      */}
        {/* ========================================================================= */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full rounded-[28px] sm:rounded-[36px] bg-[#071629] border border-slate-800/80 shadow-2xl relative overflow-hidden p-8 sm:p-12 lg:p-14 transition-all duration-300"
        >
          {/* Lớp nền đa tầng với ánh phản chiếu mờ */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#00c2ff]/[0.07] via-transparent to-transparent" />
            <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-[#009fe3]/10 blur-[90px] rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* ===================================================================== */}
            {/* CỘT TRÁI: TIÊU ĐỀ, MÔ TẢ VÀ CÁC NÚT CTA (ĐỨNG YÊN ĐỂ DỄ ĐỌC)          */}
            {/* ===================================================================== */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Nhãn nhỏ: KẾT NỐI ĐỐI TÁC — */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[#00c2ff] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  KẾT NỐI ĐỐI TÁC
                </span>
                <span className="w-10 h-[1.5px] bg-[#00c2ff]" />
              </div>

              {/* Tiêu đề chính 2 dòng: Kết nối nguồn lực. / Kiến tạo giá trị chung. */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-white mb-4">
                Kết nối nguồn lực.<br />
                <span className="text-[#00c2ff]">Kiến tạo giá trị chung.</span>
              </h2>

              {/* Mô tả phụ đề */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-normal">
                Cùng Matrix Holding mở rộng kết nối và khám phá cơ hội hợp tác.
              </p>

              {/* 2 Nút CTA */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Nút 1: Liên hệ chúng tôi → (Hover làm các điểm sáng hội tụ 1 lần, nút sáng nhẹ) */}
                <button
                  type="button"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                  onClick={() => setIsContactModalOpen(true)}
                  className={`px-7 py-3.5 rounded-full font-black text-sm sm:text-base flex items-center gap-2 transition-all duration-300 cursor-pointer active:scale-98 ${
                    isHoveringContact
                      ? 'bg-[#00c2ff] text-[#071629] shadow-[0_0_35px_rgba(0,194,255,0.7)] scale-102'
                      : 'bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071629] shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  <span>Liên hệ chúng tôi</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </button>

                {/* Nút 2: Xem cơ hội hợp tác → */}
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('ecosystem');
                    } else {
                      setIsPartnerModalOpen(true);
                    }
                  }}
                  className="px-7 py-3.5 rounded-full bg-slate-900/70 hover:bg-slate-800/90 text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-slate-500 flex items-center gap-2 transition-all duration-300 cursor-pointer active:scale-98"
                >
                  <span>Xem cơ hội hợp tác</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 3 Trụ cột giá trị cộng hưởng lấp đầy khoảng hẫng thị giác và gia tăng độ tin cậy */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 mt-6 sm:pt-7 sm:mt-7 border-t border-slate-800/70 text-left">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-white font-black text-xl sm:text-2xl tracking-tight">
                    <span>500</span>
                    <span className="text-[#00c2ff] text-base sm:text-lg font-bold">+</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-snug mt-0.5">
                    Doanh nghiệp đối tác
                  </span>
                </div>

                <div className="flex flex-col border-l border-slate-800/80 pl-3 sm:pl-4">
                  <div className="flex items-center gap-1 text-white font-black text-xl sm:text-2xl tracking-tight">
                    <span>35</span>
                    <span className="text-[#00c2ff] text-base sm:text-lg font-bold">+</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-snug mt-0.5">
                    Quỹ đầu tư đồng hành
                  </span>
                </div>

                <div className="flex flex-col border-l border-slate-800/80 pl-3 sm:pl-4">
                  <div className="flex items-center gap-1 text-white font-black text-xl sm:text-2xl tracking-tight">
                    <span>100</span>
                    <span className="text-[#00c2ff] text-base sm:text-lg font-bold">%</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-snug mt-0.5">
                    Đồng hành thực chất
                  </span>
                </div>
              </div>

            </div>

            {/* ===================================================================== */}
            {/* CỘT PHẢI: MINH HỌA "NGUỒN LỰC HỘI TỤ" VỚI 3D PARALLAX THEO CHUỘT    */}
            {/* ===================================================================== */}
            <div
              className="lg:col-span-6 flex items-center justify-center relative min-h-[300px] sm:min-h-[360px] lg:min-h-[390px] max-h-[420px] will-change-transform"
              style={{
                transform:
                  !isMobile && !prefersReducedMotion
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    : 'none',
                transition: 'transform 0.2s ease-out',
              }}
            >
              {/* SVG Minh họa "Nguồn lực hội tụ" */}
              <div className="relative w-full max-w-[500px] aspect-[16/11] flex items-center justify-center">
                
                {/* SVG Các đường nối, vòng tròn năng lượng và điểm sáng */}
                <svg
                  viewBox="0 0 540 400"
                  className="w-full h-full overflow-visible"
                  fill="none"
                >
                  <defs>
                    {/* Gradient phát sáng cyan */}
                    <linearGradient id="cyan-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#00c2ff" stopOpacity="1" />
                    </linearGradient>

                    {/* Gradient vàng kim */}
                    <linearGradient id="gold-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>

                    {/* Vùng phát sáng hạt photon */}
                    <filter id="glow-photon" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 1. Các vòng tròn năng lượng đồng tâm tại tâm đế (Concentric Energy Podiums) */}
                  <g className="origin-center transition-all duration-700" opacity={logoRevealed ? 1 : 0.4}>
                    {/* Vòng ngoài cùng */}
                    <ellipse cx="270" cy="275" rx="170" ry="55" stroke="#00c2ff" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
                    
                    {/* Vòng cyan chính */}
                    <ellipse
                      cx="270"
                      cy="275"
                      rx="135"
                      ry="42"
                      stroke="#00c2ff"
                      strokeWidth={isHoveringContact ? '2.5' : '1.8'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      className="transition-all duration-300"
                    />

                    {/* Vòng vàng kim tinh xảo */}
                    <ellipse
                      cx="270"
                      cy="275"
                      rx="105"
                      ry="32"
                      stroke="url(#gold-ring-gradient)"
                      strokeWidth={isHoveringContact ? '3' : '2'}
                      opacity={isHoveringContact ? 1 : 0.85}
                      className="transition-all duration-300"
                    />

                    {/* Mặt sàn phản chiếu ánh sáng */}
                    <ellipse cx="270" cy="275" rx="75" ry="22" fill="#00c2ff" opacity={isHoveringContact ? 0.25 : 0.12} />
                  </g>

                  {/* 2. Các đường nối hội tụ từ ngoài vào trung tâm */}
                  <g className="transition-all duration-500">
                    {/* Đường 1: Từ khối trên trái (80, 80) -> Trung tâm (270, 275) */}
                    <path
                      d="M 85 85 C 130 90, 160 250, 240 270"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="320"
                      strokeDashoffset={isEntered ? '0' : '320'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.3s, opacity 0.3s',
                      }}
                    />

                    {/* Đường 2: Từ khối giữa trái (50, 220) -> Trung tâm */}
                    <path
                      d="M 60 220 C 120 220, 160 265, 230 275"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="260"
                      strokeDashoffset={isEntered ? '0' : '260'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, stroke-width 0.3s, opacity 0.3s',
                      }}
                    />

                    {/* Đường 3: Từ khối dưới trái (90, 340) -> Trung tâm */}
                    <path
                      d="M 95 330 C 140 330, 190 290, 245 280"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="260"
                      strokeDashoffset={isEntered ? '0' : '260'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, stroke-width 0.3s, opacity 0.3s',
                      }}
                    />

                    {/* Đường 4: Từ khối trên phải (460, 70) -> Trung tâm */}
                    <path
                      d="M 455 75 C 410 80, 370 240, 300 270"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="320"
                      strokeDashoffset={isEntered ? '0' : '320'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.3s, opacity 0.3s',
                      }}
                    />

                    {/* Đường 5: Từ khối giữa phải (490, 200) -> Trung tâm */}
                    <path
                      d="M 480 200 C 430 200, 380 265, 310 275"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="260"
                      strokeDashoffset={isEntered ? '0' : '260'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, stroke-width 0.3s, opacity 0.3s',
                      }}
                    />

                    {/* Đường 6: Từ khối dưới phải (460, 330) -> Trung tâm */}
                    <path
                      d="M 450 330 C 400 330, 350 290, 295 280"
                      stroke="url(#cyan-glow-line)"
                      strokeWidth={isHoveringContact ? '3' : '1.8'}
                      strokeDasharray="260"
                      strokeDashoffset={isEntered ? '0' : '260'}
                      opacity={isHoveringContact ? 1 : 0.75}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, stroke-width 0.3s, opacity 0.3s',
                      }}
                    />
                  </g>

                  {/* 3. Các điểm sáng photon chạy chậm về trung tâm dọc theo đường nối */}
                  {logoRevealed && !prefersReducedMotion && (
                    <g filter="url(#glow-photon)">
                      {/* Photon 1 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '5' : '3.5'} fill="#00c2ff">
                        <animateMotion
                          path="M 85 85 C 130 90, 160 250, 240 270"
                          dur={isHoveringContact ? '1.2s' : '3.5s'}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Photon 2 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '4.5' : '3'} fill="#38bdf8">
                        <animateMotion
                          path="M 60 220 C 120 220, 160 265, 230 275"
                          dur={isHoveringContact ? '1.4s' : '4s'}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Photon 3 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '5' : '3.5'} fill="#00c2ff">
                        <animateMotion
                          path="M 95 330 C 140 330, 190 290, 245 280"
                          dur={isHoveringContact ? '1.3s' : '3.8s'}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Photon 4 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '5' : '3.5'} fill="#00c2ff">
                        <animateMotion
                          path="M 455 75 C 410 80, 370 240, 300 270"
                          dur={isHoveringContact ? '1.2s' : '3.5s'}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Photon 5 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '4.5' : '3'} fill="#38bdf8">
                        <animateMotion
                          path="M 480 200 C 430 200, 380 265, 310 275"
                          dur={isHoveringContact ? '1.4s' : '4.2s'}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Photon 6 */}
                      <circle cx="0" cy="0" r={isHoveringContact ? '5' : '3.5'} fill="#00c2ff">
                        <animateMotion
                          path="M 450 330 C 400 330, 350 290, 295 280"
                          dur={isHoveringContact ? '1.3s' : '3.9s'}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  )}

                  {/* 4. Các khối hình học / khối pha lê đại diện cho nguồn lực nổi nhẹ */}
                  {/* Khối trên trái: Khối lập phương kính */}
                  <g className="transition-transform duration-500 animate-[bounce_4s_ease-in-out_infinite]">
                    <ellipse cx="85" cy="105" rx="20" ry="7" fill="#00c2ff" opacity="0.3" />
                    <polygon points="85,60 105,72 85,84 65,72" fill="#7dd3fc" opacity="0.9" />
                    <polygon points="65,72 85,84 85,102 65,90" fill="#0284c7" opacity="0.8" />
                    <polygon points="105,72 85,84 85,102 105,90" fill="#38bdf8" opacity="0.7" />
                    <circle cx="85" cy="85" r="3" fill="#ffffff" />
                  </g>

                  {/* Khối giữa trái: Node phát sáng */}
                  <g className="transition-transform duration-500 animate-[pulse_3s_ease-in-out_infinite]">
                    <circle cx="60" cy="220" r="7" fill="#00c2ff" filter="url(#glow-photon)" />
                    <circle cx="60" cy="220" r="14" stroke="#00c2ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  </g>

                  {/* Khối dưới trái: Kim tự tháp kính */}
                  <g className="transition-transform duration-500 animate-[bounce_5s_ease-in-out_infinite]">
                    <ellipse cx="95" cy="345" rx="24" ry="8" fill="#00c2ff" opacity="0.3" />
                    <polygon points="95,305 75,340 95,335" fill="#38bdf8" opacity="0.8" />
                    <polygon points="95,305 115,340 95,335" fill="#bae6fd" opacity="0.9" />
                    <circle cx="95" cy="305" r="3" fill="#ffffff" />
                  </g>

                  {/* Khối trên phải: Bát diện pha lê */}
                  <g className="transition-transform duration-500 animate-[bounce_4.5s_ease-in-out_infinite]">
                    <ellipse cx="455" cy="95" rx="18" ry="6" fill="#00c2ff" opacity="0.3" />
                    <polygon points="455,55 470,72 455,89 440,72" fill="#e0f2fe" opacity="0.85" />
                    <polygon points="455,55 455,89 470,72" fill="#38bdf8" opacity="0.6" />
                    <polygon points="455,55 455,89 440,72" fill="#0284c7" opacity="0.7" />
                    <circle cx="455" cy="72" r="3" fill="#ffffff" />
                  </g>

                  {/* Khối giữa phải: Khối nón pha lê */}
                  <g className="transition-transform duration-500 animate-[pulse_3.5s_ease-in-out_infinite]">
                    <ellipse cx="480" cy="210" rx="18" ry="6" fill="#00c2ff" opacity="0.3" />
                    <polygon points="480,175 465,205 480,202" fill="#7dd3fc" opacity="0.75" />
                    <polygon points="480,175 495,205 480,202" fill="#bae6fd" opacity="0.9" />
                    <circle cx="480" cy="175" r="3" fill="#ffffff" />
                  </g>

                  {/* Khối dưới phải: Khối hộp năng lượng */}
                  <g className="transition-transform duration-500 animate-[bounce_5.2s_ease-in-out_infinite]">
                    <ellipse cx="450" cy="345" rx="22" ry="8" fill="#00c2ff" opacity="0.3" />
                    <polygon points="450,305 468,315 450,325 432,315" fill="#38bdf8" opacity="0.85" />
                    <polygon points="432,315 450,325 450,342 432,332" fill="#0284c7" opacity="0.8" />
                    <polygon points="468,315 450,325 450,342 468,332" fill="#7dd3fc" opacity="0.7" />
                    <circle cx="450" cy="325" r="3" fill="#ffffff" />
                  </g>
                </svg>

                {/* 5. Biểu tượng Matrix chính thức tỏa sáng rực rỡ tại giao điểm trung tâm */}
                <div
                  className={`absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-[65%] z-20 pointer-events-none transition-all duration-700 ease-out flex flex-col items-center ${
                    logoRevealed
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75'
                  }`}
                >
                  {/* Hào quang trung tâm tỏa ra khi hội tụ */}
                  <div
                    className={`absolute inset-0 rounded-full blur-[35px] pointer-events-none transition-all duration-500 ${
                      isHoveringContact
                        ? 'bg-[#00c2ff]/60 scale-150'
                        : 'bg-[#00c2ff]/35 scale-125'
                    }`}
                  />

                  {/* Logo 3D Faceted 'M' chính thức của Matrix Holding */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center drop-shadow-[0_15px_30px_rgba(0,194,255,0.45)]">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      className="w-full h-full"
                    >
                      <defs>
                        <linearGradient id="matrix-m-left-pillar" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00c2ff" />
                          <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                        <linearGradient id="matrix-m-center-left" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0369a1" />
                          <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                        <linearGradient id="matrix-m-gold-core" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="40%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                        <linearGradient id="matrix-m-center-right" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                        <linearGradient id="matrix-m-right-pillar" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0284c7" />
                          <stop offset="100%" stopColor="#075985" />
                        </linearGradient>
                      </defs>

                      {/* Trụ đứng bên trái */}
                      <polygon points="14,16 32,16 32,84 14,84" fill="url(#matrix-m-left-pillar)" />
                      {/* Vát gập trái */}
                      <polygon points="32,16 50,56 40,66 22,26" fill="url(#matrix-m-center-left)" />
                      {/* Lõi vàng kim điểm nhấn chính diện */}
                      <polygon points="46,48 54,48 50,68 46,58" fill="url(#matrix-m-gold-core)" filter="drop-shadow(0 0 6px #f59e0b)" />
                      {/* Vát gập phải */}
                      <polygon points="50,56 68,16 78,26 60,66" fill="url(#matrix-m-center-right)" />
                      {/* Trụ đứng bên phải */}
                      <polygon points="68,16 86,16 86,84 68,84" fill="url(#matrix-m-right-pillar)" />
                      
                      {/* Viền sáng pha lê khúc xạ trên các cạnh */}
                      <polyline points="14,16 32,16 50,56 68,16 86,16" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                    </svg>
                  </div>

                  {/* Đốm sáng phản chiếu dưới chân logo */}
                  <div className="w-24 h-4 bg-[#00c2ff]/40 blur-md rounded-full -mt-2" />
                </div>

              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* DÒNG TIẾN TRÌNH HỢP TÁC Ở ĐÁY: KẾT NỐI — ĐỒNG HÀNH — PHÁT TRIỂN           */}
          {/* ========================================================================= */}
          <div className="pt-8 sm:pt-9 mt-8 sm:mt-10 border-t border-slate-800/70 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-400">
            {/* Nửa bên trái: Kết nối + Đường nối ngang cân xứng */}
            <div className="flex-1 flex items-center min-w-0 pr-3 sm:pr-6">
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff]" />
                <span className="text-white font-bold tracking-wider">Kết nối</span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700/80 via-slate-800 to-slate-800 ml-3 sm:ml-6" />
            </div>

            {/* Chính giữa: Đồng hành */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 px-2 sm:px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="text-slate-200 font-bold tracking-wider">Đồng hành</span>
            </div>

            {/* Nửa bên phải: Đường nối ngang cân xứng + Phát triển */}
            <div className="flex-1 flex items-center min-w-0 pl-3 sm:pl-6">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700/80 mr-3 sm:mr-6" />
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff]" />
                <span className="text-[#00c2ff] font-bold tracking-wider">Phát triển</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL LIÊN HỆ ĐỐI TÁC (KHI BẤM "LIÊN HỆ CHÚNG TÔI")                        */}
      {/* ========================================================================= */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#071629] text-white rounded-3xl shadow-2xl border border-slate-700/80 p-6 sm:p-8 overflow-hidden">
            
            {/* Nút đóng */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tiêu đề modal */}
            <div className="mb-6">
              <span className="text-[#00c2ff] font-bold text-xs uppercase tracking-widest block mb-1.5">
                KẾT NỐI VÀ HỢP TÁC
              </span>
              <h3 className="text-2xl font-black text-white">
                Gửi thông tin hợp tác chiến lược
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Ban Phát triển Đối tác Matrix Holding sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
            </div>

            {/* Thông báo gửi thành công */}
            {isSuccess ? (
              <div className="p-5 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-emerald-300 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold">Gửi thông điệp thành công!</p>
                  <p className="text-xs text-emerald-200/80 mt-0.5">Chúng tôi đã tiếp nhận thông tin và sẽ liên hệ với bạn sớm nhất.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c2ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Tên doanh nghiệp / Tổ chức
                    </label>
                    <input
                      type="text"
                      placeholder="Công ty CP..."
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c2ff]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email công việc *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c2ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c2ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Lĩnh vực hợp tác quan tâm
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white focus:outline-none focus:border-[#00c2ff]"
                  >
                    <option value="investment">Hợp tác Đầu tư & Gọi vốn (Matrix Ventures)</option>
                    <option value="ecosystem">Gia nhập Hệ sinh thái Kết nối Kinh doanh (Matrix Connect)</option>
                    <option value="services">Dịch vụ Quản trị & Vận hành Doanh nghiệp (Matrix Network)</option>
                    <option value="academy">Đào tạo Lãnh đạo & Nhân tài Tinh hoa (Matrix Academy)</option>
                    <option value="other">Hợp tác Chiến lược Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nội dung đề xuất hợp tác
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Chia sẻ ngắn gọn về nhu cầu hoặc ý tưởng cộng hưởng cùng Matrix Holding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#00c2ff]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071629] font-black text-sm py-3 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Đang gửi thông điệp...' : 'Gửi đề xuất hợp tác'}</span>
                  </button>
                </div>
              </form>
            )}

            {/* Trụ sở liên hệ nhanh */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00c2ff]" />
                Keangnam Landmark 72, Hà Nội
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00c2ff]" />
                (+84) 24 3988 6886
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00c2ff]" />
                contact@matrixholding.vn
              </span>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL CƠ HỘI HỢP TÁC (KHI BẤM "XEM CƠ HỘI HỢP TÁC")                       */}
      {/* ========================================================================= */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#071629] text-white rounded-3xl shadow-2xl border border-slate-700/80 p-6 sm:p-8 overflow-hidden">
            
            <button
              type="button"
              onClick={() => setIsPartnerModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[#00c2ff] font-bold text-xs uppercase tracking-widest block mb-1.5">
                HỆ THỐNG CỘNG HƯỞNG
              </span>
              <h3 className="text-2xl font-black text-white">
                Cơ hội hợp tác cùng Matrix Holding
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Khám phá các phương thức hợp tác thực chất và bền vững trong hệ sinh thái.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center mb-2.5 text-[#00c2ff]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Doanh nghiệp thành viên</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nhận nguồn lực tài chính, pháp lý và chuyển giao công nghệ AI để bứt phá quy mô.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center mb-2.5 text-[#00c2ff]">
                  <Handshake className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Đối tác liên minh B2B</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hợp tác phân phối chéo sản phẩm và dịch vụ trong mạng lưới hơn 500 doanh nghiệp.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center mb-2.5 text-[#00c2ff]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Quỹ đầu tư & Tài chính</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Đồng đầu tư (Co-investment) vào các dự án tiềm năng với cơ chế kiểm soát rủi ro minh bạch.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-950 flex items-center justify-center mb-2.5 text-[#00c2ff]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">Đổi mới sáng tạo & AI</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cùng nghiên cứu và thương mại hóa các giải pháp dữ liệu và trí tuệ nhân tạo thế hệ mới.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsPartnerModalOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-[#00c2ff] text-[#071629] font-bold text-xs sm:text-sm hover:bg-[#38bdf8] transition-colors cursor-pointer"
              >
                Gửi thông tin hợp tác ngay
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
