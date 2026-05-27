import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const stats = [
  { label: '20+ Services', icon: Sparkles },
  { label: 'Fast Support', icon: Zap },
  { label: 'Local Trusted Shop', icon: ShieldCheck },
  { label: 'WhatsApp Enquiry', icon: MessageCircle },
  { label: 'Easy Location Access', icon: MapPin },
];

const stripVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.17,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustStrip() {
  return (
    <motion.section
      className="trust-bar"
      aria-label="Trust highlights"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stripVariants}
    >
      <div className="trust-particles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <motion.div className="trust-row" variants={stripVariants}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.article
              className="trust-stat-card"
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -7, scale: 1.015 }}
              transition={{ duration: 0.2 }}
            >
              <span className="trust-stat-icon">
                <Icon size={22} />
              </span>
              <strong>{stat.label}</strong>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
