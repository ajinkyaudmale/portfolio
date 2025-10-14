'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: "Solidity", color: "#3C3C3D" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Python", color: "#3776AB" },
  { name: "C", color: "#A8B9CC" },
  { name: "C++", color: "#00599C" },
  { name: "Java", color: "#007396" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "Three.js", color: "#000000" },
  { name: "Git", color: "#F05032" },
  { name: "Web Development", color: "#6B7280" },
  { name: "Blockchain", color: "#3C3C3D" },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-3xl font-bold text-center">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: `0 10px 20px -5px ${skill.color}40`,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className={`relative p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 
                      flex flex-col items-center justify-center gap-2 cursor-default 
                      transition-all duration-300 hover:bg-card/80`}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ color: skill.color }}
            >
              {skill.name === 'JavaScript' && <span>JS</span>}
              {skill.name === 'React' && <span>⚛️</span>}
              {skill.name === 'Python' && <span>🐍</span>}
              {skill.name === 'HTML' && <span>📄</span>}
              {skill.name === 'CSS' && <span>🎨</span>}
              {skill.name === 'Git' && <span>🔄</span>}
              {skill.name === 'Web Development' && <span>🌐</span>}
              {skill.name === 'Blockchain' && <span>⛓️</span>}
              {!['JavaScript', 'React', 'Python', 'HTML', 'CSS', 'Git', 'Web Development', 'Blockchain'].includes(skill.name) && 
                <span>{skill.name[0]}</span>}
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent"
              initial={{ width: 0, background: skill.color }}
              whileHover={{ 
                width: '100%',
                background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
