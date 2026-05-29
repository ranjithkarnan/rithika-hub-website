import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button
      className={`back-to-top ${isVisible ? 'back-to-top-visible' : ''}`}
      type="button"
      aria-label="Back to Top"
      data-tooltip="Back to Top"
      onClick={scrollToTop}
    >
      <ArrowUp size={22} />
    </button>
  );
}
