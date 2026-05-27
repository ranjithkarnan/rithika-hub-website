import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 80, damping: 24, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 80, damping: 24, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event) => {
      setIsVisible(true);
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="mouse-glow"
      style={{ x, y }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
    />
  );
}
