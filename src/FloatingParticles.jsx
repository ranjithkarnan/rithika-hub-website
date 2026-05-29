import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 23) % 78)}%`,
  size: 4 + (index % 4) * 2,
  delay: index * 0.28,
}));

export default function FloatingParticles() {
  const [shouldRender, setShouldRender] = useState(() => (
    typeof window === 'undefined' ? true : !window.matchMedia('(max-width: 768px)').matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateRenderState = () => setShouldRender(!mediaQuery.matches);

    updateRenderState();
    mediaQuery.addEventListener('change', updateRenderState);
    return () => mediaQuery.removeEventListener('change', updateRenderState);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          animate={{ opacity: [0.18, 0.55, 0.18], y: [0, -18, 0] }}
          key={particle.id}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          transition={{
            duration: 5.5 + particle.id * 0.1,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
