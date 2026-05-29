import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BadgeIndianRupee, FileBadge, MessageCircle, Printer, Smartphone, Ticket, WalletCards } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';
import { buttonMotion, fadeUp, staggerContainer } from './animations.js';

const dashboardItems = [
  { label: 'Money Transfer', icon: BadgeIndianRupee },
  { label: 'Xerox & Print', icon: Printer },
  { label: 'PAN / Aadhaar', icon: FileBadge },
  { label: 'Recharge', icon: Smartphone },
  { label: 'Ticket Booking', icon: Ticket },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const dashboardY = useTransform(scrollYProgress, [0, 0.28], [0, 42]);
  const glowY = useTransform(scrollYProgress, [0, 0.28], [0, -34]);

  function scrollToServices() {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  return (
    <section className="hero-new" id="home">
      <motion.div className="hero-mesh" style={{ y: glowY }} />
      <div className="hero-shell">
        <motion.div className="hero-text" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span className="badge" variants={fadeUp}>One-stop digital service center</motion.span>
          <motion.h1 variants={fadeUp}>
            Documents, Payments, Printing & Mobile Services - All in One Place
          </motion.h1>
          <motion.p variants={fadeUp}>
            Get fast support for Aadhaar, PAN, passport, Xerox, recharge, money
            transfer, tickets, and more at your trusted local service hub.
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp}>
            <motion.a className="button button-primary" href={createWhatsAppLink('your services')} target="_blank" rel="noreferrer" {...buttonMotion}>
              <MessageCircle size={19} />
              Enquire on WhatsApp
            </motion.a>
            <motion.button className="button button-soft" type="button" onClick={scrollToServices} {...buttonMotion}>
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="dashboard-wrap" aria-label="Service dashboard preview" style={{ y: dashboardY }}>
          <motion.div className="orbit-card orbit-one" animate={{ y: [0, -12, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
            <WalletCards size={20} />
            Utility Bills
          </motion.div>
          <motion.div className="orbit-card orbit-two" animate={{ y: [0, 14, 0] }} transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}>
            <Printer size={20} />
            Print Ready
          </motion.div>
          <motion.div className="dashboard-card" initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="dashboard-head">
              <span>Rithika Hub</span>
              <strong>Digital desk</strong>
            </div>
            <div className="dashboard-meter">
              <span />
              <strong>20+ Services</strong>
            </div>
            <div className="dashboard-list">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a key={item.label} href={createWhatsAppLink(item.label)} target="_blank" rel="noreferrer" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                    <Icon size={18} />
                    <span>{item.label}</span>
                    <small>Ask</small>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
