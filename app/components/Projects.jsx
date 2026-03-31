'use client';
import React, { useState, useEffect, useRef } from 'react';
import { projectsData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

// 3D Tilt effect hook
function useTilt(strength = 12) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 22 });

  const onMouseMove = e => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / (rect.height / 2)) * -strength);
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * strength);
  };
  const onMouseLeave = () => { rotateX.set(0); rotateY.set(0); };

  return { ref, rotateX: springX, rotateY: springY, onMouseMove, onMouseLeave };
}

const FILTERS = ['All', 'Web', 'Mobile', 'AI/ML'];

const ProjectCard = ({ project, index }) => {
  const [showFull, setShowFull] = useState(false);
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(8);
  const textLimit = 155;
  const shouldTruncate = project.details && project.details.length > textLimit;
  let detailsText = project.details || '';
  if (shouldTruncate && !showFull) {
    detailsText = project.details.substring(0, textLimit);
    const lastSpace = detailsText.lastIndexOf(' ');
    if (lastSpace > 0) detailsText = detailsText.substring(0, lastSpace);
    detailsText += '…';
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative bg-white rounded-3xl overflow-hidden flex flex-col h-full"
        style={{
          border: '1px solid rgba(139,92,246,0.1)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 800,
          transition: 'box-shadow 0.3s ease',
        }}
        whileHover={{
          boxShadow: '0 32px 80px rgba(139,92,246,0.18), 0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {/* Top shimmer */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-500 z-10 opacity-0 group-hover:opacity-100"
          style={{
            width: '60%',
            background: 'linear-gradient(90deg, transparent, #7c3aed, #f0abfc, transparent)',
          }}
        />

        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '220px' }}>
          {/* Index badge */}
          <div
            className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <Image
            src={project.bgImage}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ transition: 'transform 0.7s ease' }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center z-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:bg-purple-50"
            >
              View Project
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-4">

          {/* Tool tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-bold text-purple-700 transition-colors duration-200 hover:bg-purple-100 cursor-default"
                style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.18)' }}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="text-xl font-black text-gray-900 leading-snug tracking-tight group-hover:text-purple-700 transition-colors duration-300"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {project.title}
          </h3>

          {/* Divider */}
          <div
            className="h-px w-10 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #818cf8)' }}
          />

          {/* Description */}
          <p className="text-gray-700 text-sm font-semibold leading-relaxed">{project.description}</p>

          {/* Details */}
          {project.details && (
            <div className="text-gray-500 text-sm leading-relaxed">
              {detailsText}
              {shouldTruncate && (
                <button
                  onClick={() => setShowFull(v => !v)}
                  className="text-purple-600 font-bold ml-1.5 hover:underline transition-all"
                >
                  {showFull ? 'Show Less ↑' : 'Read More →'}
                </button>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-200 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
            >
              View Project
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="project"
      className="w-full px-6 md:px-[10%] py-28 scroll-mt-20 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf9ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #c4b5fd, transparent)' }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-purple-200 bg-purple-50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">My Portfolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Recent Works
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-5 h-1 w-16 rounded-full origin-center"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
        />
      </div>

      {/* Cards Grid */}
      <motion.div layout className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title || index} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub CTA */}
      <div className="text-center mt-16 relative z-10">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Hana-Samah"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-purple-400 hover:text-purple-700 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 hover:scale-105"
        >
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          See More on GitHub
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </motion.a>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #e9d5ff, transparent)' }}
      />
    </div>
  );
};

export default Projects;