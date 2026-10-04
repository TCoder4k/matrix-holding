import React, { useState } from 'react';
import { X, MapPin, Briefcase, Upload, CheckCircle2, ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { JobItem } from './types';

interface CareersJobDetailPanelProps {
  job: JobItem;
  onClose: () => void;
}

export const CareersJobDetailPanel: React.FC<CareersJobDetailPanelProps> = ({ job, onClose }) => {
  const [activeTab, setActiveTab] = useState<'desc' | 'req' | 'apply'>('apply'); // Mặc định như ảnh 4 hiển thị Cách ứng tuyển
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCvFile(e.dataTransfer.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !candidatePhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-400 animate-in fade-in slide-in-from-right-4">
      
      {/* NÚT ĐÓNG BẢNG CHI TIẾT */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
        aria-label="Đóng bảng chi tiết"
      >
        <X className="w-5 h-5" />
      </button>

      <div>
        {/* DOANH NGHIỆP & TIÊU ĐỀ */}
        <span className="text-xs font-bold text-[#d97706] uppercase tracking-wider block mb-2">
          {job.company.toUpperCase()}
        </span>

        <h2 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight leading-snug mb-3">
          {job.title}
        </h2>

        {/* CÁC HUY HIỆU ĐỊA ĐIỂM & HÌNH THỨC */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 mb-6">
          <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {job.location}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            {job.type}
          </span>
        </div>

        {/* 3 TAB: MÔ TẢ CÔNG VIỆC — YÊU CẦU — CÁCH ỨNG TUYỂN */}
        <div className="flex items-center gap-8 border-b border-slate-200 pb-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('desc')}
            className="flex flex-col items-start gap-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'desc' ? 'text-[#0d1d2f]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Mô tả công việc
            </span>
            <span
              className={`h-[2px] transition-all duration-300 ${
                activeTab === 'desc' ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('req')}
            className="flex flex-col items-start gap-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'req' ? 'text-[#0d1d2f]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Yêu cầu
            </span>
            <span
              className={`h-[2px] transition-all duration-300 ${
                activeTab === 'req' ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('apply')}
            className="flex flex-col items-start gap-1 cursor-pointer focus:outline-none"
          >
            <span
              className={`text-xs sm:text-sm font-bold transition-colors ${
                activeTab === 'apply' ? 'text-[#00c2ff]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              Cách ứng tuyển
            </span>
            <span
              className={`h-[2px] transition-all duration-300 ${
                activeTab === 'apply' ? 'w-full bg-[#00c2ff]' : 'w-0 bg-transparent'
              }`}
            />
          </button>
        </div>

        {/* NỘI DUNG THEO TAB */}
        {activeTab === 'desc' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-bold text-sm text-[#0d1d2f] uppercase tracking-wider mb-3">
                Trách nhiệm chính
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] mt-1.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm text-[#0d1d2f] uppercase tracking-wider mb-3">
                Quyền lợi & Đãi ngộ
              </h4>
              <ul className="space-y-2">
                {job.benefits.map((b, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setActiveTab('apply')}
                className="px-6 py-2.5 rounded-full bg-[#00c2ff] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Ứng tuyển ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'req' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-bold text-sm text-[#0d1d2f] uppercase tracking-wider mb-3">
                Yêu cầu ứng viên
              </h4>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setActiveTab('apply')}
                className="px-6 py-2.5 rounded-full bg-[#00c2ff] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Tiến hành nộp hồ sơ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: CÁCH ỨNG TUYỂN (FORM ỨNG TUYỂN TRỰC TIẾP KHỚP ẢNH 4) */}
        {activeTab === 'apply' && (
          <div>
            {!isSuccess ? (
              <form onSubmit={handleFormSubmit} className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d1d2f] tracking-tight mb-1">
                    Ứng tuyển vị trí này
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Vui lòng điền đầy đủ thông tin và tải CV để hoàn tất hồ sơ ứng tuyển.
                  </p>
                </div>

                {/* 3 Trường: Họ và tên / Email / Số điện thoại */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="Nhập họ và tên của bạn"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20 text-xs sm:text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      placeholder="Nhập email của bạn"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20 text-xs sm:text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={candidatePhone}
                      onChange={(e) => setCandidatePhone(e.target.value)}
                      placeholder="Nhập số điện thoại của bạn"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff]/20 text-xs sm:text-sm focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* KHU VỰC TẢI CV LÊN (DROPZONE KHỚP ẢNH 4) */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Tải CV của bạn <span className="text-red-500">*</span>
                  </label>
                  
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all ${
                      isDragOver
                        ? 'border-[#00c2ff] bg-sky-50/80 scale-101'
                        : 'border-slate-300 hover:border-[#00c2ff] bg-slate-50/60'
                    }`}
                  >
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#00c2ff] mb-3">
                      <Upload className="w-6 h-6" />
                    </div>

                    {cvFile ? (
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                        <FileText className="w-4 h-4" />
                        <span>{cvFile.name} (Đã sẵn sàng tải lên)</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                          Kéo và thả CV vào đây hoặc <span className="text-[#00c2ff] underline font-bold">chọn tệp</span>
                        </p>
                        <span className="text-[11px] text-slate-400">
                          PDF hoặc DOCX (tối đa 10MB)
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* 2 NÚT HÀNH ĐỘNG Ở ĐÁY: QUAY LẠI MÔ TẢ & GỬI HỒ SƠ */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('desc')}
                    className="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-xs sm:text-sm font-bold text-slate-700 inline-flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Quay lại mô tả</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-2.5 rounded-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-98 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Đang gửi...' : 'Gửi hồ sơ'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              /* TRẠNG THÁI GỬI THÀNH CÔNG (CONFIRMATION ANIMATION) */
              <div className="py-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0d1d2f] tracking-tight mb-2">
                  Ứng tuyển thành công!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
                  Cảm ơn <strong>{candidateName}</strong>. Hồ sơ cho vị trí <strong>{job.title}</strong> tại <strong>{job.company}</strong> đã được chuyển tới Ban Tuyển dụng. Chúng tôi sẽ liên hệ trong vòng 3 ngày làm việc.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#071629] text-white font-bold text-xs sm:text-sm hover:bg-[#00c2ff] hover:text-[#051120] transition-colors cursor-pointer"
                >
                  Hoàn tất và quay lại
                </button>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};
