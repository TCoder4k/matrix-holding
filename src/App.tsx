/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EcosystemSection from './components/EcosystemSection';
import ProjectsSection from './components/ProjectsSection';
import NewsSection from './components/NewsSection';
import CareersBanner from './components/CareersBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArticleModal from './components/ArticleModal';
import CareersModal from './components/CareersModal';
import { newsContent } from './content';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsContent[0] | null>(null);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEcosystem = () => {
    const el = document.getElementById('he-sinh-thai');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. Header Navigation Bar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* 2. Hero Banner with Image /images/hero-network.webp, .hero-shade, and White/Cyan Headline */}
      <Hero onOpenContact={scrollToContact} />

      {/* 3. Về chúng tôi (About Us) - 2-Column Grid (Title vs Mission/Vision/Values) */}
      <AboutSection onLearnMore={scrollToEcosystem} />

      {/* 4. Hệ sinh thái (Ecosystem) - HTML Labels + SVG Connecting Lines */}
      <EcosystemSection />

      {/* 5. Dự án (Projects) - Dark Navy Background + React State Tab Filtering */}
      <ProjectsSection />

      {/* 6. Tin tức (News) - 2 News Cards with Images from public/images & Content from src/content.js */}
      <NewsSection onSelectArticle={(article) => setSelectedArticle(article)} />

      {/* 7. Tuyển dụng (Careers CTA Banner) */}
      <CareersBanner onOpenCareers={() => setCareersModalOpen(true)} />

      {/* 8. Liên hệ (Contact Section) */}
      <ContactSection />

      {/* 9. Footer - 6 Columns matching Mockup 100% */}
      <Footer />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
        onApply={scrollToContact}
      />
    </div>
  );
}
