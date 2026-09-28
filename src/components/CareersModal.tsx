import { X, Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export default function CareersModal({ isOpen, onClose, onApply }: CareersModalProps) {
  if (!isOpen) return null;

  const positions = [
    {
      title: 'Chuyên viên Phân tích Đầu tư Chiến lược (Investment Associate)',
      dept: 'MATRIX CAPITAL',
      loc: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      exp: '3-5 năm kinh nghiệm'
    },
    {
      title: 'Kỹ sư Cấp cao Hạ tầng & Mạng lưới (Senior Infrastructure Architect)',
      dept: 'MATRIX NETWORK',
      loc: 'TP. Hồ Chí Minh / Hybrid',
      type: 'Toàn thời gian',
      exp: '4+ năm kinh nghiệm'
    },
    {
      title: 'Trưởng nhóm Phát triển Quan hệ Đối tác Doanh nghiệp (Partnership Lead)',
      dept: 'MATRIX CONNECT',
      loc: 'Hà Nội / TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      exp: '5+ năm kinh nghiệm'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl border border-slate-200 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 bg-[#081c31] text-white flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#27d9ef] font-bold">
              CƠ HỘI NGHỀ NGHIỆP
            </div>
            <h3 className="text-xl font-bold mt-1 text-white">
              Gia nhập Đội ngũ MATRIX HOLDING
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            MATRIX HOLDING liên tục tìm kiếm các tài năng xuất sắc, có tinh thần tiên phong và khát vọng kiến tạo giá trị bền vững cho xã hội.
          </p>

          <div className="space-y-3 pt-2">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#27d9ef] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0284c7] uppercase">
                    {pos.dept}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{pos.type}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mt-1">
                  {pos.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pos.loc}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pos.exp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Gửi CV trực tiếp về: hr@matrixholding.vn
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onApply();
            }}
            className="px-5 py-2.5 bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs rounded-md inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Ứng tuyển ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
