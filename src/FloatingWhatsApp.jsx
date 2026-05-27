import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-wa"
      href={createWhatsAppLink('your services')}
      aria-label="Chat with Rithika Hub on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={26} />
    </a>
  );
}
