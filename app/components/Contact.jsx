import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState('');
  const [focused, setFocused] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '158c6de3-1f8a-4fe6-8d42-f5c8359e1424');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('✓ Message sent successfully!');
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  const inputClass = (name) =>
    `w-full p-4 rounded-xl text-sm font-medium outline-none transition-all duration-200 border bg-white placeholder-gray-400 ${
      focused === name
        ? 'border-purple-400 shadow-[0_0_0_3px_rgba(139,92,246,0.12)]'
        : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <div
      id="contact"
      className="relative w-full px-6 md:px-[12%] py-28 scroll-mt-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #faf9ff 0%, #f5f3ff 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #c4b5fd, transparent)' }}
      />

      {/* Section Header */}
      <div className="text-center mb-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-purple-200 bg-white/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-[0.18em] uppercase font-semibold text-purple-600">Connect with me</span>
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed"
        >
          I'm currently looking for new opportunities in Web & Mobile Development and IT.
          Whether you have a question or just want to say hi <br></br>I'll get back to you!
        </motion.p>
      </div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div
          className="p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-sm"
          style={{
            border: '1px solid rgba(139,92,246,0.15)',
            boxShadow: '0 24px 80px rgba(139,92,246,0.08)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #4f46e5, transparent)' }}
          />

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className={inputClass('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className={inputClass('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
                required
                className={inputClass('message')}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-200 active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' }}
            >
              Send Message ✦
            </button>

            {result && (
              <p
                className={`text-center text-sm font-medium py-2 rounded-lg ${
                  result.includes('✓')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 bg-gray-50'
                }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;