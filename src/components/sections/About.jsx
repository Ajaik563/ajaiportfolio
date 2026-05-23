import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { GraduationCap, Award, BookOpen, Cpu, ShieldAlert } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Award,
    value: '2+',
    label: 'Major Projects',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 2,
    icon: Cpu,
    value: '1',
    label: 'Internship Completed',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: BookOpen,
    value: '10+',
    label: 'Technologies Learnt',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    icon: GraduationCap,
    value: '81%',
    label: 'Current BE Grade',
    gradient: 'from-amber-500 to-orange-500',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="About Me" subtitle="Biography" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Detailed Biography Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Aspiring Software Developer
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                I am a passionate B.E. Computer Science Engineering student at Jerusalem College of Engineering. 
                With a strong programming background in both web technologies and back-end logic, 
                I love creating dynamic apps, managing database systems, and integrating modern full-stack architectures.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                My career objective is to leverage my programming expertise to build robust software systems while 
                eagerly adopting emerging engineering standards. I enjoy problem-solving, structured code architectures, 
                and delivering results that align with excellent user experiences.
              </p>

              {/* Education Mini Timeline */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary-light" />
                  Education Profile
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h5 className="font-medium text-gray-200">B.E. Computer Science & Engineering</h5>
                      <p className="text-sm text-gray-400">Jerusalem College of Engineering | 2022 – 2026</p>
                      <p className="text-xs text-primary-light font-medium mt-1">Score: 81%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Stats cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="p-6 rounded-3xl glass-card relative overflow-hidden flex flex-col items-center text-center group border border-white/5 hover:border-white/10"
                >
                  {/* Hover gradient glow */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-full filter blur-xl transition-opacity duration-300`} />
                  
                  <div className={`p-4 bg-white/5 rounded-2xl mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-gray-300" />
                  </div>

                  <span className="text-3xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </span>
                  
                  <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
