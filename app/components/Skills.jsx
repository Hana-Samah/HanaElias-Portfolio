import React, { useState } from "react";
import { skillsData } from "@/assets/assets";
import { motion } from "framer-motion";

const CATEGORIES = [
  { key: "Programming", label: "Programming", subtitle: "Java • Python • JavaScript • MySQL" },
  { key: "Web",         label: "Web",         subtitle: "HTML • CSS • PHP • Next • Laravel" },
  { key: "Mobile",      label: "Mobile",      subtitle: "React Native • Flutter" },
  { key: "Tools",       label: "Tools",       subtitle: "Git • Figma • Unity • Vercel" },
];

const SkillCard = ({ skill, index, groupIndex }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: groupIndex * 0.04 + index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative flex flex-col items-center justify-center text-center p-4 rounded-2xl cursor-default overflow-hidden bg-white"
      style={{
        border: hovered ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(139,92,246,0.1)",
        boxShadow: hovered
          ? "0 12px 36px rgba(139,92,246,0.13), 0 2px 8px rgba(0,0,0,0.04)"
          : "0 2px 10px rgba(0,0,0,0.04)",
        transition: "border 0.25s, box-shadow 0.25s",
      }}
    >
      {/* Shimmer top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-300"
        style={{
          width: hovered ? "75%" : "25%",
          background: "linear-gradient(90deg, transparent, #7c3aed, transparent)",
        }}
      />

      {/* Hover tint */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06), transparent 70%)" }}
        />
      )}

      {/* Icon */}
      <div
        className="relative z-10 mb-3 p-3 rounded-xl bg-white"
        style={{
          border: "1px solid rgba(139,92,246,0.12)",
          boxShadow: "0 2px 8px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <skill.IconComponent size={28} color={skill.color} />
      </div>

      {/* Name */}
      <h3
        className="relative z-10 text-[11px] font-semibold leading-tight transition-colors duration-200"
        style={{ color: hovered ? "#6d28d9" : "#4b5563" }}
      >
        {skill.name}
      </h3>

      {/* Index */}
      <span
        className="absolute bottom-2 right-3 text-[9px] font-mono transition-opacity duration-300"
        style={{ color: "rgba(139,92,246,0.5)", opacity: hovered ? 1 : 0 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[12%] py-28 scroll-mt-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #faf9ff 100%)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)" }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #c4b5fd, transparent)" }}
      />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-200 bg-purple-50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">
            My Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mx-auto mt-5 h-1 w-16 rounded-full origin-center"
          style={{ background: "linear-gradient(90deg, #7c3aed, #4f46e5)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          className="mt-4 text-xs text-gray-400 tracking-[0.2em] uppercase"
        >
          ── Tools I work with ──
        </motion.p>
      </div>

      {/* Category Groups */}
      <div className="relative z-10 flex flex-col gap-12">
        {CATEGORIES.map((cat, groupIndex) => {
          const grouped = skillsData.filter((s) => s.category === cat.key);
          if (grouped.length === 0) return null;

          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-lg flex-shrink-0"
                  style={{
                    background: "rgba(139,92,246,0.07)",
                    border: "1px solid rgba(139,92,246,0.18)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
                  />
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">
                    {cat.label}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium hidden sm:block">
                  {cat.subtitle}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.2), transparent)" }}
                />
              </div>

              {/* Cards */}
              <div className="flex flex-wrap justify-center gap-3">
                {grouped.map((skill, index) => (
                  <div key={index} className="w-[100px] sm:w-[110px]">
                    <SkillCard skill={skill} index={index} groupIndex={groupIndex} />
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #e9d5ff, transparent)" }}
      />
    </section>
  );
};

export default Skills;