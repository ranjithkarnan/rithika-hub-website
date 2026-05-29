import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarCheck, FileCheck2, Smile, Sparkles } from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer } from '../animations.js';

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Documents Processed',
    icon: FileCheck2,
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Happy Customers',
    icon: Smile,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Services Available',
    icon: Sparkles,
  },
  {
    value: 7,
    suffix: '',
    label: 'Days Support',
    icon: CalendarCheck,
  },
];

function CountUp({ end, suffix, isActive }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    let frameId;
    const duration = 1300;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, isActive]);

  return (
    <>
      {count.toLocaleString('en-IN')}
      {suffix}
    </>
  );
}

export default function ServiceStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.section
      className="section stats-section"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      <motion.div className="section-title centered stats-title" variants={fadeUp}>
        <span className="section-kicker">Trusted every day</span>
        <h2>Local service numbers that matter</h2>
      </motion.div>
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.article className="stat-card" key={stat.label} variants={scaleIn} whileHover={{ y: -6, scale: 1.01 }}>
              <span className="stat-icon">
                <Icon size={24} />
              </span>
              <strong>
                <CountUp end={stat.value} suffix={stat.suffix} isActive={isInView} />
              </strong>
              <p>{stat.label}</p>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
