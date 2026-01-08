import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const SECTIONS = ['about', 'projects', 'skills', 'achievements', 'contact'];

const NavBar = ({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const currentSection = SECTIONS.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });

          if (currentSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (section) => {
    scrollToSection(section);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md py-2'
          : 'bg-white/90 py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-xs text-white font-semibold shadow-md">
                AS
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Aman Srivastava
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2" role="menubar">
            {SECTIONS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 capitalize font-medium transition-all duration-300 rounded-lg overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive ? 'text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  role="menuitem"
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg shadow-md" />
                  )}

                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10">{item}</span>

                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
          <button
            className="md:hidden relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              {mobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </div>
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2">
            {SECTIONS.map((item, index) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-6 py-3 capitalize font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md scale-105'
                      : 'text-slate-700 hover:bg-indigo-50 hover:pl-8'
                  }`}
                  style={{
                    animationDelay: `${index * 60}ms`,
                    animation: mobileMenuOpen ? 'slideIn 0.25s ease-out forwards' : 'none',
                  }}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <Sparkles size={16} />}
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;