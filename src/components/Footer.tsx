import React from 'react';
import { MatrixLogo } from './MatrixLogo';
import { NavItemKey } from './Navbar';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavItemKey) => void;
  activeTab?: NavItemKey;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, activeTab }) => {
  return (
    <footer className="bg-[#0b1a30] text-slate-400 border-t border-[#132847]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        
        {/* 4 Cột theo mẫu thiết kế */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Cột 1 (4/12): Logo và Định vị thương hiệu */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <MatrixLogo size="md" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Kiến tạo giá trị bền vững thông qua đầu tư và phát triển hệ sinh thái đa ngành.
            </p>
          </div>

          {/* Cột 2 (2/12): Điều hướng 1 */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3.5">
              Điều hướng
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'home' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'about' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Giới thiệu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ecosystem')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'ecosystem' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Hệ sinh thái
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3 (2/12): Điều hướng 2 */}
          <div className="lg:col-span-2 pt-0 sm:pt-6 lg:pt-7">
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'news' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Tin tức
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'careers' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Tuyển dụng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`transition-colors cursor-pointer ${
                    activeTab === 'contact' ? 'text-[#00c2ff] font-semibold' : 'hover:text-white'
                  }`}
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 4 (4/12): Thông tin liên hệ */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3.5">
              Thông tin liên hệ
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00c2ff] shrink-0" />
                <a href="mailto:matrixholding.support@gmail.com" className="hover:text-white transition-colors">
                  matrixholding.support@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00c2ff] shrink-0" />
                <a href="tel:+84964243026" className="hover:text-white transition-colors">
                  (+84) 964 243 026
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00c2ff] shrink-0 mt-0.5" />
                <span>KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Chân trang dòng bản quyền */}
        <div className="pt-6 text-xs text-slate-500">
          © 2026 Matrix Holding. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
