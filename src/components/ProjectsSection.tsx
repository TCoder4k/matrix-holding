import { useState } from 'react';
import { ArrowRight, X, ExternalLink, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import officeImg from '../assets/images/project_coworking_office_1790781613528.jpg';
import laptopImg from '../assets/images/project_laptop_dashboard_1790781636617.jpg';
import glassPanelsImg from '../assets/images/project_glass_panels_1790781658542.jpg';
import businessServiceImg from '../assets/images/project_business_service_1790781679620.jpg';
import speakerImg from '../assets/images/project_speaker_training_1790781697506.jpg';
import communityGalaImg from '../assets/images/project_community_gala_1790781723048.jpg';

export interface ProjectIdea {
  id: string;
  categoryKey: string;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  details?: {
    scope: string;
    target: string;
    highlights: string[];
    timeline: string;
  };
}

interface ProjectsSectionProps {
  onOpenContact?: (topic?: string) => void;
}

export default function ProjectsSection({ onOpenContact }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIdea, setSelectedIdea] = useState<ProjectIdea | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả lĩnh vực' },
    { id: 'realestate', label: 'Bất động sản' },
    { id: 'tech', label: 'Công nghệ' },
    { id: 'finance', label: 'Tài chính – Đầu tư' },
    { id: 'commerce', label: 'Thương mại – Dịch vụ' },
    { id: 'education', label: 'Giáo dục' },
    { id: 'other', label: 'Khác' },
  ];

  const projectIdeas: ProjectIdea[] = [
    {
      id: 'workspace-connect',
      categoryKey: 'realestate',
      categoryLabel: 'BẤT ĐỘNG SẢN',
      title: 'Không gian làm việc kết nối',
      description: 'Ý tưởng không gian làm việc linh hoạt, hỗ trợ kết nối và hợp tác.',
      image: officeImg,
      details: {
        scope: 'Mô hình Hub làm việc đa tiện ích tích hợp phòng họp thông minh, lounge kết nối doanh nghiệp và studio sáng tạo.',
        target: 'Các doanh nghiệp thành viên, startup tiềm năng và đối tác chiến lược trong hệ sinh thái MATRIX HOLDING.',
        highlights: [
          'Vị trí đắc địa tại các đô thị trọng điểm',
          'Hệ sinh thái dịch vụ vận hành đồng bộ',
          'Không gian sự kiện kết nối định kỳ',
        ],
        timeline: 'Giai đoạn 1: Khảo sát địa điểm & phát triển mô hình điểm.',
      },
    },
    {
      id: 'enterprise-platform',
      categoryKey: 'tech',
      categoryLabel: 'CÔNG NGHỆ',
      title: 'Nền tảng quản trị doanh nghiệp',
      description: 'Ý tưởng nền tảng số hỗ trợ quản lý công việc và phối hợp nguồn lực.',
      image: laptopImg,
      details: {
        scope: 'Giải pháp SaaS all-in-one quản trị vận hành, quy trình dự án, tài nguyên và đo lường chỉ số tăng trưởng.',
        target: 'Hội đồng quản trị, ban điều hành các công ty thành viên và mạng lưới doanh nghiệp đối tác.',
        highlights: [
          'Báo cáo trực quan thời gian thực (Real-time Analytics)',
          'Tích hợp luồng phê duyệt & tài liệu số hóa bảo mật',
          'Kiến trúc Cloud sẵn sàng mở rộng quy mô lớn',
        ],
        timeline: 'Giai đoạn thử nghiệm nội bộ & hoàn thiện tính năng chuyên sâu.',
      },
    },
    {
      id: 'investment-portal',
      categoryKey: 'finance',
      categoryLabel: 'TÀI CHÍNH – ĐẦU TƯ',
      title: 'Cổng kết nối đầu tư',
      description: 'Ý tưởng kết nối doanh nghiệp với đối tác và nguồn lực đầu tư.',
      image: glassPanelsImg,
      details: {
        scope: 'Nền tảng matching cơ hội đầu tư, thẩm định dự án và cấu trúc vốn chiến lược cho các dự án tiềm năng.',
        target: 'Quỹ đầu tư mạo hiểm, nhà đầu tư thiên thần và các dự án tăng trưởng cao.',
        highlights: [
          'Quy trình thẩm định minh bạch chuẩn quốc tế',
          'Mạng lưới đối tác tài chính đa quốc gia',
          'Đồng hành tư vấn pháp lý & chiến lược vốn',
        ],
        timeline: 'Đang xây dựng tiêu chí sàng lọc và cấu trúc danh mục đầu tư.',
      },
    },
    {
      id: 'business-network',
      categoryKey: 'commerce',
      categoryLabel: 'THƯƠNG MẠI – DỊCH VỤ',
      title: 'Mạng lưới dịch vụ doanh nghiệp',
      description: 'Ý tưởng kết nối nhu cầu doanh nghiệp với các đơn vị cung cấp dịch vụ.',
      image: businessServiceImg,
      details: {
        scope: 'Sàn dịch vụ B2B chia sẻ tiện ích chuyên nghiệp: truyền thông, pháp lý, nhân sự, kiểm toán và logistics.',
        target: 'Các doanh nghiệp SMEs và tập đoàn đối tác trong chuỗi cung ứng liên kết.',
        highlights: [
          'Chất lượng dịch vụ được cam kết bởi các đơn vị hàng đầu',
          'Chính sách ưu đãi độc quyền dành cho thành viên',
          'Tối ưu hóa chi phí vận hành từ 20% - 35%',
        ],
        timeline: 'Giai đoạn thiết lập liên minh các nhà cung cấp dịch vụ tiêu chuẩn.',
      },
    },
    {
      id: 'entrepreneur-program',
      categoryKey: 'education',
      categoryLabel: 'GIÁO DỤC',
      title: 'Chương trình phát triển doanh nhân',
      description: 'Ý tưởng chia sẻ kiến thức quản trị và kỹ năng xây dựng doanh nghiệp.',
      image: speakerImg,
      details: {
        scope: 'Học viện đào tạo lãnh đạo tương lai, chuỗi workshop thực chiến cùng các chuyên gia và chủ tịch tập đoàn.',
        target: 'Nhà sáng lập trẻ, thế hệ kế nghiệp và nhân sự quản lý cấp cao.',
        highlights: [
          'Giảng viên là các chuyên gia điều hành dày dạn kinh nghiệm',
          'Case study thực tế từ chính hệ sinh thái đa ngành',
          'Cộng đồng mentor đồng hành 1:1 dài hạn',
        ],
        timeline: 'Đang hoàn thiện giáo trình khung và tuyển chọn cố vấn chuyên môn.',
      },
    },
    {
      id: 'cross-industry-community',
      categoryKey: 'other',
      categoryLabel: 'KHÁC',
      title: 'Cộng đồng hợp tác liên ngành',
      description: 'Ý tưởng kết nối cộng đồng, chia sẻ kinh nghiệm và cơ hội hợp tác.',
      image: communityGalaImg,
      details: {
        scope: 'Mạng lưới kết nối mở giữa các hiệp hội, câu lạc bộ doanh nhân và đại diện đa lĩnh vực kinh tế.',
        target: 'Cộng đồng doanh nhân, chuyên gia, viện nghiên cứu và đối tác toàn cầu.',
        highlights: [
          'Diễn đàn bàn tròn kinh tế định kỳ',
          'Không gian chia sẻ cơ hội hợp tác không biên giới',
          'Chương trình hỗ trợ sáng kiến vì cộng đồng',
        ],
        timeline: 'Khởi động chuỗi tọa đàm kết nối và giao lưu kinh doanh thường niên.',
      },
    },
  ];

  const filteredIdeas =
    activeCategory === 'all'
      ? projectIdeas
      : projectIdeas.filter((item) => item.categoryKey === activeCategory);

  return (
    <section id="du-an" className="py-20 sm:py-24 bg-[#061527] text-white">
      <div className="container-page">
        {/* ================================================================= */}
        {/* Top Header matching Reference Mockup                              */}
        {/* ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#00aef0]">
              DỰ ÁN
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Những lĩnh vực chúng tôi đang phát triển
            </h2>
          </div>

          <a
            href="#he-sinh-thai"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#00aef0] transition-colors whitespace-nowrap"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ================================================================= */}
        {/* Filter Pills matching Reference Mockup                            */}
        {/* ================================================================= */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00aef0] text-[#041628] shadow-[0_0_15px_rgba(0,174,240,0.4)]'
                    : 'bg-[#0c233c] text-slate-200 hover:text-white hover:bg-[#122e4d] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Subtitle count indicator matching Reference Mockup */}
        <div className="mt-4 text-xs sm:text-sm text-slate-400 font-normal">
          Dữ liệu minh họa · {filteredIdeas.length} ý tưởng dự án
        </div>

        {/* ================================================================= */}
        {/* 6 Project Idea Cards Grid - 100% matching Reference Mockup        */}
        {/* ================================================================= */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              onClick={() => setSelectedIdea(idea)}
              className="rounded-2xl overflow-hidden bg-[#0c233c] border border-white/10 hover:border-[#00aef0]/50 transition-all duration-300 group flex flex-col shadow-lg hover:shadow-2xl cursor-pointer hover:-translate-y-1"
            >
              {/* Card Image Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c233c]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-3">
                <div className="space-y-2">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    {idea.categoryLabel}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00aef0] transition-colors leading-snug">
                    {idea.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {idea.description}
                  </p>
                </div>

                {/* Bottom Link with Arrow */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00aef0] group-hover:text-[#38bdf8] transition-colors">
                    <span>Xem ý tưởng</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================================================================= */}
      {/* Project Idea Detail Modal                                         */}
      {/* ================================================================= */}
      {selectedIdea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#081c31] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white">
            {/* Modal Header Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <img
                src={selectedIdea.image}
                alt={selectedIdea.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c31] via-[#081c31]/40 to-transparent" />
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedIdea(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 transition-all cursor-pointer"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00aef0] text-[#081c31]">
                  {selectedIdea.categoryLabel}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedIdea.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedIdea.description}
                </p>
              </div>

              {selectedIdea.details && (
                <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00aef0]" />
                      <span>Quy mô & Mô hình dự kiến</span>
                    </h4>
                    <p className="text-slate-300 mt-1 leading-relaxed">
                      {selectedIdea.details.scope}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#00aef0]" />
                      <span>Điểm nổi bật</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {selectedIdea.details.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#00aef0] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-medium">Tiến độ phát triển: </span>
                    <span className="text-xs text-[#00aef0] font-semibold">{selectedIdea.details.timeline}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedIdea(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const topic = `Quan tâm dự án: ${selectedIdea.title}`;
                    setSelectedIdea(null);
                    onOpenContact?.(topic);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#00aef0] hover:bg-[#38bdf8] text-[#081c31] text-sm font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Hợp tác dự án này</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
