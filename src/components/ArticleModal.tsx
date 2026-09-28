import { X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { newsContent } from '../content';

interface ArticleModalProps {
  article: typeof newsContent[0] | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl border border-slate-200 shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="font-bold text-[#0284c7]">{article.category}</span>
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

        {/* Modal Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-800">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 leading-tight">
            {article.title}
          </h2>

          <div className="p-4 bg-slate-50 border-l-2 border-[#27d9ef] text-sm text-slate-700 font-medium leading-relaxed italic">
            {article.description}
          </div>

          <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-3">
            {article.content}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đã sao chép link</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Chia sẻ</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#081c31] hover:bg-slate-800 rounded-md transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
