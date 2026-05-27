import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';
import { buttonMotion, fadeUp, scaleIn, staggerContainer, viewportOnce } from './animations.js';

export default function Services({ categories }) {
  return (
    <motion.section
      className="section bento-section"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <motion.div className="section-title" variants={fadeUp}>
        <span className="section-kicker">Bento service system</span>
        <h2>Digital convenience, neatly organized</h2>
        <p>Choose a category, scan the service list, and start a WhatsApp enquiry instantly.</p>
      </motion.div>
      <motion.div className="bento-grid" variants={staggerContainer}>
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.article
              className={`bento-card bento-${index + 1}`}
              key={category.title}
              variants={scaleIn}
              whileHover={{ y: -7, scale: 1.01 }}
            >
              <div className="bento-icon">
                <Icon size={25} />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="service-pills">
                {category.services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <motion.a
                      key={service.name}
                      href={createWhatsAppLink(service.name)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ServiceIcon size={15} />
                      {service.name}
                    </motion.a>
                  );
                })}
              </div>
              <motion.a
                className="text-cta"
                href={createWhatsAppLink(category.title)}
                target="_blank"
                rel="noreferrer"
                {...buttonMotion}
              >
                <MessageCircle size={17} />
                WhatsApp enquiry
              </motion.a>
            </motion.article>
          );
        })}
      </motion.div>
      {categories.length === 0 ? <p className="empty-state">No matching services found. Try another keyword.</p> : null}
    </motion.section>
  );
}
