export interface JobPosition {
  id: string;
  title: string;
  department: 'Pháp lý' | 'Tài chính' | 'Vận hành' | 'Nhân sự' | 'Kinh doanh' | 'Truyền thông' | 'Công nghệ';
  location: string;
  type: string;
  experience: string;
  deadline: string;
  summary: string;
  requirements: string[];
  benefits: string[];
}

export const departmentList = [
  'Pháp lý',
  'Tài chính',
  'Vận hành',
  'Nhân sự',
  'Kinh doanh',
  'Truyền thông',
  'Công nghệ',
] as const;

export type DepartmentKey = (typeof departmentList)[number];

export const sampleJobs: JobPosition[] = [
  {
    id: 'job-legal-1',
    title: 'Chuyên viên Pháp chế M&A & Dự án',
    department: 'Pháp lý',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: '3 - 5 năm',
    deadline: '31/10/2024',
    summary: 'Phụ trách rà soát pháp lý các thương vụ hợp tác, đầu tư M&A và soạn thảo thỏa thuận hợp tác chiến lược giữa các đơn vị thành viên.',
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Luật (ưu tiên ĐH Luật TP.HCM, ĐHQG)',
      'Tối thiểu 3 năm kinh nghiệm trong lĩnh vực pháp chế doanh nghiệp hoặc M&A',
      'Kỹ năng đàm phán hợp đồng thương mại và tư duy pháp lý sắc bén',
      'Tiếng Anh thương mại lưu loát',
    ],
    benefits: [
      'Thu nhập cạnh tranh theo năng lực (25 - 40 triệu VNĐ) + thưởng dự án',
      'Bảo hiểm sức khỏe cao cấp 24/7 cho nhân sự và người thân',
      'Được làm việc trực tiếp cùng hội đồng cố vấn pháp lý hàng đầu',
    ],
  },
  {
    id: 'job-fin-1',
    title: 'Chuyên viên Phân tích Đầu tư Chiến lược (Investment Analyst)',
    department: 'Tài chính',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: '2 - 4 năm',
    deadline: '25/10/2024',
    summary: 'Xây dựng mô hình tài chính định giá doanh nghiệp, thẩm định dự án đầu tư và đề xuất phương án tối ưu dòng vốn cho Matrix Capital.',
    requirements: [
      'Tốt nghiệp chuyên ngành Tài chính, Ngân hàng, Kiểm toán hoặc Kinh tế',
      'Có chứng chỉ CFA Level 1 hoặc ACCA là lợi thế lớn',
      'Thành thạo lập mô hình tài chính (Financial Modeling) và phân tích định giá DCF, P/E',
      'Tư duy phân tích dữ liệu logic, chủ động trong công việc',
    ],
    benefits: [
      'Mức lương thỏa thuận hấp dẫn + Thưởng hiệu quả đầu tư danh mục',
      'Cơ hội tham gia các thương vụ đầu tư quy mô lớn từ giai đoạn đầu',
      'Lộ trình thăng tiến rõ ràng lên vị trí Investment Manager sau 2 năm',
    ],
  },
  {
    id: 'job-ops-1',
    title: 'Chuyên viên Quản trị & Tối ưu Vận hành (Operations Specialist)',
    department: 'Vận hành',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: '3+ năm',
    deadline: '15/10/2024',
    summary: 'Đồng hành cùng các công ty thành viên trong việc chuẩn hóa quy trình SOP, ứng dụng KPI/OKR và nâng cao hiệu quả vận hành liên phòng ban.',
    requirements: [
      'Kinh nghiệm quản lý vận hành hoặc tư vấn quản trị quy trình doanh nghiệp',
      'Hiểu biết sâu sắc về các công cụ quản trị tinh gọn (Lean, Six Sigma, Agile)',
      'Kỹ năng giao tiếp và điều phối nguồn lực đa nhiệm xuất sắc',
    ],
    benefits: [
      'Môi trường năng động, khuyến khích sáng kiến cải tiến',
      'Chế độ đào tạo chuyên sâu về kỹ năng lãnh đạo và quản trị số',
      'Gói đãi ngộ xứng đáng cùng thưởng hiệu suất định kỳ',
    ],
  },
  {
    id: 'job-hr-1',
    title: 'Chuyên viên Thu hút Nhân tài Cấp cao (Senior Talent Acquisition)',
    department: 'Nhân sự',
    location: 'TP. Hồ Chí Minh / Hybrid',
    type: 'Toàn thời gian',
    experience: '3 - 5 năm',
    deadline: '20/10/2024',
    summary: 'Tìm kiếm, kết nối và thu hút các chuyên gia hàng đầu trong các lĩnh vực Đầu tư, Bất động sản và Công nghệ cho hệ sinh thái MATRIX.',
    requirements: [
      'Có mạng lưới quan hệ rộng trong giới chuyên môn tài chính - công nghệ',
      'Kỹ năng phỏng vấn hành vi và đánh giá năng lực ứng viên chuyên sâu',
      'Nhiệt huyết, truyền cảm hứng về văn hóa và giá trị cốt lõi của tổ chức',
    ],
    benefits: [
      'Mức lương cứng cạnh tranh + Thưởng tuyển dụng không giới hạn',
      'Cơ hội xây dựng thương hiệu tuyển dụng đẳng cấp cho tập đoàn đa ngành',
      'Làm việc linh hoạt với chính sách Hybrid working',
    ],
  },
  {
    id: 'job-bd-1',
    title: 'Trưởng nhóm Phát triển Kinh doanh Đối tác (Partnership Lead)',
    department: 'Kinh doanh',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: '4+ năm',
    deadline: '30/10/2024',
    summary: 'Mở rộng liên minh đối tác chiến lược, kết nối nguồn lực thương mại và khai thác các cơ hội kinh doanh mới cho MATRIX Connect.',
    requirements: [
      'Kinh nghiệm phát triển thị trường B2B hoặc quản lý khách hàng chiến lược',
      'Khả năng thuyết trình, thương thảo cấp cao và xử lý tình huống linh hoạt',
      'Tác phong chuyên nghiệp, tinh thần trách nhiệm và cam kết cao',
    ],
    benefits: [
      'Thu nhập đột phá theo doanh số và kết quả hợp tác',
      'Công tác phí tiêu chuẩn cao cùng cơ hội tiếp xúc mạng lưới lãnh đạo cấp cao',
      'Thưởng cổ phần ESOP theo hiệu quả đóng góp dài hạn',
    ],
  },
  {
    id: 'job-mar-1',
    title: 'Chuyên viên Truyền thông Thương hiệu & Quan hệ Công chúng',
    department: 'Truyền thông',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: '2 - 4 năm',
    deadline: '28/10/2024',
    summary: 'Xây dựng thông điệp, sản xuất nội dung Matrix Journal và tổ chức các sự kiện kết nối cộng đồng doanh nhân cho tập đoàn.',
    requirements: [
      'Gu thẩm mỹ tinh tế, tư duy biên tập nội dung báo chí - truyền thông hiện đại',
      'Kỹ năng viết xuất sắc, am hiểu truyền thông đa phương tiện',
      'Khả năng làm việc với các cơ quan báo chí và đơn vị truyền thông lớn',
    ],
    benefits: [
      'Không gian làm việc sáng tạo, thiết bị làm việc chuẩn Apple',
      'Cơ hội định hình câu chuyện thương hiệu của tập đoàn tiên phong',
      'Chế độ du lịch hàng năm và teambuilding đẳng cấp 5 sao',
    ],
  },
  {
    id: 'job-tech-1',
    title: 'Kỹ sư Giải pháp Chuyển đổi số & AI (Digital Solution Architect)',
    department: 'Công nghệ',
    location: 'TP. Hồ Chí Minh / Hybrid',
    type: 'Toàn thời gian',
    experience: '4+ năm',
    deadline: '05/11/2024',
    summary: 'Nghiên cứu và triển khai các giải pháp nền tảng đám mây, tự động hóa dữ liệu và ứng dụng AI nhằm tối ưu hóa chuỗi cung ứng hệ sinh thái.',
    requirements: [
      'Kinh nghiệm thiết kế kiến trúc hệ thống phân tán, Cloud (GCP/AWS)',
      'Thành thạo phát triển API, quản trị cơ sở dữ liệu lớn và an toàn thông tin',
      'Đam mê ứng dụng các công nghệ mới vào giải quyết bài toán thực tế doanh nghiệp',
    ],
    benefits: [
      'Mức đãi ngộ top đầu thị trường công nghệ + Thưởng sáng chế',
      'Ngân sách hỗ trợ thi chứng chỉ chuyên môn quốc tế',
      'Môi trường công nghệ mở, trang bị máy tính cấu hình cao nhất',
    ],
  },
];
