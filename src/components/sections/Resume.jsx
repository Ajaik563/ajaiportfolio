import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Download, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const education = [
  {
    title: 'B.E. Computer Science Engineering',
    institution: 'Jerusalem College of Engineering',
    period: '2022 – 2026',
    score: '81%',
    details: 'Focused on core CS subjects, software engineering, databases, and full stack web development.'
  },
  {
    title: 'Higher Secondary School (HSc)',
    institution: 'Peniel Matriculation Higher Secondary School',
    period: '2021 – 2022',
    score: '79%',
    details: 'Specialized in computer science and mathematics.'
  },
  {
    title: 'Secondary School (SSLC)',
    institution: 'Peniel Matriculation Higher Secondary School',
    period: '2019 – 2020',
    score: '70%',
    details: 'General curriculum with honors in science.'
  }
];

const experience = [
  {
    title: 'Full Stack Development (Java) Intern',
    company: 'Retech Solutions Pvt. Ltd.',
    period: 'Dec 2024',
    details: [
      'Developed dynamic and responsive web interfaces using React.js, Bootstrap, HTML, and CSS.',
      'Integrated frontend components with Spring Boot backend services for seamless data flow.',
      'Worked with and optimized RESTful API integrations to improve data retrieval efficiency.',
      'Followed best practices in component-based architecture and modular design.'
    ]
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="My Resume" subtitle="Timeline" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 border border-primary/20 text-primary-light rounded-2xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-4 border-primary flex items-center justify-center" />
                  
                  <div className="p-6 rounded-3xl glass-card border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <span className="text-sm text-primary-light font-medium">{item.company}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="list-none flex gap-2 items-start">
                          <span className="text-primary-light mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary/10 border border-secondary/20 text-secondary-light rounded-2xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-background border-4 border-secondary flex items-center justify-center" />

                  <div className="p-6 rounded-3xl glass-card border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <span className="text-sm text-secondary-light font-medium">{item.institution}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {item.details}
                    </p>
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded bg-secondary/10 border border-secondary/20 text-secondary-light">
                      Grade: {item.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="/Ajai_K_Resume.txt"
            download="Ajai_K_Resume.txt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Resume;
