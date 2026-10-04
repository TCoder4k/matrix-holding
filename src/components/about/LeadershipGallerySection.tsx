import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X, Mail, Linkedin } from 'lucide-react';

interface LeaderItem {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  quote: string;
}

export const LeadershipGallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Mặc định Lãnh đạo 02 ở giữa
  const [selectedLeaderModal, setSelectedLeaderModal] = useState<LeaderItem | null>(null);

  const leaders: LeaderItem[] = [
    {
      id: 'l1',
      name: 'Lãnh đạo 01',
      role: 'Thành viên HĐQT & Giám đốc Tài chính (CFO)',
      image: '/src/assets/images/matrix_executive_office_1790857252584.jpg',
      bio: 'Hơn 15 năm kinh nghiệm quản trị tài chính tại các tập đoàn đa quốc gia và quỹ đầu tư mạo hiểm khu vực Đông Nam Á.',
      quote: 'Kỷ luật tài chính và tính minh bạch là nền móng vững bền nhất để một hệ sinh thái kiến tạo giá trị dài hạn.',
    },
    {
      id: 'l2',
      name: 'Lãnh đạo 02',
      role: 'Phó Chủ tịch HĐQT & Giám đốc Điều hành (COO)',
      image: '/src/assets/images/matrix_creative_desk_1790825075738.jpg',
      bio: 'Chuyên gia hoạch định chiến lược tăng trưởng và phát triển mạng lưới đối tác chiến lược toàn diện cho hơn 500 doanh nghiệp thành viên.',
      quote: 'Sức mạnh thật sự của một tập đoàn không nằm ở quy mô riêng rẽ, mà ở khả năng cộng hưởng nhịp nhàng của từng mảnh ghép.',
    },
    {
      id: 'l3',
      name: 'Lãnh đạo 03',
      role: 'Giám đốc Công nghệ & Trí tuệ Nhân tạo (CTO)',
      image: '/src/assets/images/matrix_team_meeting_1790857862728.jpg',
      bio: 'Tiến sĩ Khoa học Máy tính với nhiều bằng sáng chế trong lĩnh vực AI ứng dụng và tự động hóa quy trình quản trị doanh nghiệp.',
      quote: 'Công nghệ chỉ thực sự có giá trị khi nó giải quyết được bài toán con người và tối ưu hóa hiệu suất vận hành của tập thể.',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#0A192F] relative overflow-hidden select-none border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
            <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
              BAN LÃNH ĐẠO
            </span>
            <span className="w-6 h-[1.5px] bg-[#d97706]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-4">
            Con người phía sau định hướng.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Những con người tận tâm, giàu kinh nghiệm và luôn giữ vững các giá trị cốt lõi, cùng kiến tạo nền tảng cho hành trình phát triển bền vững của Matrix Holding.
          </p>
        </div>

        {/* 3 CHÂN DUNG BAN LÃNH ĐẠO DẠNG GALLERY MỞ RỘNG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-end mb-10">
          {leaders.map((leader, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <div
                key={leader.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer group flex flex-col justify-end ${
                  isCenter
                    ? 'h-[440px] sm:h-[480px] ring-2 ring-[#009fe3] shadow-2xl z-20 scale-102'
                    : 'h-[360px] sm:h-[400px] opacity-75 hover:opacity-100'
                }`}
              >
                {/* Ảnh chân dung */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Lớp phủ tối ở đáy để tôn chữ */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527] via-[#061527]/30 to-transparent" />

                {/* Khối chữ nhãn tên */}
                <div className="relative z-10 p-6 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[1.5px] bg-amber-400" />
                    <span className="font-bold text-sm sm:text-base">{leader.name}</span>
                  </div>

                  {isCenter && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedLeaderModal(leader);
                      }}
                      className="text-xs font-bold text-[#00c2ff] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Xem giới thiệu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* BỘ ĐIỀU HƯỚNG VÀ BỘ ĐẾM 01 / 03 Ở ĐÁY */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#009fe3] text-slate-600 hover:text-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Lãnh đạo trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="font-bold text-sm text-[#0d1d2f] select-none">
              0{activeIndex + 1} <span className="text-slate-400 font-normal">/ 03</span>
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#009fe3] text-slate-600 hover:text-[#009fe3] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Lãnh đạo tiếp theo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dải 3 viên thuốc tiến trình */}
          <div className="flex items-center gap-2">
            {leaders.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-[#d97706]' : 'w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* MODAL GIỚI THIỆU CHI TIẾT BAN LÃNH ĐẠO */}
      {selectedLeaderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#071629] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl flex flex-col sm:flex-row gap-6 items-center">
            <button
              type="button"
              onClick={() => setSelectedLeaderModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-40 h-52 rounded-2xl overflow-hidden shrink-0 border border-slate-700">
              <img
                src={selectedLeaderModal.image}
                alt={selectedLeaderModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                {selectedLeaderModal.role}
              </span>
              <h3 className="text-2xl font-black text-white mb-3">
                {selectedLeaderModal.name}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {selectedLeaderModal.bio}
              </p>
              <blockquote className="p-3 rounded-xl bg-slate-900 border-l-2 border-[#00c2ff] text-xs text-sky-200 italic mb-4">
                “{selectedLeaderModal.quote}”
              </blockquote>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <span className="flex items-center gap-1 hover:text-white cursor-pointer">
                  <Linkedin className="w-4 h-4 text-[#00c2ff]" /> Hồ sơ chuyên môn
                </span>
                <span className="flex items-center gap-1 hover:text-white cursor-pointer">
                  <Mail className="w-4 h-4 text-[#00c2ff]" /> Liên hệ công việc
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
