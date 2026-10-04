import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Scale, Cpu, Settings, ShieldCheck, BarChart3, TrendingUp } from 'lucide-react';

interface MatrixNetworkModulesProps {
  onExplore?: () => void;
}

export const MatrixNetworkModules: React.FC<MatrixNetworkModulesProps> = ({ onExplore }) => {
  const [activeTab, setActiveTab] = useState<'capabilities' | 'coordination' | 'solutions'>('capabilities');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPageVisible, setIsPageVisible] = useState(true);

  const tabs = [
    {
      key: 'capabilities' as const,
      label: 'Năng lực',
      desc: 'Quy tụ hơn 50 chuyên gia đầu ngành trong các lĩnh vực quản trị doanh nghiệp, pháp chế, tài chính và công nghệ cao.',
    },
    {
      key: 'coordination' as const,
      label: 'Phối hợp',
      desc: 'Liên kết chặt chẽ các đơn vị thành viên, chia sẻ hạ tầng chung và vận hành nhịp nhàng theo một tiêu chuẩn đồng bộ.',
    },
    {
      key: 'solutions' as const,
      label: 'Giải pháp',
      desc: 'Cung cấp bộ giải pháp toàn diện được may đo riêng cho từng quy mô và giai đoạn phát triển của doanh nghiệp đối tác.',
    },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleTabChange = (key: 'capabilities' | 'coordination' | 'solutions') => {
    if (key === activeTab) return;
    setIsTabTransitioning(true);
    setTimeout(() => {
      setActiveTab(key);
      setIsTabTransitioning(false);
    }, 150);
  };

  const shouldPause = !isIntersecting || !isPageVisible;

  return (
    <section
      ref={containerRef}
      id="section-network"
      className={`w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100 ${
        shouldPause ? 'paused-animation' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* CỘT TRÁI: TIÊU ĐỀ, MÔ TẢ & TABS TƯƠNG TÁC */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Kicker */}
            <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase block mb-3 animate-in fade-in duration-500">
              MATRIX NETWORK
            </span>

            {/* Tiêu đề 2 dòng lớn */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-[#0d1d2f] mb-3 animate-in fade-in slide-in-from-bottom-3 duration-600">
              Kết nối năng lực.<br />
              <span className="text-[#00c2ff]">Mở rộng giải pháp.</span>
            </h2>

            {/* Phụ đề */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal animate-in fade-in duration-700">
              Khám phá năng lực của Matrix Network trong hệ sinh thái Matrix.
            </p>

            {/* Đoạn mô tả theo tab được chọn */}
            <div className="min-h-[50px] mb-6">
              <p
                className={`text-slate-500 text-xs sm:text-sm leading-relaxed transition-opacity duration-300 ${
                  isTabTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentTab.desc}
              </p>
            </div>

            {/* Nút hành động chính */}
            <div className="mb-10">
              <button
                type="button"
                onClick={onExplore}
                className="px-7 py-3.5 rounded-full bg-[#071629] hover:bg-[#009fe3] text-white font-bold text-sm inline-flex items-center gap-2.5 transition-all cursor-pointer shadow-md group"
              >
                <span>Khám phá Matrix Network</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            {/* THANH BỘ 3 TAB: NĂNG LỰC — PHỐI HỢP — GIẢI PHÁP (Trượt trong 250ms) */}
            <div className="flex items-center gap-8 border-t border-slate-100 pt-5">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleTabChange(tab.key)}
                    className="flex flex-col items-start gap-1 group cursor-pointer focus:outline-none relative py-1"
                  >
                    <span
                      className={`text-xs sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-[#0d1d2f]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`h-[2px] rounded-full transition-all duration-250 ${
                        isActive ? 'w-full bg-[#00c2ff]' : 'w-0 group-hover:w-full bg-slate-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

          </div>

          {/* CỘT PHẢI: LƯỚI CARD VỚI ENTRANCE STAGGER & LOOPING ANIMATIONS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
            
            {/* CỘT 1 */}
            <div className="flex flex-col gap-5">
              {/* Card 1: Hạ tầng pháp lý (Navy) */}
              <div
                className={`w-full h-64 rounded-3xl bg-[#071629] p-6 flex flex-col justify-between shadow-xl border border-slate-800 hover-balance group transition-shadow duration-300 hover:shadow-2xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '0ms' }}
              >
                <div className="w-8 h-1.5 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-20" />
                <div className="py-4 text-white flex justify-center scale-icon transition-transform duration-300">
                  <Scale className="w-12 h-12 stroke-[1.5]" />
                </div>
                <span className="text-white font-black text-sm uppercase tracking-wider">Hạ tầng pháp lý</span>
              </div>

              {/* Card 2: Tài chính & Vốn (White) */}
              <div
                className={`w-full h-52 rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between shadow-xl group transition-shadow duration-300 hover:shadow-2xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '180ms' }}
              >
                <div className="w-8 h-1.5 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-20" />
                <div className="py-2 text-[#0A192F] flex justify-center items-end gap-1.5 h-16">
                  <div className="w-2.5 h-6 bg-slate-200 rounded-t animate-bar-growth" style={{ animationDelay: '0s' }} />
                  <div className="w-2.5 h-12 bg-[#00c2ff] rounded-t animate-bar-growth" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2.5 h-9 bg-[#071629] rounded-t animate-bar-growth" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-[#0A192F] font-black text-sm uppercase tracking-wider">Tài chính & Vốn</span>
              </div>
            </div>

            {/* CỘT 2 */}
            <div className="flex flex-col gap-5 pt-8 sm:pt-12">
              {/* Card 3: Giải pháp AI (Light Cyan with light sweep) */}
              <div
                className={`w-full h-64 rounded-3xl bg-[#e0f2fe] border border-sky-200 hover:border-sky-400 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all duration-300 hover:shadow-2xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '90ms' }}
              >
                {/* Vệt sáng quét ngang lặp lại mỗi 5s */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/50 to-transparent loop-light-sweep" />
                </div>

                <div className="w-8 h-1.5 bg-[#00c2ff] rounded-full transition-all duration-300 group-hover:w-20 z-10" />
                <div className="py-4 text-[#0077b6] flex justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                  <Cpu className="w-12 h-12 stroke-[1.5]" />
                </div>
                <span className="text-[#0A192F] font-black text-sm uppercase tracking-wider z-10">Giải pháp AI</span>
              </div>
            </div>

            {/* CỘT 3 */}
            <div className="flex flex-col gap-5">
              {/* Card 4: Vận hành đồng bộ (Light Cyan with rotating gear icon) */}
              <div
                className={`w-full h-44 rounded-3xl bg-[#e0f2fe] border border-sky-200 p-5 flex flex-col justify-between shadow-lg group transition-shadow duration-300 hover:shadow-xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '270ms' }}
              >
                <div className="w-7 h-1.5 bg-[#00c2ff] rounded-full transition-all duration-300 group-hover:w-19" />
                <div className="flex items-center gap-3 text-[#0077b6]">
                  <Settings className="w-7 h-7 stroke-[1.5] animate-spin-gear" />
                  <span className="text-[#0A192F] font-black text-xs sm:text-sm uppercase tracking-wider">Vận hành đồng bộ</span>
                </div>
              </div>

              {/* Card 5: Kiểm toán nội bộ (White) */}
              <div
                className={`w-full h-44 rounded-3xl bg-white border border-slate-200/90 p-5 flex flex-col justify-between shadow-lg group transition-shadow duration-300 hover:shadow-xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '360ms' }}
              >
                <div className="w-7 h-1.5 bg-[#071629] rounded-full transition-all duration-300 group-hover:w-19" />
                <div className="flex items-center gap-3 text-[#0A192F]">
                  <ShieldCheck className="w-7 h-7 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#0077b6]" />
                  <span className="text-[#0A192F] font-black text-xs sm:text-sm uppercase tracking-wider">Kiểm toán nội bộ</span>
                </div>
              </div>

              {/* Card 6: Tăng trưởng quy mô (Navy) */}
              <div
                className={`w-full h-44 rounded-3xl bg-[#071629] p-5 flex flex-col justify-between shadow-xl border border-slate-800 group transition-shadow duration-300 hover:shadow-2xl ${
                  isIntersecting ? 'animate-card-entrance' : 'opacity-0'
                }`}
                style={{ animationDelay: '450ms' }}
              >
                <div className="w-7 h-1.5 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-19" />
                <div className="flex items-center gap-3 text-white">
                  <TrendingUp className="w-7 h-7 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="text-white font-black text-xs sm:text-sm uppercase tracking-wider">Tăng trưởng quy mô</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
