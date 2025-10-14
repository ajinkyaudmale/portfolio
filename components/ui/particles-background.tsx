'use client';

import dynamic from 'next/dynamic';

const Particles = dynamic(
  () => import('@/components/ui/particles'),
  { ssr: false }
);

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        particleColors={['#ff0000', '#ff3333', '#ff6666']}
        particleCount={500}  // Reduced for better performance with hover effect
        particleSpread={10}  // More spread out
        speed={0.2}
        particleBaseSize={200}  // More reasonable size for better hover interaction
        moveParticlesOnHover={true}
        particleHoverFactor={15}  // Significantly increased hover effect
        alphaParticles={true}
        disableRotation={false}
        className="w-full h-full"
      />
      <style jsx global>{`
        canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }
        .particles-container {
          pointer-events: auto !important;
        }
      `}</style>
    </div>
  );
}
