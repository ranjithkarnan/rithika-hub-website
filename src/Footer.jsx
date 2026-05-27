import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ADDRESS, bentoCategories, createWhatsAppLink, DISPLAY_PHONE } from './siteData.jsx';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="#home">
            <span>RH</span>
            <strong>Rithika Hub</strong>
          </a>
          <p>
            A modern local digital convenience hub for documents, printing,
            payments, recharge, booking, and mobile essentials.
          </p>
          <a className="footer-cta" href={createWhatsAppLink('your services')} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp Now
          </a>
        </div>
        <div>
          <h3>Categories</h3>
          {bentoCategories.map((category) => (
            <a key={category.title} href="#services">
              {category.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>{DISPLAY_PHONE}</p>
          <p>{ADDRESS}</p>
        </div>
      </div>
      <div className="footer-bottom-new">
        <span>Copyright 2026 Rithika Hub. All rights reserved.</span>
        <span>Rithika Hub / Rithika Mobiles</span>
      </div>
    </footer>
  );
}
