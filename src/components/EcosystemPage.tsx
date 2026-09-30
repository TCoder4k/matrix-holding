import { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Layers,
  Users,
  X,
  CheckCircle2,
} from 'lucide-react';

// Exact 3D Visual Assets matching the original design mockup 1:1
import monumentMImg from '../assets/images/ecosystem_3d_m_stage_1790773514829.jpg';
import cardNetworkImg from '../assets/images/ecosystem_card_network_exact_1790773536717.jpg';
import cardCapitalImg from '../assets/images/ecosystem_card_capital_exact_1790773556219.jpg';
import cardCommunityImg from '../assets/images/ecosystem_card_community_exact_1790773572441.jpg';
import bottomBannerImg from '../assets/images/ecosystem_bottom_banner_1790772834294.jpg';

interface MemberBrandDetail {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
  accentColor: string;
  description: string;
  corePillars: {
    title: string;
    description: string;
  }[];
  keyInitiatives: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  ctaText: string;
}

const memberBrands: MemberBrandDetail[] = [
  {
    id: 'network',
    name: 'MATRIX NETWORK',
    tagline: 'Giải pháp doanh nghiệp',
    badge: 'Nền tảng hạ tầng & Chuyển đổi số',
    image: cardNetworkImg,
    accentColor: '#27d9ef',
    description:
      'Hạ tầng mạng lưới liên kết và cung cấp các gói giải pháp doanh nghiệp toàn diện. Tập trung vào số hóa quy trình vận hành, tự động hóa chuỗi cung ứng, và chuẩn hóa hệ thống quản trị theo tiêu chuẩn quốc tế.',
    corePillars: [
      {
        title: 'Nền tảng số & Quản trị tập trung',
        description: 'Tích hợp hệ thống ERP/CRM đám mây, tối ưu quy trình ra quyết định dựa trên dữ liệu thời gian thực.',
      },
      {
        title: 'Tối ưu chuỗi cung ứng & Vận hành',
        description: 'Chuẩn hóa logistics nội khối, giảm thiểu hao phí tồn kho và đẩy nhanh chu kỳ luân chuyển vốn.',
      },
      {
        title: 'Tư vấn tái cấu trúc & Năng suất',
        description: 'Tái thiết lập cấu trúc tổ chức tinh gọn, đào tạo nhân sự công nghệ và gia tăng năng suất trên mỗi nhân sự.',
      },
    ],
    keyInitiatives: [
      'Triển khai cho hơn 120+ doanh nghiệp vừa và lớn tại Việt Nam',
      'Tiết giảm trung bình 22% chi phí vận hành cho các đơn vị liên minh',
      'Hệ thống an toàn thông tin đạt chuẩn ISO 27001 và SOC 2',
    ],
    metrics: [
      { value: '120+', label: 'Doanh nghiệp áp dụng' },
      { value: '22%', label: 'Chi phí tiết giảm bình quân' },
      { value: '99.9%', label: 'Độ khả dụng hệ thống' },
    ],
    ctaText: 'Hợp tác cùng Matrix Network',
  },
  {
    id: 'capital',
    name: 'MATRIX CAPITAL',
    tagline: 'Kết nối đầu tư',
    badge: 'Quản trị nguồn vốn & Tăng trưởng',
    image: cardCapitalImg,
    accentColor: '#38bdf8',
    description:
      'Cánh tay tài chính chiến lược của MATRIX HOLDING, chuyên trách quản lý nguồn vốn, tư vấn M&A và ươm tạo các doanh nghiệp tăng trưởng cao trong các lĩnh vực bất động sản công nghiệp, năng lượng sạch và công nghệ số.',
    corePillars: [
      {
        title: 'Quản lý danh mục đầu tư chiến lược',
        description: 'Định vị và phân bổ nguồn lực tài chính trung và dài hạn vào các ngành kinh tế trọng điểm giàu tiềm năng.',
      },
      {
        title: 'Vốn mồi & Vốn tăng trưởng (Growth Capital)',
        description: 'Tiếp sức cho các doanh nghiệp đột phá có nền tảng công nghệ và đội ngũ sáng lập xuất sắc.',
      },
      {
        title: 'Tư vấn M&A & Cấu trúc tài chính quốc tế',
        description: 'Xây dựng phương án sáp nhập, phát hành trái phiếu xanh và thu hút các định chế tài chính đa quốc gia.',
      },
    ],
    keyInitiatives: [
      'Quy mô tài sản quản lý (AUM) tăng trưởng bền vững vượt bậc qua từng giai đoạn',
      'Đồng hành cùng 15+ thương vụ M&A chiến lược tạo giá trị cộng hưởng cao',
      'Hệ thống quản trị rủi ro đa tầng theo khuyến nghị Basel III',
    ],
    metrics: [
      { value: '15+', label: 'Thương vụ M&A chiến lược' },
      { value: '25%+', label: 'Tỷ suất sinh lời kỳ vọng IRR' },
      { value: '100%', label: 'Tuân thủ quản trị rủi ro' },
    ],
    ctaText: 'Kết nối đầu tư Matrix Capital',
  },
  {
    id: 'community',
    name: 'MATRIX COMMUNITY',
    tagline: 'Cộng đồng kết nối',
    badge: 'Mạng lưới tinh hoa & Xúc tiến thương mại',
    image: cardCommunityImg,
    accentColor: '#06b6d4',
    description:
      'Không gian kết nối tri thức, chia sẻ nguồn lực và ươm mầm các sáng kiến hợp tác đa ngành giữa các nhà sáng lập, chuyên gia quản trị và đối tác chiến lược trong và ngoài nước.',
    corePillars: [
      {
        title: 'Diễn đàn doanh nhân & Xúc tiến thương mại',
        description: 'Kiến tạo không gian đối thoại cấp cao giữa các nhà hoạch định chính sách, chủ doanh nghiệp và quỹ đầu tư.',
      },
      {
        title: 'Chương trình Cố vấn cấp cao (Mentorship)',
        description: 'Chuyển giao kinh nghiệm thực chiến từ các lãnh đạo kỳ cựu cho thế hệ lãnh đạo doanh nghiệp kế cận.',
      },
      {
        title: 'Mạng lưới liên minh cơ hội kinh doanh',
        description: 'Thúc đẩy trao đổi đối tác chéo (Cross-selling), mở rộng kênh phân phối và mở khóa thị trường mới.',
      },
    ],
    keyInitiatives: [
      'Quy tụ hơn 5.000+ thành viên doanh nhân, chuyên gia và nhà đầu tư năng động',
      'Hơn 50+ sự kiện kết nối kinh doanh (Business Matching) chuyên sâu mỗi năm',
      'Hợp tác chặt chẽ cùng các liên đoàn và hiệp hội doanh nghiệp uy tín hàng đầu',
    ],
    metrics: [
      { value: '5.000+', label: 'Hội viên doanh nhân & chuyên gia' },
      { value: '50+', label: 'Hội nghị xúc tiến mỗi năm' },
      { value: '85%', label: 'Tỷ lệ phản hồi hợp tác tích cực' },
    ],
    ctaText: 'Gia nhập Matrix Community',
  },
];

