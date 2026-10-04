import { useState, useEffect } from 'react';
import { Navbar, NavItemKey } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutIntroSection } from './components/AboutIntroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { NewsSection } from './components/NewsSection';
import { CareersSection } from './components/CareersSection';
import { MatrixFAQ } from './components/MatrixFAQ';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { EcosystemPage } from './components/EcosystemPage';
import { NewsPage } from './components/NewsPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { AboutModal } from './components/AboutModal';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavItemKey>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (key: NavItemKey) => {
    setActiveTab(key);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (key !== 'home' && key !== 'about' && key !== 'ecosystem' && key !== 'news' && key !== 'careers' && key !== 'contact') {
      setTimeout(() => {
        const element = document.getElementById(key);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navbar Contract */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className={`flex-1 ${activeTab !== 'home' ? 'pt-20 lg:pt-[84px]' : ''}`}>
        {activeTab === 'about' ? (
          /* TRANG GIỚI THIỆU */
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            onNavigateTab={handleNavigate}
          />
        ) : activeTab === 'ecosystem' ? (
          /* TRANG HỆ SINH THÁI: Khớp 100% ảnh thiết kế được cung cấp */
          <EcosystemPage
            onContactClick={() => handleNavigate('contact')}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : activeTab === 'news' ? (
          /* TRANG TIN TỨC & GÓC NHÌN: Khớp 100% ảnh thiết kế được cung cấp */
          <NewsPage
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : activeTab === 'careers' ? (
          /* TRANG TUYỂN DỤNG: Khớp 100% ảnh thiết kế được cung cấp */
          <CareersPage
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : activeTab === 'contact' ? (
          /* TRANG LIÊN HỆ: Khớp 100% ảnh thiết kế được cung cấp */
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* TRANG CHỦ */
          <>
            {/* Exact Hero Section matching uploaded reference images */}
            <HeroSection
              onLearnMoreClick={() => handleNavigate('about')}
              onNavigate={handleNavigate}
            />

            {/* VỀ CHÚNG TÔI - GIỚI THIỆU MATRIX HOLDING */}
            <AboutIntroSection
              onLearnMoreClick={() => handleNavigate('about')}
              onViewProfile={() => setIsAboutModalOpen(true)}
            />

            {/* Bốn mảnh ghép hệ sinh thái */}
            <EcosystemSection onNavigate={handleNavigate} />

            {/* Corporate News & Events */}
            <NewsSection onExploreAll={() => handleNavigate('news')} />

            {/* Career Opportunities */}
            <CareersSection
              onExploreAll={() => handleNavigate('careers')}
            />

            {/* Matrix FAQ Section */}
            <MatrixFAQ onNavigate={handleNavigate} />

            {/* Direct Contact & Collaboration */}
            <ContactSection onNavigate={handleNavigate} />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} activeTab={activeTab} />

      {/* Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onContactClick={() => {
          setIsAboutModalOpen(false);
          handleNavigate('contact');
        }}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Scroll to Top floating affordance */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#071526] text-white hover:bg-[#009fe3] shadow-lg shadow-slate-900/20 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
