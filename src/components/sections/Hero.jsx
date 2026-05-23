import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import avatarImg from '../../assets/avatar.jpeg';

const roles = ["Software Developer", "React Developer", "Full Stack Learner"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait before deleting
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Wait before starting next role
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Section */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary-light bg-primary/10 border border-primary/20 inline-block mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-400 to-secondary-light">Ajai</span> <span className="inline-block animate-bounce">👋</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-gray-300 h-10 mb-6 flex items-center justify-center lg:justify-start"
          >
            <span>I'm a&nbsp;</span>
            <span className="text-primary-light border-r-2 border-primary-light/80 animate-pulse pr-1">
              {displayText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Aspiring Software Developer passionate about web technologies and back-end integration. 
            Jerusalem College of Engineering student with a strong foundation in Java, React, and databases.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://github.com/Ajaik563"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajaikannan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ajaik2424@gmail.com"
              className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image/Avatar Section */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Glowing backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-30 filter blur-xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-3xl opacity-20 filter blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
            
            {/* Main Picture Container */}
            <div className="absolute inset-4 rounded-3xl overflow-hidden border border-white/10 glass-card p-2 flex items-center justify-center animate-float">
              <img
                src={avatarImg}
                alt="Ajai K"
                className="w-full h-full object-cover rounded-2xl scale-105 transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Futuristic Tech Lines Decorator */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none scale-105"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="96" height="96" rx="14" stroke="url(#rectGradient)" strokeWidth="0.5" strokeDasharray="6 4" className="opacity-40" />
              <defs>
                <linearGradient id="rectGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
