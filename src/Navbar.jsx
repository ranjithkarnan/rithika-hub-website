import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from './siteData.jsx';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const current = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 120);

      if (current) {
        setActiveHref(`#${current.id}`);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <header className={`nav ${isScrolled ? 'nav-blur' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <nav className="nav-frame" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setIsOpen(false)}>
          <span>RH</span>
          <span className="brand-copy">
            <strong>Rithika Hub</strong>
            <small>Digital Service Center</small>
          </span>
        </a>
        <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
          <div className="mobile-menu-head">
            <span>Menu</span>
            <small>Choose a page</small>
          </div>
          {links.map((link) => (
            <a
              className={activeHref === link.href ? 'nav-link-active' : ''}
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveHref(link.href);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mobile-menu-whatsapp"
            href={createWhatsAppLink('your services')}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
        <div className="nav-tools">
          <a className="nav-whatsapp" href={createWhatsAppLink('your services')} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <button
        className={`nav-backdrop ${isOpen ? 'nav-backdrop-open' : ''}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
}
