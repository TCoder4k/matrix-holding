import { useState } from 'react';
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  TrendingUp,
  Shield,
  Users,
  Quote,
  Network,
  Box,
  Layers,
  BarChart3,
  X,
  CheckCircle2,
} from 'lucide-react';

// Generated high-fidelity visual assets
import aboutHeroBg from '../assets/images/about_hero_skyscraper_network_1790691420935.jpg';
import aboutJourneyImg from '../assets/images/about_journey_skyscraper_1790691432345.jpg';
import aboutChairmanImg from '../assets/images/about_chairman_skyline_1790691443630.jpg';
import aboutMountainsImg from '../assets/images/about_mountains_banner_1790691455949.jpg';

interface AboutPageProps {
  onOpenContact: (topic?: string) => void;
  onNavigateHome: () => void;
}

interface EcosystemNodeDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

const ecosystemData: EcosystemNodeDetail[] = [
  {
    id: 'network',
    name: 'MATRIX NETWORK',
    subtitle: 'Kết nối nguồn lực, mở rộng cơ hội',
    description:
      'Hạ tầng mạng lưới liên kết đa tầng kết nối các doanh nghiệp thành viên, đối tác quốc tế và cộng đồng nhà đầu tư. Tạo lập không gian trao đổi nguồn lực, chuyển giao công nghệ và hợp tác liên ngành.',
    highlights: [
      'Mạng lưới hơn 50+ đối tác chiến lược trong và ngoài nước',
      'Nền tảng chia sẻ hạ tầng, chuỗi cung ứng và cơ sở dữ liệu số',
      'Tổ chức các diễn đàn xúc tiến đầu tư và liên minh kinh doanh hàng năm',
    ],
  },
  {
    id: 'connect',
    name: 'MATRIX CONNECT',
    subtitle: 'Liên kết đối tác, kiến tạo giá trị',
    description:
      'Đầu mối xúc tiến thương mại, kết nối thị trường tiêu thụ và mở rộng quan hệ đối tác chiến lược toàn cầu. Đồng hành cùng các thương hiệu trong việc mở rộng thị phần và gia tăng giá trị chuỗi cung ứng.',
    highlights: [
      'Cầu nối thương mại giữa doanh nghiệp Việt Nam và khu vực Châu Á - Thái Bình Dương',
      'Tối ưu hóa các thỏa thuận phân phối và phát triển thị trường mới',
      'Đồng sáng tạo giải pháp gia tăng sức cạnh tranh cho đối tác liên minh',
    ],
  },
  {
    id: 'capital',
    name: 'MATRIX CAPITAL',
    subtitle: 'Đầu tư chiến lược, thúc đẩy tăng trưởng',
    description:
      'Quản lý nguồn vốn đầu tư chiến lược, tư vấn tài chính doanh nghiệp và ươm tạo các dự án đổi mới sáng tạo tiềm năng cao. Định hướng dòng vốn bền vững tạo đòn bẩy gia tăng giá trị lâu dài.',
    highlights: [
      'Quản lý danh mục đầu tư đa ngành với quy mô tăng trưởng ấn tượng',
      'Hỗ trợ vốn mồi, vốn tăng trưởng cho các dự án chuyển đổi xanh và công nghệ cao',
      'Quản trị rủi ro chuyên nghiệp theo chuẩn mực quốc tế',
    ],
  },
  {
    id: 'specialists',
    name: 'CÁC ĐƠN VỊ CHUYÊN MÔN',
    subtitle: 'Phát triển giải pháp, vận hành hiệu quả',
    description:
      'Tập hợp các công ty thành viên và viện nghiên cứu ứng dụng chuyên trách từng lĩnh vực mũi nhọn: Bất động sản công nghiệp, Công nghệ - Chuyển đổi số, Năng lượng tái tạo và Quản trị chuỗi cung ứng.',
    highlights: [
      'Đội ngũ chuyên gia kỹ thuật và quản trị vận hành dày dạn kinh nghiệm',
      'Áp dụng quy trình chuẩn ISO và các giải pháp tự động hóa tiên tiến',
      'Linh hoạt điều phối nguồn lực chuyên sâu đáp ứng yêu cầu từng dự án trọng điểm',
    ],
  },
];

