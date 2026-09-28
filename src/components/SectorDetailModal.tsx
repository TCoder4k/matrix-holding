import { X, CheckCircle2, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { BusinessSector } from '../types';

interface SectorDetailModalProps {
  sector: BusinessSector | null;
  onClose: () => void;
  lang: 'vi' | 'en';
  onContactPillar: () => void;
}

export default function SectorDetailModal({ sector, onClose, lang, onContactPillar }: SectorDetailModalProps) {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl border border-slate-200 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with Background Sector Preview */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
          <img
            src={sector.image}
            alt={sector.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-sm text-white transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="text-xs uppercase tracking-widest text-slate-300 font-mono">
              {sector.englishName}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-white">
              {lang === 'vi' ? sector.name : sector.englishName}
            </h3>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-800">
          {/* Tagline & Overview */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              {lang === 'vi' ? 'Định Hướng Chiến Lược' : 'Strategic Focus'}
            </div>
            <p className="font-display text-lg font-semibold text-slate-900">
              {sector.tagline}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {sector.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-200/80 rounded-sm">
            {sector.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Key Subsidiaries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {lang === 'vi' ? 'Hệ Thống Công Ty Thành Viên & Doanh Nghiệp Liên Kết' : 'Key Subsidiaries & Operating Entities'}
            </h4>
            <div className="space-y-3">
              {sector.subsidiaries.map((sub) => (
                <div
                  key={sub.name}
                  className="p-4 bg-white border border-slate-200 rounded-sm space-y-1 hover:border-slate-300 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-sm text-slate-900">{sub.name}</span>
                    <span className="text-xs text-slate-500 font-medium">{sub.role}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sub.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {lang === 'vi' ? 'Dự Án Trọng Điểm Đang Triển Khai' : 'Flagship Projects in Pipeline'}
            </h4>
            <div className="space-y-2">
              {sector.keyProjects.map((proj, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ESG Highlight */}
          <div className="p-4 bg-emerald-50/50 border border-emerald-200/80 rounded-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-950">
              <span className="font-bold">{lang === 'vi' ? 'Dấu ấn ESG & Tuần hoàn: ' : 'ESG & Circular Impact: '}</span>
              <span>{sector.esgHighlight}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            {lang === 'vi' ? 'Đóng' : 'Close'}
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onContactPillar();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm transition-colors shadow-xs"
          >
            <span>{lang === 'vi' ? 'Đề Xuất Hợp Tác Với Trụ Cột Này' : 'Propose Collaboration in this Pillar'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
