import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const PartnershipInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    representativeName: '',
    companyName: '',
    headquarters: '',
    taxCode: '',
    email: '',
    hotline: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.representativeName.trim()) {
      newErrors.representativeName = 'Vui lòng nhập họ tên người đại diện.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Vui lòng nhập tên doanh nghiệp.';
    }
    if (!formData.headquarters.trim()) {
      newErrors.headquarters = 'Vui lòng nhập địa chỉ trụ sở chính.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Địa chỉ email không hợp lệ.';
    }
    if (!formData.hotline.trim()) {
      newErrors.hotline = 'Vui lòng nhập số điện thoại liên hệ.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung đề xuất hợp tác.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      // Focus vào trường lỗi đầu tiên
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Giả lập gửi thông tin lên hệ sinh thái Matrix
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      representativeName: '',
      companyName: '',
      headquarters: '',
      taxCode: '',
      email: '',
      hotline: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="section-form"
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* KHUNG FORM 2 CỘT (Khớp 100% ảnh 4) */}
        <div className="rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-200/90 shadow-2xl bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* CỘT TRÁI (4 CỘT): NỀN NAVY TỐI VỚI VÒM KIẾN TRÚC PHÁT SÁNG & LỜI NHẮN */}
          <div className="lg:col-span-4 bg-[#061527] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ảnh kiến trúc vòm ban công kính uốn lượn ban đêm chìm phía dưới */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-35 overflow-hidden">
              <img
                src="/images/matrix_curved_facade_1790829793623.jpg"
                alt="Architectural Curve"
                className="w-full h-full object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-[#061527]/75 to-[#061527]" />
            </div>

            <div className="relative z-10">
              {/* Kicker */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[1.5px] bg-[#d97706]" />
                <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
                  TRAO ĐỔI HỢP TÁC
                </span>
              </div>

              {/* Tiêu đề */}
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug mb-4">
                Bắt đầu bằng <br />
                một lời nhắn.
              </h2>

              {/* Phụ đề */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-8 max-w-xs">
                Chia sẻ thông tin và nhu cầu hợp tác của bạn với Matrix Holding.
              </p>

              {/* Biểu tượng phong thư thư tín với đường chỉ vàng */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-28 h-[1px] bg-slate-700" />
              </div>
            </div>

            {/* Footer chân cột trái */}
            <div className="relative z-10 pt-8 border-t border-slate-800 text-[11px] text-slate-400">
              Kiểm tra thông tin trước khi gửi.
            </div>

          </div>

          {/* CỘT PHẢI (8 CỘT): 7 TRƯỜNG NHẬP LIỆU CHUẨN XÁC */}
          <div className="lg:col-span-8 p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-center">
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-300">
                
                {/* Tiêu đề form */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight mb-4">
                  Gửi thông tin hợp tác
                </h3>

                {/* HÀNG 1: Họ tên người đại diện & Tên doanh nghiệp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Họ tên người đại diện <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-representativeName"
                      type="text"
                      value={formData.representativeName}
                      onChange={(e) => {
                        setFormData({ ...formData, representativeName: e.target.value });
                        if (errors.representativeName) setErrors({ ...errors, representativeName: '' });
                      }}
                      placeholder="Họ tên người đại diện"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.representativeName
                          ? 'border-red-400 ring-2 ring-red-100'
                          : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                      }`}
                    />
                    {errors.representativeName && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.representativeName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Tên doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      placeholder="Tên doanh nghiệp"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.companyName
                          ? 'border-red-400 ring-2 ring-red-100'
                          : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                      }`}
                    />
                    {errors.companyName && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName}
                      </span>
                    )}
                  </div>
                </div>

                {/* HÀNG 2: Trụ sở chính (Full width) */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Trụ sở chính <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-headquarters"
                    type="text"
                    value={formData.headquarters}
                    onChange={(e) => {
                      setFormData({ ...formData, headquarters: e.target.value });
                      if (errors.headquarters) setErrors({ ...errors, headquarters: '' });
                    }}
                    placeholder="Trụ sở chính"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.headquarters
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                    }`}
                  />
                  {errors.headquarters && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.headquarters}
                    </span>
                  )}
                </div>

                {/* HÀNG 3: Mã số thuế & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Mã số thuế
                    </label>
                    <input
                      id="field-taxCode"
                      type="text"
                      value={formData.taxCode}
                      onChange={(e) => setFormData({ ...formData, taxCode: e.target.value })}
                      placeholder="Mã số thuế"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20 text-xs sm:text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="Email"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-400 ring-2 ring-red-100'
                          : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* HÀNG 4: Hotline */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Hotline <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-hotline"
                    type="tel"
                    value={formData.hotline}
                    onChange={(e) => {
                      setFormData({ ...formData, hotline: e.target.value });
                      if (errors.hotline) setErrors({ ...errors, hotline: '' });
                    }}
                    placeholder="Hotline"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all ${
                      errors.hotline
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                    }`}
                  />
                  {errors.hotline && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.hotline}
                    </span>
                  )}
                </div>

                {/* HÀNG 5: Thông tin trao đổi (Textarea) */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Thông tin trao đổi <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {formData.message.length}/1000 ký tự
                    </span>
                  </div>
                  <textarea
                    id="field-message"
                    rows={4}
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Thông tin trao đổi"
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* NÚT SUBMIT & GHI CHÚ CHÂN FORM */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25 active:scale-98 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Đang gửi…' : 'Gửi thông tin hợp tác'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-500 sm:text-right">
                    <span>Vui lòng kiểm tra nội dung trước khi gửi.</span>
                    <span className="block text-slate-400">Thông tin minh họa</span>
                  </div>
                </div>

              </form>
            ) : (
              /* TRẠNG THÁI GỬI THÀNH CÔNG (CONFIRMATION ANIMATION) */
              <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight mb-2">
                  Đã gửi thông tin hợp tác!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                  Cảm ơn Quý đối tác <strong>{formData.companyName}</strong> và đại diện <strong>{formData.representativeName}</strong>. Đội ngũ phụ trách phát triển hệ sinh thái Matrix Holding đã tiếp nhận thông tin và sẽ liên hệ phản hồi trong vòng 24 giờ làm việc.
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-full bg-[#071629] text-white font-bold text-xs sm:text-sm hover:bg-[#00c2ff] hover:text-[#051120] transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Gửi nội dung khác</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
