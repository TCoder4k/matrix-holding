import React, { useEffect } from 'react';
import { PageBanner } from './PageBanner';
import { CorporateInfoSection } from './contact/CorporateInfoSection';
import { GoogleMapsLocationSection } from './contact/GoogleMapsLocationSection';
import { PartnershipInquiryForm } from './contact/PartnershipInquiryForm';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToMap = () => {
    const el = document.getElementById('section-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* BANNER TIÊU ĐẦU TRANG THEO THIẾT KẾ ĐÍCH (Ảnh 4) */}
      <PageBanner
        eyebrow="MATRIX HOLDING"
        title="Liên hệ"
        subtitle="Kết nối với Matrix Holding để trao đổi và hợp tác."
      />

      {/* 2. THÔNG TIN DOANH NGHIỆP — KHÁM PHÁ TỪNG CÁCH LIÊN HỆ */}
      <CorporateInfoSection
        onScrollToMap={scrollToMap}
      />

      {/* 3. GOOGLE MAPS — LÀM RÕ VỊ TRÍ VÀ CÁCH DI CHUYỂN (Ảnh 3) */}
      <GoogleMapsLocationSection />

      {/* 4. FORM HỢP TÁC — PHẢN HỒI THEO TIẾN TRÌNH ĐIỀN VÀ GỬI (Ảnh 4) */}
      <PartnershipInquiryForm />

    </div>
  );
};
