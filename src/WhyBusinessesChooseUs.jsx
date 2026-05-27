import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeIndianRupee,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Store,
} from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from './animations.js';

const businessReasons = [
  {
    title: 'One-Stop Service Center',
    text: 'Get Aadhaar, PAN, passport support, Xerox, printing, recharge, money transfer, and ticket booking services in one place.',
    icon: Store,
  },
  {
    title: 'Fast & Reliable Service',
    text: 'Quick support for everyday digital needs with clear guidance and friendly assistance.',
    icon: CheckCircle2,
  },
  {
    title: 'Easy WhatsApp Enquiry',
    text: 'Customers can quickly ask about any service through WhatsApp before visiting the shop.',
    icon: MessageCircle,
  },
  {
    title: 'Affordable Local Support',
    text: 'Simple, budget-friendly service support for nearby customers and families.',
    icon: BadgeIndianRupee,
  },
  {
    title: 'Convenient Location',
    text: 'Located at Pattur Main Road, Chinnapanicheri, Paraniputhur, Chennai - 600122 for easy access.',
    icon: MapPin,
  },
  {
    title: 'Trusted by Local Customers',
    text: 'A familiar local shop helping customers with daily documents, payments, printouts, and mobile services.',
    icon: ShieldCheck,
  },
];

export default function WhyBusinessesChooseUs() {
  return (
    <section className="business-choice-section">
      <motion.div
        className="section business-choice-inner"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div className="section-title centered dark-title" variants={fadeUp}>
          <span className="section-kicker">Trusted local support</span>
          <h2>Why Customers Choose Rithika Hub</h2>
          <p>
            Your nearby trusted service center for quick documents, printing,
            payments, recharge, ticket booking, and mobile-related support - all
            in one place.
          </p>
        </motion.div>
        <div className="business-bento">
          {businessReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                className={`business-card business-card-${index + 1}`}
                key={reason.title}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <span>
                  <Icon size={25} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
