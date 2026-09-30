import { useState } from 'react';
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Users,
  BookOpen,
  Settings,
  Share2,
  Scale,
  BarChart3,
  Cog,
  Briefcase,
  TrendingUp,
  Megaphone,
  Box,
  FileText,
  Mail,
  MessageSquare,
  ClipboardCheck,
  Info,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { DepartmentKey, sampleJobs, JobPosition } from '../data/careersData';

// High-fidelity generated visual assets
import careersHeroImg from '../assets/images/careers_hero_team_1790698445848.jpg';
import careersMentorImg from '../assets/images/careers_why_mentor_1790698460195.jpg';
import careersGlassboardImg from '../assets/images/careers_why_glassboard_1790698474193.jpg';
import careersTeamImg from '../assets/images/careers_why_multidisciplinary_1790698486749.jpg';
import careersBottomImg from '../assets/images/careers_bottom_workspace_1790698498654.jpg';

interface CareersPageProps {
  onOpenApplyModal: (dept?: DepartmentKey, jobTitle?: string) => void;
  onOpenContact: (topic?: string) => void;
}

export default function CareersPage({ onOpenApplyModal, onOpenContact }: CareersPageProps) {
  const [activeDept, setActiveDept] = useState<DepartmentKey>('Pháp lý');
  const [selectedJobDetail, setSelectedJobDetail] = useState<JobPosition | null>(null);

  const departments: { key: DepartmentKey; label: string; icon: React.ReactNode }[] = [
    { key: 'Pháp lý', label: 'Pháp lý', icon: <Scale className="w-4 h-4" /> },
    { key: 'Tài chính', label: 'Tài chính', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'Vận hành', label: 'Vận hành', icon: <Cog className="w-4 h-4" /> },
    { key: 'Nhân sự', label: 'Nhân sự', icon: <Users className="w-4 h-4" /> },
    { key: 'Kinh doanh', label: 'Kinh doanh', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'Truyền thông', label: 'Truyền thông', icon: <Megaphone className="w-4 h-4" /> },
    { key: 'Công nghệ', label: 'Công nghệ', icon: <Box className="w-4 h-4" /> },
  ];

  const currentDeptJobs = sampleJobs.filter((j) => j.department === activeDept);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. HERO SECTION - Matching Mockup 100% */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center bg-[#081c31] overflow-hidden text-white pt-24 pb-12 sm:pb-16">
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs sm:text-sm font-bold tracking-[0.24em] text-slate-300 uppercase">
                GIA NHẬP MATRIX HOLDING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.14]">
                Cùng kiến tạo
                <br />
                những giá trị
                <br />
                <span className="text-[#27d9ef] drop-shadow-[0_0_25px_rgba(39,217,239,0.35)]">
                  bền vững
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Đồng hành cùng Matrix Holding trên hành trình xây dựng và phát triển hệ sinh thái
                kinh doanh đa ngành.
              </p>

              {/* Two CTA Buttons matching Mockup */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('nhom-chuyen-mon')}
                  className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-md inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.35)] hover:scale-105 cursor-pointer"
                >
                  <span>Khám phá cơ hội</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('tai-sao-dong-hanh')}
                  className="border border-white/30 hover:border-[#27d9ef] text-white hover:text-[#27d9ef] font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-md transition-all cursor-pointer bg-white/5 backdrop-blur-xs"
                >
                  <span>Tìm hiểu môi trường làm việc</span>
                </button>
              </div>
            </div>

            {/* Right Hero Team Photography matching Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={careersHeroImg}
                  alt="Đội ngũ nhân sự Matrix Holding"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c31]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE CULTURE VALUES BAR - Matching Mockup 100% */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* 1. SÁNG TẠO */}
            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pr-6">
              <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] shadow-2xs">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase">
                  SÁNG TẠO
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Luôn tìm kiếm những cách tiếp cận mới để tạo ra giá trị khác biệt.
                </p>
              </div>
            </div>

            {/* 2. MINH BẠCH */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-6">
              <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase">
                  MINH BẠCH
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Đề cao sự minh bạch, trách nhiệm trong mọi hoạt động.
                </p>
              </div>
            </div>

            {/* 3. ĐỒNG HÀNH DÀI HẠN */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#e0f7fa] flex items-center justify-center shrink-0 text-[#0891b2] shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase">
                  ĐỒNG HÀNH DÀI HẠN
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Cùng phát triển vì những giá trị bền vững cho con người, cộng đồng và xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TẠI SAO ĐỒNG HÀNH CÙNG CHÚNG TÔI? - Matching Mockup 100% */}
      <section id="tai-sao-dong-hanh" className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Sticky/Anchor Info */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600">
                TẠI SAO
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-[1.18]">
                đồng hành cùng
                <br />
                chúng tôi?
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Mỗi cá nhân tại MATRIX HOLDING đều có cơ hội được học hỏi, chủ động tạo giá trị và
                phối hợp cùng nhiều lĩnh vực khác nhau trong hệ sinh thái.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection('nhom-chuyen-mon')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#27d9ef] text-[#0284c7] font-semibold text-sm hover:bg-[#27d9ef]/10 hover:border-[#0284c7] transition-all cursor-pointer"
                >
                  <span>Khám phá cơ hội</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </button>
              </div>
            </div>

            {/* Right Staggered 3 Feature Pairs matching Mockup */}
            <div className="lg:col-span-8 space-y-10">
              {/* Pair 1: Image Left, Card Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 group">
                  <img
                    src={careersMentorImg}
                    alt="Cùng học hỏi và phát triển"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-7 sm:p-8 bg-[#f8fafc] rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shadow-2xs">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Cùng học hỏi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Tiếp cận đa dạng lĩnh vực, mở rộng góc nhìn và không ngừng phát triển bản thân.
                  </p>
                </div>
              </div>

              {/* Pair 2: Card Left, Image Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="p-7 sm:p-8 bg-[#f8fafc] rounded-2xl border border-slate-200/80 space-y-3 order-2 sm:order-1">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shadow-2xs">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Chủ động tạo giá trị
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Được trao cơ hội đóng góp ý tưởng, chủ động triển khai và tạo ra những giá trị
                    thiết thực cho doanh nghiệp và cộng đồng.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 group order-1 sm:order-2">
                  <img
                    src={careersGlassboardImg}
                    alt="Chủ động tạo giá trị"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Pair 3: Image Left, Card Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 group">
                  <img
                    src={careersTeamImg}
                    alt="Phối hợp đa lĩnh vực"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-7 sm:p-8 bg-[#f8fafc] rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f7fa] text-[#0891b2] flex items-center justify-center shadow-2xs">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Phối hợp đa lĩnh vực
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Làm việc cùng các chuyên gia ở nhiều ngành nghề, tận dụng thế mạnh hệ sinh thái
                    để tạo ra những giải pháp toàn diện.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KHÁM PHÁ NHÓM CHUYÊN MÔN - Matching Mockup 100% */}
      <section id="nhom-chuyen-mon" className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container-page">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600 mb-2">
              KHÁM PHÁ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              nhóm chuyên môn
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Chọn lĩnh vực phù hợp với định hướng của bạn
            </p>
          </div>

          {/* Department Segmented Filter Tabs matching Mockup */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            {departments.map((dept) => {
              const isActive = activeDept === dept.key;
              return (
                <button
                  key={dept.key}
                  type="button"
                  onClick={() => setActiveDept(dept.key)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#27d9ef] text-[#081c31] font-bold shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={isActive ? 'text-[#081c31]' : 'text-[#0891b2]'}>
                    {dept.icon}
                  </span>
                  <span>{dept.label}</span>
                </button>
              );
            })}
          </div>

          {/* Central Vacancy Announcement Box matching Mockup */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-xs mb-8">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-5">
              <FileText className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Vị trí đang tuyển sẽ được cập nhật tại đây
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-6 font-normal">
              Chúng tôi luôn chào đón những ứng viên phù hợp gia nhập MATRIX HOLDING.
              <br />
              Vui lòng gửi hồ sơ quan tâm để chúng tôi liên hệ khi có vị trí phù hợp.
            </p>

            <div>
              <button
                type="button"
                onClick={() => onOpenApplyModal(activeDept)}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(39,217,239,0.3)] hover:scale-105 cursor-pointer"
              >
                <span>Gửi hồ sơ quan tâm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Open Position Card for the selected Department */}
          {currentDeptJobs.length > 0 && (
            <div className="max-w-3xl mx-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                <span>VỊ TRÍ TIÊU BIỂU NHÓM {activeDept.toUpperCase()}</span>
                <span className="text-[#0284c7] font-semibold">{currentDeptJobs.length} vị trí mở</span>
              </div>

              <div className="space-y-4">
                {currentDeptJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 bg-white border border-slate-200 rounded-xl hover:border-[#27d9ef] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0891b2] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full uppercase">
                          {job.department}
                        </span>
                        <span className="text-xs text-slate-500">Hạn: {job.deadline}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedJobDetail(job)}
                        className="px-4 py-2 border border-slate-200 hover:border-slate-400 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Chi tiết
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenApplyModal(job.department, job.title)}
                        className="px-4 py-2 bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Ứng tuyển</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. HÀNH TRÌNH ỨNG TUYỂN - Matching Mockup 100% */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="container-page">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-600 mb-2">
                HÀNH TRÌNH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                ứng tuyển
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 max-w-md">
              Quy trình ứng tuyển được thiết kế đơn giản và minh bạch, để bạn có thể dễ dàng chia
              sẻ thông tin và kết nối với chúng tôi.
            </div>
          </div>

          {/* 3 Step Flow with Circles & Connectors matching Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
            {/* Step 01: Gửi hồ sơ */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#27d9ef] bg-[#e0f7fa] flex items-center justify-center shrink-0 font-bold text-sm text-[#081c31]">
                01
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0891b2]" />
                  <h3 className="font-bold text-base text-slate-900">Gửi hồ sơ</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Chia sẻ thông tin và hồ sơ quan tâm qua biểu mẫu.
                </p>
              </div>
            </div>

            {/* Step 02: Trao đổi */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#27d9ef] bg-[#e0f7fa] flex items-center justify-center shrink-0 font-bold text-sm text-[#081c31]">
                02
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#0891b2]" />
                  <h3 className="font-bold text-base text-slate-900">Trao đổi</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Chúng tôi sẽ liên hệ để trao đổi thêm về định hướng và cơ hội phù hợp.
                </p>
              </div>
            </div>

            {/* Step 03: Phản hồi */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#27d9ef] bg-[#e0f7fa] flex items-center justify-center shrink-0 font-bold text-sm text-[#081c31]">
                03
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-4 h-4 text-[#0891b2]" />
                  <h3 className="font-bold text-base text-slate-900">Phản hồi</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Bạn sẽ nhận được phản hồi sau quá trình trao đổi.
                </p>
              </div>
            </div>
          </div>

          {/* Footnote pill matching Mockup */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Quy trình trên mang tính chất minh họa và có thể thay đổi tùy theo từng vị trí.</span>
          </div>
        </div>
      </section>

      {/* 6. SẴN SÀNG ĐỒNG HÀNH? BOTTOM CTA BANNER - Matching Mockup 100% */}
      <section className="relative py-20 lg:py-24 bg-[#081c31] text-white overflow-hidden">
        {/* Workspace dusk photography background */}
        <div className="absolute inset-0 z-0">
          <img
            src={careersBottomImg}
            alt="Không gian làm việc Matrix Holding"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c31] via-[#081c31]/90 to-[#081c31]/75" />
        </div>

        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
                Sẵn sàng{' '}
                <span className="text-[#27d9ef] drop-shadow-[0_0_20px_rgba(39,217,239,0.4)]">
                  đồng hành?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Hãy gửi thông tin cho chúng tôi.
                <br />
                MATRIX HOLDING luôn chào đón những con người có chung khát vọng kiến tạo giá trị bền
                vững.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onOpenApplyModal()}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-sm sm:text-base px-7 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.35)] hover:shadow-[0_0_30px_rgba(39,217,239,0.6)] hover:scale-105 cursor-pointer"
              >
                <span>Liên hệ tuyển dụng</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JOB DETAIL MODAL */}
      {selectedJobDetail && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedJobDetail(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-slate-900 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-xs font-bold text-[#0891b2] bg-[#e0f7fa] px-2.5 py-0.5 rounded-full uppercase">
                  {selectedJobDetail.department}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  {selectedJobDetail.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                  <span>Địa điểm: {selectedJobDetail.location}</span>
                  <span>·</span>
                  <span>Kinh nghiệm: {selectedJobDetail.experience}</span>
                  <span>·</span>
                  <span>Hạn nộp: {selectedJobDetail.deadline}</span>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-slate-700 mb-6 max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Mô tả công việc:</h4>
                <p className="text-slate-600 leading-relaxed">{selectedJobDetail.summary}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Yêu cầu ứng viên:</h4>
                <div className="space-y-1.5">
                  {selectedJobDetail.requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Quyền lợi & đãi ngộ:</h4>
                <div className="space-y-1.5">
                  {selectedJobDetail.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedJobDetail(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  const job = selectedJobDetail;
                  setSelectedJobDetail(null);
                  onOpenApplyModal(job.department, job.title);
                }}
                className="bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-xs"
              >
                <span>Ứng tuyển vị trí này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
