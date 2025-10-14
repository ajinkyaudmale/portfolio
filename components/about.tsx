'use client';

import { TypewriterMultiline } from './typewriter';

export function About() {
  const aboutLines = [
    "I'm a passionate developer with experience in web development, blockchain, and interactive programming.",
    "Skilled in Solidity, JavaScript, React, C, C++, Java, and Python.",
    "I love building modern applications that connect creativity with technology."
  ];

  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-10">
      <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
        <TypewriterMultiline 
          lines={aboutLines}
          speed={10}  // Faster typing speed
          lineDelay={200}  // Shorter delay between lines
        />
        
        {/* Show all text immediately on hover for better UX */}
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 pointer-events-none">
          <div className="space-y-4">
            {aboutLines.map((line, index) => (
              <div key={index} className="text-pretty leading-relaxed text-muted-foreground">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
