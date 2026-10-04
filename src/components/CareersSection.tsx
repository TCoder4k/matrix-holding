import React, { useState, useEffect, useRef } from 'react';
import { MatrixLogo } from './MatrixLogo';
import {
  X,
  Check,
  ArrowRight,
  Briefcase,
  MapPin,
  DollarSign,
  Building2,
  Clock,
  Send,
  ExternalLink,
} from 'lucide-react';

interface JobOpening {
  title: string;
  department: string;
  salary: string;
  location: string;
  type: string;
  description: string;
}

interface CompanyItem {
  id: string;
  name: string;
  slogan: string;
  category: 'legal' | 'finance' | 'operations' | 'hr' | 'business' | 'media' | 'tech';
  industry: string;
  jobsCount: number;
  iconType: 'network' | 'connect' | 'ventures' | 'strategy' | 'research' | 'legal' | 'finance' | 'accounting';
  description: string;
  openings: JobOpening[];
}

interface CareersSectionProps {
  onExploreAll?: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onExploreAll }) => {
  // State bộ lọc và tương tác
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);
  const [isApplyingForJob, setIsApplyingForJob] = useState<JobOpening | null>(null);
  
  // Tọa độ vệt sáng mềm đi theo chuột trên từng card
  const [mousePos, setMousePos] = useState<{ [id: string]: { x: number; y: number } }>({});

  // Form ứng tuyển
  const [applicationSent, setApplicationSent] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  // Hiệu ứng cuộn và reduced-motion
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
      return () => motionQuery.removeEventListener('change', handleMotionChange);
    }
  }, []);

  // IntersectionObserver kích hoạt hiệu ứng xuất hiện lần lượt
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [prefersReducedMotion]);

  // Bộ lọc ngành nghề (8 danh mục chuẩn xác theo ảnh)
  const filters = [
    { key: 'all', label: 'Tất cả' },
    { key: 'legal', label: 'Pháp lý' },
    { key: 'finance', label: 'Tài chính' },
    { key: 'operations', label: 'Vận hành' },
    { key: 'hr', label: 'Nhân sự' },
    { key: 'business', label: 'Kinh doanh' },
    { key: 'media', label: 'Truyền thông' },
    { key: 'tech', label: 'Công nghệ' },
  ];

  // Danh sách 8 doanh nghiệp thành viên với thông tin và slogan chuẩn ảnh
  const companies: CompanyItem[] = [
    {
      id: 'network',
      name: 'MATRIX NETWORK',
      slogan: 'KẾT NỐI CON NGƯỜI KIẾN TẠO GIÁ TRỊ',
      category: 'operations',
      industry: 'Dịch vụ doanh nghiệp',
      jobsCount: 1,
      iconType: 'network',
      description: 'Hệ sinh thái cung cấp giải pháp dịch vụ và hạ tầng vận hành toàn diện cho doanh nghiệp thành viên.',
      openings: [
        {
          title: 'Chuyên viên Điều phối Vận hành Doanh nghiệp',
          department: 'Khối Vận hành',
          salary: '18 - 25 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Quản trị quy trình vận hành và triển khai bộ giải pháp hỗ trợ cho hơn 500 doanh nghiệp đối tác.',
        },
      ],
    },
    {
      id: 'connect',
      name: 'MATRIX CONNECT',
      slogan: 'KẾT NỐI CƠ HỘI DẪN LỐI TƯƠNG LAI',
      category: 'business',
      industry: 'Kết nối kinh doanh',
      jobsCount: 1,
      iconType: 'connect',
      description: 'Mô hình cộng đồng kết nối kinh doanh, mở rộng quan hệ hợp tác chiến lược và tăng trưởng doanh thu.',
      openings: [
        {
          title: 'Trưởng nhóm Phát triển Quan hệ Đối tác (Partnership Lead)',
          department: 'Khối Kinh doanh & Đối ngoại',
          salary: '22 - 35 triệu VNĐ',
          location: 'Hà Nội & TP. HCM',
          type: 'Toàn thời gian',
          description: 'Xây dựng mạng lưới hội viên doanh nghiệp, tổ chức các diễn đàn giao thương B2B quy mô lớn.',
        },
      ],
    },
    {
      id: 'ventures',
      name: 'MATRIX VENTURES',
      slogan: 'KIẾN TẠO NHỮNG GIÁ TRỊ VƯỢT THỜI GIAN',
      category: 'finance',
      industry: 'Đầu tư & Vốn mạo hiểm',
      jobsCount: 1,
      iconType: 'ventures',
      description: 'Hệ sinh thái kết nối đầu tư, hỗ trợ ươm mầm và tăng tốc cho các mô hình khởi nghiệp tiềm năng.',
      openings: [
        {
          title: 'Chuyên viên Thẩm định Dự án Đầu tư (Investment Analyst)',
          department: 'Khối Đầu tư Vốn',
          salary: 'Thỏa thuận cao cấp',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Phân tích tài chính, thẩm định mô hình kinh doanh và tham gia vào quá trình rót vốn chiến lược.',
        },
      ],
    },
    {
      id: 'strategy',
      name: 'MATRIX STRATEGY',
      slogan: 'TỪ CHIẾN LƯỢC ĐẾN HÀNH ĐỘNG',
      category: 'business',
      industry: 'Tư vấn chiến lược',
      jobsCount: 1,
      iconType: 'strategy',
      description: 'Đơn vị hoạch định chiến lược kinh doanh, tối ưu mô hình tổ chức và tái cấu trúc nguồn lực.',
      openings: [
        {
          title: 'Chuyên viên Tư vấn Chiến lược Cấp cao (Senior Strategy Consultant)',
          department: 'Khối Chiến lược',
          salary: '30 - 45 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Đồng hành cùng ban lãnh đạo tập đoàn trong việc phân tích thị trường và hoạch định tăng trưởng.',
        },
      ],
    },
    {
      id: 'research',
      name: 'MATRIX RESEARCH',
      slogan: 'DỮ LIỆU KIẾN TẠO TRI THỨC',
      category: 'tech',
      industry: 'Nghiên cứu & Trí tuệ nhân tạo',
      jobsCount: 1,
      iconType: 'research',
      description: 'Trung tâm nghiên cứu dữ liệu thị trường và ứng dụng trí tuệ nhân tạo tiên phong cho doanh nghiệp.',
      openings: [
        {
          title: 'Kỹ sư Nghiên cứu Dữ liệu & AI (Data / AI Researcher)',
          department: 'Trung tâm AI & Dữ liệu',
          salary: '35 - 50 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Nghiên cứu và phát triển các mô hình học máy phục vụ tự động hóa và phân tích dự báo kinh doanh.',
        },
      ],
    },
    {
      id: 'legal',
      name: 'MATRIX LEGAL',
      slogan: 'VỮNG PHÁP LÝ BỀN NIỀM TIN',
      category: 'legal',
      industry: 'Pháp chế doanh nghiệp',
      jobsCount: 1,
      iconType: 'legal',
      description: 'Tư vấn và chuẩn hóa cấu trúc pháp lý, quản trị rủi ro doanh nghiệp theo chuẩn mực quốc tế.',
      openings: [
        {
          title: 'Luật sư Nội bộ Doanh nghiệp (Corporate Legal Counsel)',
          department: 'Ban Pháp chế',
          salary: '25 - 35 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Soạn thảo hợp đồng thương mại quốc tế, tư vấn tuân thủ pháp lý và sở hữu trí tuệ.',
        },
      ],
    },
    {
      id: 'finance',
      name: 'MATRIX FINANCE',
      slogan: 'MINH BẠCH TẠO NỀN TẢNG PHÁT TRIỂN',
      category: 'finance',
      industry: 'Tài chính doanh nghiệp',
      jobsCount: 1,
      iconType: 'finance',
      description: 'Quản trị nguồn vốn, tối ưu hóa dòng tiền và cung cấp giải pháp tài chính toàn diện cho hệ sinh thái.',
      openings: [
        {
          title: 'Chuyên viên Quản trị Rủi ro Tài chính (Financial Risk Lead)',
          department: 'Khối Tài chính',
          salary: '24 - 32 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Kiểm soát rủi ro thị trường, quản trị cơ cấu vốn và giám sát báo cáo dòng tiền đầu tư.',
        },
      ],
    },
    {
      id: 'accounting',
      name: 'MATRIX ACCOUNTING',
      slogan: 'CHÍNH XÁC ĐỒNG HÀNH CÙNG TĂNG TRƯỞNG',
      category: 'finance',
      industry: 'Kế toán quản trị',
      jobsCount: 1,
      iconType: 'accounting',
      description: 'Hệ thống kế toán quản trị, kiểm toán nội bộ và chuẩn hóa hệ thống báo cáo tài chính minh bạch.',
      openings: [
        {
          title: 'Kế toán Tổng hợp Doanh nghiệp (Chief Accountant Assistant)',
          department: 'Khối Kế toán',
          salary: '16 - 22 triệu VNĐ',
          location: 'Hà Nội',
          type: 'Toàn thời gian',
          description: 'Lập báo cáo tài chính tổng hợp, hoàn thuế và chuẩn hóa quy trình thanh quyết toán nội khối.',
        },
      ],
    },
  ];

  // Doanh nghiệp hạt nhân: Matrix Holding
  const holdingCompany: CompanyItem = {
    id: 'holding',
    name: 'MATRIX HOLDING',
    slogan: 'KẾT NỐI NGUỒN LỰC. KIẾN TẠO TƯƠNG LAI.',
    category: 'operations',
    industry: 'Tập đoàn Quản trị Đầu tư',
    jobsCount: 5,
    iconType: 'network',
    description: 'Công ty trung tâm quản trị chiến lược, kết nối nguồn lực và điều phối phát triển toàn bộ hệ sinh thái.',
    openings: [
      {
        title: 'Giám đốc Vận hành Tập đoàn (COO)',
        department: 'Ban Điều hành',
        salary: 'Thỏa thuận cao cấp',
        location: 'Trụ sở chính Hà Nội',
        type: 'Toàn thời gian',
        description: 'Chỉ đạo toàn diện hoạt động vận hành và thúc đẩy sự cộng hưởng giữa 8 doanh nghiệp thành viên.',
      },
      {
        title: 'Trưởng ban Pháp chế & Quản trị Rủi ro',
        department: 'Ban Pháp chế',
        salary: '35 - 50 triệu VNĐ',
        location: 'Trụ sở chính Hà Nội',
        type: 'Toàn thời gian',
        description: 'Xây dựng hành lang pháp lý vững chắc cho các thương vụ M&A và vòng gọi vốn quy mô lớn.',
      },
      {
        title: 'Giám đốc Truyền thông & Thương hiệu Tập đoàn',
        department: 'Ban Truyền thông',
        salary: '30 - 45 triệu VNĐ',
        location: 'Trụ sở chính Hà Nội',
        type: 'Toàn thời gian',
        description: 'Định hình chiến lược thương hiệu Matrix Holding và các thương hiệu thành viên trên toàn quốc.',
      },
      {
        title: 'Trưởng ban Tài chính & Quan hệ Cổ đông (IR Lead)',
        department: 'Ban Tài chính',
        salary: '40 - 60 triệu VNĐ',
        location: 'Trụ sở chính Hà Nội',
        type: 'Toàn thời gian',
        description: 'Quản lý quan hệ với các quỹ đầu tư quốc tế và điều phối chiến lược cấu trúc vốn tập đoàn.',
      },
      {
        title: 'Kỹ sư Giải pháp Trí tuệ Nhân tạo Doanh nghiệp',
        department: 'Khối Công nghệ AI',
        salary: '35 - 55 triệu VNĐ',
        location: 'Trụ sở chính Hà Nội',
        type: 'Toàn thời gian',
        description: 'Triển khai hạ tầng AI Agent và nền tảng dữ liệu phục vụ tự động hóa quản trị nội bộ.',
      },
    ],
  };

  // Lọc doanh nghiệp theo ngành
  const filteredCompanies =
    activeFilter === 'all'
      ? companies
      : companies.filter((c) => c.category === activeFilter);

  // Theo dõi chuột để tạo vệt sáng mềm đi theo con trỏ
  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [id]: { x: e.clientX - rect.left, y: e.clientY - rect.top },
    }));
  };

  // Nộp đơn ứng tuyển
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;
    setApplicationSent(true);
    setTimeout(() => {
      setApplicationSent(false);
      setIsApplyingForJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantNote('');
    }, 2400);
  };

  // Render icon đồ họa đặc thù của từng doanh nghiệp
  const renderCompanyIcon = (type: CompanyItem['iconType']) => {
    switch (type) {
      case 'network':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00c2ff]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h4v4H4zM16 4h4v4h-4zM10 16h4v4h-4z" />
              <path d="M6 8v4a2 2 0 0 0 2 2h4M18 8v4a2 2 0 0 1-2 2h-4" />
            </svg>
          </div>
        );
      case 'connect':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-cyan-800/80 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00c2ff]" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8a4 4 0 1 0 4 4" />
            </svg>
          </div>
        );
      case 'ventures':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M6 5l6 14 6-14" />
              <path d="M8 8l4 9 4-9" opacity="0.6" />
            </svg>
          </div>
        );
      case 'strategy':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M16 4h-5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H7" />
            </svg>
          </div>
        );
      case 'research':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <span className="font-black text-xl text-white font-mono">R</span>
          </div>
        );
      case 'legal':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M6 8h12M4 14l4-6 4 6a4 4 0 0 1-8 0zM12 14l4-6 4 6a4 4 0 0 1-8 0z" />
            </svg>
          </div>
        );
      case 'finance':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M6 4h12M6 10h8M6 16h4M6 4v16" />
            </svg>
          </div>
        );
      case 'accounting':
        return (
          <div className="w-11 h-11 rounded-xl bg-[#09182b] border border-sky-900/60 flex items-center justify-center text-white shrink-0 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 18l8-14 8 14" />
              <path d="M7 13h10" />
            </svg>
          </div>
        );
    }
  };

  // Render họa tiết nghệ thuật đặc thù cho từng card (Bám sát ảnh 100%)
  const renderCardGraphicMotif = (type: CompanyItem['iconType']) => {
    switch (type) {
      case 'network':
        return (
          /* Quả cầu mạng lưới công nghệ 3D */
          <div className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-85">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
              <circle cx="120" cy="110" r="70" stroke="#00c2ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <ellipse cx="120" cy="110" rx="70" ry="24" stroke="#009fe3" strokeWidth="1" opacity="0.5" />
              <ellipse cx="120" cy="110" rx="24" ry="70" stroke="#009fe3" strokeWidth="1" opacity="0.4" />
              {/* Nodes */}
              <circle cx="80" cy="90" r="4.5" fill="#00c2ff" />
              <circle cx="150" cy="80" r="3.5" fill="#38bdf8" />
              <circle cx="120" cy="140" r="5" fill="#0284c7" />
              <circle cx="160" cy="130" r="4" fill="#00c2ff" />
              <line x1="80" y1="90" x2="150" y2="80" stroke="#00c2ff" strokeWidth="1.2" opacity="0.6" />
              <line x1="80" y1="90" x2="120" y2="140" stroke="#00c2ff" strokeWidth="1.2" opacity="0.6" />
              <line x1="150" y1="80" x2="160" y2="130" stroke="#00c2ff" strokeWidth="1.2" opacity="0.6" />
              <line x1="120" y1="140" x2="160" y2="130" stroke="#00c2ff" strokeWidth="1.2" opacity="0.6" />
            </svg>
          </div>
        );
      case 'connect':
        return (
          /* Dải sóng cyber mesh wave mềm mại */
          <div className="absolute right-0 bottom-0 w-44 h-36 sm:w-52 sm:h-44 pointer-events-none select-none opacity-85">
            <svg viewBox="0 0 220 180" className="w-full h-full" fill="none">
              <path
                d="M 10 160 C 60 120, 110 60, 170 80 C 200 90, 220 140, 240 130"
                stroke="#00c2ff"
                strokeWidth="1.8"
                opacity="0.8"
              />
              <path
                d="M 20 170 C 70 130, 120 70, 180 90 C 210 100, 230 150, 250 140"
                stroke="#38bdf8"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <path
                d="M 30 180 C 80 140, 130 80, 190 100 C 220 110, 240 160, 260 150"
                stroke="#7dd3fc"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>
        );
      case 'ventures':
        return (
          /* Khối cầu vàng 3D cùng các quỹ đạo hình học */
          <div className="absolute right-1 bottom-1 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-90">
            <svg viewBox="0 0 180 180" className="w-full h-full" fill="none">
              <ellipse cx="110" cy="90" rx="55" ry="32" stroke="#bae6fd" strokeWidth="1.5" opacity="0.7" transform="rotate(-15 110 90)" />
              {/* Glass frosted cone */}
              <path d="M125 150 L145 70 L165 150 Z" fill="url(#ventures-glass)" opacity="0.45" />
              {/* Golden 3D Sphere */}
              <defs>
                <radialGradient id="gold-ball" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="40%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#a16207" />
                </radialGradient>
                <linearGradient id="ventures-glass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#7dd3fc" />
                </linearGradient>
              </defs>
              <circle cx="108" cy="85" r="16" fill="url(#gold-ball)" filter="drop-shadow(0 6px 12px rgba(161,98,7,0.3))" />
              <circle cx="150" cy="50" r="10" fill="#e0f2fe" opacity="0.8" />
            </svg>
          </div>
        );
      case 'strategy':
        return (
          /* Kim tự tháp / lăng kính 3D đa diện */
          <div className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-85">
            <svg viewBox="0 0 180 160" className="w-full h-full" fill="none">
              <polygon points="120,30 60,140 120,130" fill="#94a3b8" opacity="0.35" />
              <polygon points="120,30 120,130 175,140" fill="#cbd5e1" opacity="0.6" />
              <polygon points="120,50 80,135 120,128" fill="#38bdf8" opacity="0.4" />
              <polygon points="120,50 120,128 160,135" fill="#bae6fd" opacity="0.65" />
            </svg>
          </div>
        );
      case 'research':
        return (
          /* Biểu đồ sóng xung dữ liệu AI */
          <div className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-85">
            <svg viewBox="0 0 180 150" className="w-full h-full" fill="none">
              {[
                { x: 75, h: 25 },
                { x: 87, h: 42 },
                { x: 99, h: 65 },
                { x: 111, h: 90 },
                { x: 123, h: 105 },
                { x: 135, h: 80 },
                { x: 147, h: 55 },
                { x: 159, h: 35 },
              ].map((bar, i) => (
                <line
                  key={i}
                  x1={bar.x}
                  y1={140}
                  x2={bar.x}
                  y2={140 - bar.h}
                  stroke="#009fe3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity={0.3 + (i / 8) * 0.7}
                />
              ))}
            </svg>
          </div>
        );
      case 'legal':
        return (
          /* Cột mốc và bậc thang pháp lý vững chắc */
          <div className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-85">
            <svg viewBox="0 0 180 150" className="w-full h-full" fill="none">
              <path d="M 120 140 L 120 70 L 140 60 L 140 140 Z" fill="#93c5fd" opacity="0.5" />
              <path d="M 140 140 L 140 50 L 160 40 L 160 140 Z" fill="#bfdbfe" opacity="0.6" />
              <path d="M 160 140 L 160 30 L 175 25 L 175 140 Z" fill="#dbeafe" opacity="0.7" />
            </svg>
          </div>
        );
      case 'finance':
        return (
          /* Biểu đồ cột 3D isometric với đỉnh vàng */
          <div className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-90">
            <svg viewBox="0 0 180 150" className="w-full h-full" fill="none">
              {/* Bar 1 */}
              <polygon points="75,130 90,120 90,145 75,150" fill="#93c5fd" opacity="0.6" />
              {/* Bar 2 */}
              <polygon points="100,105 118,95 118,145 100,150" fill="#60a5fa" opacity="0.7" />
              {/* Bar 3 (Tallest with Gold cap) */}
              <polygon points="130,65 152,50 152,145 130,150" fill="#38bdf8" opacity="0.8" />
              <polygon points="130,65 140,58 152,50 142,57" fill="#fbbf24" />
            </svg>
          </div>
        );
      case 'accounting':
        return (
          /* Các tầng lớp hình học vuông xếp lớp isometric */
          <div className="absolute right-1 bottom-1 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none opacity-90">
            <svg viewBox="0 0 180 150" className="w-full h-full" fill="none">
              {/* Bottom plate */}
              <polygon points="120,135 160,115 120,95 80,115" fill="#1e3a8a" opacity="0.3" />
              {/* Middle plate */}
              <polygon points="120,115 160,95 120,75 80,95" fill="#0284c7" opacity="0.5" />
              {/* Top plate - Gold */}
              <polygon points="120,90 160,70 120,50 80,70" fill="#eab308" opacity="0.9" />
              <polygon points="120,90 160,70 160,76 120,96" fill="#ca8a04" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="careers"
      className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden select-none"
    >
      {/* Background cyber lighting accent */}
      <div className="absolute right-0 top-0 w-1/2 h-96 pointer-events-none opacity-30 select-none hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 600 300" fill="none">
          <path d="M 50 0 C 220 120, 420 180, 600 200" stroke="#00c2ff" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
          <path d="M 150 0 C 290 140, 480 220, 600 240" stroke="#38bdf8" strokeWidth="2" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION CHUẨN XÁC THEO ẢNH MẪU                                   */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Nhãn nhỏ: — DOANH NGHIỆP TUYỂN DỤNG — */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#009fe3]" />
            <span className="text-[#009fe3] font-bold text-xs sm:text-sm tracking-wider uppercase">
              DOANH NGHIỆP TUYỂN DỤNG
            </span>
            <span className="w-5 h-[1.5px] bg-[#009fe3]" />
          </div>

          {/* Tiêu đề chính lớn: CÁC DOANH NGHIỆP TRONG HỆ SINH THÁI */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] uppercase tracking-tight leading-tight mb-3">
            CÁC DOANH NGHIỆP TRONG <span className="text-[#009fe3]">HỆ SINH THÁI</span>
          </h2>

          {/* Mô tả phụ đề */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Khám phá cơ hội nghề nghiệp trong hệ sinh thái Matrix.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. BỘ LỌC NGÀNH NGHỀ (FILTER PILLS VỚI HIỆU ỨNG TRƯỢT MƯỢT MÀ)            */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none px-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#009fe3] text-white shadow-md shadow-sky-500/25 scale-102'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. LƯỚI BENTO TƯƠNG TÁC (1 CARD LỚN HOLDING + 8 CARD DOANH NGHIỆP)        */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* ======================================================================= */}
          {/* SVG CONNECTING LINES (ĐƯỜNG NỐI CYAN ĐỘC LẠ KỂ CÂU CHUYỆN HỆ SINH THÁI)   */}
          {/* ======================================================================= */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
            <svg className="w-full h-full" viewBox="0 0 1320 620" fill="none">
              {/* Điểm xuất phát tại mép phải card Matrix Holding (x: 375, y: 260) */}
              <circle cx="375" cy="260" r="4.5" fill="#00c2ff" className="animate-pulse" />
              
              {/* Đường nối tới Network (x: 410, y: 110) */}
              <path
                d="M 375 260 C 390 260, 395 110, 410 110"
                stroke={hoveredCompany === 'holding' || hoveredCompany === 'network' ? '#00c2ff' : '#00c2ff'}
                strokeWidth={hoveredCompany === 'network' ? '2.5' : '1.5'}
                strokeDasharray={hoveredCompany === 'network' ? 'none' : '4 4'}
                opacity={hoveredCompany === 'network' ? 0.95 : hoveredCompany === 'holding' ? 0.6 : 0.25}
                className="transition-all duration-300"
              />

              {/* Đường nối tới Connect (x: 720, y: 110) - hiển thị nổi bật như ảnh mẫu */}
              <path
                d="M 375 260 C 440 260, 520 160, 715 160"
                stroke="#00c2ff"
                strokeWidth={hoveredCompany === 'connect' || !hoveredCompany ? '2.2' : '1.2'}
                opacity={hoveredCompany === 'connect' ? 1 : 0.7}
                className="transition-all duration-300"
              />
              <circle cx="715" cy="160" r="3.5" fill="#00c2ff" opacity={hoveredCompany === 'connect' || !hoveredCompany ? 1 : 0.4} />

              {/* Đường nối tới Strategy (x: 410, y: 310) */}
              <path
                d="M 375 260 C 390 260, 395 310, 410 310"
                stroke="#00c2ff"
                strokeWidth={hoveredCompany === 'strategy' ? '2.5' : '1.2'}
                strokeDasharray="4 4"
                opacity={hoveredCompany === 'strategy' ? 0.9 : hoveredCompany === 'holding' ? 0.5 : 0.15}
                className="transition-all duration-300"
              />

              {/* Đường nối tới Finance (x: 410, y: 510) */}
              <path
                d="M 375 260 C 390 260, 395 510, 410 510"
                stroke="#00c2ff"
                strokeWidth={hoveredCompany === 'finance' ? '2.5' : '1.2'}
                strokeDasharray="4 4"
                opacity={hoveredCompany === 'finance' ? 0.9 : hoveredCompany === 'holding' ? 0.5 : 0.15}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* LƯỚI BENTO CHÍNH */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* ===================================================================== */}
            {/* CARD LỚN: MATRIX HOLDING (CỘT TRÁI CHIẾM 4/12 TRÊN DESKTOP)          */}
            {/* ===================================================================== */}
            <div
              onMouseEnter={() => setHoveredCompany('holding')}
              onMouseLeave={() => setHoveredCompany(null)}
              onClick={() => setSelectedCompany(holdingCompany)}
              className={`lg:col-span-4 rounded-3xl overflow-hidden relative shadow-xl flex flex-col justify-between p-7 sm:p-8 text-white min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] group cursor-pointer border border-slate-800 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Ảnh nền kiến trúc cao ốc kính ban đêm rõ nét, phủ gradient navy sang trọng */}
              <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <img
                  src="/images/matrix_holding_tower_dusk_1791004370385.jpg"
                  alt="Tòa nhà trụ sở Matrix Holding"
                  className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                {/* Lớp phủ gradient navy đa tầng làm nổi bật khối chữ và ảnh kiến trúc */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051120] via-[#051120]/75 to-[#051120]/85" />
              </div>

              {/* Phần trên: Logo Matrix, Slogan & Thông điệp vị thế */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  {/* 3D Matrix Logo */}
                  <MatrixLogo size="lg" showText={false} className="w-12 h-12" />
                  
                  {/* Badge định vị: ONE ECOSYSTEM / MANY OPPORTUNITIES */}
                  <div className="text-right">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-sky-400 block uppercase">
                      ONE ECOSYSTEM
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-300 block uppercase">
                      MANY OPPORTUNITIES
                    </span>
                  </div>
                </div>

                {/* Tên thương hiệu & Định hướng */}
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2 uppercase">
                  MATRIX HOLDING
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xs">
                  Kết nối nguồn lực. Kiến tạo tương lai.
                </p>

                {/* Số lượng việc làm */}
                <div className="mt-5 inline-flex items-center gap-2 text-sky-300 font-semibold text-xs sm:text-sm bg-sky-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-800/60">
                  <Briefcase className="w-4 h-4 text-[#00c2ff]" />
                  <span>5 việc làm</span>
                </div>
              </div>

              {/* Phần đáy: Nút CTA Khám phá việc làm & Footer line */}
              <div className="relative z-10 pt-8 mt-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCompany(holdingCompany);
                  }}
                  className="w-full bg-[#00c2ff] hover:bg-[#38bdf8] text-[#071526] font-black text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-98"
                >
                  <span>Khám phá việc làm</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </button>

                {/* Dòng chữ giá trị cốt lõi */}
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-semibold text-slate-400 uppercase mt-4 px-1">
                  <span>CONNECTION</span>
                  <span>•</span>
                  <span>PEOPLE</span>
                  <span>•</span>
                  <span>GROWTH</span>
                </div>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* LƯỚI CARD THÀNH VIÊN (CỘT PHẢI CHIẾM 8/12 TRÊN DESKTOP)               */}
            {/* ===================================================================== */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
              {companies.map((company, index) => {
                const isFilteredOut =
                  activeFilter !== 'all' && company.category !== activeFilter;

                if (isFilteredOut) return null;

                // Card Matrix Connect mặc định được nhấn theo phong cách ảnh tham chiếu
                const isConnectCard = company.id === 'connect';
                const isHovered = hoveredCompany === company.id;

                return (
                  <div
                    key={company.id}
                    onMouseEnter={() => setHoveredCompany(company.id)}
                    onMouseLeave={() => setHoveredCompany(null)}
                    onMouseMove={(e) => handleMouseMove(company.id, e)}
                    onClick={() => setSelectedCompany(company)}
                    className={`relative rounded-3xl p-5 sm:p-6 transition-all duration-400 cursor-pointer group flex flex-col justify-between overflow-hidden min-h-[185px] sm:min-h-[195px] ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } ${
                      isConnectCard
                        ? 'border-2 border-[#00c2ff] shadow-[0_10px_30px_rgba(0,194,255,0.15)] bg-gradient-to-br from-cyan-50/50 via-white to-white'
                        : 'border border-slate-200/90 hover:border-[#00c2ff] bg-white hover:shadow-[0_10px_30px_rgba(0,194,255,0.12)]'
                    } hover:-translate-y-1.5`}
                    style={{
                      transitionDelay: prefersReducedMotion ? '0ms' : `${(index + 1) * 60}ms`,
                    }}
                  >
                    {/* Vùng sáng mềm (radial glow) đi theo con trỏ chuột */}
                    {mousePos[company.id] && (
                      <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-3xl z-10"
                        style={{
                          background: `radial-gradient(320px circle at ${mousePos[company.id].x}px ${mousePos[company.id].y}px, rgba(0, 194, 255, 0.12), transparent 70%)`,
                        }}
                      />
                    )}

                    {/* Họa tiết nghệ thuật đặc thù phía sau card */}
                    {renderCardGraphicMotif(company.iconType)}

                    {/* Nội dung chính phía trước */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        {/* Logo Icon đặc thù của doanh nghiệp */}
                        {renderCompanyIcon(company.iconType)}

                        {/* Mũi tên góc trên phải */}
                        <div className="w-8 h-8 rounded-full bg-slate-100/80 group-hover:bg-[#00c2ff] flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Tên thương hiệu */}
                      <h4 className="font-black text-[#0d1d2f] text-base sm:text-[17px] tracking-tight group-hover:text-[#009fe3] transition-colors uppercase leading-snug">
                        {company.name}
                      </h4>

                      {/* Chuyển đổi trạng thái khi hover: "1 việc làm" -> "Xem vị trí đang tuyển →" */}
                      <div className="mt-2.5">
                        <div className="group-hover:hidden inline-flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          <span>{company.jobsCount} việc làm</span>
                        </div>

                        {/* Nút cyan hiển thị khi hover hoặc trên card Connect */}
                        <div className="hidden group-hover:inline-flex items-center gap-1.5 text-xs font-bold text-[#009fe3] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                          <span>Xem vị trí đang tuyển</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Dòng slogan triết lý mờ phía dưới */}
                    <div className="relative z-10 pt-4 mt-auto">
                      <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase line-clamp-1">
                        {company.slogan}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ======================================================================= */}
          {/* NÚT KHÁM PHÁ TẤT CẢ DƯỚI LƯỚI                                           */}
          {/* ======================================================================= */}
          <div className="text-center mt-12 sm:mt-14">
            <button
              type="button"
              onClick={onExploreAll}
              className="bg-[#071526] hover:bg-[#009fe3] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md shadow-slate-900/10 inline-flex items-center gap-2.5 transition-all duration-300 cursor-pointer active:scale-98"
            >
              <span>Khám phá tất cả</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. BẢNG BÊN PHẢI (SLIDE-OVER DRAWER) KHÁM PHÁ DOANH NGHIỆP TRONG TRANG     */}
      {/* ========================================================================= */}
      {selectedCompany && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop tối mờ */}
          <div
            onClick={() => {
              setSelectedCompany(null);
              setIsApplyingForJob(null);
            }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-lg bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div className="p-6 sm:p-8 bg-[#071526] text-white relative">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCompany(null);
                    setIsApplyingForJob(null);
                  }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  {renderCompanyIcon(selectedCompany.iconType)}
                  <div>
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                      {selectedCompany.industry}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                      {selectedCompany.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedCompany.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-sky-300 font-semibold">
                  <span>{selectedCompany.slogan}</span>
                  <span className="bg-sky-500/20 px-2.5 py-0.5 rounded-full text-sky-300">
                    {selectedCompany.jobsCount} vị trí đang tuyển
                  </span>
                </div>
              </div>

              {/* Drawer Body: Danh sách vị trí tuyển dụng */}
              <div className="p-6 sm:p-8 flex-1 space-y-5">
                <h4 className="font-black text-[#0d1d2f] text-base uppercase tracking-tight flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#009fe3]" />
                  <span>Vị trí tuyển dụng hấp dẫn</span>
                </h4>

                <div className="space-y-4">
                  {selectedCompany.openings.map((job, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200/90 rounded-2xl p-5 hover:border-[#00c2ff] hover:shadow-md transition-all duration-200 bg-[#f8fafc]/50"
                    >
                      <h5 className="font-bold text-[#0d1d2f] text-base sm:text-lg mb-2">
                        {job.title}
                      </h5>

                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-4 bg-white p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-medium text-slate-700">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-purple-600" />
                          <span>{job.department}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsApplyingForJob(job)}
                        className="w-full bg-[#071526] hover:bg-[#009fe3] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <span>Ứng tuyển vị trí này</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Form ứng tuyển nhanh khi người dùng chọn vị trí */}
                {isApplyingForJob && (
                  <div className="mt-6 p-5 sm:p-6 bg-sky-50/70 border border-sky-200 rounded-2xl animate-in fade-in duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-[#0d1d2f] text-sm">
                        Nộp đơn: {isApplyingForJob.title}
                      </h5>
                      <button
                        type="button"
                        onClick={() => setIsApplyingForJob(null)}
                        className="text-slate-400 hover:text-slate-600 text-xs"
                      >
                        Hủy
                      </button>
                    </div>

                    {applicationSent ? (
                      <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Hồ sơ đã được gửi thành công đến ban nhân sự Matrix Holding!</span>
                      </div>
                    ) : (
                      <form onSubmit={handleApplySubmit} className="space-y-3">
                        <input
                          type="text"
                          required
                          placeholder="Họ và tên của bạn *"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#00c2ff]"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="email"
                            required
                            placeholder="Email liên hệ *"
                            value={applicantEmail}
                            onChange={(e) => setApplicantEmail(e.target.value)}
                            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#00c2ff]"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Số điện thoại *"
                            value={applicantPhone}
                            onChange={(e) => setApplicantPhone(e.target.value)}
                            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#00c2ff]"
                          />
                        </div>
                        <textarea
                          placeholder="Giới thiệu kinh nghiệm hoặc liên kết CV (LinkedIn, Google Drive)..."
                          rows={2}
                          value={applicantNote}
                          onChange={(e) => setApplicantNote(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#00c2ff]"
                        />
                        <button
                          type="submit"
                          className="w-full bg-[#009fe3] hover:bg-[#0089c4] text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl shadow-md transition-colors cursor-pointer"
                        >
                          Xác nhận nộp hồ sơ
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Hệ sinh thái Matrix Holding</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCompany(null);
                    if (onExploreAll) onExploreAll();
                  }}
                  className="font-bold text-[#009fe3] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Xem trên trang tuyển dụng</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
