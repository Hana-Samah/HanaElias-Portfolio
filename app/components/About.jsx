'use client';
import React, { useEffect } from 'react';
import { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="about"
      className="relative w-full px-6 sm:px-12 md:px-[10%] py-24 scroll-mt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf9ff 0%, #ffffff 100%)' }}
    >
      {/* Decorative top border line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #c4b5fd, transparent)' }} />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-purple-200 bg-purple-50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">Introduction</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          About Me
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* 3D Model */}
        <motion.div
          className="hidden lg:block w-full max-w-[400px] md:max-w-[480px] h-[320px] sm:h-[420px] md:h-[500px] flex-shrink-0 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            border: '1px solid rgba(139,92,246,0.15)',
            boxShadow: '0 24px 80px rgba(139,92,246,0.12)',
          }}
        >
          <spline-viewer
            url="https://prod.spline.design/a8lD9DJnIkMh04hy/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Bio */}
          <p className="mb-10 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            I am an Information Technology professional passionate about building meaningful digital
            solutions. My work focuses on developing mobile and web applications that support education,
            accessibility, and humanitarian initiatives.
            <br /><br />
            I enjoy creating interactive systems and learning tools, especially applications designed for
            children. Through my projects, I aim to combine technology, creativity, and user-centered
            design to build solutions that make a positive impact.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto lg:mx-0">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative p-5 rounded-2xl border border-gray-100 bg-white hover:border-purple-200 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)] cursor-default"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                    <Image src={icon} alt={title} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <div className="mt-10 max-w-3xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-5 justify-center lg:justify-start"
            >
              <div className="h-px flex-1 max-w-[40px] bg-gray-200" />
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Tools I Use</h4>
              <div className="h-px flex-1 max-w-[40px] bg-gray-200" />
            </motion.div>

            <motion.ul
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square rounded-xl border border-gray-100 bg-white hover:border-purple-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <Image src={tool} alt={`Tool ${index}`} className="w-6 sm:w-8" />
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #e9d5ff, transparent)' }} />
    </div>
  );
};

export default About;