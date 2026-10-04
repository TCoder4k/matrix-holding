import React, { useState, useEffect } from 'react';
import { PageBanner } from './PageBanner';
import { FeaturedStoriesCarousel, StoryItem } from './news/FeaturedStoriesCarousel';
import { LatestStaggeredNews } from './news/LatestStaggeredNews';
import { DiscoverMoreNewsList } from './news/DiscoverMoreNewsList';
import { ArticleReaderModal } from './news/ArticleReaderModal';

interface NewsPageProps {
  onNavigateHome: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const [readingArticle, setReadingArticle] = useState<StoryItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* BANNER TIÊU ĐỀ ĐẦU TRANG THEO THIẾT KẾ ĐÍCH */}
      <PageBanner
        eyebrow="MATRIX HOLDING"
        title="Tin tức"
        subtitle="Cập nhật tin tức và hoạt động từ Matrix Holding."
      />

      {/* 1. TIN TỨC NỔI BẬT — CHUYỂN BÀI NHƯ ĐỔI TRANG BÌA (Ảnh 3) */}
      <FeaturedStoriesCarousel onOpenArticle={(article) => setReadingArticle(article)} />

      {/* 2. TIN TỨC MỚI NHẤT — BỐ CỤC SO LE, XUẤT HIỆN CÓ NHỊP (Ảnh 2) */}
      <LatestStaggeredNews onOpenArticle={(article) => setReadingArticle(article)} />

      {/* 3. TIN TỨC KHÁC — DANH SÁCH CÓ ẢNH XEM TRƯỚC (Ảnh 1) */}
      <DiscoverMoreNewsList onOpenArticle={(article) => setReadingArticle(article)} />

      {/* MODAL ĐỌC BÀI VIẾT CHI TIẾT */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
      />

    </div>
  );
};
