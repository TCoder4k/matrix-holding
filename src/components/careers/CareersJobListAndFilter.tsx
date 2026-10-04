import React, { useState } from 'react';
import {
  MapPin,
  Briefcase,
  Bookmark,
  ArrowRight,
  Filter,
  X,
  RotateCcw,
  Building2,
  ChevronDown
} from 'lucide-react';
import { JobItem, CareerFilterState } from './types';
import { CareersJobDetailPanel } from './CareersJobDetailPanel';

interface CareersJobListAndFilterProps {
  keyword: string;
}

export const CareersJobListAndFilter: React.FC<CareersJobListAndFilterProps> = ({ keyword }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tài chính'); // Mặc định Tài chính như ảnh 1
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('Hà Nội'); // Mặc định Hà Nội như ảnh 1
  const [selectedWorkType, setSelectedWorkType] = useState<string>('Toàn thời gian'); // Mặc định Toàn thời gian như ảnh 1
  const [sortBy, setSortBy] = useState<'newest' | 'salary'>('newest');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [visibleLimit, setVisibleLimit] = useState<number>(4);

  const categories = [
    'Tất cả',
    'Pháp lý',
    'Tài chính',
    'Vận hành',
    'Nhân sự',
    'Kinh doanh',
    'Truyền thông',
    'Công nghệ',
  ];

  const companies = [
    { key: 'all', label: 'Tất cả doanh nghiệp' },
    { key: 'Matrix Accounting', label: 'Matrix Accounting' },
    { key: 'Matrix Finance', label: 'Matrix Finance' },
    { key: 'Matrix Legal', label: 'Matrix Legal' },
    { key: 'Matrix Research', label: 'Matrix Research' },
    { key: 'Matrix Holding', label: 'Matrix Holding' },
  ];

  const locations = [
    { key: 'all', label: 'Tất cả địa điểm' },
    { key: 'Hà Nội', label: 'Hà Nội' },
    { key: 'TP. Hồ Chí Minh', label: 'TP. Hồ Chí Minh' },
    { key: 'Đà Nẵng', label: 'Đà Nẵng' },
  ];

  const workTypes = [
    { key: 'all', label: 'Tất cả hình thức' },
    { key: 'Toàn thời gian', label: 'Toàn thời gian' },
    { key: 'Bán thời gian', label: 'Bán thời gian' },
    { key: 'Linh hoạt', label: 'Linh hoạt' },
  ];

  const allJobs: JobItem[] = [
    {
      id: 'job-1',
      num: '01',
      title: 'Chuyên viên Kế toán Tổng hợp',
      company: 'Matrix Accounting',
      companyKey: 'Matrix Accounting',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      category: 'Tài chính',
      salary: '15 - 22 triệu',
      date: '28/09/2026',
      logoCode: 'M',
      highlightText: 'Thực hiện nghiệp vụ kế toán và hỗ trợ lập báo cáo tài chính định kỳ.',
      responsibilities: [
        'Hạch toán các nghiệp vụ kinh tế phát sinh, lập phiếu thu chi và quản lý chứng từ gốc.',
        'Kiểm tra tính hợp lý, hợp lệ của các khoản chi phí và hóa đơn GTGT.',
        'Hỗ trợ Kế toán trưởng lập báo cáo tài chính tháng/quý/năm và quyết toán thuế.',
      ],
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Kế toán - Kiểm toán hoặc Tài chính.',
        'Tối thiểu 2 năm kinh nghiệm ở vị trí tương đương.',
        'Thành thạo phần mềm kế toán MISA / Bravo và Excel nâng cao.',
      ],
      benefits: [
        'Lương thưởng cạnh tranh và tháng lương 13 + thưởng hiệu quả kinh doanh.',
        'Bảo hiểm sức khỏe cao cấp và kiểm tra y tế định kỳ.',
        'Môi trường làm việc năng động, lộ trình thăng tiến minh bạch.',
      ],
    },
    {
      id: 'job-2',
      num: '02',
      title: 'Chuyên viên Phân tích Tài chính',
      company: 'Matrix Finance',
      companyKey: 'Matrix Finance',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      category: 'Tài chính',
      salary: '20 - 35 triệu',
      date: '26/09/2026',
      logoCode: 'M',
      highlightText: 'Tìm hiểu mô tả và yêu cầu của vị trí.',
      responsibilities: [
        'Xây dựng mô hình tài chính và thẩm định tính khả thi của các dự án đầu tư trong hệ sinh thái.',
        'Phân tích báo cáo tài chính, dòng tiền và cấu trúc vốn của các doanh nghiệp thành viên.',
        'Chuẩn bị tài liệu thuyết trình đầu tư cho Hội đồng Quản trị và các đối tác tài chính quốc tế.',
      ],
      requirements: [
        'Tốt nghiệp Đại học hoặc Thạc sĩ chuyên ngành Tài chính, Kinh tế, CFA Level 1 trở lên là lợi thế.',
        'Tối thiểu 3 năm kinh nghiệm trong lĩnh vực thẩm định đầu tư, M&A hoặc kiểm toán Big 4.',
        'Khả năng tư duy logic sắc bén, kỹ năng xây dựng mô hình Excel phức tạp.',
      ],
      benefits: [
        'Mức đãi ngộ vượt trội tương xứng với năng lực chuyên môn.',
        'Cơ hội tham gia trực tiếp vào các thương vụ đầu tư quy mô lớn.',
        'Chính sách đào tạo chuyên sâu và tài trợ các chứng chỉ quốc tế.',
      ],
    },
    {
      id: 'job-3',
      num: '03',
      title: 'Chuyên viên Pháp lý',
      company: 'Matrix Legal',
      companyKey: 'Matrix Legal',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      category: 'Pháp lý',
      salary: '18 - 28 triệu',
      date: '24/09/2026',
      logoCode: 'M',
      highlightText: 'Thẩm định hồ sơ pháp lý doanh nghiệp và quản trị rủi ro hợp đồng.',
      responsibilities: [
        'Soạn thảo, rà soát và đàm phán các hợp đồng kinh tế, thỏa thuận hợp tác liên minh.',
        'Tư vấn pháp lý về cơ cấu tổ chức, thủ tục doanh nghiệp và sở hữu trí tuệ.',
        'Cập nhật các thay đổi pháp luật và đề xuất phương án thích ứng kịp thời cho hệ sinh thái.',
      ],
      requirements: [
        'Tốt nghiệp Cử nhân Luật (Đại học Luật Hà Nội / Khoa Luật ĐHQG).',
        'Có chứng chỉ hành nghề luật sư là một lợi thế lớn.',
        'Tối thiểu 3 năm kinh nghiệm tư vấn pháp luật doanh nghiệp.',
      ],
      benefits: [
        'Môi trường thực hành pháp lý chuyên nghiệp, chuẩn mực quốc tế.',
        'Phụ cấp công tác và chế độ bảo hiểm toàn diện.',
      ],
    },
    {
      id: 'job-4',
      num: '04',
      title: 'Chuyên viên Nghiên cứu',
      company: 'Matrix Research',
      companyKey: 'Matrix Research',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      category: 'Chiến lược',
      salary: '16 - 25 triệu',
      date: '20/09/2026',
      logoCode: 'M',
      highlightText: 'Nghiên cứu thị trường ngành, phân tích đối thủ cạnh tranh và xu hướng công nghệ.',
      responsibilities: [
        'Thu thập, xử lý dữ liệu và xây dựng báo cáo phân tích ngành chuyên sâu.',
        'Phối hợp cùng Ban Chiến lược đề xuất các hướng đi mới cho các đơn vị thành viên.',
      ],
      requirements: [
        'Tốt nghiệp Đại học chuyên ngành Kinh tế, Thống kê hoặc Khoa học Dữ liệu.',
        'Khả năng nghiên cứu độc lập và viết báo cáo phân tích sắc sảo.',
      ],
      benefits: [
        'Làm việc cùng các chuyên gia đầu ngành trong và ngoài nước.',
        'Trang thiết bị làm việc hiện đại, hỗ trợ công cụ phân tích dữ liệu chuyên nghiệp.',
      ],
    },
    {
      id: 'job-5',
      num: '05',
      title: 'Trưởng phòng Phát triển Kinh doanh',
      company: 'Matrix Holding',
      companyKey: 'Matrix Holding',
      location: 'Hà Nội',
      type: 'Toàn thời gian',
      category: 'Kinh doanh',
      salary: '35 - 50 triệu',
      date: '18/09/2026',
      logoCode: 'M',
      highlightText: 'Mở rộng mạng lưới đối tác chiến lược và liên minh B2B.',
      responsibilities: [
        'Lập kế hoạch và trực tiếp kết nối với lãnh đạo các tập đoàn đối tác.',
        'Thiết kế gói giải pháp hợp tác đa ngành thuộc hệ sinh thái Matrix.',
      ],
      requirements: [
        'Tối thiểu 5 năm kinh nghiệm quản lý kinh doanh B2B quy mô lớn.',
        'Kỹ năng đàm phán xuất sắc và tư duy kết nối nguồn lực nhạy bén.',
      ],
      benefits: [
        'Thưởng hoa hồng theo doanh số dự án không giới hạn.',
        'Chính sách cổ phần ESOP thưởng định kỳ cho vị trí quản lý chủ chốt.',
      ],
    },
  ];

  // Logic lọc dữ liệu
  const filteredJobs = allJobs.filter((job) => {
    // Lọc theo keyword
    if (keyword) {
      const matchKeyword =
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.category.toLowerCase().includes(keyword.toLowerCase());
      if (!matchKeyword) return false;
    }
    // Lọc theo ngành / category
    if (activeCategory !== 'Tất cả' && job.category !== activeCategory) {
      return false;
    }
    // Lọc theo doanh nghiệp
    if (selectedCompany !== 'all' && job.company !== selectedCompany) {
      return false;
    }
    // Lọc theo địa điểm
    if (selectedLocation !== 'all' && job.location !== selectedLocation) {
      return false;
    }
    // Lọc theo hình thức
    if (selectedWorkType !== 'all' && job.type !== selectedWorkType) {
      return false;
    }
    return true;
  });

  const handleToggleBookmark = (id: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (savedJobs.includes(id)) {
      setSavedJobs((prev) => prev.filter((item) => item !== id));
      setToastMessage(`Đã bỏ lưu vị trí: ${title}`);
    } else {
      setSavedJobs((prev) => [...prev, id]);
      setToastMessage(`Đã lưu vị trí: ${title}`);
    }
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleClearFilters = () => {
    setActiveCategory('Tất cả');
    setSelectedCompany('all');
    setSelectedLocation('all');
    setSelectedWorkType('all');
  };

  return (
    <section id="careers-results-section" className="w-full py-12 sm:py-16 bg-[#f8fafc] text-[#0A192F] relative select-none">
      
      {/* TOAST THÔNG BÁO LƯU BÀI */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#071629] text-white px-5 py-3 rounded-2xl shadow-2xl border border-sky-400 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Bookmark className="w-4 h-4 text-[#00c2ff] fill-[#00c2ff]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* THANH DANH MỤC NGÀNH NGHỀ PILLS (Khớp ảnh 1) */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-6 scrollbar-none mb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap active:scale-98 ${
                  isActive
                    ? 'bg-[#091b2e] text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* BỐ CỤC CHÍNH: BỘ LỌC BÊN TRÁI & DANH SÁCH / SPLIT DETAIL BÊN PHẢI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CỘT BỘ LỌC BÊN TRÁI (3 CỘT TRÊN MÀN HÌNH LỚN) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-24">
            
            {/* Header bộ lọc */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2 font-black text-sm text-[#0d1d2f]">
                <Filter className="w-4 h-4 text-[#00c2ff]" />
                <span>BỘ LỌC</span>
              </div>

              <button
                type="button"
                onClick={handleClearFilters}
                className="text-xs font-semibold text-[#00c2ff] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Xóa bộ lọc</span>
              </button>
            </div>

            {/* Select 1: Doanh nghiệp */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Doanh nghiệp
              </label>
              <div className="relative">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:border-[#00c2ff] pr-8 cursor-pointer"
                >
                  {companies.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Select 2: Địa điểm */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Địa điểm
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:border-[#00c2ff] pr-8 cursor-pointer"
                >
                  {locations.map((loc) => (
                    <option key={loc.key} value={loc.key}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Select 3: Hình thức làm việc */}
            <div className="mb-6">
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Hình thức làm việc
              </label>
              <div className="relative">
                <select
                  value={selectedWorkType}
                  onChange={(e) => setSelectedWorkType(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:border-[#00c2ff] pr-8 cursor-pointer"
                >
                  {workTypes.map((wt) => (
                    <option key={wt.key} value={wt.key}>
                      {wt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Nút Xóa bộ lọc bo tròn viền */}
            <button
              type="button"
              onClick={handleClearFilters}
              className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-[#00c2ff] hover:text-[#00c2ff] text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Xóa bộ lọc
            </button>

          </div>

          {/* CỘT PHẢI (9 CỘT TRÊN MÀN HÌNH LỚN HOẶC CHIA ĐÔI KHI MỞ CHI TIẾT) */}
          <div className="lg:col-span-9 flex flex-col">
            
            {/* THANH CHIPS BỘ LỌC ĐANG CHỌN & TIP BANNER (Khớp ảnh 1) */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                {activeCategory !== 'Tất cả' && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] font-bold text-xs inline-flex items-center gap-1.5 border border-sky-200 animate-in zoom-in-95 duration-200">
                    <span>{activeCategory}</span>
                    <X
                      className="w-3.5 h-3.5 cursor-pointer hover:text-red-500"
                      onClick={() => setActiveCategory('Tất cả')}
                    />
                  </span>
                )}

                {selectedLocation !== 'all' && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] font-bold text-xs inline-flex items-center gap-1.5 border border-sky-200 animate-in zoom-in-95 duration-200">
                    <span>{selectedLocation}</span>
                    <X
                      className="w-3.5 h-3.5 cursor-pointer hover:text-red-500"
                      onClick={() => setSelectedLocation('all')}
                    />
                  </span>
                )}

                {selectedWorkType !== 'all' && (
                  <span className="px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] font-bold text-xs inline-flex items-center gap-1.5 border border-sky-200 animate-in zoom-in-95 duration-200">
                    <span>{selectedWorkType}</span>
                    <X
                      className="w-3.5 h-3.5 cursor-pointer hover:text-red-500"
                      onClick={() => setSelectedWorkType('all')}
                    />
                  </span>
                )}
              </div>

              {/* Tip info: Chọn bộ lọc để thu hẹp kết quả */}
              <div className="px-4 py-1.5 rounded-full bg-[#e0f2fe]/70 text-[#0369a1] text-xs font-semibold inline-flex items-center gap-1.5 border border-sky-200">
                <span>ⓘ</span>
                <span>Chọn bộ lọc để thu hẹp kết quả.</span>
              </div>
            </div>

            {/* HEADER KẾT QUẢ PHÙ HỢP & SẮP XẾP */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0d1d2f] tracking-tight">
                  Kết quả phù hợp
                </h3>
                <span className="text-xs text-slate-400">
                  Hiển thị {filteredJobs.length} vị trí · Dữ liệu minh họa
                </span>
              </div>

              {/* Dropdown sắp xếp */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'salary')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="salary">Mức lương cao</option>
                </select>
              </div>
            </div>

            {/* VÙNG CHỨA DANH SÁCH & BẢNG CHI TIẾT (SPLIT VIEW KHI BẤM "XEM CHI TIẾT") */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* CỘT DANH SÁCH: Thu hẹp sang 5 cột khi selectedJob mở, hoặc 12 cột khi chưa mở */}
              <div
                className={`flex flex-col gap-4 transition-all duration-400 ${
                  selectedJob ? 'lg:col-span-5' : 'lg:col-span-12'
                }`}
              >
                {filteredJobs.length > 0 ? (
                  filteredJobs.slice(0, visibleLimit).map((job, idx) => {
                    const isSelected = selectedJob?.id === job.id;
                    const isBookmarked = savedJobs.includes(job.id);
                    return (
                      <div
                        key={job.id}
                        onClick={() => setSelectedJob(job)}
                        className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border relative flex items-start justify-between gap-4 group ${
                          isSelected
                            ? 'bg-[#f0f9ff] border-l-4 border-l-[#00c2ff] border-t-sky-200 border-r-sky-200 border-b-sky-200 shadow-md ring-2 ring-sky-200'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                        }`}
                      >
                        {/* Số thứ tự + Logo puck + Thông tin việc làm */}
                        <div className="flex items-start gap-4 flex-1">
                          
                          {/* Số thứ tự (01, 02...) */}
                          {!selectedJob && (
                            <span
                              className={`text-xl sm:text-2xl font-light font-serif tracking-tight pt-1 transition-colors ${
                                isSelected ? 'text-[#00c2ff] font-bold' : 'text-slate-400'
                              }`}
                            >
                              {job.num}
                            </span>
                          )}

                          {/* Logo tròn tối với chữ M vàng kim */}
                          <div className="w-12 h-12 rounded-xl bg-[#071629] border border-slate-700 flex flex-col items-center justify-center text-white shrink-0 shadow-sm">
                            <span className="font-mono text-base font-black text-amber-400">M</span>
                            <span className="text-[7px] uppercase font-bold text-slate-300 -mt-1 tracking-tighter">MATRIX</span>
                          </div>

                          {/* Thông tin vị trí */}
                          <div className="flex-1">
                            <h4
                              className={`text-base sm:text-lg font-black tracking-tight leading-snug mb-1 transition-colors ${
                                isSelected ? 'text-[#00c2ff]' : 'text-[#0d1d2f] group-hover:text-[#00c2ff]'
                              }`}
                            >
                              {job.title}
                            </h4>

                            <span className="text-xs font-semibold text-slate-500 block mb-2">
                              {job.company}
                            </span>

                            {/* Dòng mô tả tóm tắt */}
                            {job.highlightText && (
                              <p className="text-xs text-slate-500 mb-3 line-clamp-1">
                                {job.highlightText}
                              </p>
                            )}

                            {/* Huy hiệu địa điểm & hình thức */}
                            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" />
                                {job.location}
                              </span>
                              <span>·</span>
                              <span className="inline-flex items-center gap-1">
                                <Briefcase className="w-3 h-3 text-slate-400" />
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Cột phải: Bookmark & Xem chi tiết */}
                        <div className="flex flex-col items-end justify-between h-full shrink-0 gap-3">
                          {/* Nút Bookmark */}
                          <button
                            type="button"
                            onClick={(e) => handleToggleBookmark(job.id, job.title, e)}
                            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#00c2ff] transition-all cursor-pointer"
                            title={isBookmarked ? 'Bỏ lưu vị trí' : 'Lưu vị trí'}
                          >
                            <Bookmark
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isBookmarked
                                  ? 'text-[#00c2ff] fill-[#00c2ff] scale-110'
                                  : 'hover:scale-110'
                              }`}
                            />
                          </button>

                          {/* Nút Xem chi tiết */}
                          <div
                            className={`text-xs font-bold inline-flex items-center gap-1 transition-colors ${
                              isSelected ? 'text-[#00c2ff]' : 'text-slate-400 group-hover:text-[#00c2ff]'
                            }`}
                          >
                            <span className={selectedJob ? 'hidden' : 'hidden sm:inline'}>Xem chi tiết</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  /* THÔNG BÁO KHI KHÔNG CÓ KẾT QUẢ PHÙ HỢP */
                  <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
                    <p className="text-slate-600 font-semibold text-sm mb-4">
                      Chưa có vị trí phù hợp với bộ lọc này.
                    </p>
                    <button
                      type="button"
                      onClick={handleClearFilters}
                      className="px-6 py-2.5 rounded-full bg-[#00c2ff] text-[#051120] font-black text-xs sm:text-sm shadow-md cursor-pointer hover:bg-[#38bdf8]"
                    >
                      Xóa bộ lọc để xem tất cả
                    </button>
                  </div>
                )}

                {/* NÚT XEM THÊM VỊ TRÍ (BO TRÒN VIỀN KHỚP ẢNH 3) */}
                {visibleLimit < filteredJobs.length && (
                  <div className="pt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleLimit((prev) => prev + 3)}
                      className="w-full py-3 rounded-2xl border border-slate-300 hover:border-[#00c2ff] hover:bg-white text-xs sm:text-sm font-bold text-slate-700 hover:text-[#00c2ff] transition-all cursor-pointer text-center shadow-xs"
                    >
                      Xem thêm vị trí →
                    </button>
                  </div>
                )}
              </div>

              {/* CỘT BẢNG CHI TIẾT (7 CỘT BÊN PHẢI TRƯỢT VÀO KHI MỞ) */}
              {selectedJob && (
                <div className="lg:col-span-7 sticky top-24">
                  <CareersJobDetailPanel
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                  />
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
