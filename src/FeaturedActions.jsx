import React from 'react';
import { motion } from 'framer-motion';
import { BadgeIndianRupee, FileBadge, MessageCircle, Printer, WalletCards } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from './animations.js';

const actions = [
  {
    title: 'Money Transfer',
    text: 'Fast transfer support with clear guidance.',
    icon: BadgeIndianRupee,
  },
  {
    title: 'Colour Xerox & Print',
    text: 'Sharp prints, copies, scans, and finishing help.',
    icon: Printer,
  },
  {
    title: 'Aadhaar / PAN Support',
    text: 'Document support for essential identity needs.',
    icon: FileBadge,
  },
  {
    title: 'Recharge & Bill Payments',
    text: 'Mobile, DTH, EB bill, and utility support.',
    icon: WalletCards,
  },
];

export default function FeaturedActions() {
  return (
    <motion.section className="section action-section" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
      <motion.div className="section-title" variants={fadeUp}>
        <span className="section-kicker">Popular actions</span>
        <h2>Start with what customers ask for most</h2>
      </motion.div>
      <div className="action-grid">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <motion.article className="action-card" key={action.title} variants={scaleIn} whileHover={{ y: -7, scale: 1.01 }}>
              <Icon size={30} />
              <h3>{action.title}</h3>
              <p>{action.text}</p>
              <a href={createWhatsAppLink(action.title)} target="_blank" rel="noreferrer">
                <MessageCircle size={17} />
                Ask Now
              </a>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
