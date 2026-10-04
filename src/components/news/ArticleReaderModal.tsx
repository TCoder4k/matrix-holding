import React, { useState } from 'react';
import { X, Calendar, Clock, Share2, Check, ArrowLeft } from 'lucide-react';
import { StoryItem } from './FeaturedStoriesCarousel';

interface ArticleReaderModalProps {
  article: StoryItem | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white text-[#0A192F] rounded-[28px] sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* NÚT ĐÓNG & QUAY LẠI TRÊN THANH HEADER CỐ ĐỊNH */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#00c2ff] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#00c2ff] transition-colors cursor-pointer"
              title="Sao chép liên kết"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NỘI DUNG BÀI VIẾT CUỘN */}
        <div className="overflow-y-auto p-6 sm:p-10">
          
          {/* Metadata: Category & Date */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
            <span className="font-bold text-[#00c2ff] uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          {/* Tiêu đề bài viết */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0d1d2f] tracking-tight leading-snug mb-6">
            {article.title}
          </h1>

          {/* Tác giả */}
          <div className="text-xs font-semibold text-slate-500 mb-6 pb-6 border-b border-slate-100">
            {article.author}
          </div>

          {/* Ảnh bìa bài viết */}
          <div className="relative w-full h-[260px] sm:h-[380px] rounded-2xl overflow-hidden mb-8 shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Đoạn mở đầu (Lead paragraph) */}
          <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed mb-6">
            {article.excerpt}
          </p>

          {/* Các đoạn nội dung chi tiết */}
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Khối trích dẫn nổi bật */}
          <div className="mt-8 p-6 rounded-2xl bg-sky-50/70 border-l-4 border-[#00c2ff] text-[#0d1d2f]">
            <p className="text-sm font-semibold italic leading-relaxed">
              “Chúng tôi cam kết xây dựng một hệ sinh thái hợp tác thực chất, nơi mọi nguồn lực đều được khai phóng và cộng hưởng vì sự tăng trưởng bền vững.”
            </p>
            <span className="text-xs text-slate-500 font-bold block mt-2">
              — Ban Điều hành Matrix Holding
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
