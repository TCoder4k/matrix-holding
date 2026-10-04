import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Target, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

interface AboutIntroSectionProps {
  onLearnMoreClick: () => void;
  onViewProfile?: () => void;
}

export const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({
  onLearnMoreClick,
  onViewProfile,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activePillar, setActivePillar] = useState<number>(0); // 0: Kỳ lân, 1: May đo, 2: Bền vững
  const [countNumber, setCountNumber] = useState<number>(0); // Count up 0 -> 20

  const pillars = [
    {
      id: 0,
      title: 'Mục tiêu Kỳ lân',
      desc: 'Đồng hành bứt phá quy mô',
      icon: Target,
      tag: 'ĐẦU TƯ & QUẢN TRỊ',
      caption: 'Tăng tốc định giá và chuẩn hóa mô hình vận hành đạt chuẩn quốc tế.',
      highlight: 'Venture Capital & Accelerator',
    },
    {
      id: 1,
      title: 'Giải pháp may đo',
      desc: 'Phù hợp nhu cầu thực tế',
      icon: Sparkles,
      tag: 'TỐI ƯU NGUỒN LỰC',
      caption: 'Kiến trúc giải pháp riêng biệt, tương thích với từng giai đoạn phát triển doanh nghiệp.',
      highlight: 'Tailored Strategy',
    },
    {
      id: 2,
      title: 'Tăng trưởng bền vững',
      desc: 'Kiến tạo giá trị dài hạn',
      icon: TrendingUp,
      tag: 'GIÁ TRỊ DÀI HẠN',
      caption: 'Xây dựng hệ sinh thái tuần hoàn, bảo toàn giá trị cốt lõi cho đối tác.',
      highlight: 'ESG & Sustainable Ecosystem',
    },
  ];

  // IntersectionObserver khi section vào màn hình
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Đếm số 0 -> 20 một lần trong 1600ms khi vào viewport (êm ái, từng nhịp một)
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 20;
    const duration = 1600;
    const intervalTime = 50;
    const step = 1;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCountNumber(end);
        clearInterval(timer);
      } else {
        setCountNumber(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="about-intro"
      className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden border-b border-slate-100"
    >
      {/* Vầng sáng nền mờ nhẹ nhàng */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00c2ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* CỘT TRÁI (7 CỘT): TIÊU ĐỀ, NỘI DUNG, 2 NÚT VÀ HÀNG CHỌN 3 LỢI THẾ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker: VỀ CHÚNG TÔI (Hiện trước 12-16px) */}
            <div
              className="flex items-center gap-2.5 mb-3.5 transition-all duration-700 ease-out"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <span className="w-6 h-[2px] bg-[#00c2ff] rounded-full" />
              <span className="text-[#009fe3] font-bold text-xs sm:text-[13px] tracking-[2.5px] uppercase">
                VỀ CHÚNG TÔI
              </span>
            </div>

            {/* Tiêu đề chính: GIỚI THIỆU MATRIX HOLDING */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0A192F] tracking-tight leading-[1.15] mb-5 transition-all duration-800 ease-out delay-150"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(14px)',
              }}
            >
              GIỚI THIỆU MATRIX HOLDING
            </h2>

            {/* Đoạn mô tả nguyên văn */}
            <p
              className="text-slate-600 text-base sm:text-lg leading-[1.65] mb-8 font-normal transition-all duration-800 ease-out delay-250 max-w-[660px]"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(14px)',
              }}
            >
              Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực, phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu của từng doanh nghiệp.
            </p>

            {/* HAI NÚT HÀNH ĐỘNG: ĐỒNG BỘ CHIỀU CAO 58PX VÀ BO GÓC 12PX VỚI HERO */}
            <div
              className="flex flex-wrap items-center gap-4 transition-all duration-800 ease-out delay-350"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              {/* Nút 1: Tìm hiểu thêm */}
              <button
                type="button"
                onClick={onLearnMoreClick}
                className="h-14 lg:h-[58px] px-8 rounded-[12px] bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071526] font-bold text-[15px] inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]"
              >
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Nút 2: Xem Hồ sơ năng lực */}
              {onViewProfile && (
                <button
                  type="button"
                  onClick={onViewProfile}
                  className="h-14 lg:h-[58px] px-8 rounded-[12px] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0077b6] font-bold text-[15px] border border-slate-300 hover:border-[#0077b6] inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-xs active:scale-[0.98] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6]"
                >
                  <FileText className="w-4 h-4 text-[#009fe3] transition-transform duration-300 group-hover:scale-110" />
                  <span>Xem Hồ sơ năng lực</span>
                </button>
              )}
            </div>

            {/* HÀNG CHỌN GỌN 3 GIÁ TRỊ TƯƠNG TÁC (Hướng B) */}
            <div
              className="pt-10 mt-10 border-t border-slate-100 transition-all duration-900 ease-out delay-450"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3.5">
                Chọn điểm nhấn giá trị để xem chi tiết:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
                {pillars.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isSelected = activePillar === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`relative text-left p-3.5 rounded-[12px] border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009fe3] ${
                        isSelected
                          ? 'bg-sky-50/70 border-[#00c2ff]/60 shadow-xs'
                          : 'bg-white hover:bg-slate-50/80 border-slate-200/70 text-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <IconComponent
                          className={`w-5 h-5 shrink-0 transition-transform duration-300 mt-0.5 ${
                            isSelected ? 'text-[#009fe3] scale-110' : 'text-slate-400'
                          }`}
                        />
                        <div>
                          <div
                            className={`text-xs sm:text-[13px] font-bold transition-colors duration-300 ${
                              isSelected ? 'text-[#0A192F]' : 'text-slate-700'
                            }`}
                          >
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      {/* Gạch cyan trượt tới mục đang chọn trong 350ms */}
                      {isSelected && (
                        <span
                          className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-[#00c2ff] rounded-full transition-all duration-350 ease-out"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* CỘT PHẢI (5 CỘT): KHUNG ẢNH DOANH NGHIỆP VỚI CHÚ THÍCH THAY ĐỔI THEO GIÁ TRỊ ĐANG CHỌN */}
          <div className="lg:col-span-5 relative pb-8 lg:pb-2">
            {/* Khung ảnh mở chậm rãi từ trái sang phải trong 1350ms, bo góc [20px] đồng bộ */}
            <div
              className="relative rounded-[20px] overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] bg-slate-900 group"
              style={{
                clipPath: isInView ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
                transition: 'clip-path 1350ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Ảnh thu nhẹ từ 103% về 100% trong 1350ms, hover zoom nhẹ 102% */}
              <img
                src="/images/matrix_boardroom_skyline_1790822831335.jpg"
                alt="Phòng hội nghị chiến lược Matrix Holding"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02]"
                style={{
                  transform: isInView ? 'scale(1)' : 'scale(1.03)',
                  transition: 'transform 1350ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Lớp overlay chuyển sắc tinh tế ở đỉnh và đáy ảnh để các nội dung nổi bật */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051120]/75 via-transparent to-[#051120]/60 pointer-events-none" />

              {/* CHÚ THÍCH TRÊN ẢNH: Đặt ở góc trên ảnh với max-width thoáng đãng, overflow:hidden text-ellipsis, không bị pop-up che khuất */}
              <div
                key={activePillar}
                className="absolute top-4 left-4 right-16 p-3 sm:p-3.5 rounded-xl bg-[#051120]/85 backdrop-blur-md border border-cyan-500/35 text-white animate-in fade-in zoom-in-95 duration-500 pointer-events-none z-10 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00c2ff] shadow-[0_0_6px_#00c2ff]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00c2ff]">
                    {pillars[activePillar].tag}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-100 leading-snug font-normal overflow-hidden text-ellipsis line-clamp-2">
                  {pillars[activePillar].caption}
                </p>
              </div>

              {/* Nút checkmark huy hiệu góc trên phải của ảnh */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#051120]/60 backdrop-blur-md border border-cyan-500/40 text-[#00c2ff] pointer-events-none z-10">
                <CheckCircle2 className="w-5 h-5 text-[#00c2ff]" />
              </div>
            </div>

            {/* THẺ "20+ DOANH NGHIỆP THÀNH VIÊN": CĂN CHỈNH NỘI KHUNG CHUẨN XÁC, KHÔNG TRÀN SANG TRÁI */}
            <div
              className="absolute -bottom-5 left-4 sm:left-6 max-w-[calc(100%-32px)] sm:max-w-[290px] bg-white/98 backdrop-blur-md p-3.5 sm:p-4 rounded-[16px] shadow-xl border border-slate-200/90 flex items-center gap-3.5 z-20 transition-all duration-900 ease-out delay-600"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <div className="w-12 h-12 rounded-[12px] bg-[#071526] text-white flex items-center justify-center font-black text-lg shadow-sm border border-cyan-500/30 shrink-0">
                <span>{countNumber}+</span>
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <div className="font-extrabold text-xs sm:text-sm text-[#0A192F] leading-tight truncate">
                  Doanh nghiệp thành viên
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                  Tăng trưởng thần tốc
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
