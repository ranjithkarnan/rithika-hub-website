import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { createWhatsAppLink } from '../siteData.jsx';

const actions = [
  {
    label: 'Call Now',
    href: 'tel:+919884497990',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    href: createWhatsAppLink('your services'),
    icon: MessageCircle,
    external: true,
  },
];

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 250);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="floating-actions" aria-label="Quick actions">
      {actions.map((action, index) => {
        const Icon = action.icon;

        return (
          <motion.a
            aria-label={action.label}
            className="floating-action-btn"
            data-tooltip={action.label}
            href={action.href}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.28 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            key={action.label}
            rel={action.external ? 'noreferrer' : undefined}
            target={action.external ? '_blank' : undefined}
          >
            <Icon size={22} />
          </motion.a>
        );
      })}

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            aria-label="Back To Top"
            className="floating-action-btn"
            data-tooltip="Back To Top"
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.92 }}
            transition={{ duration: 0.24 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={22} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
