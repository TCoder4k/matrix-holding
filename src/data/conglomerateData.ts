import { BusinessSector, FinancialMetric, NewsArticle, OfficeLocation } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_matrix_holding_1790567865216.jpg';

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: 'technology-semiconductor',
    name: 'Công nghệ Cao & Bán dẫn',
    englishName: 'Matrix Advanced Technologies & Semiconductor',
    tagline: 'Làm chủ công nghệ lõi và chuỗi cung ứng vi mạch thế hệ mới',
    description: 'Matrix Technologies tập trung vào nghiên cứu thiết kế vi mạch bán dẫn (Fabless IC Design), hạ tầng trung tâm dữ liệu AI hiệu năng cao và giải pháp tự động hóa công nghiệp thông minh.',
    image: '/src/assets/images/matrix_semiconductor_tech_1790567878509.jpg',
    metrics: [
      { label: 'Doanh thu phân khúc', value: '$840M' },
      { label: 'Bằng sáng chế đã cấp', value: '142+' },
      { label: 'Trung tâm R&D quốc tế', value: '4 cơ sở' },
      { label: 'Năng lực xử lý AI Cloud', value: '250 PFLOPS' }
    ],
    subsidiaries: [
      {
        name: 'Matrix Microelectronics Corp',
        role: 'Thiết kế chip chuyên dụng & cảm biến IoT',
        highlight: 'Đối tác chiến lược chuỗi cung ứng cho các hãng ô tô điện và thiết bị thông minh toàn cầu.'
      },
      {
        name: 'Matrix Cloud & AI Infrastructure',
        role: 'Vận hành Hyperscale Data Center',
        highlight: 'Hạ tầng máy chủ đạt chuẩn Tier IV, sử dụng 100% năng lượng xanh nội bộ.'
      },
      {
        name: 'NexaRobotics Lab',
        role: 'Tự động hóa nhà máy & Robot công nghiệp',
        highlight: 'Triển khai hơn 3,500 cánh tay robot tự hành tại các nhà máy đối tác trên toàn cầu.'
      }
    ],
    keyProjects: [
      'Tổ hợp Trung tâm Thiết kế Vi mạch Matrix Silicon Park tại Khu Công nghệ cao TP.HCM',
      'Hạ tầng tính toán AI Cluster 250 PFLOPS phục vụ các mô hình ngôn ngữ lớn và mô phỏng vật liệu',
      'Hệ thống cảm biến LiDAR trạng thái rắn thế hệ 3 dành cho xe tự hành'
    ],
    esgHighlight: 'Giảm 38% năng lượng tiêu hao trên mỗi phép tính AI nhờ kiến trúc tản nhiệt chất lỏng tuần hoàn kín.'
  },
  {
    id: 'green-energy',
    name: 'Năng lượng Tái tạo & Hạ tầng Xanh',
    englishName: 'Matrix Green Energy & Power Infrastructure',
    tagline: 'Kiến tạo nguồn năng lượng phát thải ròng bằng 0 cho tương lai',
    description: 'Matrix Green Energy tiên phong phát triển các tổ hợp điện gió ngoài khơi quy mô lớn, cánh đồng quang điện nổi và hệ thống lưu trữ điện năng bằng pin (BESS) chuẩn lưới điện quốc gia.',
    image: '/src/assets/images/matrix_green_energy_1790567891114.jpg',
    metrics: [
      { label: 'Tổng công suất lắp đặt', value: '2,850 MW' },
      { label: 'Giảm phát thải CO2 hàng năm', value: '3.6M Tấn' },
      { label: 'Dung lượng lưu trữ BESS', value: '980 MWh' },
      { label: 'Tỷ trọng năng lượng sạch', value: '100%' }
    ],
    subsidiaries: [
      {
        name: 'Matrix Offshore Wind Ltd',
        role: 'Phát triển điện gió ngoài khơi',
        highlight: 'Chủ đầu tư dự án điện gió ngoài khơi 1,400MW tại vùng biển Nam Trung Bộ.'
      },
      {
        name: 'Solaria Clean Power',
        role: 'Điện mặt trời mái nhà công nghiệp & hồ chứa',
        highlight: 'Cung cấp năng lượng sạch cho hơn 80 khu công nghiệp và tổ hợp sản xuất lớn.'
      },
      {
        name: 'Matrix Grid Storage Systems',
        role: 'Giải pháp lưu trữ điện lưới & điều độ thông minh',
        highlight: 'Làm chủ công nghệ BESS container hóa có thời gian xả liên tục tới 8 giờ.'
      }
    ],
    keyProjects: [
      'Tổ hợp Điện gió ngoài khơi Hải Đăng - Công suất giai đoạn 1 đạt 800MW hòa lưới quốc gia',
      'Chuỗi dự án điện mặt trời mái nhà Net-Zero Factory tại 12 tỉnh thành công nghiệp trọng điểm',
      'Trạm pin lưu trữ năng lượng BESS 400MWh ổn định tần số điện lưới vùng duyên hải'
    ],
    esgHighlight: 'Bảo tồn 100% hệ sinh thái đáy biển trong quá trình thi công móng cọc trụ gió bằng công nghệ màn bọt khí triệt tiêu tiếng ồn.'
  },
  {
    id: 'industrial-real-estate',
    name: 'Bất động sản Công nghiệp & Đô thị Thông minh',
    englishName: 'Matrix Industrial Infrastructure & Smart Cities',
    tagline: 'Phát triển hạ tầng logistics sinh thái và đô thị thông minh kiểu mẫu',
    description: 'Matrix Infra phát triển hệ thống khu công nghiệp sinh thái Net-Zero, cụm logistics cảng nước sâu tích hợp và các khu đô thị vệ tinh thông minh phục vụ cộng đồng chuyên gia.',
    image: '/src/assets/images/matrix_industrial_logistics_1790567903613.jpg',
    metrics: [
      { label: 'Tổng quỹ đất công nghiệp', value: '4,200 Ha' },
      { label: 'Cụm logistics nước sâu', value: '3 Cảng biển' },
      { label: 'Tỷ lệ lấp đầy KCN trung bình', value: '94.2%' },
      { label: 'Chứng chỉ xanh quốc tế', value: '100% LEED' }
    ],
    subsidiaries: [
      {
        name: 'Matrix Eco-Industrial Parks',
        role: 'Khu công nghiệp sinh thái đạt chuẩn Net-Zero',
        highlight: 'Điểm đến chiến lược của các tập đoàn Fortune 500 ngành điện tử và bán dẫn.'
      },
      {
        name: 'Prime Port & Deep-Sea Logistics',
        role: 'Cảng nước sâu & chuỗi cung ứng lạnh',
        highlight: 'Khả năng đón tàu mẹ tải trọng lên tới 160,000 DWT đi trực tiếp châu Âu và bờ Tây Hoa Kỳ.'
      },
      {
        name: 'Matrix Urban Living',
        role: 'Khu đô thị công nghệ & nhà ở chuyên gia',
        highlight: 'Không gian sống tích hợp trường học quốc tế, bệnh viện và công viên sinh thái 45ha.'
      }
    ],
    keyProjects: [
      'Khu Công nghiệp Sinh thái Matrix Eco-Park Long An (Quy mô 1,200ha, LEED Gold)',
      'Cụm Cảng Container nước sâu Matrix Gateway Port với hệ thống cẩu trục chạy điện tự động 100%',
      'Khu Đô thị Sáng tạo Matrix Smart Haven phục vụ 35,000 kỹ sư và chuyên gia công nghệ cao'
    ],
    esgHighlight: 'Tái sử dụng 100% nước thải công nghiệp qua quy trình màng lọc thẩm thấu ngược kết hợp đầm lầy sinh thái tự nhiên.'
  },
  {
    id: 'capital-finance',
    name: 'Đầu tư Tài chính & Dịch vụ Toàn cầu',
    englishName: 'Matrix Capital & Global Financial Services',
    tagline: 'Điều phối dòng vốn chiến lược và thúc đẩy đổi mới sáng tạo',
    description: 'Matrix Capital quản lý danh mục tài sản đa dạng, đầu tư mạo hiểm vào các công nghệ tương lai (DeepTech), cung cấp giải pháp tài chính xanh và hỗ trợ M&A quy mô quốc tế.',
    image: '/src/assets/images/hero_matrix_holding_1790567865216.jpg', // luxury architectural backdrop
    metrics: [
      { label: 'Tài sản quản lý (AUM)', value: '$1.9 Tỷ USD' },
      { label: 'Danh mục công ty khởi nghiệp', value: '38 Doanh nghiệp' },
      { label: 'Trái phiếu xanh đã phát hành', value: '$650M' },
      { label: 'Hệ số an toàn vốn CAR', value: '19.4%' }
    ],
    subsidiaries: [
      {
        name: 'Matrix Venture Fund (MVF)',
        role: 'Quỹ mạo hiểm công nghệ sâu & AI',
        highlight: 'Đầu tư từ vòng Seed đến Series B cho các nhà sáng lập khu vực Đông Nam Á & Đông Á.'
      },
      {
        name: 'Matrix Green Bond & Finance',
        role: 'Thu xếp vốn cho các dự án khí hậu',
        highlight: 'Tổ chức phát hành trái phiếu xanh hàng đầu khu vực được định mức tín nhiệm Moody’s Baa2.'
      },
      {
        name: 'Apex Strategic Advisory & M&A',
        role: 'Tư vấn sáp nhập & hợp tác quốc tế',
        highlight: 'Hoàn tất các giao dịch liên biên giới với tổng giá trị vượt mốc 2.3 tỷ USD.'
      }
    ],
    keyProjects: [
      'Quỹ Đổi mới Công nghệ Matrix Horizon Fund quy mô 200 triệu USD tập trung vào AI bán dẫn',
      'Gói tín dụng xanh hợp vốn quốc tế 500 triệu USD cùng các ngân hàng phát triển đa phương IFC & ADB',
      'Chương trình hỗ trợ vốn lưu động chuỗi cung ứng cho 150 nhà cung cấp nội địa'
    ],
    esgHighlight: '100% các khoản đầu tư mới bắt buộc vượt qua bộ chỉ số thẩm định rủi ro môi trường và quản trị ESG quốc tế.'
  }
];

