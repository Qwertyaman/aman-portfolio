import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const SECTIONS = ['home', 'about', 'projects', 'achievements', 'contact'];

const NavBar = ({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`
          max-w-full
          mx-auto
          transition-all duration-500
          ${scrolled ? 'py-2' : 'py-3'}
          bg-slate-900/30
          backdrop-blur-lg
          border-b border-white/10
        `}
      >
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-4 ">
          <div className="flex justify-between items-center h-16 ">
            {/* Logo + Title (shifted left, translucent) */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500/80 to-indigo-800/80 flex items-center justify-center text-xs text-white font-semibold shadow-md">
                  AS
                </div>
              </div>
              <span className="ml-1 text-lg font-semibold font-sans text-white/80 group-hover:text-white transition-colors">
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
                    className={`
                      relative px-4 py-2 capitalize font-medium transition-all duration-300
                      rounded-xl overflow-hidden group
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                      ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-100/80 hover:text-white'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                    role="menuitem"
                  >
                    {/* glass background for active/hover */}
                    {isActive && (
                      <span className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-lg" />
                    )}

                    {!isActive && (
                      <span className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-xl shadow-md transition-opacity" />
                    )}

                    <span className="relative z-10">{item}</span>

                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400/80 group-hover:w-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                {mobileMenuOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden overflow-hidden transition-all duration-500
              ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="bg-slate-900/40 backdrop-blur-lg rounded-2xl border border-white/10 p-2">
              {SECTIONS.map((item, index) => {
                const isActive = activeSection === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`
                      block w-full text-left px-6 py-3 capitalize font-medium rounded-xl
                      transition-all duration-300
                      ${
                        isActive
                          ? 'bg-white/15 border border-white/25 text-white shadow-md scale-105'
                          : 'text-slate-100/80 hover:bg-white/5 hover:pl-8'
                      }
                    `}
                    style={{
                      animationDelay: `${index * 60}ms`,
                      animation: mobileMenuOpen
                        ? 'slideIn 0.25s ease-out forwards'
                        : 'none',
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
    </nav>
  );
};

export default NavBar;
