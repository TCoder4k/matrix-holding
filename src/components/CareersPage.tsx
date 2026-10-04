import React, { useState, useEffect } from 'react';
import { CareersHeroBanner } from './careers/CareersHeroBanner';
import { CareersJobListAndFilter } from './careers/CareersJobListAndFilter';

interface CareersPageProps {
  onNavigateHome: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchSubmit = () => {
    const el = document.getElementById('careers-results-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. BANNER TUYỂN DỤNG — MỞ RA "HÀNH TRÌNH TIẾP THEO" (Ảnh 2) */}
      <CareersHeroBanner
        keyword={searchKeyword}
        onKeywordChange={setSearchKeyword}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2 & 3 & 4. TÌM KIẾM, BỘ LỌC, DANH SÁCH & BẢNG CHI TIẾT ỨNG TUYỂN (Ảnh 1, 3, 4) */}
      <CareersJobListAndFilter keyword={searchKeyword} />

    </div>
  );
};
