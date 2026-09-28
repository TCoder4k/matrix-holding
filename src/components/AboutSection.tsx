import { ArrowRight, Target, Eye, Gem, Users, Lightbulb, Leaf } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section id="ve-chung-toi" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Corporate Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              VỀ CHÚNG TÔI
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-[1.2] tracking-tight">
              Vì những giá trị<br />tốt đẹp hơn
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              MATRIX HOLDING là hệ sinh thái doanh nghiệp đa ngành, hướng tới kiến tạo những giá trị bền vững thông qua sự cộng hưởng giữa con người, công nghệ và cơ hội, đóng góp tích cực cho cộng đồng và xã hội.
            </p>

            <div className="pt-2">
              <a
                href="#he-sinh-thai"
                onClick={(e) => {
                  if (onLearnMore) {
                    e.preventDefault();
                    onLearnMore();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-md hover:border-slate-800 transition-colors shadow-xs"
              >
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Core Values */}
          <div className="lg:col-span-7 space-y-10">
            {/* Top 2 Cards: Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sứ mệnh */}
              <div className="bg-[#f8fafc] p-6 rounded-lg border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center text-[#00acc1]">
                  <Target className="w-5 h-5 text-[#0891b2]" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Sứ mệnh</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kết nối nguồn lực, tạo dựng hệ sinh thái doanh nghiệp vững mạnh, kiến tạo giá trị thiết thực cho khách hàng, đối tác và cộng đồng.
                </p>
              </div>

              {/* Tầm nhìn */}
              <div className="bg-[#f8fafc] p-6 rounded-lg border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center text-[#00acc1]">
                  <Eye className="w-5 h-5 text-[#0891b2]" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">Tầm nhìn</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trở thành tập đoàn đầu tư và phát triển hệ sinh thái đa ngành uy tín, tiên phong kiến tạo những giá trị bền vững tại Việt Nam và khu vực.
                </p>
              </div>
            </div>

            {/* Core Values Section */}
            <div>
              <h3 className="font-bold text-lg text-slate-950 mb-5">
                Giá trị cốt lõi
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* 1. Chính trực */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-2.5 hover:border-[#27d9ef] transition-colors">
                  <div className="text-[#0891b2]">
                    <Gem className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Chính trực</div>
                    <div className="text-xs text-slate-500 mt-0.5">là nền tảng</div>
                  </div>
                </div>

                {/* 2. Hợp tác */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-2.5 hover:border-[#27d9ef] transition-colors">
                  <div className="text-[#0891b2]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Hợp tác</div>
                    <div className="text-xs text-slate-500 mt-0.5">để cùng lớn mạnh</div>
                  </div>
                </div>

                {/* 3. Đổi mới */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-2.5 hover:border-[#27d9ef] transition-colors">
                  <div className="text-[#0891b2]">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Đổi mới</div>
                    <div className="text-xs text-slate-500 mt-0.5">để tạo giá trị khác biệt</div>
                  </div>
                </div>

                {/* 4. Phát triển bền vững */}
                <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-2.5 hover:border-[#27d9ef] transition-colors">
                  <div className="text-[#0891b2]">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 leading-tight">Phát triển bền vững</div>
                    <div className="text-xs text-slate-500 mt-0.5">vì cộng đồng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
