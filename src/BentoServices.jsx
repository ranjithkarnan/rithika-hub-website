import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';

export default function BentoServices({ categories }) {
  return (
    <section className="section bento-section" id="services">
      <div className="section-title">
        <span className="section-kicker">Bento service system</span>
        <h2>Digital convenience, neatly organized</h2>
        <p>Choose a category, scan the service list, and start a WhatsApp enquiry instantly.</p>
      </div>
      <div className="bento-grid">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <article className={`bento-card bento-${index + 1}`} key={category.title}>
              <div className="bento-icon">
                <Icon size={25} />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="service-pills">
                {category.services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <a key={service.name} href={createWhatsAppLink(service.name)} target="_blank" rel="noreferrer">
                      <ServiceIcon size={15} />
                      {service.name}
                    </a>
                  );
                })}
              </div>
              <a className="text-cta" href={createWhatsAppLink(category.title)} target="_blank" rel="noreferrer">
                <MessageCircle size={17} />
                WhatsApp enquiry
              </a>
            </article>
          );
        })}
      </div>
      {categories.length === 0 ? <p className="empty-state">No matching services found. Try another keyword.</p> : null}
    </section>
  );
}