interface EcosystemPageProps {
  onOpenContact: (topic?: string) => void;
}

export default function EcosystemPage({ onOpenContact }: EcosystemPageProps) {
  const [selectedBrand, setSelectedBrand] = useState<MemberBrandDetail | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (MÀN HÌNH ĐẦU TIÊN) - Chuẩn 100% Thiết kế gốc            */}
      {/* Tiêu đề + mô tả ngắn + nút "Khám phá hệ sinh thái" + Sơ đồ tam giác phải  */}
      {/* Tuyệt đối không nhét thống kê số liệu vào màn hình đầu                    */}
      {/* ========================================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#081c31] overflow-hidden text-white pt-24 pb-16 lg:pb-20">
        {/* Subtle Ambient Cosmic Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#27d9ef]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#0284c7]/10 rounded-full blur-[90px]" />
        </div>

        <div className="container-page relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-slate-300 uppercase">
                <span>HỆ SINH THÁI MATRIX HOLDING</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.14]">
                Kết nối nguồn lực.
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_30px_rgba(39,217,239,0.35)]">
                  Cùng nhau phát triển.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Một trung tâm định hướng, ba thương hiệu thành viên cùng kết nối dịch vụ, cộng đồng và cơ hội đầu tư.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('mo-hinh-lien-ket')}
                  className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(39,217,239,0.3)] hover:scale-105 cursor-pointer"
                >
                  <span>Khám phá hệ sinh thái</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive 3D Holographic Constellation Diagram - 100% matching Reference Mockup */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-2 select-none">
                {/* SVG 3D Holographic Network with Glossy Glass Spheres, Golden Lasers & Glowing Cyan Rims */}
                <svg
                  viewBox="0 0 540 540"
                  className="w-full h-full drop-shadow-[0_0_35px_rgba(39,217,239,0.35)]"
                >
                  <defs>
                    {/* Cyan Neon Glow Filter */}
                    <filter id="heroCyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                      <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Golden Laser Glow Filter */}
                    <filter id="heroGoldGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                      <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* 3D Glass Sphere Gradient (Satellites) */}
                    <radialGradient id="heroGlassSphere" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#1e5887" />
                      <stop offset="30%" stopColor="#0f3c66" />
                      <stop offset="68%" stopColor="#071d33" />
                      <stop offset="100%" stopColor="#020914" />
                    </radialGradient>

                    {/* 3D Glass Sphere Gradient (Center Holding) */}
                    <radialGradient id="heroGlassCenter" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#256c9e" />
                      <stop offset="32%" stopColor="#114570" />
                      <stop offset="70%" stopColor="#07203b" />
                      <stop offset="100%" stopColor="#020b17" />
                    </radialGradient>

                    {/* Specular White-to-Cyan Glass Highlight */}
                    <linearGradient id="specularWhiteToCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                      <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                    </linearGradient>

                    {/* Golden Energy Laser Rays */}
                    <linearGradient id="goldBeamTop" x1="270" y1="270" x2="270" y2="90" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="goldBeamLeft" x1="270" y1="270" x2="114" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
                    </linearGradient>
                    <linearGradient id="goldBeamRight" x1="270" y1="270" x2="426" y2="360" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.95" />
                    </linearGradient>

                    {/* Golden Sparkle Flare Radial Gradient */}
                    <radialGradient id="sparkleFlare" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="35%" stopColor="#fef08a" />
                      <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Subtle Background Neural Mesh Lattice */}
                  <g opacity="0.25" stroke="#38bdf8" strokeWidth="0.75" fill="none">
                    <line x1="114" y1="360" x2="270" y2="90" strokeDasharray="3 5" />
                    <line x1="270" y1="90" x2="426" y2="360" strokeDasharray="3 5" />
                    <line x1="426" y1="360" x2="114" y2="360" strokeDasharray="3 5" />
                    <circle cx="192" cy="225" r="2" fill="#38bdf8" />
                    <circle cx="348" cy="225" r="2" fill="#38bdf8" />
                    <circle cx="270" cy="360" r="2" fill="#38bdf8" />
                  </g>

                  {/* Outer Cyan Circular Orbital Ring */}
                  <circle
                    cx="270"
                    cy="270"
                    r="180"
                    fill="none"
                    stroke="#27d9ef"
                    strokeWidth="1.8"
                    strokeDasharray="5 7"
                    opacity="0.7"
                    filter="url(#heroCyanGlow)"
                  />
                  <circle
                    cx="270"
                    cy="270"
                    r="180"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.2"
                    opacity="0.85"
                  />

                  {/* Orbital Connection Nodes */}
                  <circle cx="192" cy="116" r="3" fill="#27d9ef" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="348" cy="116" r="3" fill="#27d9ef" className="animate-ping" style={{ animationDuration: '3.5s' }} />
                  <circle cx="270" cy="450" r="3" fill="#27d9ef" className="animate-ping" style={{ animationDuration: '4s' }} />

                  {/* Golden Energy Laser Beams (Center Holding -> 3 Satellites) */}
                  <g filter="url(#heroGoldGlow)">
                    <line x1="270" y1="205" x2="270" y2="142" stroke="url(#goldBeamTop)" strokeWidth="3.5" />
                    <line x1="218" y1="300" x2="158" y2="335" stroke="url(#goldBeamLeft)" strokeWidth="3.5" />
                    <line x1="322" y1="300" x2="382" y2="335" stroke="url(#goldBeamRight)" strokeWidth="3.5" />
                  </g>
                  {/* Intense Core Laser Line */}
                  <line x1="270" y1="205" x2="270" y2="142" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                  <line x1="218" y1="300" x2="158" y2="335" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
                  <line x1="322" y1="300" x2="382" y2="335" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />

                  {/* Golden Junction Star Flares */}
                  <g filter="url(#heroGoldGlow)">
                    <circle cx="270" cy="142" r="7" fill="url(#sparkleFlare)" />
                    <circle cx="158" cy="335" r="7" fill="url(#sparkleFlare)" />
                    <circle cx="382" cy="335" r="7" fill="url(#sparkleFlare)" />
                    <circle cx="270" cy="205" r="7" fill="url(#sparkleFlare)" />
                    <circle cx="218" cy="300" r="7" fill="url(#sparkleFlare)" />
                    <circle cx="322" cy="300" r="7" fill="url(#sparkleFlare)" />
                  </g>

                  {/* ================================================================= */}
                  {/* CENTRAL NODE: MATRIX HOLDING (Large 3D Glass Disc)                */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => scrollToSection('vai-tro-trung-tam')}
                    className="cursor-pointer group/center transition-transform"
                  >
                    {/* Concentric Outer Cyan Glowing Halo */}
                    <circle
                      cx="270"
                      cy="270"
                      r="90"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      opacity="0.7"
                    />
                    <circle
                      cx="270"
                      cy="270"
                      r="84"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="2.5"
                      filter="url(#heroCyanGlow)"
                      className="group-hover/center:scale-105 transition-transform"
                    />

                    {/* Main 3D Glossy Sphere Body */}
                    <circle
                      cx="270"
                      cy="270"
                      r="78"
                      fill="url(#heroGlassCenter)"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                    {/* Inner Cyan Rim Light */}
                    <circle
                      cx="270"
                      cy="270"
                      r="75"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="1.5"
                      opacity="0.6"
                    />

                    {/* 3D Glass Specular Reflection Arc */}
                    <ellipse
                      cx="270"
                      cy="222"
                      rx="56"
                      ry="22"
                      fill="url(#specularWhiteToCyan)"
                    />

                    {/* Glowing Cyan 3D Faceted "M" Emblem */}
                    <g transform="translate(251, 214) scale(1.05)" filter="url(#heroCyanGlow)">
                      <polygon points="4,32 10,4 16,18 10,32" fill="#27d9ef" />
                      <polygon points="32,32 26,4 20,18 26,32" fill="#0284c7" />
                      <polygon points="16,18 20,18 26,4 20,4" fill="#7dd3fc" />
                      <polygon points="10,32 16,18 20,18 26,32 20,32 18,25 16,32" fill="#38bdf8" />
                    </g>

                    {/* Central Node Text Matching Reference Mockup */}
                    <text
                      x="270"
                      y="262"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="14"
                      fontWeight="800"
                      letterSpacing="0.14em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX
                    </text>
                    <text
                      x="270"
                      y="275"
                      textAnchor="middle"
                      fill="#27d9ef"
                      fontSize="9.5"
                      fontWeight="700"
                      letterSpacing="0.28em"
                      fontFamily="system-ui, sans-serif"
                    >
                      HOLDING
                    </text>
                    <text
                      x="270"
                      y="292"
                      textAnchor="middle"
                      fill="#e2e8f0"
                      fontSize="8.5"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Định hướng - Điều phối -
                    </text>
                    <text
                      x="270"
                      y="304"
                      textAnchor="middle"
                      fill="#e2e8f0"
                      fontSize="8.5"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Kết nối nguồn lực
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 1 (TOP): MATRIX NETWORK (3D Glass Sphere)               */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[0])}
                    className="cursor-pointer group/net transition-transform"
                  >
                    {/* Outer Cyan Glow Ring */}
                    <circle
                      cx="270"
                      cy="90"
                      r="58"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="2"
                      filter="url(#heroCyanGlow)"
                      opacity="0.85"
                    />
                    <circle
                      cx="270"
                      cy="90"
                      r="54"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.2"
                      opacity="0.6"
                    />

                    {/* Main Sphere Body */}
                    <circle
                      cx="270"
                      cy="90"
                      r="52"
                      fill="url(#heroGlassSphere)"
                      stroke="#27d9ef"
                      strokeWidth="2.5"
                    />

                    {/* Glass Specular Reflection Arc */}
                    <ellipse
                      cx="270"
                      cy="60"
                      rx="36"
                      ry="15"
                      fill="url(#specularWhiteToCyan)"
                    />

                    {/* 3D Isometric Stacked Diamond Plates Icon */}
                    <g transform="translate(270, 76)" filter="url(#heroCyanGlow)">
                      {/* Plate 1 (Top) */}
                      <polygon points="0,-14 16,-6 0,2 -16,-6" fill="#bae6fd" stroke="#38bdf8" strokeWidth="0.8" />
                      <polygon points="-16,-6 0,2 0,4 -16,-4" fill="#0284c7" />
                      <polygon points="16,-6 0,2 0,4 16,-4" fill="#0369a1" />

                      {/* Plate 2 (Middle) */}
                      <polygon points="0,-9 16,-1 0,7 -16,-1" fill="#7dd3fc" stroke="#0284c7" strokeWidth="0.8" />
                      <polygon points="-16,-1 0,7 0,9 -16,1" fill="#0369a1" />
                      <polygon points="16,-1 0,7 0,9 16,1" fill="#075985" />

                      {/* Plate 3 (Bottom) */}
                      <polygon points="0,-4 16,4 0,12 -16,4" fill="#38bdf8" stroke="#0369a1" strokeWidth="0.8" />
                      <polygon points="-16,4 0,12 0,14 -16,6" fill="#075985" />
                      <polygon points="16,4 0,12 0,14 16,6" fill="#0c4a6e" />
                    </g>

                    {/* Brand Name & Subtitle INSIDE Disc matching reference */}
                    <text
                      x="270"
                      y="106"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="800"
                      letterSpacing="0.06em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX NETWORK
                    </text>
                    <text
                      x="270"
                      y="118"
                      textAnchor="middle"
                      fill="#7dd3fc"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Giải pháp doanh nghiệp
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 2 (BOTTOM LEFT): MATRIX CAPITAL (3D Glass Sphere)       */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[1])}
                    className="cursor-pointer group/cap transition-transform"
                  >
                    {/* Outer Cyan Glow Ring */}
                    <circle
                      cx="114"
                      cy="360"
                      r="58"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      filter="url(#heroCyanGlow)"
                      opacity="0.85"
                    />
                    <circle
                      cx="114"
                      cy="360"
                      r="54"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="1.2"
                      opacity="0.6"
                    />

                    {/* Main Sphere Body */}
                    <circle
                      cx="114"
                      cy="360"
                      r="52"
                      fill="url(#heroGlassSphere)"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />

                    {/* Glass Specular Reflection Arc */}
                    <ellipse
                      cx="114"
                      cy="330"
                      rx="36"
                      ry="15"
                      fill="url(#specularWhiteToCyan)"
                    />

                    {/* 3D Ascending Bar Chart Icon */}
                    <g transform="translate(114, 346)" filter="url(#heroCyanGlow)">
                      {/* Bar 1 */}
                      <rect x="-14" y="-7" width="7" height="15" rx="2.5" fill="#7dd3fc" />
                      <line x1="-12" y1="-5" x2="-12" y2="6" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                      {/* Bar 2 */}
                      <rect x="-4" y="-13" width="7" height="21" rx="2.5" fill="#38bdf8" />
                      <line x1="-2" y1="-11" x2="-2" y2="6" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                      {/* Bar 3 */}
                      <rect x="6" y="-19" width="7" height="27" rx="2.5" fill="#0ea5e9" />
                      <line x1="8" y1="-17" x2="8" y2="6" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                    </g>

                    {/* Brand Name & Subtitle INSIDE Disc matching reference */}
                    <text
                      x="114"
                      y="376"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="800"
                      letterSpacing="0.06em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX CAPITAL
                    </text>
                    <text
                      x="114"
                      y="388"
                      textAnchor="middle"
                      fill="#7dd3fc"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Kết nối đầu tư
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 3 (BOTTOM RIGHT): MATRIX COMMUNITY (3D Glass Sphere)    */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[2])}
                    className="cursor-pointer group/com transition-transform"
                  >
                    {/* Outer Cyan Glow Ring */}
                    <circle
                      cx="426"
                      cy="360"
                      r="58"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      filter="url(#heroCyanGlow)"
                      opacity="0.85"
                    />
                    <circle
                      cx="426"
                      cy="360"
                      r="54"
                      fill="none"
                      stroke="#27d9ef"
                      strokeWidth="1.2"
                      opacity="0.6"
                    />

                    {/* Main Sphere Body */}
                    <circle
                      cx="426"
                      cy="360"
                      r="52"
                      fill="url(#heroGlassSphere)"
                      stroke="#06b6d4"
                      strokeWidth="2.5"
                    />

                    {/* Glass Specular Reflection Arc */}
                    <ellipse
                      cx="426"
                      cy="330"
                      rx="36"
                      ry="15"
                      fill="url(#specularWhiteToCyan)"
                    />

                    {/* 3D Three-People Community Icon */}
                    <g transform="translate(426, 344)" filter="url(#heroCyanGlow)">
                      {/* Center Person (Prominent) */}
                      <circle cx="0" cy="-10" r="5" fill="#bae6fd" />
                      <path d="M -8,3 C -8,-3 8,-3 8,3 Z" fill="#38bdf8" />

                      {/* Left Person */}
                      <circle cx="-11" cy="-7" r="3.8" fill="#7dd3fc" />
                      <path d="M -17,4 C -17,-1 -6,-1 -6,4 Z" fill="#0284c7" />

                      {/* Right Person */}
                      <circle cx="11" cy="-7" r="3.8" fill="#7dd3fc" />
                      <path d="M 6,4 C 6,-1 17,-1 17,4 Z" fill="#0284c7" />
                    </g>

                    {/* Brand Name & Subtitle INSIDE Disc matching reference */}
                    <text
                      x="426"
                      y="376"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="800"
                      letterSpacing="0.06em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX COMMUNITY
                    </text>
                    <text
                      x="426"
                      y="388"
                      textAnchor="middle"
                      fill="#7dd3fc"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Cộng đồng kết nối
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: MÔ HÌNH LIÊN KẾT - Chuẩn 100% Thiết kế gốc                 */}
      {/* Tách riêng phía dưới có tiêu đề "Một hệ sinh thái, kết nối đa chiều."     */}
      {/* Sơ đồ dạng vector sắc nét trên nền sáng + Chú thích bên trái              */}
      {/* ========================================================================= */}
      <section id="mo-hinh-lien-ket" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Heading, Prose & Legend matching Mockup */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600">
                MÔ HÌNH LIÊN KẾT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.16]">
                Một hệ sinh thái,
                <br />
                kết nối đa chiều.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Matrix Holding giữ vai trò trung tâm định hướng và điều phối. Các thương hiệu thành
                viên đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.
              </p>

              {/* Legend Box matching Mockup exactly */}
              <div className="p-5 bg-[#f8fafc] rounded-xl border border-slate-200/80 space-y-3.5 text-xs sm:text-sm text-slate-700 font-medium">
                {/* Line 1: Orange/Golden line with arrow */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-9 h-[2px] bg-amber-500 inline-block" />
                    <span className="text-amber-500 font-bold text-xs">→</span>
                  </div>
                  <span>Đường nối tâm: liên kết với Holding</span>
                </div>

                {/* Line 2: Cyan line with two nodes */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] inline-block" />
                    <span className="w-9 h-[2px] bg-[#0284c7] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] inline-block" />
                  </div>
                  <span>Vòng tròn: liên kết giữa các thành viên</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Technological Linkage Diagram - 100% matching Reference Mockup on Pure White Background */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center p-2 select-none">
                <svg
                  viewBox="0 0 520 480"
                  className="w-full h-full drop-shadow-sm"
                >
                  <defs>
                    {/* Golden Glow Filter */}
                    <filter id="lightGoldGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Cyan Glow Filter */}
                    <filter id="lightCyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Sharp Golden Arrowhead Marker */}
                    <marker
                      id="section2GoldArrow"
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#f59e0b" />
                    </marker>

                    {/* 3D Glossy Dark Navy Disc Radial Gradient */}
                    <radialGradient id="section2DiscGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#1e5686" />
                      <stop offset="35%" stopColor="#0d335a" />
                      <stop offset="75%" stopColor="#071d33" />
                      <stop offset="100%" stopColor="#030d1a" />
                    </radialGradient>

                    {/* Center Disc with Golden Rim Highlight */}
                    <radialGradient id="section2CenterGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#256c9e" />
                      <stop offset="32%" stopColor="#10426d" />
                      <stop offset="72%" stopColor="#061e38" />
                      <stop offset="100%" stopColor="#020914" />
                    </radialGradient>

                    {/* Specular Curved Highlight on Discs */}
                    <linearGradient id="section2Specular" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                      <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                    </linearGradient>

                    {/* Golden Radial Beam Gradient */}
                    <linearGradient id="section2GoldBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>

                  {/* Outer Inter-member Orbit (Clean Cyan Ring) */}
                  <circle
                    cx="260"
                    cy="235"
                    r="150"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="1.8"
                    strokeDasharray="4 6"
                    opacity="0.8"
                  />

                  {/* Cyan Orbit Connection Dots */}
                  <circle cx="260" cy="85" r="3.5" fill="#0284c7" />
                  <circle cx="130" cy="310" r="3.5" fill="#0284c7" />
                  <circle cx="390" cy="310" r="3.5" fill="#0284c7" />

                  {/* Golden Radial Beams with Sharp Arrowheads pointing from Center to 3 Satellites */}
                  <g filter="url(#lightGoldGlow)">
                    {/* Beam to Top (Matrix Network) */}
                    <line
                      x1="260"
                      y1="172"
                      x2="260"
                      y2="132"
                      stroke="url(#section2GoldBeam)"
                      strokeWidth="2.5"
                      markerEnd="url(#section2GoldArrow)"
                    />
                    {/* Beam to Left (Matrix Capital) */}
                    <line
                      x1="216"
                      y1="260"
                      x2="174"
                      y2="286"
                      stroke="url(#section2GoldBeam)"
                      strokeWidth="2.5"
                      markerEnd="url(#section2GoldArrow)"
                    />
                    {/* Beam to Right (Matrix Community) */}
                    <line
                      x1="304"
                      y1="260"
                      x2="346"
                      y2="286"
                      stroke="url(#section2GoldBeam)"
                      strokeWidth="2.5"
                      markerEnd="url(#section2GoldArrow)"
                    />
                  </g>

                  {/* Golden Glowing Sparkle Nodes along rays */}
                  <circle cx="260" cy="152" r="3" fill="#fbbf24" filter="url(#lightGoldGlow)" />
                  <circle cx="195" cy="273" r="3" fill="#fbbf24" filter="url(#lightGoldGlow)" />
                  <circle cx="325" cy="273" r="3" fill="#fbbf24" filter="url(#lightGoldGlow)" />

                  {/* ================================================================= */}
                  {/* CENTRAL NODE: MATRIX HOLDING (3D Glossy Disc with Golden Halo)     */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => scrollToSection('vai-tro-trung-tam')}
                    className="cursor-pointer group/center transition-transform"
                  >
                    {/* Golden Radiant Halo Ring */}
                    <circle
                      cx="260"
                      cy="235"
                      r="65"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      filter="url(#lightGoldGlow)"
                      opacity="0.85"
                    />
                    <circle
                      cx="260"
                      cy="235"
                      r="61"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="1.2"
                      opacity="0.9"
                    />

                    {/* Main Disc Body */}
                    <circle
                      cx="260"
                      cy="235"
                      r="56"
                      fill="url(#section2CenterGrad)"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />

                    {/* Specular Glass Reflection Curve */}
                    <ellipse
                      cx="260"
                      cy="200"
                      rx="38"
                      ry="15"
                      fill="url(#section2Specular)"
                    />

                    {/* Glowing Cyan 3D "M" Emblem */}
                    <g transform="translate(246, 192) scale(0.8)" filter="url(#lightCyanGlow)">
                      <polygon points="4,32 10,4 16,18 10,32" fill="#27d9ef" />
                      <polygon points="32,32 26,4 20,18 26,32" fill="#0284c7" />
                      <polygon points="16,18 20,18 26,4 20,4" fill="#7dd3fc" />
                      <polygon points="10,32 16,18 20,18 26,32 20,32 18,25 16,32" fill="#38bdf8" />
                    </g>

                    {/* Typography matching Reference Mockup */}
                    <text
                      x="260"
                      y="232"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="12.5"
                      fontWeight="800"
                      letterSpacing="0.14em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX
                    </text>
                    <text
                      x="260"
                      y="244"
                      textAnchor="middle"
                      fill="#38bdf8"
                      fontSize="8"
                      fontWeight="700"
                      letterSpacing="0.25em"
                      fontFamily="system-ui, sans-serif"
                    >
                      HOLDING
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 1 (TOP): MATRIX NETWORK                                 */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[0])}
                    className="cursor-pointer group/net transition-transform"
                  >
                    {/* Outer Cyan Rim */}
                    <circle
                      cx="260"
                      cy="85"
                      r="44"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                      opacity="0.8"
                    />

                    {/* 3D Glossy Disc Body */}
                    <circle
                      cx="260"
                      cy="85"
                      r="40"
                      fill="url(#section2DiscGrad)"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />

                    {/* Specular Highlight */}
                    <ellipse
                      cx="260"
                      cy="62"
                      rx="26"
                      ry="10"
                      fill="url(#section2Specular)"
                    />

                    {/* 3D Isometric Stacked Plates Icon in Cyan/White */}
                    <g transform="translate(260, 83) scale(0.9)" filter="url(#lightCyanGlow)">
                      {/* Top Plate */}
                      <polygon points="0,-14 15,-6 0,2 -15,-6" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="0.8" />
                      <polygon points="-15,-6 0,2 0,4 -15,-4" fill="#0284c7" />
                      <polygon points="15,-6 0,2 0,4 15,-4" fill="#0369a1" />
                      {/* Middle Plate */}
                      <polygon points="0,-8 15,0 0,8 -15,0" fill="#7dd3fc" stroke="#0284c7" strokeWidth="0.8" />
                      <polygon points="-15,0 0,8 0,10 -15,2" fill="#0369a1" />
                      <polygon points="15,0 0,8 0,10 15,2" fill="#075985" />
                      {/* Bottom Plate */}
                      <polygon points="0,-2 15,6 0,14 -15,6" fill="#38bdf8" stroke="#0369a1" strokeWidth="0.8" />
                      <polygon points="-15,6 0,14 0,16 -15,8" fill="#075985" />
                      <polygon points="15,6 0,14 0,16 15,8" fill="#0c4a6e" />
                    </g>

                    {/* Label Directly UNDER the Disc on White Background */}
                    <text
                      x="260"
                      y="144"
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="12.5"
                      fontWeight="800"
                      letterSpacing="0.04em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX NETWORK
                    </text>
                    <text
                      x="260"
                      y="158"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="10"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Giải pháp doanh nghiệp
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 2 (BOTTOM LEFT): MATRIX CAPITAL                         */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[1])}
                    className="cursor-pointer group/cap transition-transform"
                  >
                    {/* Outer Cyan Rim */}
                    <circle
                      cx="130"
                      cy="310"
                      r="44"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                      opacity="0.8"
                    />

                    {/* 3D Glossy Disc Body */}
                    <circle
                      cx="130"
                      cy="310"
                      r="40"
                      fill="url(#section2DiscGrad)"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />

                    {/* Specular Highlight */}
                    <ellipse
                      cx="130"
                      cy="287"
                      rx="26"
                      ry="10"
                      fill="url(#section2Specular)"
                    />

                    {/* 3D Ascending Bar Chart Icon */}
                    <g transform="translate(130, 310) scale(0.9)" filter="url(#lightCyanGlow)">
                      {/* Bar 1 */}
                      <rect x="-13" y="-6" width="6.5" height="15" rx="2" fill="#7dd3fc" />
                      <line x1="-11" y1="-4" x2="-11" y2="7" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                      {/* Bar 2 */}
                      <rect x="-3.5" y="-12" width="6.5" height="21" rx="2" fill="#38bdf8" />
                      <line x1="-1.5" y1="-10" x2="-1.5" y2="7" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                      {/* Bar 3 */}
                      <rect x="6" y="-18" width="6.5" height="27" rx="2" fill="#0ea5e9" />
                      <line x1="8" y1="-16" x2="8" y2="7" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                    </g>

                    {/* Label Directly UNDER the Disc on White Background */}
                    <text
                      x="130"
                      y="368"
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="12.5"
                      fontWeight="800"
                      letterSpacing="0.04em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX CAPITAL
                    </text>
                    <text
                      x="130"
                      y="382"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="10"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Kết nối đầu tư
                    </text>
                  </g>

                  {/* ================================================================= */}
                  {/* SATELLITE 3 (BOTTOM RIGHT): MATRIX COMMUNITY                      */}
                  {/* ================================================================= */}
                  <g
                    onClick={() => setSelectedBrand(memberBrands[2])}
                    className="cursor-pointer group/com transition-transform"
                  >
                    {/* Outer Cyan Rim */}
                    <circle
                      cx="390"
                      cy="310"
                      r="44"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                      opacity="0.8"
                    />

                    {/* 3D Glossy Disc Body */}
                    <circle
                      cx="390"
                      cy="310"
                      r="40"
                      fill="url(#section2DiscGrad)"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />

                    {/* Specular Highlight */}
                    <ellipse
                      cx="390"
                      cy="287"
                      rx="26"
                      ry="10"
                      fill="url(#section2Specular)"
                    />

                    {/* 3D Community People Icon */}
                    <g transform="translate(390, 310) scale(0.9)" filter="url(#lightCyanGlow)">
                      {/* Center Person */}
                      <circle cx="0" cy="-9" r="4.5" fill="#e0f2fe" />
                      <path d="M -7,3 C -7,-2 7,-2 7,3 Z" fill="#38bdf8" />
                      {/* Left Person */}
                      <circle cx="-10" cy="-6" r="3.5" fill="#7dd3fc" />
                      <path d="M -15,4 C -15,0 -5,0 -5,4 Z" fill="#0284c7" />
                      {/* Right Person */}
                      <circle cx="10" cy="-6" r="3.5" fill="#7dd3fc" />
                      <path d="M 5,4 C 5,0 15,0 15,4 Z" fill="#0284c7" />
                    </g>

                    {/* Label Directly UNDER the Disc on White Background */}
                    <text
                      x="390"
                      y="368"
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="12.5"
                      fontWeight="800"
                      letterSpacing="0.04em"
                      fontFamily="system-ui, sans-serif"
                    >
                      MATRIX COMMUNITY
                    </text>
                    <text
                      x="390"
                      y="382"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="10"
                      fontWeight="500"
                      fontFamily="system-ui, sans-serif"
                    >
                      Cộng đồng kết nối
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: VAI TRÒ TRUNG TÂM - Chuẩn 100% Thiết kế gốc                 */}
      {/* Logo khối 3D chữ M to trên bệ xoay ánh sáng                               */}
      {/* Tiêu đề "Matrix Holding - Kiến tạo chiến lược..."                         */}
      {/* ========================================================================= */}
      <section id="vai-tro-trung-tam" className="py-20 lg:py-28 bg-[#f8fafc]/70 border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Big 3D Sculptural M on Light Stage Pedestal */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden group">
                <img
                  src={monumentMImg}
                  alt="Biểu tượng Matrix Holding 3D"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Clean Architectural Typography */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="w-1 h-5 bg-slate-900 inline-block rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-700">
                  VAI TRÒ TRUNG TÂM
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-950 tracking-tight leading-tight">
                Matrix Holding
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
                Kiến tạo chiến lược, kết nối nguồn lực và thúc đẩy sự phát triển của toàn hệ sinh thái.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 4: BA THƯƠNG HIỆU THÀNH VIÊN - Chuẩn 100% Thiết kế gốc        */}
      {/* Grid 3 card: MATRIX NETWORK, MATRIX CAPITAL, MATRIX COMMUNITY             */}
      {/* Hình ảnh 3D tinh chuẩn, nút "Khám phá →"                                  */}
      {/* ========================================================================= */}
      <section id="ba-thuong-hieu" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          {/* Header */}
          <div className="mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600 mb-2">
              BA THƯƠNG HIỆU THÀNH VIÊN
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-950 tracking-tight">
              Ba thương hiệu, cùng một định hướng.
            </h2>
          </div>

          {/* 3 Brand Cards Grid matching Mockup exactly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* 3D Render Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-[#0284c7] transition-colors">
                      {brand.name}
                    </h3>
                    <div className="text-sm text-slate-500 font-medium mt-1">
                      {brand.tagline}
                    </div>
                  </div>

                  {/* Clean Pill Button matching Mockup: → Khám phá → */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:border-[#27d9ef] hover:bg-[#e0f7fa]/40 hover:text-[#0284c7] transition-all cursor-pointer group/btn"
                    >
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      <span>Khám phá</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 5: CÙNG KIẾN TẠO GIÁ TRỊ - Chuẩn 100% Thiết kế gốc            */}
      {/* Dãy núi hùng vĩ đón bình minh với luồng sáng vàng + Nút "Liên hệ hợp tác" */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 bg-[#081c31] text-white overflow-hidden">
        {/* Mountain Ridge & Golden Light Trails Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={bottomBannerImg}
            alt="Đỉnh núi và luồng ánh sáng kết nối"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31]/95 via-[#081c31]/75 to-[#081c31]/40" />
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
                CÙNG KIẾN TẠO GIÁ TRỊ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
                Cùng kết nối. Cùng phát triển.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact('Hợp tác phát triển hệ sinh thái Matrix')}
              className="shrink-0 bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(39,217,239,0.35)] hover:scale-105 cursor-pointer"
            >
              <span>Liên hệ hợp tác</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL: CHI TIẾT THƯƠNG HIỆU THÀNH VIÊN KHI NHẤP "KHÁM PHÁ"                */}
      {/* ========================================================================= */}
      {selectedBrand && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedBrand(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Visual Image */}
            <div className="relative aspect-[16/8] overflow-hidden bg-slate-950 rounded-t-3xl">
              <img
                src={selectedBrand.image}
                alt={selectedBrand.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c31] via-transparent to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition-all cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#27d9ef] text-[#081c31]">
                  {selectedBrand.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">
                  {selectedBrand.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  ĐỊNH VỊ CHIẾN LƯỢC
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedBrand.description}
                </p>
              </div>

              {/* Core Pillars */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  TRỤ CỘT NĂNG LỰC
                </h4>
                <div className="space-y-3">
                  {selectedBrand.corePillars.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-sm font-bold text-slate-900">{p.title}</div>
                      <div className="text-xs text-slate-600 mt-1">{p.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  CHỈ SỐ TIÊU BIỂU
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedBrand.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#e0f7fa]/30 border border-[#27d9ef]/20 text-center">
                      <div className="text-lg sm:text-xl font-extrabold text-[#0284c7]">{m.value}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Initiatives */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  DẤU ẤN NỔI BẬT
                </h4>
                <ul className="space-y-2">
                  {selectedBrand.keyInitiatives.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBrand(null)}
                  className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrand(null);
                    onOpenContact(`Liên hệ hợp tác cùng ${selectedBrand.name}`);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#081c31] text-[#27d9ef] hover:bg-[#0c243e] text-sm font-bold transition-all shadow-sm cursor-pointer"
                >
                  {selectedBrand.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
