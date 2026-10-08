import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Capabilities } from './pages/Capabilities';
import { Fleet } from './pages/Fleet';
import { Safety } from './pages/Safety';
import { Adam } from './pages/Adam';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';

export type NavigateFunction = (page: string) => void;

const pages = ['home', 'capabilities', 'fleet', 'safety', 'adam', 'contact', 'legal'];
const readPage = () => {
  const page = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
  return pages.includes(page) ? page : 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(readPage);
  const navigate: NavigateFunction = (page) => {
    if (!pages.includes(page)) return;
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleBack = () => { setCurrentPage(readPage()); window.scrollTo(0, 0); };
    window.addEventListener('popstate', handleBack);
    return () => window.removeEventListener('popstate', handleBack);
  }, []);

  useEffect(() => {
    const label = currentPage === 'home' ? 'Helicopter Operations Across the Top End' : currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    document.title = `${label} | Rotor Services NT`;
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'capabilities':
        return <Capabilities onNavigate={navigate} />;
      case 'fleet':
        return <Fleet onNavigate={navigate} />;
      case 'safety':
        return <Safety onNavigate={navigate} />;
      case 'adam':
        return <Adam />;
      case 'contact':
        return <Contact />;
      case 'legal':
        return <Legal />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
