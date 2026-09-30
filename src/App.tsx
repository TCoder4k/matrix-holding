import { useState, useEffect } from 'react';
import Navbar, { NavTabKey, CurrentUser } from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EcosystemSection from './components/EcosystemSection';
import ProjectsSection from './components/ProjectsSection';
import NewsSection from './components/NewsSection';
import CareersBanner from './components/CareersBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArticleModal from './components/ArticleModal';
import ContactModal from './components/ContactModal';
import LoginModal from './components/LoginModal';
import AboutPage from './components/AboutPage';
import NewsPage from './components/NewsPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';
import EcosystemPage from './components/EcosystemPage';
import JobApplicationModal from './components/JobApplicationModal';
import { DepartmentKey } from './data/careersData';
import { newsContent } from './content';

export default function App() {
  // Default to 'home' (Trang chủ) matching user's requested layout exactly
  const [activeTab, setActiveTab] = useState<NavTabKey>('home');
  const [selectedArticle, setSelectedArticle] = useState<typeof newsContent[0] | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Hợp tác kinh doanh & đầu tư');

  // Job Application Modal state
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyDept, setApplyDept] = useState<DepartmentKey | undefined>(undefined);
  const [applyJobTitle, setApplyJobTitle] = useState<string | undefined>(undefined);

  // Authentication State & Modal
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  // Handle URL hash changes if user uses anchors
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#he-sinh-thai' || hash === '#ecosystem') {
        setActiveTab('ecosystem');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#lien-he' || hash === '#contact') {
        setActiveTab('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tuyen-dung' || hash === '#careers' || hash === '#co-hoi-nghe-nghiep') {
        setActiveTab('careers');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#tin-tuc' || hash === '#news' || hash === '#matrix-journal') {
        setActiveTab('news');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#gioi-thieu' || hash === '#ve-matrix-holding') {
        setActiveTab('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#trang-chu' || hash === '#dau-trang') {
        setActiveTab('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openContact = (topic?: string) => {
    if (topic) {
      setContactTopic(topic);
    }
    // If not already on contact page, open modal or switch
    if (activeTab !== 'contact') {
      setContactModalOpen(true);
    } else {
      setContactModalOpen(true);
    }
  };

  const handleOpenApplyModal = (dept?: DepartmentKey, jobTitle?: string) => {
    setApplyDept(dept);
    setApplyJobTitle(jobTitle);
    setApplyModalOpen(true);
  };

  const handleSelectTab = (tab: NavTabKey) => {
    if (tab === 'ecosystem') {
      setActiveTab('ecosystem');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'contact') {
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'careers') {
      setActiveTab('careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'news') {
      setActiveTab('news');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'about') {
      setActiveTab('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'home') {
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  };

  const handleFooterNavigate = (tab: NavTabKey, sectionId?: string) => {
    if (tab === 'ecosystem') {
      setActiveTab('ecosystem');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (tab === 'contact') {
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'careers') {
      setActiveTab('careers');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (tab === 'news') {
      setActiveTab('news');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (tab === 'about') {
      setActiveTab('about');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (tab === 'home') {
      setActiveTab('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
  };

  const scrollToContact = () => {
    openContact('Hợp tác kinh doanh & đầu tư');
  };

  const scrollToEcosystem = () => {
    setActiveTab('ecosystem');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#27d9ef] selection:text-[#081c31]">
      {/* 1. Top Navigation Bar with active tab state matching Mockup */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenContact={openContact}
        onOpenLogin={() => setLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Main View Router: 'ecosystem' vs 'contact' vs 'careers' vs 'news' vs 'about' vs 'home' */}
      {activeTab === 'ecosystem' ? (
        <EcosystemPage onOpenContact={openContact} />
      ) : activeTab === 'contact' ? (
        <ContactPage onNavigateTab={handleSelectTab} />
      ) : activeTab === 'careers' ? (
        <CareersPage
          onOpenApplyModal={handleOpenApplyModal}
          onOpenContact={openContact}
        />
      ) : activeTab === 'news' ? (
        <NewsPage onOpenContact={openContact} />
      ) : activeTab === 'about' ? (
        <AboutPage
          onOpenContact={openContact}
          onNavigateHome={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <main>
          {/* Hero Banner with Image /images/hero-network.webp */}
          <Hero onOpenContact={scrollToContact} />

          {/* Về chúng tôi (About Us) Section */}
          <AboutSection onLearnMore={scrollToEcosystem} />

          {/* Hệ sinh thái (Ecosystem) */}
          <EcosystemSection />

          {/* Dự án (Projects) */}
          <ProjectsSection onOpenContact={openContact} />

          {/* Tin tức (News) */}
          <NewsSection onSelectArticle={(article) => setSelectedArticle(article)} />

          {/* Tuyển dụng (Careers Banner) */}
          <CareersBanner onOpenCareers={() => handleSelectTab('careers')} />

          {/* Liên hệ (Contact Section) */}
          <ContactSection />
        </main>
      )}

      {/* Footer matching Mockup 100% */}
      <Footer
        onNavigate={handleFooterNavigate}
        onOpenContact={openContact}
        variant="default"
      />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <JobApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultDepartment={applyDept}
        defaultPositionTitle={applyJobTitle}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultTopic={contactTopic}
      />

      {/* Matrix Partner & Enterprise Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />
    </div>
  );
}
