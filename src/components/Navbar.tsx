import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';

export type NavItemKey = 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact';

interface NavbarProps {
  activeTab: NavItemKey;
  onNavigate: (tab: NavItemKey) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenLogin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems: { key: NavItemKey; label: string }[] = [
    { key: 'home', label: 'Trang chủ' },
    { key: 'about', label: 'Giới thiệu' },
    { key: 'ecosystem', label: 'Hệ sinh thái' },
    { key: 'news', label: 'Tin tức' },
    { key: 'careers', label: 'Tuyển dụng' },
    { key: 'contact', label: 'Liên hệ' },
  ];

  // 100–500ms Navbar entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Trên Trang chủ, chỉ đổi sang header trắng khi đã cuộn qua phần lớn hero (> 450px)
      if (activeTab === 'home') {
        setIsScrolled(window.scrollY > 450);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleItemClick = (key: NavItemKey) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  // Header sáng chỉ khi ở trang con, hoặc khi đã cuộn qua hero trên trang chủ
  const isLightHeader = activeTab !== 'home' || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLightHeader
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5 lg:py-4'
          : 'bg-transparent py-5 lg:py-6'
      }`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-8px)',
        transitionProperty: 'opacity, transform, background-color, border-color, padding, box-shadow',
        transitionDuration: mounted ? '400ms' : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="w-full px-[5.4vw] flex items-center justify-between">
        {/* Left: Official Logo & Brand Name with vertical divider */}
        <button
          onClick={() => handleItemClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] rounded-lg cursor-pointer flex items-center gap-3 shrink-0"
          aria-label="Matrix Holding Trang chủ"
        >
          <img
             src={
               isLightHeader
                 ? '/images/logo-matrix-holding-dark.svg'
                 : '/images/logo-matrix-holding.svg'
             }
            alt="Matrix Holding"
            className="h-8 lg:h-9 w-auto object-contain block transition-opacity duration-200"
          />
          <span className={`w-[1.5px] h-5 ${isLightHeader ? 'bg-slate-300' : 'bg-slate-600'} inline-block`} />
          <span className={`font-semibold text-base sm:text-lg tracking-tight ${isLightHeader ? 'text-slate-900' : 'text-white'}`}>
            Matrix Holding
          </span>
        </button>

        {/* Center: Main Navigation Menu với độ tương phản cao và không bị tràn khung */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleItemClick(item.key)}
                className={`relative py-1.5 px-1 text-[15px] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] rounded-md ${
                  isActive
                    ? isLightHeader
                      ? 'text-[#0077b6] font-bold'
                      : 'text-[#00c2ff] font-bold'
                    : isLightHeader
                      ? 'text-slate-700 hover:text-[#0077b6] font-medium'
                      : 'text-slate-300 hover:text-white font-medium'
                }`}
              >
                <span>{item.label}</span>

                {/* Gạch cyan/blue mảnh bên dưới mục active: không có khung highlight bó sát, không đè viền */}
                {isActive && (
                  <span
                    className={`block w-6 h-[2.5px] rounded-full mx-auto mt-1.5 transition-all duration-200 ${
                      isLightHeader ? 'bg-[#0077b6]' : 'bg-[#00c2ff]'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Nút Đăng nhập tương phản cao, rõ ràng */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={onOpenLogin}
            className={`flex items-center gap-2.5 px-6 h-11 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 active:scale-[0.98] ${
              isLightHeader
                ? 'border border-slate-300 hover:border-[#0077b6] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0077b6] focus-visible:ring-[#0077b6]'
                : 'border border-[#00c2ff]/60 hover:border-[#00c2ff] bg-transparent hover:bg-[#00c2ff]/10 text-white focus-visible:ring-[#00c2ff]'
            }`}
          >
            <User
              className={`w-4 h-4 transition-colors ${
                isLightHeader ? 'text-slate-700' : 'text-white'
              }`}
            />
            <span>Đăng nhập</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={onOpenLogin}
            className={`p-2 rounded-full border ${
              isLightHeader
                ? 'border-slate-300 text-slate-800'
                : 'border-[#00c2ff]/60 text-white'
            }`}
            title="Đăng nhập"
          >
            <User className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${
              isLightHeader
                ? 'text-slate-700 hover:text-slate-900'
                : 'text-slate-300 hover:text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu tương thích sáng/tối */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in duration-200 border-b shadow-lg ${
            isLightHeader
              ? 'bg-white/98 backdrop-blur-xl border-slate-200 text-slate-800'
              : 'bg-[#051120]/95 backdrop-blur-xl border-[#0f2747] text-white'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleItemClick(item.key)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? isLightHeader
                      ? 'bg-sky-50 text-[#0077b6]'
                      : 'bg-[#00c2ff]/10 text-[#00c2ff]'
                    : isLightHeader
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-[#0077b6]'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isLightHeader ? 'bg-[#0077b6]' : 'bg-[#00c2ff]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
