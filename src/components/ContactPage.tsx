import { useState, FormEvent, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Users,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

// High-fidelity generated visual assets
import contactHeroRingsImg from '../assets/images/contact_hero_rings_1790698842114.jpg';
import contactHanoiMapImg from '../assets/images/contact_hanoi_map_1790698859081.jpg';
import contactBottomArcImg from '../assets/images/contact_bottom_arc_glow_1790698869668.jpg';
import skyscraperBaseImg from '../assets/images/about_journey_skyscraper_1790691432345.jpg';

interface ContactPageProps {
  onNavigateTab: (tab: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
}

export default function ContactPage({ onNavigateTab }: ContactPageProps) {
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'Hợp tác kinh doanh & đầu tư',
    message: '',
    agreed: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc (*).');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    if (!formData.agreed) {
      setErrorMsg('Vui lòng đồng ý sử dụng thông tin để phản hồi yêu cầu.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSelectTopicCard = (topicName: string) => {
    setFormData((prev) => ({ ...prev, topic: topicName }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. HERO SECTION - Matching Mockup 100% */}
      <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center bg-[#081c31] overflow-hidden text-white pt-24 pb-12 sm:pb-16">
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs sm:text-sm font-bold tracking-[0.24em] text-slate-300 uppercase">
                KẾT NỐI CÙNG <span className="text-[#27d9ef]">MATRIX</span> HOLDING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15]">
                Bắt đầu một cuộc
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_25px_rgba(39,217,239,0.35)]">
                  đối thoại
                </span>{' '}
                giá trị.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Chia sẻ nhu cầu của bạn để cùng tìm kiếm cơ hội hợp tác phù hợp.
              </p>
            </div>

            {/* Right 3D Chrome Rings Art matching Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={contactHeroRingsImg}
                  alt="Matrix Holding Connection Rings"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c31]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION: FORM (LEFT) + INFO CARD (RIGHT) - Matching Mockup 100% */}
      <section ref={formRef} className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-slate-200/90 bg-white shadow-xs">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600 mb-2">
                GỬI LỜI NHẮN CHO CHÚNG TÔI
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-950 tracking-tight leading-tight mb-2">
                Chúng tôi luôn sẵn sàng lắng nghe
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 font-normal">
                Hãy chia sẻ thông tin và nhu cầu của bạn. Đội ngũ MATRIX HOLDING sẽ liên hệ lại trong
                thời gian sớm nhất.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Gửi thông tin thành công!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn đã kết nối với MATRIX HOLDING. Đại diện ban lãnh đạo hoặc bộ phận chuyên
                    trách sẽ liên hệ phản hồi bạn trong thời gian sớm nhất.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          topic: 'Hợp tác kinh doanh & đầu tư',
                          message: '',
                          agreed: true,
                        });
                      }}
                      className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-xs cursor-pointer"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Nhập địa chỉ email của bạn"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-colors"
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Nhập số điện thoại của bạn"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-colors"
                    />
                  </div>

                  {/* Nhu cầu liên hệ */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Nhu cầu liên hệ
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-colors"
                    >
                      <option value="Hợp tác kinh doanh & đầu tư">Hợp tác kinh doanh & đầu tư</option>
                      <option value="Dịch vụ doanh nghiệp & giải pháp">Dịch vụ doanh nghiệp & giải pháp</option>
                      <option value="Tuyển dụng & cơ hội nghề nghiệp">Tuyển dụng & cơ hội nghề nghiệp</option>
                      <option value="Truyền thông & quan hệ báo chí">Truyền thông & quan hệ báo chí</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>

                  {/* Lời nhắn */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Lời nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Chia sẻ chi tiết nhu cầu, câu hỏi hoặc đề xuất hợp tác của bạn..."
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement Checkbox matching Mockup */}
                  <div className="flex items-center gap-2 pt-1 pb-2">
                    <input
                      type="checkbox"
                      id="agreed"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-4 h-4 rounded text-[#27d9ef] focus:ring-[#27d9ef] cursor-pointer"
                    />
                    <label htmlFor="agreed" className="text-xs text-slate-600 select-none cursor-pointer">
                      Thông tin của bạn được sử dụng để phản hồi yêu cầu liên hệ.
                    </label>
                  </div>

                  {/* Submit Button matching Mockup */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(39,217,239,0.3)] hover:shadow-[0_0_22px_rgba(39,217,239,0.5)] cursor-pointer"
                    >
                      <span>{loading ? 'Đang gửi thông tin...' : 'Gửi thông tin'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Dark Navy Information Card */}
            <div className="lg:col-span-5 bg-[#081c31] rounded-2xl border border-white/10 text-white overflow-hidden shadow-2xl relative flex flex-col justify-between">
              <div className="p-8 sm:p-10 relative z-10 space-y-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400 mb-2">
                    THÔNG TIN LIÊN HỆ
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    MATRIX HOLDING
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 font-normal">
                    Chúng tôi luôn sẵn sàng kết nối và trao đổi cùng bạn về những cơ hội hợp tác phù
                    hợp.
                  </p>
                </div>

                {/* 3 Contact Info Rows with circular cyan outline icons matching Mockup */}
                <div className="space-y-6">
                  {/* Trụ sở chính */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#27d9ef]/50 bg-[#27d9ef]/10 text-[#27d9ef] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-white">
                        Trụ sở chính
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội
                      </div>
                    </div>
                  </div>

                  {/* Hotline */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#27d9ef]/50 bg-[#27d9ef]/10 text-[#27d9ef] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-white">Hotline</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 font-mono tracking-wide">
                        (+84) 964 243 026
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-[#27d9ef]/50 bg-[#27d9ef]/10 text-[#27d9ef] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base text-white">Email</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1">
                        matrixholding.support@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Skyscraper Facade Graphic matching Mockup */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden mt-6">
                <img
                  src={skyscraperBaseImg}
                  alt="Matrix Holding Corporate HQ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-bottom opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#081c31]/60 to-[#081c31]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BẠN MUỐN KẾT NỐI VỀ ĐIỀU GÌ? - Matching Mockup 100% */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container-page">
          <div className="text-center sm:text-left mb-10">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600 mb-2">
              BẠN MUỐN KẾT NỐI VỀ ĐIỀU GÌ?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-950 tracking-tight">
              Chọn nội dung phù hợp với nhu cầu của bạn
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
              Để chúng tôi có thể hỗ trợ bạn tốt hơn, vui lòng chọn nhóm nhu cầu phù hợp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Hợp tác đầu tư */}
            <div
              onClick={() => handleSelectTopicCard('Hợp tác kinh doanh & đầu tư')}
              className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    Hợp tác đầu tư
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    Tìm hiểu cơ hội đầu tư và hợp tác cùng phát triển.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all shrink-0" />
            </div>

            {/* 2. Dịch vụ doanh nghiệp */}
            <div
              onClick={() => handleSelectTopicCard('Dịch vụ doanh nghiệp & giải pháp')}
              className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    Dịch vụ doanh nghiệp
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    Trao đổi về các giải pháp và dịch vụ phù hợp.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all shrink-0" />
            </div>

            {/* 3. Tuyển dụng */}
            <div
              onClick={() => onNavigateTab('careers')}
              className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-[#27d9ef] hover:shadow-lg transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    Tuyển dụng
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    Khám phá cơ hội nghề nghiệp tại MATRIX HOLDING.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ĐỊA ĐIỂM CỦA CHÚNG TÔI (Hà Nội) - Matching Mockup 100% */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Location Badge */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600 mb-2">
                  ĐỊA ĐIỂM CỦA CHÚNG TÔI
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-tight">
                  Hà Nội
                </h2>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-slate-200">
                <div className="w-11 h-11 rounded-full bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    Trụ sở chính MATRIX HOLDING
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội
                  </div>
                </div>
              </div>
            </div>

            {/* Right Minimalist Cartographic Map with Hanoi Beacon */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[16/10] bg-slate-100 group">
                <img
                  src={contactHanoiMapImg}
                  alt="Bản đồ vị trí trụ sở MATRIX HOLDING Hà Nội"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Beacon Pulse Marker & Hà Nội Badge matching Mockup */}
                <div className="absolute top-[60%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#27d9ef] opacity-75" />
                    <div className="relative w-5 h-5 rounded-full bg-[#081c31] border-2 border-[#27d9ef] shadow-[0_0_12px_rgba(39,217,239,0.8)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#27d9ef]" />
                    </div>
                  </div>

                  <div className="bg-[#081c31] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg border border-white/20 tracking-wider">
                    Hà Nội
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KẾT NỐI CÙNG MATRIX HOLDING BOTTOM BANNER - Matching Mockup 100% */}
      <section className="relative py-20 lg:py-24 bg-[#081c31] text-white overflow-hidden">
        {/* Ambient golden light curve background */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactBottomArcImg}
            alt="Luminous connection arc"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31]/95 via-[#081c31]/80 to-[#081c31]/60" />
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#27d9ef]">
                KẾT NỐI CÙNG MATRIX HOLDING
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
                Kết nối hôm nay,
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_20px_rgba(39,217,239,0.4)]">
                  mở ra cơ hội
                </span>{' '}
                ngày mai.
              </h2>
            </div>

            <div className="max-w-md space-y-4 shrink-0">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Chúng tôi tin rằng mỗi cuộc trao đổi đều có thể mở ra những giá trị lớn hơn cho
                tương lai.
              </p>

              <div>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.35)] hover:shadow-[0_0_30px_rgba(39,217,239,0.6)] hover:scale-105 cursor-pointer"
                >
                  <span>Gửi lời nhắn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
