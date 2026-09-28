import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, Linkedin, Facebook, Youtube, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topic: 'Hợp tác kinh doanh & đầu tư',
    message: ''
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

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="lien-he" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="container-page">
        {/* Top Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
            LIÊN HỆ
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Chúng tôi luôn sẵn sàng lắng nghe
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hãy chia sẻ với chúng tôi về cơ hội hợp tác, ý tưởng dự án hoặc bất kỳ thắc mắc nào. Đội ngũ MATRIX HOLDING sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </div>

        {/* 2-Column: Form (Left/Center) + Contact Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-8 bg-[#f8fafc] p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-xl text-slate-900">
                  Gửi thông điệp thành công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Cảm ơn bạn đã liên hệ với MATRIX HOLDING. Chúng tôi sẽ phản hồi lại bạn qua email sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', topic: 'Hợp tác kinh doanh & đầu tư', message: '' });
                  }}
                  className="mt-2 px-5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-50"
                >
                  Gửi lời nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-600 rounded">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Họ và tên *"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email *"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7]"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7]"
                  >
                    <option value="Hợp tác kinh doanh & đầu tư">Nội dung quan tâm: Hợp tác kinh doanh & đầu tư</option>
                    <option value="Dự án Bất động sản">Nội dung quan tâm: Dự án Bất động sản</option>
                    <option value="Công nghệ & Chuyển đổi số">Nội dung quan tâm: Công nghệ & Chuyển đổi số</option>
                    <option value="Tài chính – Quản trị nguồn vốn">Nội dung quan tâm: Tài chính – Quản trị nguồn vốn</option>
                    <option value="Tuyển dụng & Cơ hội nghề nghiệp">Nội dung quan tâm: Tuyển dụng & Cơ hội nghề nghiệp</option>
                    <option value="Khác">Nội dung quan tâm: Khác</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Lời nhắn của bạn *"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all shadow-xs"
                  >
                    <span>{loading ? 'Đang gửi...' : 'Gửi liên hệ'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Contact Information & Socials matching Mockup */}
          <div className="lg:col-span-4 space-y-6 pt-2">
            <div className="space-y-5 text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Địa chỉ</div>
                  <div className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    TP. Hồ Chí Minh, Việt Nam
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Điện thoại</div>
                  <div className="text-slate-600 text-xs sm:text-sm mt-0.5 font-mono">
                    +84 28 1234 5678
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Email</div>
                  <div className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    contact@matrixholding.vn
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-500 mb-3">
                Kết nối với chúng tôi
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e0f7fa] hover:text-[#0891b2] text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e0f7fa] hover:text-[#0891b2] text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e0f7fa] hover:text-[#0891b2] text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#e0f7fa] hover:text-[#0891b2] text-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
