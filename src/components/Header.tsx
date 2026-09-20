import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Live Demo', id: 'live-demo' },
  { label: 'Services', id: 'services' },
  { label: 'Who We Help', id: 'who-we-help' },
  { label: 'What We Build', id: 'what-we-build' },
  { label: 'Our Process', id: 'process' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Scrolled-state shadow + backdrop blur
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top" onClick={closeMenu} className="flex items-center">
              <img
                src="/loftify-logo.png"
                alt="Loftify AI"
                className="h-9 md:h-11 w-auto block"
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`lf-nav-link font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                    active ? 'text-electric-teal is-active' : 'text-slate-700 hover:text-electric-teal'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="#contact"
              onClick={closeMenu}
              className="cta-button bg-electric-teal text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-600 transition-all duration-300 whitespace-nowrap shadow-md shadow-electric-teal/25"
            >
              Book a Free AI Audit
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              className="text-slate-900 hover:text-electric-teal transition-colors duration-200 p-2.5 -mr-2.5"
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block px-3 py-2.5 rounded-lg font-medium text-base transition-colors duration-200 ${
                    active
                      ? 'text-electric-teal bg-electric-teal/5'
                      : 'text-slate-900 hover:text-electric-teal'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={closeMenu}
              className="block mt-3 mx-1 bg-electric-teal text-white px-6 py-3 rounded-lg text-center font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-md shadow-electric-teal/25"
            >
              Book a Free AI Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
