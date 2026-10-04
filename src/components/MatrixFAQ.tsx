import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

interface FAQItem {
  id: string;
  num: string;
  question: string;
  category: string;
  answer: string;
  linkText: string;
  destination?: 'about' | 'ecosystem' | 'contact';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    num: '01',
    category: 'VỀ MATRIX HOLDING',
    question: 'Matrix Holding là doanh nghiệp gì?',
    answer:
      'Matrix Holding kết nối các doanh nghiệp trong hệ sinh thái, hướng tới hợp tác và phát triển dài hạn. Chúng tôi giữ vai trò là công ty mẹ, chịu trách nhiệm quản trị chiến lược, vận hành và điều phối nguồn lực đa ngành.',
    linkText: 'Khám phá Matrix Holding',
    destination: 'about',
  },
  {
    id: 'faq-02',
    num: '02',
    category: 'LĨNH VỰC HOẠT ĐỘNG',
    question: 'Matrix Holding hoạt động trong những lĩnh vực nào?',
    answer:
      'Matrix Holding hoạt động trong 4 trụ cột chiến lược: dịch vụ doanh nghiệp (Network), kết nối kinh doanh (Connect), đầu tư mạo hiểm (Ventures) và đào tạo lãnh đạo tinh hoa (Academy).',
    linkText: 'Khám phá Hệ sinh thái',
    destination: 'ecosystem',
  },
  {
    id: 'faq-03',
    num: '03',
    category: 'GIẢI PHÁP & DỊCH VỤ',
    question: 'Matrix Holding cung cấp sản phẩm, dịch vụ gì?',
    answer:
      'Chúng tôi cung cấp hệ thống giải pháp toàn diện từ tư vấn chiến lược, pháp lý, kế toán quản trị, kiểm toán độc lập đến nền tảng chuyển đổi số ứng dụng trí tuệ nhân tạo (AI).',
    linkText: 'Xem các giải pháp',
    destination: 'ecosystem',
  },
  {
    id: 'faq-04',
    num: '04',
    category: 'LỊCH SỬ HÌNH THÀNH',
    question: 'Matrix Holding được thành lập khi nào?',
    answer:
      'Matrix Holding được chính thức thành lập và hoàn thiện cơ cấu pháp trị vào năm 2023, mang sứ mệnh kiến tạo môi trường kinh doanh minh bạch, thịnh vượng cho cộng đồng doanh nghiệp Việt.',
    linkText: 'Xem hành trình phát triển',
    destination: 'about',
  },
  {
    id: 'faq-05',
    num: '05',
    category: 'BAN LÃNH ĐẠO',
    question: 'Chủ tịch của Matrix Holding là ai?',
    answer:
      'Chủ tịch sáng lập của Matrix Holding là ông Hồ Anh Tuấn – một nhà lãnh đạo tiên phong với khát vọng bệ phóng vững chắc cho thế hệ doanh nghiệp Việt vươn tầm khu vực.',
    linkText: 'Tìm hiểu về ban lãnh đạo',
    destination: 'about',
  },
];

