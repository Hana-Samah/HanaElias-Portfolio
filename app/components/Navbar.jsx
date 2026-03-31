'use client';
import React, { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#project' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Track scroll to highlight active section + show backdrop blur
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sliding indicator under active nav link
  useEffect(() => {
    const el = linkRefs.current[activeSection];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl shadow-[0_1px_24px_rgba(139,92,246,0.08)]'
            : 'py-5 bg-transparent'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(196,181,253,0.25)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo / wordmark */}
          <a
            href="#top"
            className="text-xl font-black tracking-tight transition-opacity duration-200 hover:opacity-70"
            style={{ fontFamily: "'Georgia', serif", color: scrolled ? '#18103a' : '#fff' }}
          >
            Hana<span style={{ color: '#a78bfa' }}>.</span>
          </a>

          {/* Desktop links with sliding indicator */}
          <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
            {/* Sliding pill indicator */}
            <div
              className="absolute bottom-0 h-[2px] rounded-full transition-all duration-300 ease-out"
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #818cf8)',
                ...indicatorStyle,
              }}
            />

            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={label}
                  href={href}
                  ref={el => (linkRefs.current[sectionId] = el)}
                  className="relative px-4 py-2 text-sm font-semibold transition-colors duration-200"
                  style={{
                    color: isActive
                      ? '#6d28d9'
                      : scrolled
                      ? '#4b5563'
                      : 'rgba(255,255,255,0.75)',
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* CTA button desktop */}
          <a
            href="mailto:hana.samoh948@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-200"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
              color: '#fff',
            }}
          >
            Let's Talk
          </a>

          {/* Hamburger */}
          <button
            className="block md:hidden w-8 h-8 flex flex-col justify-center items-end gap-[5px]"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] rounded-full transition-all duration-300 origin-right"
              style={{
                width: menuOpen ? '24px' : '24px',
                background: scrolled ? '#7c3aed' : '#fff',
                transform: menuOpen ? 'rotate(-45deg) translateY(5px)' : 'none',
              }}
            />
            <span
              className="block h-[2px] rounded-full transition-all duration-300"
              style={{
                width: '16px',
                background: scrolled ? '#7c3aed' : '#fff',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] rounded-full transition-all duration-300 origin-right"
              style={{
                width: menuOpen ? '24px' : '20px',
                background: scrolled ? '#7c3aed' : '#fff',
                transform: menuOpen ? 'rotate(45deg) translateY(-5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${menuOpen ? 'opacity-30' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="px-8 pt-8 pb-6 border-b border-purple-50">
            <p
              className="text-2xl font-black"
              style={{ fontFamily: "'Georgia', serif", color: '#18103a' }}
            >
              Hana<span style={{ color: '#a78bfa' }}>.</span>
            </p>
            <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">Portfolio</p>
          </div>

          {/* Links */}
          <ul className="flex flex-col px-4 py-6 gap-1 flex-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                  style={{
                    transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: menuOpen ? 1 : 0,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #818cf8)' }}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom socials */}
          <div className="px-8 py-6 border-t border-purple-50">
            <div className="flex gap-4">
              <a
                href="https://github.com/Hana-Samah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gray-500 hover:text-purple-600 transition-colors uppercase tracking-wider"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hana-samah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gray-500 hover:text-purple-600 transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;