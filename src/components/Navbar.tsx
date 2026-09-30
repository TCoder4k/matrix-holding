import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut, ChevronDown, Shield } from 'lucide-react';

export type NavTabKey = 'home' | 'about' | 'ecosystem' | 'news' | 'careers' | 'contact';

export interface CurrentUser {
  name: string;
  email: string;
  role: string;
}

interface NavbarProps {
  activeTab: NavTabKey;
  onSelectTab: (tab: NavTabKey) => void;
  onOpenContact?: (topic?: string) => void;
  onOpenLogin: () => void;
  currentUser?: CurrentUser | null;
  onLogout?: () => void;
}

export default function Navbar({
  activeTab,
  onSelectTab,
  onOpenContact,
  onOpenLogin,
  currentUser,
  onLogout,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { key: NavTabKey; label: string }[] = [
    { key: 'home', label: 'Trang chủ' },
    { key: 'about', label: 'Giới thiệu' },
    { key: 'ecosystem', label: 'Hệ sinh thái' },
    { key: 'news', label: 'Tin tức' },
    { key: 'careers', label: 'Tuyển dụng' },
    { key: 'contact', label: 'Liên hệ' },
  ];

  const handleLinkClick = (key: NavTabKey) => {
    setMobileMenuOpen(false);
    onSelectTab(key);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06182c]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
          : 'bg-[#071a2e]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        {/* ================================================================= */}
        {/* 1. BRAND LOGO - 100% matching Reference Mockup                    */}
        {/* Faceted 3D Metallic M Logo + MATRIX HOLDING Typography            */}
        {/* ================================================================= */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer select-none shrink-0"
        >
          {/* Logo Mark: Pure transparent 3D Metallic M Emblem */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
            <img
              src="/images/logo-matrix-holding.svg"
              alt="Matrix Holding"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(39,217,239,0.4)] group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white font-display">
              MATRIX
            </span>
            <span className="text-[9px] sm:text-[9.5px] tracking-[0.32em] text-slate-300 group-hover:text-[#27d9ef] font-semibold uppercase mt-0.5 transition-colors">
              HOLDING
            </span>
          </div>
        </button>

        {/* ================================================================= */}
        {/* 2. HORIZONTAL CENTER NAVIGATION - Generous & Balanced Spacing     */}
        {/* ================================================================= */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-11 text-[15px] font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.key;
            return (
              <button
                key={link.key}
                type="button"
                onClick={() => handleLinkClick(link.key)}
                className={`transition-all duration-200 relative py-1 cursor-pointer select-none ${
                  isActive
                    ? 'text-[#27d9ef] font-semibold border-b-2 border-[#27d9ef] pb-1'
                    : 'text-white/90 hover:text-[#27d9ef]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* ================================================================= */}
        {/* 3. RIGHT SIDE: ĐĂNG NHẬP BUTTON - 100% matching Reference Mockup  */}
        {/* Cyan bordered pill box with outline user icon & 'Đăng nhập'       */}
        {/* ================================================================= */}
        <div className="hidden md:flex items-center shrink-0">
          {currentUser ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[#27d9ef]/60 bg-[#27d9ef]/10 text-white hover:border-[#27d9ef] hover:bg-[#27d9ef]/15 transition-all text-sm font-medium cursor-pointer shadow-[0_0_15px_rgba(39,217,239,0.2)]"
              >
                <div className="w-6 h-6 rounded-full bg-[#27d9ef] text-[#081c31] font-extrabold flex items-center justify-center text-xs">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left leading-none">
                  <div className="text-xs font-bold text-white max-w-[120px] truncate">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-[#27d9ef] mt-0.5">
                    {currentUser.role}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 ml-1" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#081c31] border border-white/10 shadow-2xl py-2 text-xs text-slate-200 z-50 animate-scale-up">
                  <div className="px-4 py-2.5 border-b border-white/10">
                    <div className="font-bold text-white">{currentUser.name}</div>
                    <div className="text-slate-400 text-[11px] truncate">{currentUser.email}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      onSelectTab('ecosystem');
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-white/5 hover:text-[#27d9ef] flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Shield className="w-4 h-4 text-[#27d9ef]" />
                    <span>Cổng thông tin đối tác</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      onLogout?.();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-red-500/10 text-red-300 flex items-center gap-2 cursor-pointer transition-colors border-t border-white/10 mt-1"
                  >
                    <LogOut className="w-4 h-4 text-red-400" />
                    <span>Đăng xuất</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2.5 px-6 py-2 rounded-xl border border-[#27d9ef] text-white hover:bg-[#27d9ef]/10 transition-all font-medium text-sm shadow-[0_0_15px_rgba(39,217,239,0.15)] hover:shadow-[0_0_20px_rgba(39,217,239,0.35)] cursor-pointer"
            >
              <User className="w-4.5 h-4.5 text-[#27d9ef]" />
              <span>Đăng nhập</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#27d9ef] transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081c31] border-b border-white/10 px-6 py-6 text-white space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-base">
            {navLinks.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <button
                  key={link.key}
                  type="button"
                  onClick={() => handleLinkClick(link.key)}
                  className={`text-left py-1.5 transition-colors cursor-pointer flex items-center justify-between ${
                    isActive ? 'text-[#27d9ef] font-bold' : 'text-slate-200 hover:text-[#27d9ef]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#27d9ef]" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10">
            {currentUser ? (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{currentUser.name}</div>
                  <div className="text-xs text-[#27d9ef]">{currentUser.role}</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout?.();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 text-xs font-medium border border-red-500/20"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#27d9ef] text-white hover:bg-[#27d9ef]/10 text-sm font-semibold transition-all shadow-[0_0_15px_rgba(39,217,239,0.2)]"
              >
                <User className="w-4 h-4 text-[#27d9ef]" />
                <span>Đăng nhập</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
