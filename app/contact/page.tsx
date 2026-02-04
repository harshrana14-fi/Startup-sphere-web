'use client'

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Sparkles,
  Send
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#020202] text-white overflow-x-hidden selection:bg-purple-500/30 font-sans"
    >
      {/* Dynamic Background FX */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 z-30 opacity-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
          } as React.CSSProperties}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Get in touch</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            CONTACT
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
            Get in touch with Startup Sphere – we'd love to hear from you. Whether you want to join our community, 
            partner with us, or learn more about our initiatives, reach out through the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold italic tracking-tight">Reach out directly</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Department of ITE, Maharaja Agrasen Institute of Technology (MAIT)<br />
                      Rohini, Delhi-110086
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Call Center</h4>
                    <p className="text-gray-400 text-sm font-medium">+91 82877 84380</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="p-3 rounded-2xl bg-rose-500/20 text-rose-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email Support</h4>
                    <p className="text-gray-400 text-sm font-medium">kartik1909singh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-gray-500 text-[11px]">/ social network /</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/startups-sphere/" },
                  { icon: <Twitter size={20} />, link: "#" },
                  { icon: <Instagram size={20} />, link: "https://www.instagram.com/startup_sphere/" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0a0a0a] rounded-[3rem] p-10 md:p-14 border border-white/5">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold mb-3 italic tracking-tight text-white">Send a Message</h3>
                  <p className="text-gray-400 text-sm font-light">
                    Have a specific inquiry? Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 transition-all text-sm text-white placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-sm text-white placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/30 transition-all text-sm text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your idea or question..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/30 transition-all text-sm text-white placeholder:text-gray-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-purple-500 hover:text-white transition-all duration-500 group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="relative rounded-[3rem] overflow-hidden border border-white/5 group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202] z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.2410166255986!2d77.06298446264096!3d28.71886730011352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1769438689194!5m2!1sen!2sin"
              width="100%"
              height="600"
              className="grayscale invert opacity-60 hover:opacity-80 transition-opacity duration-700"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ContactPage;