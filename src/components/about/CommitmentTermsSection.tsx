import React, { useState } from 'react';
import { ArrowRight, ChevronRight, FileText } from 'lucide-react';

interface TermItem {
  id: string;
  num: string;
  title: string;
  summary: string;
  detail: string;
}

export const CommitmentTermsSection: React.FC = () => {
  const [activeTermIndex, setActiveTermIndex] = useState(0);

  const terms: TermItem[] = [
    {
      id: 't1',
      num: '01',
      title: 'Minh bạch',
      summary: 'Các nội dung hợp tác được trao đổi rõ ràng và thống nhất giữa các bên.',
      detail: 'Mọi thỏa thuận hợp tác tài chính, phân chia lợi nhuận và kế hoạch vận hành đều được lập thành văn bản chuẩn mực, có sự giám sát độc lập của các đơn vị kiểm toán uy tín.',
    },
    {
      id: 't2',
      num: '02',
      title: 'Trách nhiệm',
      summary: 'Đồng hành cùng đối tác vượt qua thách thức và thực thi trọn vẹn cam kết.',
      detail: 'Chúng tôi chịu trách nhiệm cao nhất về chất lượng dịch vụ, bảo toàn nguồn vốn được ủy thác và đảm bảo tiến độ triển khai các mục tiêu chiến lược đã đề ra.',
    },
    {
      id: 't3',
      num: '03',
      title: 'Bảo mật',
      summary: 'Cam kết bảo mật tuyệt đối thông tin kinh doanh và dữ liệu khách hàng.',
      detail: 'Áp dụng tiêu chuẩn bảo mật dữ liệu cấp doanh nghiệp quốc tế, ký kết thỏa thuận bảo mật NDA nghiêm ngặt trước khi tiến hành bất kỳ trao đổi chuyên sâu nào.',
    },
    {
      id: 't4',
      num: '04',
      title: 'Đồng hành',
      summary: 'Hợp tác dài hạn, không ngừng tạo giá trị gia tăng cho đối tác.',
      detail: 'Matrix Holding không tìm kiếm những hợp tác ngắn hạn mang tính cơ hội. Chúng tôi xây dựng liên minh bền vững, cùng chia sẻ nguồn lực để cùng nhau lớn mạnh.',
    },
  ];

  const currentTerm = terms[activeTermIndex];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f8fafc] text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
            <span className="text-[#d97706] font-bold text-xs tracking-widest uppercase">
              ĐIỀU KHOẢN CAM KẾT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-4">
            Rõ ràng trong từng cam kết.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chúng tôi đề cao sự minh bạch, trách nhiệm và đồng hành lâu dài trong mọi mối quan hệ hợp tác.
          </p>
        </div>

        {/* KHUNG TÀI LIỆU 2 CỘT CHUẨN XÁC THEO ẢNH */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 bg-white">
          
          {/* CỘT TRÁI (35%): MENU MỤC TÀI LIỆU NỀN TỐI */}
          <div className="lg:col-span-4 bg-[#071629] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-3">
              {terms.map((term, idx) => {
                const isActive = activeTermIndex === idx;
                return (
                  <button
                    key={term.id}
                    type="button"
                    onClick={() => setActiveTermIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0f243e] text-white border-l-4 border-[#00c2ff]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-base font-bold ${isActive ? 'text-[#00c2ff]' : 'text-slate-500'}`}>
                        {term.num}
                      </span>
                      <span className="font-bold text-sm sm:text-base">{term.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#00c2ff] translate-x-1' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 mt-6">
              Hệ thống quy chuẩn pháp trị Matrix Holding
            </div>
          </div>

          {/* CỘT PHẢI (65%): NỘI DUNG TÀI LIỆU NỀN SÁNG VỚI ẢNH TỜ GIẤY HỢP ĐỒNG */}
          <div className="lg:col-span-8 p-8 sm:p-12 relative flex flex-col justify-between">
            <div className="relative z-10">
              {/* Header nội dung */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#d97706] uppercase tracking-wider">
                  <span>{currentTerm.num}</span>
                  <span>—</span>
                  <span>{currentTerm.title}</span>
                </div>

                <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center text-[#d97706]">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              {/* Tiêu đề & Tóm tắt */}
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d1d2f] tracking-tight mb-4">
                {currentTerm.title}
              </h3>

              <p className="text-slate-700 font-semibold text-base sm:text-lg leading-relaxed mb-4">
                {currentTerm.summary}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl">
                {currentTerm.detail}
              </p>

              {/* Nút hành động */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-[#071629] hover:bg-[#009fe3] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Xem nội dung</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  className="text-xs sm:text-sm font-semibold text-[#0d1d2f] hover:text-[#009fe3] border-b border-[#0d1d2f] hover:border-[#009fe3] pb-0.5 transition-colors cursor-pointer"
                >
                  Liên hệ trao đổi →
                </button>
              </div>
            </div>

            {/* Ảnh mờ trang tài liệu văn bản góc dưới phải */}
            <div className="absolute right-0 bottom-0 w-72 h-48 opacity-15 pointer-events-none select-none">
              <img
                src="/images/matrix_creative_desk_1790825075738.jpg"
                alt="Contract Document Paper"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
