'use client';
import React, { useState } from 'react';
import { skillsData } from '@/assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { key: 'all',         label: 'All',         emoji: '✦' },
  { key: 'Programming', label: 'Programming',  emoji: '{ }' },
  { key: 'Web',         label: 'Web',          emoji: '<>' },
  { key: 'Mobile',      label: 'Mobile',       emoji: '◻' },
  { key: 'Tools',       label: 'Tools',        emoji: '⚙' },
];

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.07 }}
      className="relative flex flex-col items-center justify-center text-center p-4 rounded-2xl cursor-default overflow-hidden bg-white"
      style={{
        border: hovered ? '1px solid rgba(139,92,246,0.4)' : '1px solid rgba(139,92,246,0.1)',
        boxShadow: hovered
          ? '0 16px 40px rgba(139,92,246,0.15), 0 2px 8px rgba(0,0,0,0.04)'
          : '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'border 0.25s, box-shadow 0.25s',
      }}
    >
      {/* Shimmer top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-400"
        style={{
          width: hovered ? '80%' : '20%',
          background: 'linear-gradient(90deg, transparent, #7c3aed, #f0abfc, transparent)',
        }}
      />

      {/* Background tint on hover */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07), transparent 70%)' }}
        />
      )}

      {/* Icon wrapper */}
      <motion.div
        animate={{ rotate: hovered ? 10 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="relative z-10 mb-3 p-3 rounded-xl bg-white"
        style={{
          border: '1px solid rgba(139,92,246,0.12)',
          boxShadow: '0 2px 8px rgba(139,92,246,0.08)',
        }}
      >
        <skill.IconComponent size={26} color={hovered ? '#7c3aed' : skill.color} />
      </motion.div>

      {/* Name */}
      <h3
        className="relative z-10 text-[11px] font-bold leading-tight transition-colors duration-200"
        style={{ color: hovered ? '#6d28d9' : '#4b5563' }}
      >
        {skill.name}
      </h3>

      {/* Level dots */}
      <div className="relative z-10 flex gap-1 mt-2">
        {[1, 2, 3].map(d => (
          <div
            key={d}
            className="w-1 h-1 rounded-full transition-all duration-300"
            style={{
              background: hovered
                ? d <= 2
                  ? 'linear-gradient(135deg,#7c3aed,#818cf8)'
                  : 'rgba(139,92,246,0.25)'
                : 'rgba(139,92,246,0.2)',
              transform: hovered && d <= 2 ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered =
    activeTab === 'all'
      ? skillsData
      : skillsData.filter(s => s.category === activeTab);

  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[12%] py-28 scroll-mt-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf9ff 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #c4b5fd, transparent)' }}
      />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">My Expertise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-5 h-1 w-16 rounded-full origin-center"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
        />
      </div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 flex flex-wrap justify-center gap-2 mb-12"
      >
        {CATEGORIES.map(cat => {
          const isActive = activeTab === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className="relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 overflow-hidden"
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, #7c3aed, #4f46e5)'
                  : 'white',
                color: isActive ? '#fff' : '#6b7280',
                border: isActive ? '1px solid transparent' : '1px solid rgba(139,92,246,0.2)',
                boxShadow: isActive ? '0 4px 16px rgba(124,58,237,0.3)' : 'none',
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span className="mr-1.5 opacity-70">{cat.emoji}</span>
              {cat.label}
            </button>
          );
        })}
      </motion.div>

      {/* Skills grid */}
      <motion.div
        layout
        className="relative z-10 flex flex-wrap justify-center gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="w-[100px] sm:w-[110px]">
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #e9d5ff, transparent)' }}
      />
    </section>
  );
};

export default Skills;