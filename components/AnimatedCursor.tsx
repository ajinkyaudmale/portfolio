'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const AnimatedCursor = dynamic(
  () => import('react-animated-cursor'),
  { ssr: false }
);

export default function Cursor() {
  const { theme } = useTheme();
  const cursorColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color={cursorColor}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.7}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'button',
        '.link',
        'img',
        'svg',
      ]}
    />
  );
}