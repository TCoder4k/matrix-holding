import React, { useState } from 'react';
import { X, Lock, Mail, Eye, EyeOff, UserCheck, Shield } from 'lucide-react';
import { MatrixLogo } from './MatrixLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (tab === 'login') {
        setLoginSuccess(`Xin chào đối tác ${email || 'Matrix Partner'}! Đang chuyển hướng vào Cổng Cổ đông...`);
      } else {
        setLoginSuccess(`Đã ghi nhận yêu cầu khởi tạo tài khoản doanh nghiệp cho ${company || fullName}!`);
      }

      setTimeout(() => {
        setLoginSuccess(null);
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleQuickDemo = () => {
    setEmail('partner@matrixholding.vn');
    setPassword('MatrixHolding2026!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden my-6">
        
        {/* Top brand banner */}
        <div className="bg-[#071526] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center mb-3">
            <MatrixLogo size="sm" />
          </div>
          <span className="text-xs text-[#00c2ff] font-semibold tracking-wider uppercase block">
            CỔNG THÀNH VIÊN & ĐỐI TÁC CHIẾN LƯỢC
          </span>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-100 bg-slate-50">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-3 text-sm font-bold text-center transition-colors ${
              tab === 'login'
                ? 'bg-white text-[#009fe3] border-b-2 border-[#009fe3]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-3 text-sm font-bold text-center transition-colors ${
              tab === 'register'
                ? 'bg-white text-[#009fe3] border-b-2 border-[#009fe3]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Đăng ký đối tác
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {loginSuccess ? (
            <div className="py-8 text-center animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                <UserCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Xác thực thành công!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                {loginSuccess}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === 'register' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Họ và tên người đại diện
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#009fe3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Tên doanh nghiệp / Pháp nhân
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Công ty CP Công nghệ ABC"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#009fe3]"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Email đăng nhập
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="partner@company.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#009fe3]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Mật khẩu
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#009fe3]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {tab === 'login' && (
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-slate-300 text-[#009fe3] focus:ring-0"
                    />
                    <span>Ghi nhớ phiên đăng nhập</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Vui lòng liên hệ ban quản trị qua email contact@matrixholding.vn để đặt lại mật khẩu bảo mật.')}
                    className="text-[#008fc6] hover:underline"
                  >
                    Quên mật khẩu?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-full bg-[#009fe3] hover:bg-[#008bc6] text-white text-sm font-bold shadow-md shadow-[#009fe3]/25 transition-all mt-4 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? 'Đang xử lý...' : tab === 'login' ? 'Đăng nhập cổng bảo mật' : 'Gửi đăng ký tài khoản'}
              </button>

              {tab === 'login' && (
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleQuickDemo}
                    className="text-xs text-slate-500 hover:text-[#009fe3] underline transition-colors"
                  >
                    Điền nhanh tài khoản mẫu đối tác thử nghiệm
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Bảo mật 2 lớp SSL 256-bit theo tiêu chuẩn ngân hàng</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
