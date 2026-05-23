import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import bloodConnectImg from '../../assets/bloodconnect.png';
import brainStrokeImg from '../../assets/brain_stroke.png';

const projects = [
  {
    title: 'BloodConnect',
    description: 'A full-stack blood donor management system designed to connect donors and recipients efficiently in real-time. Features automated scheduling, request approvals, and modern responsive layouts.',
    image: bloodConnectImg,
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Java', 'Bootstrap'],
    features: [
      'Real-time automated email notifications',
      'Donor and recipient registrations & secure logins',
      'Comprehensive blood search and request approval interface',
      'Optimized backend services for high-speed data flow'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Ajaik563',
  },
  {
    title: 'Brain Stroke Detection with XAI',
    description: 'A computer-aided diagnosis system that leverages deep learning to identify brain strokes from CT scan slices and explains predictions using Explainable AI (XAI) overlays.',
    image: brainStrokeImg,
    tech: ['TensorFlow', 'EfficientNet', 'Grad-CAM', 'Python', 'React.js'],
    features: [
      'High accuracy brain stroke classification',
      'Grad-CAM explainable visual heatmaps representing model focus',
      'Futuristic clinical dashboard for radiologists',
      'Interactive CT scan slide explorer & analysis tools'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Ajaik563',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="My Projects" subtitle="Portfolio" />

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Project Image View */}
                <div className={`lg:col-span-6 overflow-hidden rounded-3xl border border-white/5 relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Hover Zoom image */}
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Gradient Overlay Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Project Text Details */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-3 mb-8">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-start text-sm text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold flex items-center gap-2 shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
