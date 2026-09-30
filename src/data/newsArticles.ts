import spotlightImg from '../assets/images/news_spotlight_executives_1790697613772.jpg';
import skyscraperImg from '../assets/images/about_journey_skyscraper_1790691432345.jpg';
import meetingConnectImg from '../assets/images/news_meeting_connect_1790697626913.jpg';
import strategyImg from '../assets/images/news_strategy_presentation_1790697640177.jpg';
import handshakeImg from '../assets/images/news_handshake_partnership_1790697652477.jpg';
import teamCollabImg from '../assets/images/news_team_collaboration_1790697663981.jpg';
import heroSkyscraperImg from '../assets/images/about_hero_skyscraper_network_1790691420935.jpg';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  category: 'Hoạt động' | 'Hệ sinh thái' | 'Góc nhìn' | 'Truyền thông';
  image?: string;
  isDarkCard?: boolean;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export const spotlightArticle: NewsArticle = {
  id: 'spotlight-1',
  tag: 'CÂU CHUYỆN MATRIX',
  category: 'Hệ sinh thái',
  title: 'Matrix Holding: Từ khát vọng khởi nghiệp đến hệ sinh thái kinh doanh đa ngành',
  excerpt:
    'Hành trình kiến tạo hệ sinh thái doanh nghiệp đa ngành của Matrix Holding được thúc đẩy bởi khát vọng tạo ra giá trị bền vững, kết nối nguồn lực và đồng hành cùng cộng đồng.',
  image: spotlightImg,
  date: '28 Tháng 09, 2024',
  readTime: '6 phút đọc',
  author: 'Ban Truyền thông MATRIX',
  content: [
    'Khởi đầu từ những ước mơ tiên phong và niềm tin vào sức mạnh cộng hưởng, MATRIX HOLDING đã và đang phát triển với tốc độ ấn tượng để trở thành một hệ sinh thái doanh nghiệp đa ngành vững mạnh.',
    'Chúng tôi xác định rõ rằng một doanh nghiệp trường tồn không thể chỉ phát triển vì lợi nhuận ngắn hạn, mà phải gắn liền với sự thịnh vượng của đối tác, đời sống của người lao động và tương lai của cộng đồng xã hội.',
    'Bằng việc xây dựng 4 trụ cột chiến lược bao gồm MATRIX Network, MATRIX Connect, MATRIX Capital và Các Đơn vị Chuyên môn, tập đoàn mở ra một không gian hợp tác bình đẳng, cùng tạo dựng giá trị mới và khai phóng tiềm năng của các nguồn lực kinh tế trong kỷ nguyên số.',
    'Hành trình phía trước còn nhiều thử thách nhưng với sự đồng lòng của toàn thể nhân sự và sự tin cậy từ các đối tác, MATRIX HOLDING tự tin bước vào giai đoạn tăng trưởng mới mang tính đột phá.'
  ],
};

