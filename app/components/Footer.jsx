import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Hana-Samah' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hana-samah' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f5f3ff 0%, #0f0c1a 60%)' }}>

      {/* Top fade connector */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #f5f3ff, transparent)' }} />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Center glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.15), transparent 70%)' }}
      />

      <div className="relative z-10 px-6 md:px-[10%] pt-20 pb-10">

        {/* Top section */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Hana<span style={{ color: '#a78bfa' }}>.</span>
          </h2>
          <p className="text-sm text-slate-400 tracking-widest uppercase mb-6">
            Tech-Savvy Developer
          </p>
          <a
            href="mailto:hana.samoh948@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-slate-300 text-sm font-medium hover:text-white hover:border-purple-400 transition-all duration-200"
            style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
          >
            <Image src={assets.mail_icon} alt="" className="w-4 h-4 brightness-[2] opacity-70" />
            hana.samoh948@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div
          className="mb-8 h-px mx-auto max-w-md"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} Hana Samah. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 hover:text-purple-400 transition-colors duration-200 tracking-wide uppercase"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;