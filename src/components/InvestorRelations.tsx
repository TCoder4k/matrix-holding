import { useState } from 'react';
import { Download, FileSpreadsheet, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { FINANCIAL_METRICS } from '../data/conglomerateData';

interface InvestorRelationsProps {
  onOpenReport: () => void;
  lang: 'vi' | 'en';
}

export default function InvestorRelations({ onOpenReport, lang }: InvestorRelationsProps) {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const handleSimulateDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 2500);
  };

  const reports = [
    {
      id: 'ar-2025',
      title: lang === 'vi' ? 'Báo Cáo Thường Niên 2025 (Kiểm toán PwC)' : 'Annual Report 2025 (Audited by PwC)',
      date: '15/04/2026',
      size: '14.8 MB · PDF',
      type: 'Annual Report'
    },
    {
      id: 'fs-q2-2026',
      title: lang === 'vi' ? 'Báo Cáo Tài Chính Hợp Nhất Soát Xét Q2/2026' : 'Consolidated Financial Statements Q2/2026',
      date: '28/07/2026',
      size: '6.2 MB · PDF',
      type: 'Quarterly Financials'
    },
    {
      id: 'esg-2025',
      title: lang === 'vi' ? 'Báo Cáo Phát Triển Bền Vững & Khí Hậu ESG 2025' : 'ESG & Climate Sustainability Report 2025',
      date: '30/05/2026',
      size: '9.4 MB · PDF',
      type: 'ESG Disclosure'
    },
    {
      id: 'corp-gov-2026',
      title: lang === 'vi' ? 'Quy Chế Quản Trị Nội Bộ & Báo Cáo Thù Lao HĐQT 2026' : 'Corporate Governance Charter & Board Compensation 2026',
      date: '20/06/2026',
      size: '3.1 MB · PDF',
      type: 'Governance'
    }
  ];

  return (
    <section id="investor" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {lang === 'vi' ? 'QUAN HỆ CỔ ĐÔNG & ĐẦU TƯ' : 'INVESTOR RELATIONS'}
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 text-balance">
            {lang === 'vi'
              ? 'Kỷ Luật Tài Chính Vững Vàng & Tối Ưu Hóa Giá Trị Cổ Đông'
              : 'Disciplined Capital Allocation & Enduring Shareholder Value'}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {lang === 'vi'
              ? 'Tăng trưởng doanh thu hợp nhất bình quân CAGR 22.5% trong 5 năm liên tiếp, duy trì tỷ lệ đòn bẩy an toàn và chính sách chi trả cổ tức tiền mặt nhất quán.'
              : '5-year consolidated revenue CAGR of 22.5%, conservative leverage ratios, and consistent cash dividend distributions.'}
          </p>
        </div>

        {/* Stock Snapshot Bar */}
        <div className="mt-10 bg-white p-6 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center font-display font-bold text-sm">
              MTX
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-lg">HOSE: MTX</span>
                <span className="text-xs text-slate-500">· Matrix Holding Corp</span>
              </div>
              <div className="text-xs text-slate-500">
                {lang === 'vi' ? 'Niêm yết tại Sở GDCK TP. Hồ Chí Minh' : 'Listed on Ho Chi Minh City Stock Exchange'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm">
            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Thị giá' : 'Share Price'}</div>
              <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                68,500 <span className="text-xs text-emerald-600 font-medium">+2.4%</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Vốn hóa' : 'Market Cap'}</div>
              <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                $4.82B USD
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'P/E TTM' : 'P/E Ratio'}</div>
              <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                8.4x
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-500">{lang === 'vi' ? 'Tỷ suất cổ tức' : 'Dividend Yield'}</div>
              <div className="font-mono text-lg font-bold text-emerald-700 tabular-nums">
                14.5% / năm
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenReport}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm transition-colors whitespace-nowrap"
          >
            {lang === 'vi' ? 'Hồ Sơ Cổ Đông' : 'Investor Factsheet'}
          </button>
        </div>

        {/* Financial Metrics Table with Tabular Figures */}
        <div className="mt-12 bg-white border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                {lang === 'vi' ? 'Kết Quả Kinh Doanh Hợp Nhất 2022 - 2026' : 'Consolidated Financial Performance 2022 - 2026'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'vi' ? 'Đơn vị tính: Tỷ Đồng (VND) · Kiểm toán độc lập bởi PwC Việt Nam' : 'Unit: Billion VND · Independently audited by PwC Vietnam'}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'vi' ? 'Số liệu chuẩn IFRS' : 'IFRS Compliant'}</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase text-slate-600 tracking-wider">
                  <th className="py-3.5 px-6">{lang === 'vi' ? 'Chỉ tiêu tài chính' : 'Financial Metric'}</th>
                  {FINANCIAL_METRICS.map((m) => (
                    <th key={m.year} className="py-3.5 px-6 text-right font-mono">
                      {m.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-800 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 font-sans font-medium text-slate-900">
                    {lang === 'vi' ? 'Doanh thu thuần' : 'Net Revenue'}
                  </td>
                  {FINANCIAL_METRICS.map((m) => (
                    <td key={m.year} className="py-3.5 px-6 text-right tabular-nums font-semibold">
                      {m.revenue.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 font-sans font-medium text-slate-900">
                    {lang === 'vi' ? 'EBITDA hợp nhất' : 'Consolidated EBITDA'}
                  </td>
                  {FINANCIAL_METRICS.map((m) => (
                    <td key={m.year} className="py-3.5 px-6 text-right tabular-nums text-slate-700">
                      {m.ebitda.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 font-sans font-medium text-slate-900">
                    {lang === 'vi' ? 'Lợi nhuận sau thuế' : 'Net Profit After Tax'}
                  </td>
                  {FINANCIAL_METRICS.map((m) => (
                    <td key={m.year} className="py-3.5 px-6 text-right tabular-nums text-emerald-700 font-semibold">
                      {m.netProfit.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors bg-slate-50/40">
                  <td className="py-3.5 px-6 font-sans font-medium text-slate-900">
                    {lang === 'vi' ? 'Tổng tài sản hợp nhất' : 'Total Assets'}
                  </td>
                  {FINANCIAL_METRICS.map((m) => (
                    <td key={m.year} className="py-3.5 px-6 text-right tabular-nums text-slate-900 font-bold">
                      {m.assets.toLocaleString()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Corporate Reports Download Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-slate-900">
              {lang === 'vi' ? 'Tài Liệu & Báo Cáo Tài Chính Mới Nhất' : 'Financial Reports & Publications'}
            </h3>
            <span className="text-xs text-slate-500">
              {lang === 'vi' ? 'Cập nhật Q3/2026' : 'Updated Q3/2026'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-5 border border-slate-200 rounded-sm flex items-start justify-between gap-4 hover:border-slate-400 transition-colors shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 rounded text-slate-700 mt-0.5">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900">
                      {report.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span>{report.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSimulateDownload(report.id)}
                  className={`p-2 rounded transition-colors shrink-0 text-xs font-medium flex items-center gap-1.5 ${
                    downloadedDoc === report.id
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                  title="Tải về tài liệu"
                >
                  {downloadedDoc === report.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{lang === 'vi' ? 'Đã tải' : 'Downloaded'}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>{lang === 'vi' ? 'Tải PDF' : 'Download'}</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
