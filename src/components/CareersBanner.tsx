import { ArrowRight } from 'lucide-react';

interface CareersBannerProps {
  onOpenCareers?: () => void;
}

export default function CareersBanner({ onOpenCareers }: CareersBannerProps) {
  return (
    <section id="tuyen-dung" className="py-16 sm:py-20 bg-white">
      <div className="container-page">
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          {/* Background Image with Dark Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-[#081c31]">
            <img
              src="/images/careers-banner.webp"
              alt="Careers at Matrix Holding"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081c31] via-[#081c31]/90 to-[#081c31]/40" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-white">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#27d9ef]">
                TUYỂN DỤNG
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Cùng nhau kiến tạo những giá trị lớn hơn
              </h2>
              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                Gia nhập <strong className="text-white">MATRIX HOLDING</strong> để cùng phát triển bản thân, kiến tạo cơ hội và tạo nên tác động tích cực cho cộng đồng.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpenCareers}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-md inline-flex items-center gap-2 transition-all shadow-md hover:shadow-[0_0_15px_rgba(39,217,239,0.4)] whitespace-nowrap"
              >
                <span>Xem cơ hội nghề nghiệp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
