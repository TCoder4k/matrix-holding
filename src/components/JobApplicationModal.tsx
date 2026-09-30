import { useState, FormEvent, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Upload, Briefcase, Mail, Phone } from 'lucide-react';
import { DepartmentKey, departmentList } from '../data/careersData';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDepartment?: DepartmentKey | string;
  defaultPositionTitle?: string;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  defaultDepartment,
  defaultPositionTitle,
}: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: defaultDepartment || 'Pháp lý',
    position: defaultPositionTitle || '',
    linkedin: '',
    experienceYears: '1 - 3 năm',
    coverLetter: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultDepartment) {
      setFormData((prev) => ({ ...prev, department: defaultDepartment }));
    }
    if (defaultPositionTitle) {
      setFormData((prev) => ({ ...prev, position: defaultPositionTitle }));
    }
  }, [defaultDepartment, defaultPositionTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files![0].name,
      }));
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-slate-900 my-8"
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
              Gửi hồ sơ thành công!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại MATRIX HOLDING. Bộ phận Tuyển dụng (Talent Acquisition) sẽ xem xét hồ sơ và phản hồi đến bạn trong thời gian sớm nhất.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm px-7 py-2.5 rounded-full shadow-xs"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] mb-1">
              GIA NHẬP MATRIX HOLDING
            </div>
            <h3 className="text-2xl font-extrabold text-slate-950 mb-2">
              Hồ sơ ứng tuyển & quan tâm
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Chúng tôi luôn chào đón những ứng viên tài năng, chủ động và khát vọng kiến tạo giá trị bền vững cùng hệ sinh thái.
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 text-xs text-red-600 rounded-md">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
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
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="090 123 4567"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email liên hệ *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ungvien@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số năm kinh nghiệm
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  >
                    <option value="Dưới 1 năm / Sinh viên mới tốt nghiệp">Dưới 1 năm / Mới tốt nghiệp</option>
                    <option value="1 - 3 năm">1 - 3 năm</option>
                    <option value="3 - 5 năm">3 - 5 năm</option>
                    <option value="Trên 5 năm (Senior / Leader)">Trên 5 năm (Senior / Leader)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nhóm chuyên môn quan tâm
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value as DepartmentKey })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  >
                    {departmentList.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Vị trí ứng tuyển (nếu có)
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    placeholder="Ví dụ: Chuyên viên Pháp chế"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Đính kèm CV / Hồ sơ năng lực (PDF, DOCX) hoặc Link LinkedIn
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors">
                    <Upload className="w-4 h-4 text-slate-500" />
                    <span>{formData.fileName ? 'Đã chọn file' : 'Tải lên CV'}</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-500 truncate max-w-[240px]">
                    {formData.fileName || 'Chưa chọn tệp'}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Lời giới thiệu ngắn hoặc Link Portfolio / LinkedIn
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Chia sẻ ngắn gọn về kinh nghiệm, định hướng nghề nghiệp hoặc đính kèm liên kết hồ sơ của bạn..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:border-[#27d9ef] focus:bg-white resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>hr@matrixholding.vn</span>
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
                    <span>{loading ? 'Đang gửi...' : 'Gửi hồ sơ'}</span>
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