export const featuredNewsList: NewsArticle[] = [
  {
    id: 'feat-1',
    tag: 'HỆ SINH THÁI',
    category: 'Hệ sinh thái',
    title: 'Giới thiệu Matrix Network & Matrix Ventures: Các hệ sinh thái kết nối nguồn lực',
    excerpt:
      'Tăng cường kết nối giữa con người, ý tưởng và cơ hội, hướng tới xây dựng hệ sinh thái bền vững cùng phát triển.',
    image: skyscraperImg,
    date: '25 Tháng 09, 2024',
    readTime: '5 phút đọc',
    author: 'Văn phòng Chiến lược MATRIX',
    content: [
      'Matrix Network và Matrix Ventures là hai cấu phần quan trọng trong chiến lược liên kết chuỗi giá trị của MATRIX HOLDING.',
      'Thông qua mô hình ươm tạo và mạng lưới đối tác đa tầng, chúng tôi đồng hành cùng các doanh nghiệp khởi nghiệp và doanh nghiệp vừa và nhỏ, cung cấp nguồn vốn, cố vấn quản trị và tiếp cận thị trường khu vực.',
      'Sự kết hợp giữa công nghệ tiên tiến và năng lực tài chính vững mạnh giúp tối ưu hóa hiệu quả hoạt động và giảm thiểu rủi ro trong suốt chu kỳ phát triển của dự án.'
    ],
  },
  {
    id: 'feat-2',
    tag: 'HOẠT ĐỘNG',
    category: 'Hoạt động',
    title: 'Kết nối cộng đồng kinh doanh cùng Matrix Connect',
    excerpt:
      'Tạo dựng không gian gặp gỡ, chia sẻ và hợp tác giữa các doanh nghiệp, nhà đầu tư và đối tác trong hệ sinh thái.',
    image: meetingConnectImg,
    date: '22 Tháng 09, 2024',
    readTime: '4 phút đọc',
    author: 'Ban Xúc tiến Thương mại',
    content: [
      'Chuỗi sự kiện giao lưu kết nối định kỳ của Matrix Connect đã thu hút hơn 200 lãnh đạo doanh nghiệp và đại diện các quỹ đầu tư lớn tham dự.',
      'Tại đây, các thành viên không chỉ tìm kiếm các cơ hội cung ứng liên kết mà còn cùng nhau thảo luận về các giải pháp chuyển đổi xanh, quản trị tinh gọn và số hóa quy trình vận hành.',
      'Matrix Connect tiếp tục là cầu nối tin cậy giúp hiện thực hóa các thỏa thuận hợp tác thương mại đa phương.'
    ],
  },
  {
    id: 'feat-3',
    tag: 'GÓC NHÌN',
    category: 'Góc nhìn',
    title: 'Từ ý tưởng đến hợp tác bền vững',
    excerpt:
      'Những góc nhìn về đổi mới, hợp tác và phát triển bền vững từ đội ngũ Matrix Holding.',
    isDarkCard: true,
    date: '19 Tháng 09, 2024',
    readTime: '5 phút đọc',
    author: 'Hội đồng Cố vấn Chiến lược',
    content: [
      'Một ý tưởng dù xuất sắc đến đâu cũng chỉ có thể phát huy giá trị khi tìm được môi trường thực thi phù hợp và đối tác đồng hành đủ cam kết.',
      'Tại MATRIX HOLDING, chúng tôi coi trọng sự minh bạch, tôn trọng tính độc lập của từng thực thể nhưng luôn tìm kiếm điểm giao thoa để tạo ra sức mạnh cộng hưởng.',
      'Hợp tác bền vững đòi hỏi sự kiên nhẫn, tinh thần lắng nghe và năng lực quản trị rủi ro linh hoạt trước những biến động khó lường của thị trường.'
    ],
  },
];

