'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: 'hana.samoh948@gmail.com',
    href: 'mailto:hana.samoh948@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/hana-samah',
    href: 'https://linkedin.com/in/hana-samah',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Hana-Samah',
    href: 'https://github.com/Hana-Samah',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const FloatingLabel = ({ label, name, type = 'text', placeholder, value, onChange, onFocus, onBlur, focused, as = 'input', rows }) => {
  const isFloated = focused === name || value;
  const Tag = as;
  const baseClass = `w-full pt-6 pb-2 px-4 text-sm font-medium outline-none transition-all duration-200 resize-none bg-transparent`;
  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        border: focused === name
          ? '1.5px solid rgba(124,58,237,0.7)'
          : '1.5px solid rgba(139,92,246,0.15)',
        boxShadow: focused === name
          ? '0 0 0 3px rgba(139,92,246,0.1), 0 4px 16px rgba(139,92,246,0.06)'
          : '0 2px 8px rgba(0,0,0,0.03)',
        background: 'rgba(255,255,255,0.9)',
        transition: 'border 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Floating label */}
      <label
        htmlFor={name}
        className="absolute left-4 font-semibold pointer-events-none transition-all duration-200"
        style={{
          top: isFloated ? '8px' : as === 'textarea' ? '18px' : '50%',
          transform: isFloated ? 'none' : as === 'textarea' ? 'none' : 'translateY(-50%)',
          fontSize: isFloated ? '10px' : '13px',
          color: isFloated ? '#7c3aed' : '#9ca3af',
          letterSpacing: isFloated ? '0.1em' : 'normal',
          textTransform: isFloated ? 'uppercase' : 'none',
        }}
      >
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={type}
        rows={rows}
        required
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={() => onBlur('')}
        className={baseClass}
        style={{ color: '#1f2937', minHeight: as === 'textarea' ? '100px' : 'auto' }}
      />
    </div>
  );
};

const Contact = () => {
  const [result, setResult] = useState('');
  const [focused, setFocused] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setResult('');
    const formData = new FormData(e.target);
    formData.append('access_key', '158c6de3-1f8a-4fe6-8d42-f5c8359e1424');
    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    const data = await response.json();
    setSending(false);
    if (data.success) {
      setResult('success');
      e.target.reset();
      setForm({ name: '', email: '', message: '' });
    } else {
      setResult('error');
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full px-6 md:px-[10%] py-28 scroll-mt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf9ff 0%, #f5f3ff 100%)' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #c4b5fd, transparent)' }}
      />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-purple-200 bg-white/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">Available for work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-5 h-1 w-16 rounded-full origin-center"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #4f46e5)' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-5 text-gray-500 text-base max-w-xl mx-auto leading-relaxed"
        >
          I'm currently open to new opportunities in Web & Mobile Development.
          Drop me a message and I'll get back to you soon!
        </motion.p>
      </div>

      {/* Two-column layout: form + info */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-6 justify-center"
        >
          <p
            className="text-2xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Let's create something{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #f0abfc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              beautiful
            </span>{' '}
            together.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            Whether it's a new project, a collaboration, or just a friendly chat, I'm always happy to connect.
          </p>

          <div className="flex flex-col gap-3 mt-4">
            {SOCIAL_LINKS.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0 transition-colors duration-200 group-hover:bg-purple-100"
                  style={{ background: 'rgba(139,92,246,0.08)' }}
                >
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors truncate">{value}</p>
                </div>
                <div className="ml-auto text-gray-300 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200">→</div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div
            className="relative p-8 sm:p-10 rounded-3xl bg-white/70 backdrop-blur-sm"
            style={{
              border: '1px solid rgba(139,92,246,0.15)',
              boxShadow: '0 24px 80px rgba(139,92,246,0.08)',
            }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #4f46e5, transparent)' }}
            />

            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FloatingLabel
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  focused={focused}
                  onFocus={setFocused}
                  onBlur={setFocused}
                />
                <FloatingLabel
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  focused={focused}
                  onFocus={setFocused}
                  onBlur={setFocused}
                />
              </div>

              <FloatingLabel
                label="Your Message"
                name="message"
                as="textarea"
                rows={6}
                value={form.message}
                onChange={handleChange}
                focused={focused}
                onFocus={setFocused}
                onBlur={setFocused}
              />

              <button
                type="submit"
                disabled={sending}
                className="group relative mt-2 w-full py-4 rounded-xl font-bold text-white text-base overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-200 active:scale-[0.98] disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>Send Message ✦</>
                  )}
                </span>
                {/* Shine sweep */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </button>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`text-center text-sm font-semibold py-3 rounded-xl ${
                      result === 'success'
                        ? 'text-green-700 bg-green-50 border border-green-100'
                        : 'text-red-600 bg-red-50 border border-red-100'
                    }`}
                  >
                    {result === 'success'
                      ? '✓ Message sent successfully! I\'ll be in touch soon.'
                      : '✗ Something went wrong. Please try again.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;