import React, { useState } from "react";
import { skillsData } from "@/assets/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[12%] py-28 scroll-mt-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #faf9ff 100%)" }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #7c3aed 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
      />

      {/* Top border accent */}
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

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.055 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -6, scale: 1.03 }}
            className="relative flex flex-col items-center justify-center text-center p-6 rounded-2xl cursor-default overflow-hidden bg-white"
            style={{
              border: hoveredIndex === index
                ? "1px solid rgba(139,92,246,0.35)"
                : "1px solid rgba(139,92,246,0.1)",
              boxShadow: hoveredIndex === index
                ? "0 12px 40px rgba(139,92,246,0.12), 0 2px 8px rgba(0,0,0,0.04)"
                : "0 2px 12px rgba(0,0,0,0.04)",
              transition: "border 0.25s, box-shadow 0.25s",
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-300"
              style={{
                width: hoveredIndex === index ? "75%" : "25%",
                background: "linear-gradient(90deg, transparent, #7c3aed, transparent)",
              }}
            />

            {/* Hover background tint */}
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06), transparent 70%)",
                }}
              />
            )}

            {/* Icon — always white background */}
            <div
              className="relative z-10 mb-4 p-3 rounded-xl bg-white"
              style={{
                border: "1px solid rgba(139,92,246,0.12)",
                boxShadow: "0 2px 8px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <skill.IconComponent size={34} color={skill.color} />
            </div>

            {/* Skill Name */}
            <h3
              className="relative z-10 text-sm font-semibold leading-tight transition-colors duration-250"
              style={{
                color: hoveredIndex === index ? "#6d28d9" : "#4b5563",
              }}
            >
              {skill.name}
            </h3>

            {/* Decorative index number */}
            <span
              className="absolute bottom-3 right-4 text-[10px] font-mono transition-opacity duration-300"
              style={{
                color: "rgba(139,92,246,0.5)",
                opacity: hoveredIndex === index ? 1 : 0,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #e9d5ff, transparent)" }}
      />
    </section>
  );
};

export default Skills;