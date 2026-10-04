import React, { useState, useEffect } from 'react';
import { PageBanner } from './PageBanner';
import { BrandStorySection } from './about/BrandStorySection';
import { StrategicPartnersSection } from './about/StrategicPartnersSection';
import { BrandPositioningSection } from './about/BrandPositioningSection';
import { MissionBridgeSection } from './about/MissionBridgeSection';
import { StrategicVisionSection } from './about/StrategicVisionSection';
import { CoreValuesSection } from './about/CoreValuesSection';
import { LeadershipGallerySection } from './about/LeadershipGallerySection';
import { OperatingModelSection } from './about/OperatingModelSection';
import { HistoricalTimelineSection } from './about/HistoricalTimelineSection';
import { WorkflowRoadmapSection } from './about/WorkflowRoadmapSection';
import { CommitmentTermsSection } from './about/CommitmentTermsSection';
import { CompetitiveEdgeSection } from './about/CompetitiveEdgeSection';
import { ChairmanDeclarationSection } from './about/ChairmanDeclarationSection';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenLogin?: () => void;
  onNavigateTab?: (tab: 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateTab,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('brand-story');

  const navItems = [
    { id: 'brand-story', label: 'Câu chuyện' },
    { id: 'partners', label: 'Đối tác' },
    { id: 'positioning', label: 'Định vị' },
    { id: 'mission', label: 'Sứ mệnh' },
    { id: 'vision', label: 'Tầm nhìn' },
    { id: 'values', label: 'Giá trị' },
    { id: 'leadership', label: 'Lãnh đạo' },
    { id: 'operating-model', label: 'Mô hình' },
    { id: 'history', label: 'Lịch sử' },
    { id: 'workflow', label: 'Quy trình' },
    { id: 'commitments', label: 'Cam kết' },
    { id: 'advantages', label: 'Lợi thế' },
    { id: 'chairman', label: 'Tuyên ngôn' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* BANNER TIÊU ĐỀ ĐẦU TRANG THEO THIẾT KẾ ĐÍCH */}
      <PageBanner
        eyebrow="MATRIX HOLDING"
        title="Giới thiệu"
        subtitle="Hành trình kiến tạo hệ sinh thái, kết nối nguồn lực và phát triển giá trị bền vững."
      />

      {/* THANH ĐIỀU HƯỚNG NHANH CÁC CHUYÊN ĐỀ (STICKY PILL NAV) */}
      <div className="sticky top-20 lg:top-[84px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 overflow-x-auto scrollbar-none flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSectionId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#061527] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0d1d2f] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CÂU CHUYỆN THƯƠNG HIỆU — KỂ CHUYỆN QUA CÁC LỚP ẢNH */}
      <div id="brand-story">
        <BrandStorySection />
      </div>

      {/* 2. ĐỐI TÁC CHIẾN LƯỢC — DẢI KẾT NỐI CHUYỂN ĐỘNG */}
      <div id="partners">
        <StrategicPartnersSection />
      </div>

      {/* 3. ĐỊNH VỊ THƯƠNG HIỆU — LOGO ĐƯỢC KIẾN TẠO */}
      <div id="positioning">
        <BrandPositioningSection
          onExploreEcosystem={() => onNavigateTab ? onNavigateTab('ecosystem') : undefined}
        />
      </div>

      {/* 4. SỨ MỆNH DOANH NGHIỆP — NHỮNG MẢNH CẦU KẾT NỐI */}
      <div id="mission">
        <MissionBridgeSection />
      </div>

      {/* 5. TẦM NHÌN CHIẾN LƯỢC — TIẾN QUA NHỮNG CÁNH CỔNG */}
      <div id="vision">
        <StrategicVisionSection />
      </div>

      {/* 6. GIÁ TRỊ CỐT LÕI — NHỮNG KHỐI TƯƠNG TÁC */}
      <div id="values">
        <CoreValuesSection />
      </div>

      {/* 7. BAN LÃNH ĐẠO — GALLERY CHÂN DUNG MỞ RỘNG */}
      <div id="leadership">
        <LeadershipGallerySection />
      </div>

      {/* 8. MÔ HÌNH HOẠT ĐỘNG — HỆ SINH THÁI CÓ THỂ KHÁM PHÁ */}
      <div id="operating-model">
        <OperatingModelSection />
      </div>

      {/* 9. LỊCH SỬ HÌNH THÀNH — TRIỂN LÃM CÁC DẤU MỐC */}
      <div id="history">
        <HistoricalTimelineSection />
      </div>

      {/* 10. QUY TRÌNH LÀM VIỆC — MỘT ĐƯỜNG SÁNG DẪN QUA TỪNG BƯỚC */}
      <div id="workflow">
        <WorkflowRoadmapSection />
      </div>

      {/* 11. ĐIỀU KHOẢN CAM KẾT — CHUYỂN MỤC NHƯ ĐỌC TÀI LIỆU */}
      <div id="commitments">
        <CommitmentTermsSection />
      </div>

      {/* 12. LỢI THẾ CẠNH TRANH — MỞ TỪNG LỚP NĂNG LỰC */}
      <div id="advantages">
        <CompetitiveEdgeSection />
      </div>

      {/* 13. TUYÊN NGÔN CỦA CHỦ TỊCH — KẾT TRANG BẰNG THÔNG ĐIỆP */}
      <div id="chairman">
        <ChairmanDeclarationSection
          onContactClick={() => onNavigateTab ? onNavigateTab('contact') : undefined}
        />
      </div>

    </div>
  );
};
