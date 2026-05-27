import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck2, MessageCircle, PackageCheck, Store } from 'lucide-react';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from './animations.js';

const steps = [
  {
    title: 'Choose Your Service',
    text: 'Select the service you need - Aadhaar, PAN, Xerox, printing, recharge, money transfer, ticket booking, or mobile support.',
    icon: FileCheck2,
  },
  {
    title: 'Send WhatsApp Enquiry',
    text: 'Click the WhatsApp button and send your requirement. Our team will guide you with the details, documents needed, and timing.',
    icon: MessageCircle,
  },
  {
    title: 'Visit the Shop',
    text: 'Come to Rithika Hub with the required documents or details. Our staff will verify and start the process.',
    icon: Store,
  },
  {
    title: 'Complete & Collect',
    text: 'Get your printout, receipt, confirmation, ticket, or completed service quickly and safely.',
    icon: PackageCheck,
  },
];

export default function HowItWorks() {
  return (
    <motion.section className="section process-section" id="process" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
      <motion.div className="section-title centered process-title" variants={fadeUp}>
        <span className="section-kicker">How it works</span>
        <h2>How It Works</h2>
        <p>
          A simple and quick process to get your document, payment, printing,
          recharge, and travel booking services done without confusion.
        </p>
      </motion.div>
      <div className="timeline">
        {steps.map((step, index) => (
          <motion.article className="timeline-step" key={step.title} variants={scaleIn} whileHover={{ y: -6, scale: 1.01 }}>
            <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="step-icon">
              <step.icon size={24} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
