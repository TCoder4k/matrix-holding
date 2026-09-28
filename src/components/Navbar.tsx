import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MatrixLogo from './MatrixLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

const navLinks = [
  { href: '#ve-chung-toi', label: 'Về chúng tôi' },
  { href: '#he-sinh-thai', label: 'Hệ sinh thái' },
  { href: '#du-an', label: 'Dự án' },
  { href: '#tin-tuc', label: 'Tin tức' },
  { href: '#tuyen-dung', label: 'Tuyển dụng' },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'border-b border-white/10 bg-[#081c31]/95 py-3 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6">
        {/* Chỉ hiển thị biểu tượng logo */}
        <a
  href="#dau-trang"
  aria-label="Matrix Holding - về đầu trang"
  onClick={() => setMobileMenuOpen(false)}
  className="inline-flex shrink-0 items-center"
>
  <MatrixLogo
    size="xl"
    className="drop-shadow-[0_0_10px_rgba(39,217,239,0.35)]"
  />
</a>
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Điều hướng chính"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-[#27d9ef]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOpenContact}
          className="hidden items-center gap-2 rounded-full bg-[#27d9ef] px-5 py-2.5 text-sm font-bold text-[#081c31] transition-colors hover:bg-[#7aebf6] lg:inline-flex"
        >
          Hợp tác đầu tư
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-md p-2 text-white hover:text-[#27d9ef] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Điều hướng trên điện thoại"
          className="mt-3 flex flex-col gap-1 border-t border-white/10 bg-[#081c31] px-6 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-slate-200 hover:text-[#27d9ef]"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#27d9ef] px-5 py-3 font-bold text-[#081c31]"
          >
            Hợp tác đầu tư
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </header>
  );
}