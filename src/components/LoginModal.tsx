import { useState } from 'react';
import { X, User, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; role: string }) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [portalType, setPortalType] = useState<'partner' | 'enterprise'>('partner');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ thông tin tài khoản và mật khẩu.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate authenticating against Matrix Enterprise Auth
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        name: email.includes('@') ? email.split('@')[0].replace('.', ' ').toUpperCase() : 'NGUYỄN VĂN AN',
        email: email.includes('@') ? email : `${email}@matrixholding.vn`,
        role: portalType === 'partner' ? 'Đối tác chiến lược' : 'Cổng Doanh nghiệp',
      });
      onClose();
    }, 600);
  };

  const handleQuickDemo = (type: 'partner' | 'enterprise') => {
    if (type === 'partner') {
      setEmail('an.nguyen@matrixpartner.vn');
      setPassword('MatrixPartner@2025');
      setPortalType('partner');
    } else {
      setEmail('corp.admin@matrixholding.vn');
      setPassword('MatrixCorp@2025');
      setPortalType('enterprise');
    }
    setError(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030c17]/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#081c31] border border-[#27d9ef]/30 text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(39,217,239,0.2)] relative overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#27d9ef]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0284c7]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 shrink-0">
            <img
              src="/images/logo-matrix-holding.svg"
              alt="Matrix Holding"
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(39,217,239,0.5)]"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg tracking-wider text-white font-display">
              MATRIX
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#27d9ef] font-bold uppercase mt-0.5">
              HOLDING PORTAL
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            Đăng nhập hệ thống
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Cổng thông tin bảo mật dành cho Đối tác, Cổ đông và Đơn vị thành viên Matrix Holding.
          </p>
        </div>

        {/* Portal Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setPortalType('partner')}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              portalType === 'partner'
                ? 'bg-[#27d9ef] text-[#081c31] font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Đối tác & Hội viên
          </button>
          <button
            type="button"
            onClick={() => setPortalType('enterprise')}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              portalType === 'enterprise'
                ? 'bg-[#27d9ef] text-[#081c31] font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Doanh nghiệp nội bộ
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email / Mã định danh đối tác
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={portalType === 'partner' ? 'partner@matrixholding.vn' : 'admin@matrixholding.vn'}
                className="w-full pl-10 pr-4 py-2.5 bg-black/30 border border-white/15 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Mật khẩu
              </label>
              <button
                type="button"
                onClick={() => alert('Vui lòng liên hệ bộ phận Quản trị Hệ thống qua email contact@matrixholding.vn để đặt lại mật khẩu.')}
                className="text-[11px] text-[#27d9ef] hover:underline cursor-pointer"
              >
                Quên mật khẩu?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-black/30 border border-white/15 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#27d9ef] focus:ring-1 focus:ring-[#27d9ef] transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded-sm border-slate-600 text-[#27d9ef] focus:ring-[#27d9ef] bg-black/40 accent-[#27d9ef]"
            />
            <label htmlFor="rememberMe" className="text-xs text-slate-300 cursor-pointer select-none">
              Duy trì đăng nhập trên thiết bị này
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#27d9ef] hover:bg-[#20c4d8] text-[#081c31] font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(39,217,239,0.3)] hover:scale-[1.01] cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#081c31] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Đăng nhập vào hệ thống</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Demo Quick Fill for Reviewers */}
        <div className="mt-5 pt-4 border-t border-white/10 text-center">
          <div className="text-[11px] text-slate-400 mb-2">
            Thử nghiệm nhanh tài khoản mẫu:
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('partner')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#27d9ef] text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            >
              Đối tác mẫu
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('enterprise')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            >
              Quản trị viên
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#27d9ef]" />
          <span>Bảo mật 2 lớp SSL 256-bit chuẩn Doanh nghiệp Matrix</span>
        </div>
      </div>
    </div>
  );
}