export default function AboutPage({ onOpenContact, onNavigateHome }: AboutPageProps) {
  const [selectedNode, setSelectedNode] = useState<EcosystemNodeDetail | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. HERO SECTION - Matching Design 100% */}
      <section
        id="gioi-thieu-hero"
        className="relative min-h-[660px] lg:min-h-[720px] flex items-center bg-[#081c31] overflow-hidden text-white"
      >
        {/* Background Image with Ambient Skyscraper + Network glow */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroBg}
            alt="Matrix Holding Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-right opacity-85"
          />
          {/* Gradient Scrim matching mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31] via-[#081c31]/80 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c31] via-transparent to-[#081c31]/30" />
        </div>

        {/* Content Container */}
        <div className="container-page relative z-10 py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-8 max-w-2xl">
              {/* Kicker */}
              <div className="text-xs sm:text-sm font-bold tracking-[0.24em] text-slate-300 uppercase mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#27d9ef] inline-block" />
                <span>VỀ MATRIX HOLDING</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
                KẾT NỐI NGUỒN LỰC,
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_25px_rgba(39,217,239,0.35)]">
                  KIẾN TẠO TƯƠNG LAI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-8 font-normal">
                MATRIX HOLDING kiến tạo hệ sinh thái doanh nghiệp đa ngành, kết nối nguồn lực, thúc
                đẩy đổi mới sáng tạo và tạo ra những giá trị bền vững cho cộng đồng.
              </p>

              {/* Primary Action Button */}
              <div className="mb-14">
                <button
                  type="button"
                  onClick={() => scrollToSection('cau-chuyen')}
                  className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.4)] hover:shadow-[0_0_28px_rgba(39,217,239,0.6)] hover:translate-y-[-1px]"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Values Ticker */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                <span>KẾT NỐI</span>
                <span className="text-[#27d9ef]">—</span>
                <span>KIẾN TẠO</span>
                <span className="text-[#27d9ef]">—</span>
                <span>PHÁT TRIỂN BỀN VỮNG</span>
              </div>
            </div>

            {/* Right Column: Decorative Typographic Lockup matching Mockup */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="text-right text-xs tracking-[0.25em] text-slate-300 font-semibold space-y-1.5 uppercase border-r-2 border-[#27d9ef]/60 pr-5 py-2">
                <div className="text-slate-400">CON</div>
                <div className="text-white">PEOPLE</div>
                <div className="text-white">BUSINESS</div>
                <div className="text-[#27d9ef]">A BETTER</div>
                <div className="text-white font-bold">TOMORROW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CÂU CHUYỆN CỦA CHÚNG TÔI - Matching Mockup 100% */}
      <section id="cau-chuyen" className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-800">
                CÂU CHUYỆN CỦA CHÚNG TÔI
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                Hành trình kiến tạo
                <br />
                giá trị bền vững
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                MATRIX HOLDING được thành lập với khát vọng kiến tạo một hệ sinh thái doanh nghiệp
                đa ngành, nơi các nguồn lực được kết nối, cộng hưởng và phát triển bền vững.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Chúng tôi tin rằng sự phát triển của doanh nghiệp phải song hành cùng những giá trị
                thiết thực cho con người, cộng đồng và xã hội, hướng tới một tương lai tốt đẹp hơn.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('su-menh-tam-nhin')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#27d9ef] text-[#0284c7] font-semibold text-sm hover:bg-[#27d9ef]/10 hover:border-[#0284c7] transition-all"
                >
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </button>
              </div>
            </div>

            {/* Right Column: Skyscraper Image with 2023 Establishment Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-200/80">
                <img
                  src={aboutJourneyImg}
                  alt="Trụ sở Matrix Holding"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c31]/90 via-[#081c31]/30 to-transparent" />

                {/* Overlaid 2023 Establishment Badge */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-[#081c31]/90 backdrop-blur-md border border-white/15 p-6 rounded-xl text-white shadow-xl">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                    2023
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#27d9ef] mt-1.5 uppercase tracking-wider">
                    Năm thành lập
                  </div>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    Khởi đầu cho hành trình kết nối nguồn lực và kiến tạo những giá trị bền vững.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SỨ MỆNH & TẦM NHÌN - Matching Mockup 100% */}
      <section id="su-menh-tam-nhin" className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* SỨ MỆNH */}
            <div className="space-y-5 pt-6 md:pt-0 md:pr-10">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                SỨ MỆNH
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#e0f7fa] border border-[#27d9ef]/50 flex items-center justify-center shrink-0 text-[#0891b2] shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Kết nối nguồn lực
                    <br />
                    vì giá trị chung
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Tạo dựng hệ sinh thái doanh nghiệp vững mạnh, kết nối nguồn lực, thúc đẩy đổi mới
                    sáng tạo và kiến tạo những giá trị thiết thực cho khách hàng, đối tác và cộng đồng.
                  </p>
                </div>
              </div>
            </div>

            {/* TẦM NHÌN */}
            <div className="space-y-5 pt-8 md:pt-0 md:pl-10">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                TẦM NHÌN
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#e0f7fa] border border-[#27d9ef]/50 flex items-center justify-center shrink-0 text-[#0891b2] shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    Trở thành tập đoàn đầu tư và phát triển hệ sinh thái đa ngành tại Việt Nam và khu vực
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Không ngừng mở rộng cơ hội, kiến tạo những giá trị bền vững, đồng hành cùng sự
                    phát triển của cộng đồng và xã hội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GIÁ TRỊ CỐT LÕI - Matching Mockup 100% */}
      <section id="gia-tri-cot-loi" className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-slate-950 tracking-tight mb-12 sm:mb-14">
            GIÁ TRỊ CỐT LÕI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Sáng tạo */}
            <div className="p-6 rounded-xl border border-slate-200/80 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-200 bg-white group">
              <div className="text-[#0891b2] group-hover:scale-110 transition-transform duration-200 mb-4 inline-block">
                <Gem className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Sáng tạo</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Không ngừng đổi mới, kiến tạo giải pháp khác biệt và tạo ra giá trị mới.
              </p>
            </div>

            {/* 2. Hiệu quả & bền vững */}
            <div className="p-6 rounded-xl border border-slate-200/80 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-200 bg-white group">
              <div className="text-[#0891b2] group-hover:scale-110 transition-transform duration-200 mb-4 inline-block">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Hiệu quả & bền vững</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tối ưu nguồn lực, hướng tới tăng trưởng lâu dài và bền vững.
              </p>
            </div>

            {/* 3. Minh bạch */}
            <div className="p-6 rounded-xl border border-slate-200/80 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-200 bg-white group">
              <div className="text-[#0891b2] group-hover:scale-110 transition-transform duration-200 mb-4 inline-block">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Minh bạch</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Đề cao sự minh bạch, trách nhiệm và chuẩn mực trong mọi hoạt động.
              </p>
            </div>

            {/* 4. Đồng hành dài hạn */}
            <div className="p-6 rounded-xl border border-slate-200/80 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-200 bg-white group">
              <div className="text-[#0891b2] group-hover:scale-110 transition-transform duration-200 mb-4 inline-block">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Đồng hành dài hạn</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Xây dựng mối quan hệ tin cậy, cùng phát triển với khách hàng, đối tác và cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÔ HÌNH HỆ SINH THÁI - Matching Mockup 100% */}
      <section
        id="mo-hinh-he-sinh-thai"
        className="py-24 lg:py-28 bg-[#081c31] text-white relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#27d9ef]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 max-w-lg space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#27d9ef]">
                MÔ HÌNH HỆ SINH THÁI
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18]">
                Sức mạnh cộng hưởng từ hệ sinh thái đa ngành
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                MATRIX HOLDING phát triển hệ sinh thái với các lĩnh vực bổ trợ, cùng chia sẻ nguồn lực,
                kinh nghiệm và cơ hội, tạo nên sức mạnh cộng hưởng, thúc đẩy phát triển bền vững cho
                doanh nghiệp và xã hội.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedNode(ecosystemData[0])}
                  className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.35)] hover:scale-105"
                >
                  <span>Khám phá hệ sinh thái</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Circular Constellation Diagram matching Mockup */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center p-4">
                {/* Outer Dashed Orbit Circle */}
                <div className="absolute inset-8 sm:inset-12 rounded-full border border-[#27d9ef]/25 border-dashed animate-[spin_60s_linear_infinite]" />

                {/* Connecting Lines SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                  {/* Top-left line */}
                  <line x1="250" y1="250" x2="110" y2="110" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  {/* Top-right line */}
                  <line x1="250" y1="250" x2="390" y2="110" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  {/* Bottom-left line */}
                  <line x1="250" y1="250" x2="110" y2="390" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  {/* Bottom-right line */}
                  <line x1="250" y1="250" x2="390" y2="390" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                </svg>

                {/* Center Node: M MATRIX HOLDING */}
                <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#051323] border-2 border-[#27d9ef] shadow-[0_0_35px_rgba(39,217,239,0.5)] flex flex-col items-center justify-center p-2 text-center group cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#27d9ef] leading-none mb-1">
                    M
                  </div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase">
                    MATRIX
                  </div>
                  <div className="text-[9px] font-semibold tracking-[0.2em] text-[#27d9ef] uppercase">
                    HOLDING
                  </div>
                </div>

                {/* Node 1: Top-Left - MATRIX NETWORK */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(ecosystemData[0])}
                  className="absolute top-2 left-2 sm:top-6 sm:left-4 max-w-[170px] sm:max-w-[200px] text-left p-2.5 rounded-xl hover:bg-white/5 transition-all group cursor-pointer z-20"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e2744] border border-[#27d9ef]/40 flex items-center justify-center text-[#27d9ef] shadow-md group-hover:border-[#27d9ef] group-hover:scale-110 transition-all">
                      <Network className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-[#27d9ef] transition-colors leading-tight">
                    MATRIX NETWORK
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Kết nối nguồn lực, mở rộng cơ hội.
                  </div>
                </button>

                {/* Node 2: Top-Right - MATRIX CONNECT */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(ecosystemData[1])}
                  className="absolute top-2 right-2 sm:top-6 sm:right-4 max-w-[170px] sm:max-w-[200px] text-right p-2.5 rounded-xl hover:bg-white/5 transition-all group cursor-pointer z-20 flex flex-col items-end"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e2744] border border-[#27d9ef]/40 flex items-center justify-center text-[#27d9ef] shadow-md group-hover:border-[#27d9ef] group-hover:scale-110 transition-all">
                      <Box className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-[#27d9ef] transition-colors leading-tight">
                    MATRIX CONNECT
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Liên kết đối tác, kiến tạo giá trị
                  </div>
                </button>

                {/* Node 3: Bottom-Left - MATRIX CAPITAL */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(ecosystemData[2])}
                  className="absolute bottom-2 left-2 sm:bottom-6 sm:left-4 max-w-[170px] sm:max-w-[200px] text-left p-2.5 rounded-xl hover:bg-white/5 transition-all group cursor-pointer z-20"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e2744] border border-[#27d9ef]/40 flex items-center justify-center text-[#27d9ef] shadow-md group-hover:border-[#27d9ef] group-hover:scale-110 transition-all">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-[#27d9ef] transition-colors leading-tight">
                    MATRIX CAPITAL
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Đầu tư chiến lược, thúc đẩy tăng trưởng
                  </div>
                </button>

                {/* Node 4: Bottom-Right - CÁC ĐƠN VỊ CHUYÊN MÔN */}
                <button
                  type="button"
                  onClick={() => setSelectedNode(ecosystemData[3])}
                  className="absolute bottom-2 right-2 sm:bottom-6 sm:right-4 max-w-[170px] sm:max-w-[200px] text-right p-2.5 rounded-xl hover:bg-white/5 transition-all group cursor-pointer z-20 flex flex-col items-end"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0e2744] border border-[#27d9ef]/40 flex items-center justify-center text-[#27d9ef] shadow-md group-hover:border-[#27d9ef] group-hover:scale-110 transition-all">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-[#27d9ef] transition-colors leading-tight">
                    CÁC ĐƠN VỊ CHUYÊN MÔN
                  </div>
                  <div className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Phát triển giải pháp, vận hành hiệu quả
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LÃNH ĐẠO - Matching Mockup 100% */}
      <section id="lanh-dao" className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Chairman Info & Quote Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                LÃNH ĐẠO
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-tight">
                  Hồ Anh Tuấn
                </h2>
                <div className="text-base sm:text-lg font-bold text-slate-800 mt-1">
                  Chủ tịch Hội đồng Quản trị
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Với tầm nhìn dài hạn và khát vọng kiến tạo giá trị bền vững, chúng tôi xây dựng MATRIX
                HOLDING trở thành hệ sinh thái doanh nghiệp đa ngành, nơi con người, công nghệ và cơ
                hội được kết nối để cùng phát triển, đóng góp thiết thực cho cộng đồng và xã hội.
              </p>

              {/* Quote Card matching Mockup */}
              <div className="p-6 sm:p-7 bg-[#f8fafc] border border-slate-200/80 rounded-xl relative">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#27d9ef] text-[#081c31] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                      ‘Giá trị bền vững chỉ có thể được tạo ra khi chúng ta cùng nhau kết nối, chia sẻ
                      và không ngừng kiến tạo những cơ hội mới cho tương lai.’
                    </p>
                    <div className="font-bold text-slate-900 text-sm">
                      Hồ Anh Tuấn
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Chairman Photo looking over City Skyline */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                <img
                  src={aboutChairmanImg}
                  alt="Chủ tịch Hội đồng Quản trị Hồ Anh Tuấn"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c31]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HỢP TÁC CÙNG CHÚNG TÔI BANNER - Matching Mockup 100% */}
      <section id="hop-tac" className="relative py-20 lg:py-24 bg-[#081c31] text-white overflow-hidden">
        {/* Background Mountains Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutMountainsImg}
            alt="Dãy núi tuyết kỳ vĩ"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31]/95 via-[#081c31]/80 to-[#081c31]/60" />
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#27d9ef]">
                HỢP TÁC CÙNG CHÚNG TÔI
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Cùng kiến tạo những giá trị lớn hơn
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                MATRIX HOLDING luôn mở rộng cơ hội hợp tác với các đối tác, nhà đầu tư và những cá
                nhân, tổ chức có cùng tầm nhìn.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact('Hợp tác kinh doanh & đầu tư')}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.4)] hover:shadow-[0_0_30px_rgba(39,217,239,0.7)] hover:scale-105"
              >
                <span>Liên hệ hợp tác</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal for Ecosystem Nodes */}
      {selectedNode && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedNode(null)}
        >
          <div
            className="bg-[#081c31] border border-[#27d9ef]/40 text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#27d9ef] mb-1">
              HỆ SINH THÁI MATRIX
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              {selectedNode.name}
            </h3>
            <p className="text-sm font-semibold text-slate-300 mb-4 pb-4 border-b border-white/10">
              {selectedNode.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedNode.description}
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#27d9ef]">
                Điểm nổi bật
              </div>
              {selectedNode.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#27d9ef] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedNode(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedNode(null);
                  onOpenContact(`Quan tâm: ${selectedNode.name}`);
                }}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5"
              >
                <span>Liên hệ hợp tác</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
