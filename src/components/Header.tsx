import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Capabilities', path: 'capabilities' },
    { name: 'Fleet', path: 'fleet' },
    { name: 'Safety', path: 'safety' },
    { name: 'Adam', path: 'adam' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white border-b border-territory-sand sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => handleNavigate('home')}
            aria-label="Rotor Services NT home"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/rotor-services-modern.png"
              alt="Rotor Services NT"
              className="h-16 md:h-20 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                aria-current={currentPage === item.path ? 'page' : undefined}
                onClick={() => handleNavigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-territory-red border-b-2 border-territory-red pb-1'
                    : 'text-territory-grey hover:text-territory-red'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden text-territory-grey"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                aria-current={currentPage === item.path ? 'page' : undefined}
                onClick={() => handleNavigate(item.path)}
                className={`block w-full text-left py-3 px-4 text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-territory-red bg-territory-offwhite'
                    : 'text-territory-grey hover:bg-territory-offwhite'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
