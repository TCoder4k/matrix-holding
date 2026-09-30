import { Linkedin, Facebook, Youtube, Link as LinkIcon } from 'lucide-react';
import { NavTabKey } from './Navbar';

interface FooterProps {
  onNavigate?: (tab: NavTabKey, sectionId?: string) => void;
  onOpenContact?: (topic?: string) => void;
  variant?: 'default' | 'streamlined';
}

export default function Footer({ onNavigate, onOpenContact, variant = 'default' }: FooterProps) {
  const handleNav = (tab: NavTabKey, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(tab, sectionId);
    }
  };

  if (variant === 'streamlined') {
    return (
      <footer className="bg-[#051323] text-slate-300 py-6 border-t border-white/10 text-xs sm:text-sm">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo - 100% transparent icon */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left cursor-pointer group select-none"
          >
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <img
                src="/images/logo-matrix-holding.svg"
                alt="Matrix Holding"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(39,217,239,0.3)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg tracking-wider text-white font-display">
                MATRIX
              </span>
              <span className="text-[9px] tracking-[0.32em] text-slate-300 group-hover:text-[#27d9ef] font-semibold uppercase mt-0.5 transition-colors">
                HOLDING
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-300">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Giới thiệu
            </button>
            <button
              type="button"
              onClick={() => handleNav('ecosystem')}
              className="text-[#27d9ef] font-semibold hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Hệ sinh thái
            </button>
            <button
              type="button"
              onClick={() => handleNav('news')}
              className="hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Tin tức
            </button>
            <button
              type="button"
              onClick={() => handleNav('careers')}
              className="hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Tuyển dụng
            </button>
            <button
              type="button"
              onClick={() => handleNav('contact')}
              className="hover:text-[#27d9ef] transition-colors cursor-pointer"
            >
              Liên hệ
            </button>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#081c31] text-slate-400 py-16 border-t border-white/10 text-xs sm:text-sm">
      <div className="container-page">
        {/* Top 6 Columns matching Mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline & Socials */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left cursor-pointer group select-none"
            >
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo-matrix-holding.svg"
                  alt="Matrix Holding"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(39,217,239,0.3)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base tracking-wider text-white font-display">
                  MATRIX
                </span>
                <span className="text-[8.5px] tracking-[0.3em] text-slate-300 group-hover:text-[#27d9ef] font-semibold uppercase mt-0.5 transition-colors">
                  HOLDING
                </span>
              </div>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kiến tạo giá trị bền vững vì một tương lai tốt đẹp hơn.
            </p>

            {/* Social Icons matching mockup */}
            <div className="flex items-center gap-2.5 pt-1 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#27d9ef] hover:text-[#081c31] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#27d9ef] hover:text-[#081c31] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#27d9ef] hover:text-[#081c31] flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-[#27d9ef] hover:text-[#081c31] flex items-center justify-center transition-all"
                aria-label="Share"
              >
                <LinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Về chúng tôi */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Về chúng tôi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', 'gioi-thieu-hero')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tổng quan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', 'su-menh-tam-nhin')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tầm nhìn – Sứ mệnh
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', 'gia-tri-cot-loi')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Giá trị cốt lõi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about', 'lanh-dao')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ban lãnh đạo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hệ sinh thái */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Hệ sinh thái
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('ecosystem', 'ba-thuong-hieu')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  MATRIX Network
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('ecosystem', 'ba-thuong-hieu')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  MATRIX Capital
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('ecosystem', 'ba-thuong-hieu')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  MATRIX Community
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('ecosystem', 'mo-hinh-lien-ket')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mô hình liên kết
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tin tức */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Tin tức
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('news')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bài viết nổi bật
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('news')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Câu chuyện Matrix
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('news')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Góc nhìn chuyên gia
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Tuyển dụng */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Tuyển dụng
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('careers', 'nhom-chuyen-mon')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cơ hội nghề nghiệp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('careers', 'tai-sao-dong-hanh')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Văn hóa doanh nghiệp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('careers', 'tai-sao-dong-hanh')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Lộ trình phát triển
                </button>
              </li>
            </ul>
          </div>

          {/* Col 6: Liên hệ */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Liên hệ
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>TP. Hồ Chí Minh, Việt Nam</p>
              <p className="font-mono text-slate-300">+84 28 1234 5678</p>
              <p className="text-slate-300">contact@matrixholding.vn</p>
            </div>
            <ul className="space-y-1.5 text-xs pt-1">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#27d9ef] transition-colors cursor-pointer text-left text-[#27d9ef] font-medium"
                >
                  Liên hệ trực tiếp →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Mockup */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 MATRIX HOLDING. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Chính sách bảo mật
            </a>
            <span aria-hidden="true">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