export const latestNewsList: NewsArticle[] = [
  {
    id: 'latest-1',
    tag: 'GÓC NHÌN',
    category: 'Góc nhìn',
    title: 'Chiến lược kiến tạo giá trị trong kỷ nguyên mới',
    excerpt:
      'Nhìn lại những yếu tố quan trọng giúp doanh nghiệp thích ứng và nắm bắt cơ hội trong bối cảnh thay đổi nhanh chóng.',
    image: strategyImg,
    date: '16 Tháng 09, 2024',
    readTime: '5 phút đọc',
    author: 'Chuyên gia Chiến lược Đầu tư',
    content: [
      'Thời đại số và xu hướng phát triển bền vững đang tái định hình lại các chuẩn mực kinh doanh toàn cầu.',
      'Để giữ vững vị thế dẫn dắt, doanh nghiệp cần kết hợp đồng thời ba năng lực cốt lõi: Tốc độ ra quyết định, Khả năng mở rộng mạng lưới đối tác và Nền tảng văn hóa doanh nghiệp linh hoạt.',
      'Chiến lược dài hạn của MATRIX HOLDING tập trung vào việc tạo dựng giá trị thực chất và có thể đo lường được cho các bên liên quan.'
    ],
  },
  {
    id: 'latest-2',
    tag: 'TRUYỀN THÔNG',
    category: 'Truyền thông',
    title: 'Hành trình xây dựng mạng lưới nguồn lực',
    excerpt:
      'Kết nối đúng người, đúng thời điểm để mở ra những cơ hội hợp tác thiết thực và lâu dài.',
    image: handshakeImg,
    date: '12 Tháng 09, 2024',
    readTime: '4 phút đọc',
    author: 'Ban Truyền thông MATRIX',
    content: [
      'Mạng lưới nguồn lực không đơn thuần là số lượng liên hệ, mà là chất lượng của sự thấu hiểu và mức độ cam kết giữa các thành viên.',
      'MATRIX HOLDING chú trọng xây dựng các diễn đàn cởi mở, nơi các ý tưởng đổi mới có thể tiếp cận nhanh nhất với các nguồn vốn và hạ tầng kiểm thử thực tế.',
      'Sự tin tưởng lẫn nhau chính là tài sản quý giá nhất thúc đẩy các giao dịch và liên kết thành công.'
    ],
  },
  {
    id: 'latest-3',
    tag: 'HOẠT ĐỘNG',
    category: 'Hoạt động',
    title: 'Văn hóa hợp tác trong hệ sinh thái Matrix',
    excerpt:
      'Cùng chia sẻ giá trị, kiến thức và kinh nghiệm để tạo ra tác động tích cực cho cộng đồng doanh nghiệp.',
    image: teamCollabImg,
    date: '08 Tháng 09, 2024',
    readTime: '4 phút đọc',
    author: 'Khối Quản trị Nhân sự & Văn hóa',
    content: [
      'Văn hóa doanh nghiệp tại MATRIX HOLDING được xây dựng trên nền tảng: Sáng tạo, Hiệu quả, Minh bạch và Đồng hành dài hạn.',
      'Mỗi nhân sự tại tập đoàn đều được khuyến khích tư duy như một người kiến tạo, chủ động đề xuất giải pháp và chia sẻ tri thức qua các buổi hội thảo nội bộ.',
      'Chúng tôi tin rằng khi mỗi cá nhân phát triển, sức mạnh tập thể của toàn hệ sinh thái sẽ đạt đến một tầm cao mới.'
    ],
  },
  // Extra articles loaded when clicking "Xem thêm bài viết"
  {
    id: 'latest-4',
    tag: 'HỆ SINH THÁI',
    category: 'Hệ sinh thái',
    title: 'Giải pháp chuyển đổi số toàn diện cho chuỗi cung ứng thông minh',
    excerpt:
      'Ứng dụng tự động hóa và phân tích dữ liệu lớn nhằm nâng cao năng suất và tính minh bạch trong vận hành chuỗi giá trị.',
    image: heroSkyscraperImg,
    date: '03 Tháng 09, 2024',
    readTime: '6 phút đọc',
    author: 'Khối Công nghệ & Số hóa',
    content: [
      'Chuyển đổi số không chỉ là việc áp dụng phần mềm mới mà là sự chuyển dịch toàn diện về tư duy và mô hình vận hành.',
      'MATRIX HOLDING đang tiên phong triển khai hệ thống quản trị dữ liệu tập trung, giúp liên kết thông suốt từ nhà máy, kho bãi đến thị trường tiêu thụ.',
      'Kết quả ban đầu cho thấy chi phí vận hành giảm 18% trong khi độ chính xác trong dự báo nhu cầu thị trường tăng trên 30%.'
    ],
  },
  {
    id: 'latest-5',
    tag: 'TRUYỀN THÔNG',
    category: 'Truyền thông',
    title: 'Báo cáo ESG 2024: Cam kết trách nhiệm vì một tương lai bền vững',
    excerpt:
      'Công bố các chỉ số phát triển bền vững về môi trường, xã hội và quản trị doanh nghiệp minh bạch của tập đoàn.',
    image: skyscraperImg,
    date: '28 Tháng 08, 2024',
    readTime: '7 phút đọc',
    author: 'Ban Phát triển Bền vững',
    content: [
      'MATRIX HOLDING chính thức ban hành Báo cáo phát triển bền vững ESG 2024 với nhiều cột mốc ấn tượng.',
      '100% các công trình bất động sản công nghiệp mới của tập đoàn đều đạt chuẩn tiết kiệm năng lượng và giảm thiểu phát thải carbon.',
      'Tập đoàn cũng cam kết dành 5% lợi nhuận ròng hàng năm cho các quỹ học bổng và sáng kiến phát triển cộng đồng địa phương.'
    ],
  },
  {
    id: 'latest-6',
    tag: 'GÓC NHÌN',
    category: 'Góc nhìn',
    title: 'Tối ưu hóa nguồn vốn trong chu kỳ kinh tế nhiều biến động',
    excerpt:
      'Những phương án tái cấu trúc danh mục đầu tư và giữ vững thanh khoản của các chuyên gia Matrix Capital.',
    image: meetingConnectImg,
    date: '20 Tháng 08, 2024',
    readTime: '5 phút đọc',
    author: 'Khối Phân tích Matrix Capital',
    content: [
      'Quản trị dòng tiền thận trọng kết hợp với việc linh hoạt nắm bắt các cơ hội thâu tóm chiến lược là chìa khóa vượt qua biến động thị trường.',
      'Matrix Capital duy trì tỷ trọng tài sản an toàn cao trong khi vẫn chủ động tìm kiếm các dự án công nghệ có tiềm năng mở rộng quy mô lớn.',
      'Sự am hiểu sâu sắc về thị trường nội địa là lợi thế cạnh tranh hàng đầu giúp chúng tôi mang lại tỷ suất sinh lời vượt trội.'
    ],
  },
];
