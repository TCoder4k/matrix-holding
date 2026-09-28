import { useState } from 'react';
import { Leaf, Users, ShieldAlert, Award, Sparkles } from 'lucide-react';

interface EsgSectionProps {
  lang: 'vi' | 'en';
}

export default function EsgSection({ lang }: EsgSectionProps) {
  const [activePillar, setActivePillar] = useState<'env' | 'soc' | 'gov'>('env');

  return (
    <section id="esg" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {lang === 'vi' ? 'PHÁT TRIỂN BỀN VỮNG & ESG' : 'SUSTAINABILITY & ESG'}
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 text-balance">
            {lang === 'vi'
              ? 'Lộ Trình Net-Zero 2040: Hành Động Vì Khí Hậu & Cộng Đồng'
              : 'Net-Zero 2040 Roadmap: Concrete Climate & Social Action'}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {lang === 'vi'
              ? 'Tại Matrix Holding, ESG không phải là một khẩu hiệu truyền thông mà là hệ thống tiêu chuẩn vận hành bắt buộc được tích hợp trực tiếp vào từng quyết định đầu tư và hoạt động thường nhật.'
              : 'At Matrix Holding, ESG is not a marketing tagline—it is an operational imperative engineered into every capital allocation and operating procedure.'}
          </p>
        </div>

        {/* ESG 3-Pillar Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button
            type="button"
            onClick={() => setActivePillar('env')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              activePillar === 'env'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'vi' ? 'Môi Trường (Environmental)' : 'Environmental (E)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePillar('soc')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              activePillar === 'soc'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-sky-400" />
            <span>{lang === 'vi' ? 'Xã Hội (Social)' : 'Social (S)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActivePillar('gov')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              activePillar === 'gov'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>{lang === 'vi' ? 'Quản Trị (Governance)' : 'Governance (G)'}</span>
          </button>
        </div>

        {/* Content based on Active Pillar */}
        <div className="mt-8 bg-[#F8FAFC] p-8 sm:p-12 border border-slate-200 shadow-xs">
          {activePillar === 'env' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">01. KHÍ HẬU & NĂNG LƯỢNG</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Chuyển Đổi Năng Lượng Sạch' : 'Clean Energy Transition'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? '100% các khu công nghiệp và tòa tháp văn phòng của Matrix sử dụng điện mặt trời mái kết hợp hợp đồng mua bán điện trực tiếp (DPPA) từ cụm điện gió ngoài khơi.'
                    : '100% of Matrix industrial parks and office towers are powered by rooftop solar paired with direct power purchase agreements (DPPA) from our offshore wind portfolio.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  3.6M {lang === 'vi' ? 'Tấn CO2 cắt giảm mỗi năm' : 'Tons CO2 mitigated annually'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">02. KINH TẾ TUẦN HOÀN</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Tuần Hoàn Nước & Không Rác Thải' : 'Zero Waste & Water Neutrality'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Toàn bộ 4,200ha khu công nghiệp vận hành hệ thống thu gom và tái tuần hoàn 100% nước thải sản xuất, bảo vệ mạch nước ngầm và hệ sinh thái ven biển.'
                    : 'All 4,200ha of industrial parks operate zero-liquid discharge closed-loop water treatment, recharging groundwater and protecting coastal estuaries.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  98.4% {lang === 'vi' ? 'Tỷ lệ thu hồi và tái sử dụng nước' : 'Industrial water recovery rate'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">03. BẢO TỒN SINH THÁI</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Bảo Vệ Đa Dạng Sinh Học' : 'Biodiversity Protection'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Thiết lập vành đai rừng ngập mặn 500ha tại các dự án cảng biển, áp dụng công nghệ rèm bọt khí chống ồn thủy âm để bảo tồn động vật biển khi thi công móng cọc gió.'
                    : 'Established a 500ha mangrove biosphere buffer along port zones, utilizing subsea bubble curtain acoustics to shield marine mammals during construction.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  500,000+ {lang === 'vi' ? 'Cây xanh bản địa được trồng mới' : 'Native trees planted'}
                </div>
              </div>
            </div>
          )}

          {activePillar === 'soc' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">01. NGUỒN NHÂN LỰC</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Ươm Mầm Tài Năng Bán Dẫn' : 'Semiconductor Talent Foundation'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Quỹ Matrix Foundation tài trợ 2,000 suất học bổng toàn phần cho sinh viên kỹ thuật bán dẫn và trí tuệ nhân tạo tại các trường đại học hàng đầu.'
                    : 'The Matrix Foundation funds 2,000 full engineering scholarships in microelectronics and AI across premier technical institutes.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  $12M USD {lang === 'vi' ? 'Ngân sách đào tạo & phát triển 2026' : 'Annual training budget'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">02. AN TOÀN LAO ĐỘNG</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Chuẩn Mực An Toàn Tuyệt Đối' : 'Zero-Harm Workplace Standard'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Triển khai công nghệ giám sát an toàn bằng camera thị giác máy tính tại 100% công trường xây lắp và cơ sở sản xuất công nghiệp.'
                    : 'Computer vision safety telemetry deployed across 100% of high-voltage subsea installation vessels and industrial production lines.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  0 {lang === 'vi' ? 'Sự cố mất an toàn nghiêm trọng' : 'Severe lost-time incidents'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">03. PHÁT TRIỂN CỘNG ĐỒNG</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Đồng Hành Cùng Địa Phương' : 'Community Inclusive Prosperity'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Đầu tư hệ thống trường mầm non, trạm y tế đa khoa và đường giao thông dân sinh tại các địa phương có dự án năng lượng và khu công nghiệp của Matrix.'
                    : 'Building modern medical clinics, accredited early education centers, and paved transport arteries for host communities across our assets.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  48 {lang === 'vi' ? 'Công trình dân sinh bàn giao' : 'Community facilities delivered'}
                </div>
              </div>
            </div>
          )}

          {activePillar === 'gov' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">01. HỘI ĐỒNG QUẢN TRỊ</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Đa Dạng & Thành Viên Độc Lập' : 'Independent Board Leadership'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Hơn 40% thành viên Hội đồng Quản trị là các chuyên gia độc lập quốc tế có chuyên môn sâu về tài chính toàn cầu và công nghệ cao.'
                    : 'Over 40% of the Board comprises independent international directors with deep expertise in global capital markets and technology.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  42.8% {lang === 'vi' ? 'Tỷ lệ thành viên HĐQT độc lập' : 'Independent board ratio'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">02. KIỂM SOÁT RỦI RO</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Khung Quản Trị Rủi Ro Ba Tuyến' : 'Three Lines of Defense Model'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Ban Kiểm toán nội bộ báo cáo trực tiếp cho Ủy ban Kiểm toán, kiểm tra định kỳ 100% giao dịch trọng yếu của tất cả các công ty thành viên.'
                    : 'Internal Audit unit reports directly to the Audit Committee, rigorously reviewing all material transactions and multi-entity transfer pricing.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  100% {lang === 'vi' ? 'Công ty con được kiểm toán Big4' : 'Subsidiaries audited by Big4'}
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-slate-400">03. CHỐNG THAM NHŨNG</div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {lang === 'vi' ? 'Không Khoan Nhượng & Minh Bạch' : 'Zero-Tolerance Anti-Bribery'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'vi'
                    ? 'Đường dây nóng tiếp nhận tố giác bảo mật (Whistleblowing) do hãng kiểm toán độc lập quốc tế vận hành 24/7.'
                    : 'Third-party whistleblowing hotline operated independently 24/7 with zero retaliation protection for all employees and suppliers.'}
                </p>
                <div className="pt-2 text-xs font-mono font-bold text-slate-900">
                  ISO 37001 {lang === 'vi' ? 'Hệ thống quản lý chống hối lộ' : 'Anti-Bribery Certified'}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Net-Zero 2040 Milestones Bar */}
        <div className="mt-12 bg-slate-900 text-white p-8 sm:p-10 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                {lang === 'vi' ? 'CAM KẾT KHÍ HẬU' : 'CLIMATE PLEDGE'}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mt-1 text-white">
                {lang === 'vi' ? 'Bản Đồ Hành Động Net-Zero 2040' : 'Net-Zero 2040 Roadmap Execution'}
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              {lang === 'vi' ? 'Theo sáng kiến Science Based Targets (SBTi)' : 'Aligned with SBTi targets'}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
              <div className="font-mono font-bold text-lg text-emerald-400 tabular-nums">2026</div>
              <div className="text-sm font-semibold text-white">
                {lang === 'vi' ? 'Điện sạch 100% nội bộ' : '100% Captive Green Power'}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {lang === 'vi' ? 'Vận hành toàn bộ trụ sở và data center bằng năng lượng tái tạo.' : 'Power all headquarters and data centers by renewables.'}
              </div>
            </div>

            <div className="border-l-2 border-emerald-500/80 pl-4 space-y-1">
              <div className="font-mono font-bold text-lg text-emerald-400 tabular-nums">2030</div>
              <div className="text-sm font-semibold text-white">
                {lang === 'vi' ? 'Giảm 60% Carbon Scope 1 & 2' : '-60% Scope 1 & 2 Carbon'}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {lang === 'vi' ? 'Điện khí hóa toàn bộ đội xe và cẩu trục cảng logistics.' : 'Electrify 100% port gantry cranes and logistics fleet.'}
              </div>
            </div>

            <div className="border-l-2 border-emerald-500/60 pl-4 space-y-1">
              <div className="font-mono font-bold text-lg text-emerald-400 tabular-nums">2035</div>
              <div className="text-sm font-semibold text-white">
                {lang === 'vi' ? 'Net-Zero Scope 1 & 2' : 'Net-Zero Scope 1 & 2'}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {lang === 'vi' ? 'Triệt tiêu hoàn toàn phát thải trực tiếp từ hoạt động sản xuất.' : 'Zero direct operational emissions across all subsidiaries.'}
              </div>
            </div>

            <div className="border-l-2 border-emerald-400 pl-4 space-y-1">
              <div className="font-mono font-bold text-lg text-emerald-300 tabular-nums">2040</div>
              <div className="text-sm font-semibold text-white">
                {lang === 'vi' ? 'Net-Zero Toàn Diện Scope 3' : 'Comprehensive Scope 3 Net-Zero'}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {lang === 'vi' ? 'Toàn bộ chuỗi cung ứng và đối tác đạt trung hòa carbon.' : 'Entire value chain and suppliers achieve carbon neutrality.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