interface MatrixFAQProps {
  onNavigate?: (tab: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
}

export const MatrixFAQ: React.FC<MatrixFAQProps> = ({ onNavigate }) => {
  // Chỉ số câu hỏi đang được chọn (mặc định là câu 01)
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Vị trí thanh cyan trượt theo câu được chọn
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  // Cập nhật vị trí thanh cyan khi activeIndex thay đổi hoặc khi resize
  useEffect(() => {
    const updateIndicator = () => {
      const currentEl = itemRefs.current[activeIndex];
      if (currentEl) {
        setIndicatorStyle({
          top: currentEl.offsetTop,
          height: currentEl.offsetHeight,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeIndex]);

  // Chuyển đổi câu hỏi có hiệu ứng mờ và trượt nhẹ
  const changeQuestion = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const currentItem = FAQ_DATA[activeIndex];

  const handleActionClick = () => {
    if (onNavigate && currentItem.destination) {
      onNavigate(currentItem.destination);
    }
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-20 lg:py-24 bg-[#f8fafc] text-[#0A192F] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HEADER: KICKER CYAN & TIÊU ĐỀ LỚN 2 MÀU (KHÔNG DÙNG INPUT TÌM KIẾM)    */}
        {/* ========================================================================= */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          {/* Nhãn nhỏ: TRẠM GIẢI ĐÁP */}
          <span className="text-[#00c2ff] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-3">
            TRẠM GIẢI ĐÁP
          </span>

          {/* Tiêu đề: Hiểu Matrix. Mở cơ hội. */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-none text-[#0d1d2f]">
            Hiểu Matrix.{' '}
            <span className="text-[#00c2ff]">Mở cơ hội.</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 2. BỐ CỤC 2 CỘT CHUẨN XÁC THEO ẢNH MẪU                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ======================================================================= */}
          {/* CỘT TRÁI (~48% TRÊN DESKTOP): DANH SÁCH 5 CÂU HỎI VỚI THANH CYAN TRƯỢT  */}
          {/* ======================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center relative">
            
            {/* Thanh cyan trượt mượt mà đến câu đang chọn (Desktop) */}
            <div
              className="hidden lg:block absolute left-0 w-1 sm:w-1.5 bg-[#00c2ff] rounded-r-full transition-all duration-300 ease-out z-20 pointer-events-none"
              style={{
                top: `${indicatorStyle.top}px`,
                height: `${indicatorStyle.height}px`,
              }}
            />

            {/* Danh sách 5 câu hỏi */}
            <div className="divide-y divide-slate-200/80 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
              {FAQ_DATA.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={item.id} className="relative">
                    {/* Nút bấm chọn câu hỏi */}
                    <button
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      type="button"
                      onClick={() => changeQuestion(index)}
                      className={`w-full text-left p-5 sm:p-6 lg:p-7 flex items-center justify-between gap-4 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:bg-sky-50/80 ${
                        isActive
                          ? 'bg-[#f0f9ff]/90 text-[#0d1d2f]'
                          : 'hover:bg-slate-50/80 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6 flex-1 pr-2">
                        {/* Số thứ tự 01, 02, 03... */}
                        <span
                          className={`text-base sm:text-lg font-bold tracking-tight shrink-0 select-none transition-colors duration-200 ${
                            isActive ? 'text-[#00c2ff]' : 'text-slate-400'
                          }`}
                        >
                          {item.num}
                        </span>

                        {/* Tiêu đề câu hỏi */}
                        <span
                          className={`text-sm sm:text-base lg:text-[17px] leading-snug tracking-tight font-bold transition-colors duration-200 ${
                            isActive ? 'text-[#0d1d2f]' : 'text-slate-800'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Icon mũi tên chéo lên góc phải ↗ */}
                      <div className="shrink-0 text-slate-400 group-hover:text-[#00c2ff]">
                        <ArrowUpRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isActive ? 'text-[#00c2ff] translate-x-0.5 -translate-y-0.5' : 'text-slate-400'
                          }`}
                        />
                      </div>
                    </button>

                    {/* =============================================================== */}
                    {/* TRÊN MOBILE (< 1024px): CÂU TRẢ LỜI HIỆN NGAY DƯỚI CÂU ĐƯỢC CHỌN  */}
                    {/* =============================================================== */}
                    <div
                      className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isActive
                          ? 'max-h-[500px] opacity-100 p-5 bg-[#09182b] text-white border-t border-slate-800'
                          : 'max-h-0 opacity-0 p-0'
                      }`}
                    >
                      {isActive && (
                        <div>
                          <span className="text-[#00c2ff] font-bold text-xs tracking-widest uppercase block mb-2">
                            {item.category}
                          </span>
                          <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {item.answer}
                          </p>
                          <button
                            type="button"
                            onClick={handleActionClick}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00c2ff] hover:text-white transition-colors border-b border-[#00c2ff]/60 pb-0.5"
                          >
                            <span>{item.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ======================================================================= */}
          {/* CỘT PHẢI (~52% TRÊN DESKTOP): THẺ TỐI HIỂN THỊ CÂU TRẢ LỜI ĐẶC TRƯNG     */}
          {/* ======================================================================= */}
          <div className="hidden lg:flex lg:col-span-6 flex-col">
            <div className="w-full h-full min-h-[460px] rounded-[28px] bg-[#09182b] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden border border-slate-800/80 shadow-2xl flex flex-col justify-between">
              
              {/* Vầng sáng cyan mờ ảo ở góc phải dưới */}
              <div
                className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none select-none opacity-40"
                style={{
                  background: 'radial-gradient(circle at 80% 80%, rgba(0, 194, 255, 0.35), transparent 70%)',
                }}
              />

              {/* Đường quỹ đạo trong nền chuyển động quay chậm */}
              <div className="absolute -right-16 -bottom-16 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none select-none overflow-hidden">
                <svg
                  viewBox="0 0 300 300"
                  className="w-full h-full animate-[spin_50s_linear_infinite]"
                  fill="none"
                >
                  <circle cx="150" cy="150" r="130" stroke="#00c2ff" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
                  <ellipse cx="150" cy="150" rx="140" ry="70" stroke="#009fe3" strokeWidth="1.2" opacity="0.35" transform="rotate(-30 150 150)" />
                  <ellipse cx="150" cy="150" rx="140" ry="90" stroke="#38bdf8" strokeWidth="1.5" opacity="0.55" transform="rotate(35 150 150)" />
                  {/* Các node kết nối phát sáng trên quỹ đạo */}
                  <circle cx="270" cy="150" r="4.5" fill="#00c2ff" filter="drop-shadow(0 0 8px #00c2ff)" />
                  <circle cx="60" cy="90" r="3.5" fill="#38bdf8" />
                  <circle cx="210" cy="240" r="4" fill="#00c2ff" />
                </svg>
              </div>

              {/* Số thứ tự khổng lồ in mờ góc trên phải đổi đồng bộ */}
              <span
                className={`absolute top-4 right-8 font-black text-8xl sm:text-9xl text-slate-800/35 select-none pointer-events-none transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                aria-hidden="true"
              >
                {currentItem.num}
              </span>

              {/* Phần nội dung chuyển động mờ và trượt nhẹ */}
              <div
                className={`relative z-10 max-w-lg transition-all duration-300 ease-out ${
                  isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                {/* Danh mục câu hỏi */}
                <span className="text-[#00c2ff] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-4">
                  {currentItem.category}
                </span>

                {/* Tiêu đề câu hỏi lớn */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight tracking-tight mb-5">
                  {currentItem.question}
                </h3>

                {/* Đoạn văn trả lời */}
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {currentItem.answer}
                </p>

                {/* Nút liên kết khám phá */}
                <div>
                  <button
                    type="button"
                    onClick={handleActionClick}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00c2ff] hover:text-white transition-colors border-b border-[#00c2ff]/60 hover:border-white pb-0.5 group cursor-pointer"
                  >
                    <span>{currentItem.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Thanh điều hướng ở đáy: Bộ đếm 01 / 05 và nút chuyển câu */}
              <div className="relative z-10 pt-8 mt-auto flex items-center justify-between border-t border-slate-800/80">
                {/* Bộ đếm câu hỏi đồng bộ */}
                <div className="flex items-center gap-1.5 text-sm font-bold select-none">
                  <span className="text-[#00c2ff] text-base">{currentItem.num}</span>
                  <span className="text-slate-500">/ 05</span>
                </div>

                {/* Hai nút mũi tên tròn chuyển câu trước/sau */}
                <div className="flex items-center gap-2.5">
                  {/* Nút câu trước ← */}
                  <button
                    type="button"
                    onClick={() => changeQuestion((activeIndex - 1 + FAQ_DATA.length) % FAQ_DATA.length)}
                    className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Câu hỏi trước"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  {/* Nút câu tiếp theo → */}
                  <button
                    type="button"
                    onClick={() => changeQuestion((activeIndex + 1) % FAQ_DATA.length)}
                    className="w-10 h-10 rounded-full border border-[#00c2ff]/70 hover:bg-[#00c2ff] text-[#00c2ff] hover:text-[#09182b] flex items-center justify-center transition-all cursor-pointer shadow-sm shadow-cyan-500/10"
                    aria-label="Câu hỏi tiếp theo"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
