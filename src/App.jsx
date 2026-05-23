import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

// UI components
import BackgroundEffects from './components/ui/BackgroundEffects';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-gray-100 selection:bg-primary-light selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-55 origin-left"
        style={{ scaleX, zIndex: 100 }}
      />

      {/* Floating Animated Ambient Blobs */}
      <BackgroundEffects />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
