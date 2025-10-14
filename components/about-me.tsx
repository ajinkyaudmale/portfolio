'use client';

import { useState, useEffect } from 'react';
import { TypewriterMultiline } from './TypewriterEffect';

const aboutLines = [
  "Full Stack Developer | AI/ML Enthusiast | Blockchain Explorer",
  "Building intelligent web apps with React & Next.js",
  "Training models & deploying smart contracts",
  "From neural networks to decentralized apps",
  "Bridging the gap between Web2 and Web3"
];

export function AboutMe() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
          </div>
          
          <div className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            <TypewriterMultiline 
              lines={aboutLines}
              speed={50}
              lineDelay={700}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard value={30} label="Projects Completed" />
            <StatCard value={2} label="Years Experience" />
            <StatCard value={10} label="Technologies" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = duration / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
      <div className="text-4xl font-bold text-purple-400 mb-2">
        {count}+
      </div>
      <div className="text-white/70 font-light">{label}</div>
    </div>
  );
}