export const FINANCIAL_METRICS: FinancialMetric[] = [
  { year: '2022', revenue: 42150, ebitda: 9800, netProfit: 6240, assets: 82000 },
  { year: '2023', revenue: 51200, ebitda: 12450, netProfit: 7920, assets: 96500 },
  { year: '2024', revenue: 64800, ebitda: 16100, netProfit: 10450, assets: 112000 },
  { year: '2025', revenue: 79600, ebitda: 20300, netProfit: 13200, assets: 128500 },
  { year: '2026 (Kế hoạch)', revenue: 95000, ebitda: 25100, netProfit: 16500, assets: 145000 }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Matrix Holding khởi công Tổ hợp Sản xuất Vi mạch Bán dẫn Thế hệ mới trị giá 600 triệu USD',
    date: '24 Tháng 09, 2026',
    category: 'Sự kiện Chiến lược',
    readTime: '4 phút đọc',
    summary: 'Tổ hợp được trang bị phòng sạch Class 1 tiêu chuẩn quốc tế, đặt mục tiêu đóng gói và kiểm thử các dòng vi điều khiển ô tô điện từ Quý 4/2027.',
    content: `Ngày 24/09/2026, Tập đoàn Matrix Holding chính thức làm lễ động thổ dự án Tổ hợp Sản xuất & Đóng gói Vi mạch Bán dẫn Matrix Silicon Park giai đoạn 2. Với tổng vốn đầu tư ban đầu 600 triệu USD, cơ sở này được xây dựng trên diện tích 22ha tại Khu Công nghệ cao.\n\nDự án đánh dấu bước chuyển mình quan trọng của Matrix Holding từ đơn vị thiết kế fabless sang việc hoàn thiện chuỗi giá trị bán dẫn tích hợp, giải tỏa áp lực đứt gãy chuỗi cung ứng linh kiện vi điện tử tại Đông Nam Á.`
  },
  {
    id: 'news-2',
    title: 'Phát hành thành công 300 triệu USD Trái phiếu Xanh quốc tế kỳ hạn 5 năm niêm yết tại SGX',
    date: '15 Tháng 09, 2026',
    category: 'Quan hệ Cổ đông',
    readTime: '3 phút đọc',
    summary: 'Đợt phát hành nhận được sự quan tâm vượt mức 3.8 lần từ hơn 60 định chế tài chính hàng đầu châu Âu và châu Á, khẳng định uy tín tín dụng vững chắc.',
    content: `Tập đoàn Matrix Holding thông báo đã hoàn tất thành công đợt chào bán 300 triệu USD trái phiếu xanh quốc tế (Green Bonds) với lãi suất cố định 4.85%/năm. Số tiền thu được sẽ được phân bổ 100% cho các dự án điện gió ngoài khơi và nâng cấp hạ tầng KCN sinh thái tuần hoàn nước.`
  },
  {
    id: 'news-3',
    title: 'Công bố Lộ trình Net-Zero 2040: Tiên phong chuyển đổi năng lượng trong toàn bộ chuỗi cung ứng',
    date: '02 Tháng 09, 2026',
    category: 'Phát triển Bền vững',
    readTime: '5 phút đọc',
    summary: 'Báo cáo ESG độc lập xác nhận Matrix Holding đã cắt giảm 24% cường độ phát thải carbon trong năm qua, về đích trước hạn mục tiêu giai đoạn 2023-2026.',
    content: `Tập đoàn Matrix Holding vừa công bố Báo cáo Tính bền vững và Chiến lược Khí hậu 2026-2040. Theo đó, tập đoàn cam kết đạt mức phát thải ròng bằng 0 (Net-Zero) cho toàn bộ phạm vi phát thải Scope 1 và Scope 2 vào năm 2035, và Scope 3 vào năm 2040.`
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'TP. Hồ Chí Minh',
    country: 'Việt Nam',
    type: 'Trụ sở Tập đoàn Toàn cầu',
    address: 'Tòa tháp Matrix Tower, 28 Đại lộ Lê Lợi, Phường Bến Nghé, Quận 1',
    phone: '+84 (028) 3828 8888',
    email: 'contact@matrixholding.com'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    type: 'Trung tâm Tài chính & M&A Khu vực',
    address: 'Level 42, Marina Bay Financial Centre Tower 2, 10 Marina Boulevard',
    phone: '+65 6828 9900',
    email: 'singapore@matrixholding.com'
  },
  {
    city: 'Frankfurt',
    country: 'Đức',
    type: 'Văn phòng Đại diện Châu Âu',
    address: 'Taunusanlage 8, 60329 Frankfurt am Main, Germany',
    phone: '+49 69 9876 540',
    email: 'europe@matrixholding.com'
  }
];
