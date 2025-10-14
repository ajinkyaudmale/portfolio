'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterText = ({ text, speed = 100, delay = 0, onComplete }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, started, onComplete]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-purple-300">|</span>
      )}
    </span>
  );
};

interface TypewriterMultilineProps {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  className?: string;
}

export const TypewriterMultiline = ({ 
  lines, 
  speed = 80, 
  lineDelay = 500,
  className = '' 
}: TypewriterMultilineProps) => {
  const [completedLines, setCompletedLines] = useState(0);

  const handleLineComplete = () => {
    setCompletedLines(prev => prev + 1);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="text-left flex items-start gap-3">
          <span className="text-purple-400 text-xl flex-shrink-0 mt-1">→</span>
          <span className="flex-1">
            {index < completedLines ? (
              <span>{line}</span>
            ) : index === completedLines ? (
              <TypewriterText 
                text={line} 
                speed={speed} 
                delay={index * lineDelay}
                onComplete={handleLineComplete}
              />
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TypewriterMultiline;
