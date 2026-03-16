import React, { useState, useEffect } from 'react';
import { projectsData, assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return isMobile;
}

const ProjectCard = ({ project, index }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobileScreen = useIsMobile();
  const textLimit = isMobileScreen ? 100 : 160;
  const shouldTruncate = project.details && project.details.length > textLimit;

  let detailsText = project.details || '';
  if (shouldTruncate && !showFullDetails) {
    detailsText = project.details.substring(0, textLimit);
    const lastSpace = detailsText.lastIndexOf(' ');
    if (lastSpace > 0) detailsText = detailsText.substring(0, lastSpace);
    detailsText += '...';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{
        border: hovered ? '1px solid rgba(139,92,246,0.3)' : '1px solid rgba(139,92,246,0.1)',
        boxShadow: hovered
          ? '0 24px 64px rgba(139,92,246,0.14), 0 4px 16px rgba(0,0,0,0.06)'
          : '0 2px 16px rgba(0,0,0,0.05)',
        transition: 'border 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-500 z-10"
        style={{
          width: hovered ? '80%' : '30%',
          background: 'linear-gradient(90deg, transparent, #7c3aed, transparent)',
        }}
      />

      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        {/* Index badge */}
        <div
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        <Image
          src={project.bgImage}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <a
          href={project.link}
          target="_blank"
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
        >
          <div className="bg-white text-gray-900 px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
            View Project
            <Image src={assets.right_arrow_bold} alt="" className="w-3.5" />
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold text-purple-700"
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
          style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
        />

        {/* Description */}
        <p className="text-gray-700 text-sm font-semibold leading-relaxed">
          {project.description}
        </p>

        {/* Details */}
        {project.details && (
          <div className="text-gray-500 text-sm leading-relaxed">
            {detailsText}
            {shouldTruncate && (
              <button
                onClick={() => setShowFullDetails(!showFullDetails)}
                className="text-purple-600 font-bold ml-1.5 hover:underline"
              >
                {showFullDetails ? 'Show Less ↑' : 'Read More →'}
              </button>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          <a
            href={project.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-200"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
          >
            View Project
            <Image src={assets.right_arrow_bold} alt="" className="w-3.5 brightness-[10]" />
          </a>
        </div>
      </div>
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

      {/* Top border accent */}
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
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mx-auto mt-5 h-1 w-16 rounded-full origin-center"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
        />
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-16 relative z-10">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Hana-Samah"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-sm hover:border-purple-400 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 hover:scale-105"
        >
          <img src="/assets/github.png" alt="GitHub" className="w-5 h-5" />
          See More on GitHub →
        </motion.a>
      </div>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #e9d5ff, transparent)' }}
      />
    </div>
  );
};

export default Projects;