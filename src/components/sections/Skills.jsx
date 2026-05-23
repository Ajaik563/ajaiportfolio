import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython,
  FaJava, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiJavascript, SiPostman,
  SiApachekafka, SiStreamlit, SiOpenai, SiTailwindcss
} from 'react-icons/si';
import { RiRobot2Fill } from 'react-icons/ri';
import { BsCpuFill } from 'react-icons/bs';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-4 h-4" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-4 h-4" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400 w-4 h-4" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 w-4 h-4" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-4 h-4" /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-4 h-4" /> },
      { name: 'MySQL', icon: <SiMysql className="text-sky-500 w-4 h-4" /> },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython className="text-yellow-400 w-4 h-4" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 w-4 h-4" /> },
      { name: 'Java', icon: <FaJava className="text-orange-600 w-4 h-4" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500 w-4 h-4" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white w-4 h-4" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500 w-4 h-4" /> }
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'ChatGPT', icon: <SiOpenai className="text-emerald-400 w-4 h-4" /> },
      { name: 'Claude AI', icon: <RiRobot2Fill className="text-amber-500 w-4 h-4" /> },
      { name: 'Prompt Engineering', icon: <BsCpuFill className="text-indigo-400 w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary-light">Tools</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            The technologies I use to design, build, and scale modern applications.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.07 }}
              className="p-6 rounded-2xl bg-[#0f1115]/60 border border-white/5 shadow-md flex flex-col gap-5 relative overflow-hidden hover:border-white/10 transition-colors duration-300"
            >
              {/* Top Row: Title & count */}
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-white tracking-wide">
                  {category.title}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161920]/60 border border-white/5 text-gray-300 text-xs font-semibold hover:border-primary-light/40 hover:bg-[#1a1e27]/80 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
