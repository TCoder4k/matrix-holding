import { useState, FormEvent, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ContactModal({ isOpen, onClose, defaultTopic }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: defaultTopic || 'Hợp tác kinh doanh & đầu tư',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, topic: defaultTopic }));
    }
  }, [defaultTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc (*).');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Vui lòng nhập email hợp lệ.');
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-bold text-slate-900">
              Gửi thông điệp thành công!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Cảm ơn bạn đã quan tâm hợp tác với MATRIX HOLDING. Đại diện ban lãnh đạo và phòng xúc tiến đầu tư sẽ liên hệ lại với bạn trong vòng 24 giờ làm việc.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm px-6 py-2.5 rounded-full"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] mb-1">
              KẾT NỐI ĐẦU TƯ & HỢP TÁC
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950 mb-2">
              Hợp tác cùng MATRIX HOLDING
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Chúng tôi luôn mở rộng cơ hội đồng hành với các đối tác, nhà đầu tư chiến lược và các tổ chức cùng chung tầm nhìn kiến tạo giá trị bền vững.
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 text-xs text-red-600 rounded-md">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+84 90 123 4567"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email liên hệ *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nội dung quan tâm
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7] focus:bg-white"
                >
                  <option value="Hợp tác kinh doanh & đầu tư">Hợp tác kinh doanh & đầu tư</option>
                  <option value="MATRIX Network - Kết nối nguồn lực">MATRIX Network - Kết nối nguồn lực</option>
                  <option value="MATRIX Connect - Liên kết đối tác">MATRIX Connect - Liên kết đối tác</option>
                  <option value="MATRIX Capital - Quản lý vốn đầu tư">MATRIX Capital - Quản lý vốn đầu tư</option>
                  <option value="Dự án Bất động sản công nghiệp">Dự án Bất động sản công nghiệp</option>
                  <option value="Gửi tin nhắn">Gửi tin nhắn chung</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nội dung chi tiết *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mô tả nhu cầu hợp tác, ý tưởng dự án hoặc nội dung cần trao đổi..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:border-[#0284c7] focus:bg-white resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>contact@matrixholding.vn</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-xs transition-all hover:scale-105"
                  >
                    <span>{loading ? 'Đang gửi...' : 'Gửi yêu cầu'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
