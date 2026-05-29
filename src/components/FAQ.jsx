import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Minus, Plus } from 'lucide-react';
import { createWhatsAppLink } from '../siteData.jsx';
import { fadeUp, staggerContainer, viewportOnce } from '../animations.js';

const faqs = [
  {
    question: 'How long does Aadhaar update take?',
    answer:
      'Aadhaar update timing depends on the type of correction and official processing. We help you submit the request properly and guide you with the required documents.',
  },
  {
    question: 'Can I print documents from WhatsApp?',
    answer:
      'Yes. You can send your PDF, image, or document through WhatsApp, and we will print it for you.',
  },
  {
    question: 'Do you provide passport size photos?',
    answer:
      'Yes. We provide passport size photo service for applications, forms, certificates, and ID purposes.',
  },
  {
    question: 'Can I pay online?',
    answer:
      'Yes. Online payment options are available. You can confirm the payment method while contacting us.',
  },
  {
    question: 'What services are available at Rithika Hub?',
    answer:
      'We provide Aadhaar-related support, PAN card assistance, printing, Xerox, lamination, passport photos, online applications, recharge, bill payment, and other digital services.',
  },
  {
    question: 'Do I need to bring original documents?',
    answer:
      'For some services, original documents may be required for verification. We recommend contacting us on WhatsApp before visiting.',
  },
  {
    question: 'Can I get service pricing before visiting?',
    answer:
      'Yes. You can message us on WhatsApp and we will share the approximate price based on your service requirement.',
  },
  {
    question: 'Where is Rithika Hub located?',
    answer:
      'Please check the Location section on the website for address and Google Maps directions.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      className="section faq-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <motion.div className="section-title centered faq-title" variants={fadeUp}>
        <span className="section-kicker">Common questions</span>
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers before you visit Rithika Hub.</p>
      </motion.div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article className="faq-item" key={item.question} variants={fadeUp}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      <motion.div className="faq-cta" variants={fadeUp}>
        <strong>Still have questions?</strong>
        <a href={createWhatsAppLink('your services')} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Ask on WhatsApp
        </a>
      </motion.div>
    </motion.section>
  );
}
