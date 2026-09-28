import { ArrowRight } from 'lucide-react';
import { newsContent } from '../content';

interface NewsSectionProps {
  onSelectArticle: (article: typeof newsContent[0]) => void;
}

export default function NewsSection({ onSelectArticle }: NewsSectionProps) {
  return (
    <section id="tin-tuc" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container-page">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7]">
              TIN TỨC
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Cập nhật những góc nhìn mới
            </h2>
          </div>

          <a
            href="#tin-tuc"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0891b2] hover:text-[#0e7490] transition-colors whitespace-nowrap"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2 News Cards matching Mockup */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsContent.map((news) => (
            <article
              key={news.id}
              onClick={() => onSelectArticle(news)}
              className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden hover:border-slate-400 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row cursor-pointer"
            >
              {/* News Thumbnail Image from public/images */}
              <div className="sm:w-5/12 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* News Text Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7]">
                    {news.category}
                  </div>

                  <h3 className="mt-2 font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {news.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0891b2] group-hover:text-[#0e7490]">
                  <span>Đọc thêm</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
