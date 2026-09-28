import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { NewsArticle } from '../types';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export default function NewsDetailModal({ article, onClose, lang }: NewsDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl border border-slate-200 shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="font-semibold text-slate-900">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-900"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
            {article.title}
          </h2>

          <div className="p-4 bg-slate-100/70 border-l-2 border-slate-900 text-sm font-medium text-slate-800 leading-relaxed italic">
            {article.summary}
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
            {lang === 'vi'
              ? 'Nguồn phát hành: Ban Truyền thông & Quan hệ Doanh nghiệp Tập đoàn Matrix Holding.'
              : 'Issued by: Corporate Communications & Investor Relations, Matrix Holding Group.'}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'vi' ? 'Đã sao chép liên kết' : 'Link copied'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{lang === 'vi' ? 'Chia sẻ bài viết' : 'Share article'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-sm transition-colors"
          >
            {lang === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
