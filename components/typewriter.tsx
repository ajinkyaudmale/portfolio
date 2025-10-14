'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
};

export function Typewriter({ 
  text, 
  speed = 50, 
  delay = 0, 
  onComplete,
  className = '' 
}: TypewriterProps) {
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
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

type TypewriterMultilineProps = {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  className?: string;
};

export function TypewriterMultiline({ 
  lines, 
  speed = 30, 
  lineDelay = 500,
  className = ''
}: TypewriterMultilineProps) {
  const [completedLines, setCompletedLines] = useState(0);

  const handleLineComplete = () => {
    setCompletedLines(prev => prev + 1);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="text-left">
          {index < completedLines ? (
            <span>{line}</span>
          ) : index === completedLines ? (
            <Typewriter 
              text={line} 
              speed={speed} 
              delay={index * lineDelay}
              onComplete={handleLineComplete}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
