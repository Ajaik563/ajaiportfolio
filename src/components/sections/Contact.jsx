import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-secondary/10 rounded-full filter blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Feel free to reach out for internship opportunities, project collaborations, or just to say hello! I will get back to you as soon as possible.
              </p>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 text-primary-light rounded-2xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Email Me</span>
                    <a href="mailto:ajaik2424@gmail.com" className="text-sm font-semibold text-gray-200 hover:text-primary-light transition-colors duration-300">
                      ajaik2424@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 text-secondary-light rounded-2xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Call Me</span>
                    <a href="tel:+917200154450" className="text-sm font-semibold text-gray-200 hover:text-secondary-light transition-colors duration-300">
                      +91 7200154450
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 text-primary-light rounded-2xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Location</span>
                    <span className="text-sm font-semibold text-gray-200">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-4">
                Connect on LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/ajaikannan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 hover:bg-secondary/15 border border-white/10 hover:border-secondary/50 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-secondary-light" />
                <span className="text-sm font-medium">linkedin.com/in/ajaikannan</span>
              </a>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary-light focus:outline-none text-white text-sm transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary-light focus:outline-none text-white text-sm transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-primary-light focus:outline-none text-white text-sm transition-colors duration-300 resize-none"
                    placeholder="Describe your project, question, or opportunity..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-55 transition-all duration-300"
                >
                  {isSubmitted ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-emerald-400 text-xs font-semibold mt-4"
                  >
                    Thank you! Your message was sent successfully.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
