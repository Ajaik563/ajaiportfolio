import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Footer background blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        {/* Brand/Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            AJAI K
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            &copy; {currentYear} Ajai. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Ajaik563"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ajaikannan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ajaik2424@gmail.com"
            className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 text-gray-400 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
