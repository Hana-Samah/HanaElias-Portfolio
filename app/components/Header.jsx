import React, { useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    document.body.appendChild(script);

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative pt-16 pb-20 px-6 lg:px-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0c1a 0%, #1a1428 15%, #faf9ff 45%, #ffffff 100%)" }}
    >
      {/* Grid texture — نفس الفوتر */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.2), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />

      <div className="relative z-10 max-w-2xl text-center lg:text-left py-10 lg:py-32">
        <p data-aos="fade-up" className="text-base sm:text-lg text-gray-300 mb-2 tracking-wide">
          👋Hi everyone, I'm
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow text-white"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Hana Samah<br />
          <span className="text-violet-400">Tech-Savvy Developer</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 leading-relaxed description-text">
          I'm a passionate tech enthusiast and developer. Explore my work, skills,
          and the projects I'm proud of in this interactive portfolio.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="/HANA SAMAH.pdf" target="_blank" rel="noopener noreferrer" className="flex px-10 py-3 justify-center rounded-full items-center btn-gradient text-black hover:text-purple-900 transform hover:scale-105 active:scale-95 transition duration-300">
            Download CV <Image src={assets.download_icon} className='w-4 h-4'/>
          </a>
          <a href="#contact" className="btn-gradient-secondary text-white hover:text-purple-600 transform hover:scale-105 active:scale-95 transition duration-300">
            Contact me &gt;
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" id="socials-container" className="flex justify-center lg:justify-start gap-6 mt-6">
          <img src="/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" onClick={() => window.open('https://www.linkedin.com/in/hana-samah/', '_blank')} />
          <img src="/assets/github.png" alt="Github" className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-200" onClick={() => window.open('https://github.com/Hana-Samah', '_blank')} />
        </div>
      </div>

      <spline-viewer className="spline-viewer absolute top-10 right-[-24%] scale-[1.0]" url="https://prod.spline.design/ROmZnKMam2QI3ajZ/scene.splinecode" />

      <style jsx>{`
        .btn-gradient {
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(to right, #656565, #7f42a7, #6600c5, #5300a0, #757575, #656565);
          background-size: 200%;
          animation: gradientAnimation 2.5s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          text-align: center;
        }
        .btn-gradient-secondary {
          position: relative;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          background: linear-gradient(to right, #656565, #7f42a7, #6600c5, #5300a0, #757575, #656565);
          background-size: 200%;
          animation: gradientAnimation 2.5s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          font-size: 1.2rem;
          font-weight: 600;
          overflow: hidden;
          z-index: 1;
          text-align: center;
        }
        .btn-gradient-secondary::after {
          content: '';
          position: absolute;
          inset: 3px;
          background-color: black;
          border-radius: 50px;
          z-index: -1;
          transition: 0.3s ease;
        }
        @keyframes gradientAnimation {
          to {
            background-position: 200%;
          }
        }
        @media (max-width: 1024px) {
          .btn-gradient,
          .btn-gradient-secondary {
            font-size: 1rem;
            padding: 0.6rem 1rem;
          }
          .description-text {
            color: black !important;
            text-shadow: 0 0 4px white;
          }
          .spline-viewer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;