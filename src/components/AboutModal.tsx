import React from 'react';
import { X, CheckCircle2, Compass, Target, Award, Shield, Users, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  const coreValues = [
    {
      title: 'Tiên phong (Pioneering)',
      desc: 'Dám nghĩ, dám làm, luôn đi đầu trong việc nắm bắt xu hướng kinh tế mới và đón đầu các làn sóng công nghệ đột phá.',
      icon: Compass,
      color: '#009fe3',
    },
    {
      title: 'Sáng tạo (Innovation)',
      desc: 'Không ngừng đổi mới tư duy kinh doanh và mô hình quản trị, tạo ra các giải pháp may đo riêng biệt cho từng doanh nghiệp.',
      icon: Sparkles,
      color: '#0284c7',
    },
    {
      title: 'Bền vững (Sustainability)',
      desc: 'Cam kết tăng trưởng dựa trên giá trị thực tế, tuân thủ tiêu chuẩn môi trường - xã hội - quản trị minh bạch (ESG).',
      icon: Shield,
      color: '#0ea5e9',
    },
    {
      title: 'Đồng hành (Synergy)',
      desc: 'Coi thành công của đối tác là thành công của chính mình, cùng vượt qua thách thức để cùng gặt hái thành tựu vượt trội.',
      icon: Users,
      color: '#38bdf8',
    },
  ];

  const milestones = [
    { year: '2019', title: 'Khởi đầu chiến lược', desc: 'Thành lập quỹ đầu tư mạo hiểm đầu tiên với quy mô 20 triệu USD tập trung vào công nghệ số.' },
    { year: '2021', title: 'Mở rộng đa ngành', desc: 'Tái cấu trúc thành Matrix Holding, mở rộng sang lĩnh vực bán lẻ O2O và chuỗi cung ứng thông minh.' },
    { year: '2023', title: 'Quy mô vượt bậc', desc: 'Cán mốc 20 doanh nghiệp thành viên, đạt chứng nhận doanh nghiệp tăng trưởng xuất sắc khu vực.' },
    { year: '2026', title: 'Hướng tới Kỳ lân', desc: 'Hỗ trợ 3 doanh nghiệp trọng điểm chuẩn bị niêm yết và mở rộng thị trường sang khu vực Đông Nam Á.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 sm:px-10 py-6 border-b border-slate-100 flex items-center justify-between bg-[#071526] text-white">
          <div>
            <span className="text-[#00c2ff] font-bold text-xs tracking-wider uppercase">
              VỀ MATRIX HOLDING
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1">
              Kiến tạo giá trị vững bền cho doanh nghiệp Việt
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-slate-700">
          
          {/* Overview text */}
          <div className="bg-sky-50/60 rounded-2xl p-6 border border-sky-100">
            <h4 className="text-base font-bold text-[#0d1d2f] mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#009fe3]" />
              <span>Tuyên ngôn phát triển</span>
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              Matrix Holding ra đời với khát vọng xây dựng một bệ phóng thực chiến, nơi các doanh nhân và doanh nghiệp tiềm năng tại Việt Nam không chỉ nhận được nguồn vốn tiếp sức mà còn được trang bị nền tảng công nghệ, chuỗi cung ứng và chiến lược truyền thông toàn diện để vươn tầm khu vực.
            </p>
          </div>

          {/* 4 Giá trị cốt lõi */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#009fe3] font-bold text-xs uppercase tracking-wider">
                TRIẾT LÝ HÀNH ĐỘNG
              </span>
              <span className="h-[1.5px] w-6 bg-[#009fe3] rounded-full" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#0d1d2f] mb-6">
              4 Giá trị cốt lõi làm nên sức mạnh Matrix
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${v.color}15`, color: v.color }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h5 className="font-bold text-base text-[#0d1d2f] mb-1.5">{v.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mô hình ươm tạo Kỳ lân */}
          <div className="border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#009fe3] font-bold text-xs uppercase tracking-wider">
                PHƯƠNG PHÁP LUẬN
              </span>
              <span className="h-[1.5px] w-6 bg-[#009fe3] rounded-full" />
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0d1d2f] mb-4">
              Quy trình 4 giai đoạn đưa doanh nghiệp tới chuẩn Kỳ lân
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Thẩm định & Rót vốn', desc: 'Rà soát tài chính, xác định lợi thế cạnh tranh cốt lõi.' },
                { step: '02', title: 'Số hóa & Ứng dụng AI', desc: 'Tái cấu trúc hệ thống vận hành, tối ưu chi phí qua công nghệ.' },
                { step: '03', title: 'Tích hợp Chuỗi cung ứng', desc: 'Mở rộng kênh phân phối trong hệ sinh thái Matrix.' },
                { step: '04', title: 'Tăng tốc & IPO', desc: 'Thu hút vòng vốn ngoại, chuẩn bị niêm yết trên sàn quốc tế.' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-lg font-black text-[#009fe3] block mb-1">{item.step}</span>
                  <span className="font-bold text-sm text-[#0d1d2f] block mb-1">{item.title}</span>
                  <span className="text-xs text-slate-500 leading-normal block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hành trình phát triển (Milestones) */}
          <div className="border-t border-slate-100 pt-8">
            <h4 className="text-xl font-extrabold text-[#0d1d2f] mb-6">
              Hành trình vươn mình của Matrix Holding
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xl font-extrabold text-[#009fe3] tabular-nums block mb-1">
                    {m.year}
                  </span>
                  <span className="font-bold text-sm text-slate-800 block mb-1">{m.title}</span>
                  <span className="text-xs text-slate-600 leading-relaxed block">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-10 py-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Đồng hành cùng hơn 25 doanh nghiệp hàng đầu tại Việt Nam</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors w-full sm:w-auto"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-6 py-2.5 rounded-full bg-[#009fe3] hover:bg-[#008bc6] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-[#009fe3]/25 w-full sm:w-auto whitespace-nowrap"
            >
              Gửi yêu cầu hợp tác
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
