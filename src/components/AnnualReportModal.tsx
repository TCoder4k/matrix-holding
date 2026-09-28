import { useState } from 'react';
import { X, Download, Check, FileText, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface AnnualReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export default function AnnualReportModal({ isOpen, onClose, lang }: AnnualReportModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl border border-slate-200 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded">
              <FileText className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400">
                {lang === 'vi' ? 'BÁO CÁO THƯỜNG NIÊN ĐIỆN TỬ' : 'DIGITAL ANNUAL REPORT'}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Matrix Holding Annual Report 2026: “Kiến Tạo Vị Thế Bền Vững”
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-800">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              {lang === 'vi' ? 'Thông Điệp Tổng Giám Đốc' : 'Executive Letter'}
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {lang === 'vi'
                ? 'Năm tài chính 2026 ghi nhận bước tiến nhảy vọt của Tập đoàn Matrix Holding với tổng doanh thu hợp nhất đạt 95,000 tỷ VND, hoàn thành vượt mức 108% kế hoạch Đại hội đồng Cổ đông giao phó. Động lực cốt lõi đến từ việc đưa vào vận hành cụm điện gió ngoài khơi Hải Đăng và mở rộng công suất sản xuất vi mạch bán dẫn.'
                : 'Fiscal Year 2026 marks an exceptional milestone for Matrix Holding Group, with consolidated revenues reaching 95,000 Billion VND, surpassing our AGM plan by 108%. The core catalysts remain the commissioning of the Hai Dang offshore wind cluster and the strategic ramp-up in advanced microchip packaging.'}
            </p>
          </div>

          {/* Key Figures Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-sm">
            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Tổng Doanh Thu' : 'Total Revenue'}</div>
              <div className="font-mono text-xl font-bold text-slate-900 tabular-nums">95,000 Tỷ</div>
              <div className="text-xs text-emerald-600 font-medium">+19.3% YoY</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Lợi Nhuận Sau Thuế' : 'Net Profit'}</div>
              <div className="font-mono text-xl font-bold text-slate-900 tabular-nums">16,500 Tỷ</div>
              <div className="text-xs text-emerald-600 font-medium">+25.0% YoY</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Biên EBITDA' : 'EBITDA Margin'}</div>
              <div className="font-mono text-xl font-bold text-slate-900 tabular-nums">26.4%</div>
              <div className="text-xs text-emerald-600 font-medium">+1.8% pts</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'ROE Bình Quân' : 'Return on Equity'}</div>
              <div className="font-mono text-xl font-bold text-slate-900 tabular-nums">22.8%</div>
              <div className="text-xs text-emerald-600 font-medium">AAA Tier</div>
            </div>
          </div>

          {/* Strategic Priorities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {lang === 'vi' ? '3 Định Hướng Chiến Lược 2027 - 2030' : 'Key Strategic Objectives 2027 - 2030'}
            </h4>
            <div className="space-y-3">
              <div className="p-4 bg-white border border-slate-200 rounded-sm flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 text-sm">01.</span>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong>{lang === 'vi' ? 'Làm chủ công nghệ đóng gói bán dẫn tiên tiến:' : 'Master advanced semiconductor packaging:'}</strong>{' '}
                  {lang === 'vi'
                    ? 'Giải tỏa nút thắt chip điều khiển xe điện cho các đối tác toàn cầu.'
                    : 'Unlocking automotive microcontrollers supply bottlenecks for global OEMs.'}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-sm flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 text-sm">02.</span>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong>{lang === 'vi' ? 'Mở rộng 1,400MW điện gió ngoài khơi:' : 'Scale 1,400MW offshore wind:'}</strong>{' '}
                  {lang === 'vi'
                    ? 'Cung cấp năng lượng phát thải ròng bằng 0 trực tiếp tới các KCN sinh thái nội bộ.'
                    : 'Delivering zero-emission green power directly to our eco-industrial hubs via direct PPA.'}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-sm flex items-start gap-3">
                <span className="font-mono font-bold text-slate-900 text-sm">03.</span>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong>{lang === 'vi' ? 'Tài chính Xanh & Quản trị Minh bạch:' : 'Green Capital & Transparent Governance:'}</strong>{' '}
                  {lang === 'vi'
                    ? 'Duy trì xếp hạng tín nhiệm AAA quốc tế, chuẩn bị niêm yết chứng chỉ lưu ký quốc tế (GDR).'
                    : 'Maintain international AAA rating and prepare cross-border Global Depository Receipts.'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            {lang === 'vi'
              ? 'Tài liệu đầy đủ: 184 trang · File PDF chuẩn in ấn chất lượng cao (18.4 MB)'
              : 'Full document: 184 pages · High-resolution print-ready PDF (18.4 MB)'}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              {lang === 'vi' ? 'Đóng cửa sổ' : 'Close'}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm transition-colors shadow-xs"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'vi' ? 'Đang tải xuống báo cáo...' : 'Downloading PDF...'}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Tải Toàn Văn Báo Cáo PDF' : 'Download Complete PDF'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
