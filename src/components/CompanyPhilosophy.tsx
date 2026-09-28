import { useState } from 'react';
import { Award, Compass, TrendingUp, CheckCircle2 } from 'lucide-react';

interface CompanyPhilosophyProps {
  lang: 'vi' | 'en';
}

export default function CompanyPhilosophy({ lang }: CompanyPhilosophyProps) {
  const [activeTab, setActiveTab] = useState<'vision' | 'values' | 'history'>('vision');

  const milestones = [
    {
      year: '2008',
      title: lang === 'vi' ? 'Thành Lập Matrix' : 'Matrix Founded',
      desc: lang === 'vi' ? 'Khởi đầu với lĩnh vực đầu tư cơ sở hạ tầng và logistics thương mại.' : 'Incepted with focus on industrial infrastructure and trade logistics.'
    },
    {
      year: '2014',
      title: lang === 'vi' ? 'Mở Rộng Bán Dẫn & Công Nghệ' : 'Tech & Semiconductor Expansion',
      desc: lang === 'vi' ? 'Thành lập trung tâm nghiên cứu thiết kế vi mạch fabless đầu tiên tại TP.HCM.' : 'Established the first fabless IC design laboratory in Ho Chi Minh City.'
    },
    {
      year: '2019',
      title: lang === 'vi' ? 'Tiên Phong Năng Lượng Tái Tạo' : 'Green Energy Breakthrough',
      desc: lang === 'vi' ? 'Đóng điện cụm điện gió và điện mặt trời quy mô 1,000MW đầu tiên.' : 'Commissioned first 1,000MW offshore wind and utility solar portfolio.'
    },
    {
      year: '2023',
      title: lang === 'vi' ? 'Tái Cấu Trúc Tập Đoàn Toàn Cầu' : 'Global Conglomerate Restructuring',
      desc: lang === 'vi' ? 'Hoàn thiện mô hình tập đoàn đa ngành 4 trụ cột, niêm yết trái phiếu quốc tế.' : 'Consolidated into 4 strategic pillars and issued international green bonds.'
    },
    {
      year: '2026',
      title: lang === 'vi' ? 'Vươn Tầm Định Chế Quốc Tế' : 'Global Institutional Reach',
      desc: lang === 'vi' ? 'Tổng tài sản vượt 4.8 tỷ USD, mở rộng mạng lưới tại Singapore và Frankfurt.' : 'Assets surpass $4.8B, expanding global operations in Singapore and Frankfurt.'
    }
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {lang === 'vi' ? 'TỔNG QUAN TẬP ĐOÀN' : 'CORPORATE OVERVIEW'}
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 text-balance">
            {lang === 'vi'
              ? 'Kiến Tạo Giá Trị Vượt Trội Cho Xã Hội & Các Thế Hệ Tương Lai'
              : 'Creating Enduring Value for Society and Future Generations'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'vi'
              ? 'Matrix Holding vận hành với tư duy dài hạn: gắn liền tăng trưởng tài chính với tiến bộ khoa học công nghệ, bảo vệ môi trường và trách nhiệm xã hội sâu sắc.'
              : 'Matrix Holding operates with generational foresight: aligning financial resilience with technological breakthroughs, decarbonization, and social responsibility.'}
          </p>
        </div>

        {/* Interactive View Switcher Tabs (Functional filter buttons, no pill badges) */}
        <div className="mt-10 inline-flex items-center p-1 bg-slate-200/70 rounded-md">
          <button
            type="button"
            onClick={() => setActiveTab('vision')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap ${
              activeTab === 'vision'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'vi' ? 'Thông Điệp Lãnh Đạo' : 'Leadership Message'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('values')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap ${
              activeTab === 'values'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'vi' ? '4 Giá Trị Cốt Lõi' : 'Core Values'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all whitespace-nowrap ${
              activeTab === 'history'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'vi' ? 'Hành Trình Phát Triển' : 'Milestones'}
          </button>
        </div>

        {/* Tab 1: Leadership Statement */}
        {activeTab === 'vision' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 border border-slate-200 shadow-xs">
            <div className="lg:col-span-8 space-y-6">
              <blockquote className="font-display text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed italic border-l-2 border-slate-900 pl-6">
                {lang === 'vi'
                  ? '“Tại Matrix Holding, chúng tôi không đơn thuần đo lường thành công bằng quy mô doanh thu, mà bằng năng lực kiến tạo nên các chuẩn mực phát triển bền vững cho nền kinh tế khu vực và chuỗi cung ứng toàn cầu.”'
                  : '“At Matrix Holding, we measure our success not merely by top-line expansion, but by our ability to establish enduring sustainability benchmarks for regional economies and global supply chains.”'}
              </blockquote>
              <div className="text-sm text-slate-600 space-y-2 leading-relaxed">
                <p>
                  {lang === 'vi'
                    ? 'Trong kỷ nguyên chuyển dịch kép — chuyển đổi số và chuyển đổi xanh, Matrix Holding lựa chọn đi vào các mắt xích công nghệ lõi: làm chủ thiết kế bán dẫn, đầu tư hạ tầng năng lượng tái tạo quy mô công nghiệp và phát triển các trung tâm logistics đạt chuẩn Net-Zero.'
                    : 'In this era of dual transition—digital and green—Matrix Holding strategically anchors core capabilities: mastering semiconductor design, deploying industrial-scale clean energy, and engineering Net-Zero logistics hubs.'}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {lang === 'vi' ? 'TS. Trần Minh Hoàng' : 'Dr. Hoang Minh Tran'}
                  </div>
                  <div className="text-xs text-slate-500">
                    {lang === 'vi' ? 'Chủ tịch Hội đồng Quản trị & Nhà sáng lập Tập đoàn Matrix' : 'Chairman of the Board & Founder, Matrix Holding Group'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 border border-slate-200/80 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {lang === 'vi' ? 'Cam Kết Chiến Lược 2030' : 'Strategic Commitments 2030'}
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{lang === 'vi' ? '100% điện năng sử dụng từ nguồn tái tạo nội bộ' : '100% operational power from captive clean sources'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{lang === 'vi' ? 'Hoàn thiện chuỗi đóng gói bán dẫn 3D-IC tại Việt Nam' : 'Commission 3D-IC semiconductor packaging facility'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{lang === 'vi' ? 'Dành tối thiểu 15% EBITDA hàng năm cho R&D công nghệ cao' : 'Reinvest $\\ge 15\%$ EBITDA into advanced tech R&D'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{lang === 'vi' ? 'Duy trì tỷ lệ an toàn tài chính mức A+ quốc tế' : 'Maintain international A+ credit resilience rating'}</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Core Values */}
        {activeTab === 'values' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-slate-400">01.</div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {lang === 'vi' ? 'Tiên Phong Công Nghệ' : 'Technological Mastery'}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Không ngừng giải quyết các bài toán kỹ thuật phức tạp, đầu tư bài bản vào R&D bán dẫn và AI để làm chủ tài sản trí tuệ.'
                    : 'Relentlessly tackling complex engineering frontiers, heavily investing in semiconductor and AI R&D to own foundational IP.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                {lang === 'vi' ? 'Chuẩn mực ISO 26262 & AS9100' : 'ISO 26262 & AS9100 Certified'}
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-slate-400">02.</div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {lang === 'vi' ? 'Bền Vững Tự Nhiên' : 'Eco-Regeneration'}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Phát triển kinh tế song hành cùng tái tạo sinh thái. Từng dự án năng lượng và khu công nghiệp đều có mục tiêu tuần hoàn rõ ràng.'
                    : 'Economic prosperity integrated with environmental regeneration. Every project carries strict circularity metrics.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                {lang === 'vi' ? 'Net-Zero Scope 1 & 2 trước 2035' : 'Net-Zero Scope 1 & 2 by 2035'}
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-slate-400">03.</div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {lang === 'vi' ? 'Quản Trị Minh Bạch' : 'OECD Governance'}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Thực thi các thông lệ quản trị công ty đại chúng minh bạch nhất theo chuẩn OECD và kiểm toán quốc tế Big4 thường niên.'
                    : 'Adhering to rigorous OECD public corporate governance practices and annual Big4 international audits.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                {lang === 'vi' ? 'Kiểm toán độc lập PwC' : 'Audited independently by PwC'}
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-slate-400">04.</div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {lang === 'vi' ? 'Tác Động Toàn Cầu' : 'Global Synergy'}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Xây dựng mạng lưới liên kết đối tác sâu rộng tại các trung tâm kinh tế Singapore, Đức, Nhật Bản và Hoa Kỳ.'
                    : 'Forging deep cross-border ecosystems across premier financial and innovation hubs worldwide.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                {lang === 'vi' ? '12 Thị trường vận hành quốc tế' : '12 Strategic international markets'}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: History Timeline */}
        {activeTab === 'history' && (
          <div className="mt-8 bg-white p-6 sm:p-10 border border-slate-200 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {milestones.map((item, idx) => (
                <div key={item.year} className="relative">
                  {idx < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-3 left-12 right-0 h-0.5 bg-slate-200" />
                  )}
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-lg text-slate-900 tabular-nums">
                      {item.year}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  </div>
                  <h4 className="mt-3 font-semibold text-sm text-slate-950">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
