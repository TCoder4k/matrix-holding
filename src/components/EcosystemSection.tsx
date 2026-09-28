import { useState } from 'react';
import { ArrowRight, Share2, Network, Box, Database, Layers } from 'lucide-react';
import { ecosystemNodes } from '../content';

export default function EcosystemSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'network':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-2.5 text-white shadow-md flex items-center justify-center">
            <Network className="w-7 h-7" />
          </div>
        );
      case 'connect':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 p-2.5 text-white shadow-md flex items-center justify-center">
            <Box className="w-7 h-7" />
          </div>
        );
      case 'capital':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-blue-700 p-2.5 text-white shadow-md flex items-center justify-center">
            <Database className="w-7 h-7" />
          </div>
        );
      case 'specialized':
        return (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-slate-700 p-2.5 text-white shadow-md flex items-center justify-center">
            <Layers className="w-7 h-7" />
          </div>
        );
      default:
        return <Share2 className="w-7 h-7 text-cyan-500" />;
    }
  };

  return (
    <section id="he-sinh-thai" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              HỆ SINH THÁI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 leading-[1.2] tracking-tight">
              Cộng hưởng sức mạnh<br />tạo giá trị bền vững
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              MATRIX HOLDING phát triển hệ sinh thái đa ngành với các lĩnh vực bổ trợ, cùng hướng tới mục tiêu kiến tạo giá trị dài hạn, đóng góp tích cực cho sự phát triển của xã hội.
            </p>

            <div className="pt-2">
              <a
                href="#du-an"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#081c31] bg-white border border-[#27d9ef] rounded-md hover:bg-[#e0f7fa]/50 transition-colors shadow-xs"
              >
                <span>Khám phá hệ sinh thái</span>
                <ArrowRight className="w-4 h-4 text-[#0891b2]" />
              </a>
            </div>
          </div>

          {/* Right Column: HTML & SVG Connected Network Diagram */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs overflow-hidden">
              {/* Background subtle grid and orbits */}
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#081c31_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Responsive SVG Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 440"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27d9ef" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Central connecting rings */}
                <ellipse cx="300" cy="220" rx="140" ry="85" fill="none" stroke="#27d9ef" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
                <ellipse cx="300" cy="220" rx="210" ry="120" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />

                {/* Connector lines from Center (300, 220) to 4 Node Positions */}
                {/* Node 1: Top Left (140, 90) */}
                <path d="M 300 220 Q 200 180, 140 90" fill="none" stroke="url(#cyanLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
                <circle cx="140" cy="90" r="4" fill="#27d9ef" filter="url(#glow)" />

                {/* Node 2: Top Right (460, 90) */}
                <path d="M 300 220 Q 400 180, 460 90" fill="none" stroke="url(#cyanLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
                <circle cx="460" cy="90" r="4" fill="#27d9ef" filter="url(#glow)" />

                {/* Node 3: Bottom Left (140, 350) */}
                <path d="M 300 220 Q 200 260, 140 350" fill="none" stroke="url(#cyanLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
                <circle cx="140" cy="350" r="4" fill="#27d9ef" filter="url(#glow)" />

                {/* Node 4: Bottom Right (460, 350) */}
                <path d="M 300 220 Q 400 260, 460 350" fill="none" stroke="url(#cyanLineGrad)" strokeWidth="2" strokeDasharray="5 3" />
                <circle cx="460" cy="350" r="4" fill="#27d9ef" filter="url(#glow)" />

                {/* Center Node Glow */}
                <circle cx="300" cy="220" r="54" fill="none" stroke="#27d9ef" strokeWidth="2" opacity="0.5" />
              </svg>

              {/* HTML Nodes Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-16 sm:gap-y-24 gap-x-8">
                {/* 1. MATRIX NETWORK (Top-Left) */}
                <div
                  onMouseEnter={() => setActiveNode('network')}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-center gap-3 transition-transform duration-200 cursor-pointer ${
                    activeNode === 'network' ? 'scale-105' : ''
                  }`}
                >
                  {renderIcon('network')}
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      MATRIX NETWORK
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug mt-0.5">
                      Kết nối nguồn lực,<br className="hidden sm:inline" /> mở rộng cơ hội
                    </p>
                  </div>
                </div>

                {/* 2. MATRIX CONNECT (Top-Right) */}
                <div
                  onMouseEnter={() => setActiveNode('connect')}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-center sm:flex-row-reverse sm:text-right gap-3 transition-transform duration-200 cursor-pointer ${
                    activeNode === 'connect' ? 'scale-105' : ''
                  }`}
                >
                  {renderIcon('connect')}
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      MATRIX CONNECT
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug mt-0.5">
                      Liên kết đối tác,<br className="hidden sm:inline" /> kiến tạo giá trị
                    </p>
                  </div>
                </div>

                {/* Central Holding Hub Disk */}
                <div className="sm:col-span-2 flex justify-center -my-6 sm:-my-10">
                  <div className="relative group cursor-pointer">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#081c31] border-2 border-[#27d9ef] shadow-[0_0_25px_rgba(39,217,239,0.35)] flex flex-col items-center justify-center text-center p-2 text-white transition-transform duration-300 group-hover:scale-105">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 mb-1 shrink-0 flex items-center justify-center">
                        <img
                          src="/images/logo-matrix-holding.svg"
                          alt="Matrix Emblem"
                          className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(30,96,168,0.7)]"
                        />
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm tracking-wider text-white">
                        MATRIX
                      </span>
                      <span className="text-[9px] tracking-[0.25em] text-[#27d9ef] font-semibold uppercase">
                        HOLDING
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. MATRIX CAPITAL (Bottom-Left) */}
                <div
                  onMouseEnter={() => setActiveNode('capital')}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-center gap-3 transition-transform duration-200 cursor-pointer ${
                    activeNode === 'capital' ? 'scale-105' : ''
                  }`}
                >
                  {renderIcon('capital')}
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      MATRIX CAPITAL
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug mt-0.5">
                      Đầu tư chiến lược,<br className="hidden sm:inline" /> thúc đẩy tăng trưởng
                    </p>
                  </div>
                </div>

                {/* 4. CÁC ĐƠN VỊ CHUYÊN MÔN (Bottom-Right) */}
                <div
                  onMouseEnter={() => setActiveNode('specialized')}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-center sm:flex-row-reverse sm:text-right gap-3 transition-transform duration-200 cursor-pointer ${
                    activeNode === 'specialized' ? 'scale-105' : ''
                  }`}
                >
                  {renderIcon('specialized')}
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      CÁC ĐƠN VỊ CHUYÊN MÔN
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug mt-0.5">
                      Phát triển giải pháp,<br className="hidden sm:inline" /> vận hành hiệu quả
                    </p>
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
