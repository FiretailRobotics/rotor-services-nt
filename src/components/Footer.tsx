
interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-territory-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/rotor-services-modern.png" alt="Rotor Services" className="h-20 w-auto" loading="lazy" />
              <div>
                <div className="font-heading font-bold text-xl">Rotor Services</div>
                <div className="text-xs text-territory-sand">Northern Territory</div>
              </div>
            </div>
            <p className="text-sm text-territory-sand leading-relaxed">
              Remote-area helicopter operations across Northern Australia.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'Capabilities', 'Fleet', 'Safety', 'Adam', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item.toLowerCase())}
                  className="block text-sm text-territory-sand hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-territory-sand">
              <p>Darwin, Northern Territory</p>
              <a className="block hover:text-white" href="tel:+61408857973">+61 (0)408 857 973</a>
              <a className="block break-words hover:text-white" href="mailto:adschopper@hotmail.com">adschopper@hotmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-territory-sand pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-territory-sand">
            © {new Date().getFullYear()} Rotor Services NT. All rights reserved.
          </p>
          <button
            onClick={() => handleNavigate('legal')}
            className="text-sm text-territory-sand hover:text-white transition-colors"
          >
            Legal Information
          </button>
        </div>
      </div>
    </footer>
  );
}
