import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import {
  ADDRESS,
  allServices,
  BUSINESS_NAME,
  createWhatsAppMessageLink,
  DIRECTIONS_URL,
  DISPLAY_PHONE,
  PHONE_NUMBER,
} from './siteData.jsx';
import { fadeUp, viewportOnce } from './animations.js';

export default function LocationContact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') || 'Customer';
    const phone = formData.get('phone') || 'Not provided';
    const service = formData.get('service') || 'your services';
    const message = formData.get('message') || 'Please share details.';
    const text = `Hi Rithika Hub, I want to know about ${service}. Please share details. Name: ${name}. Phone: ${phone}. Message: ${message}`;

    window.open(createWhatsAppMessageLink(text), '_blank', 'noopener,noreferrer');
  }

  return (
    <motion.section className="section location-contact" id="location" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
      <div className="address-card">
        <span className="section-kicker">Location & contact</span>
        <h2>Visit Rithika Hub in Chennai</h2>
        <p>
          <strong>{BUSINESS_NAME}</strong>
          <br />
          {ADDRESS}
        </p>
        <div className="contact-stack">
          <a href={`tel:${PHONE_NUMBER}`}>
            <Phone size={18} />
            Phone / WhatsApp: {DISPLAY_PHONE}
          </a>
          <span>
            <Clock size={18} />
            Opening hours: Update soon
          </span>
          <span>
            <MapPin size={18} />
            Pattur Main Road, Chennai
          </span>
        </div>
        <a
          className="button button-primary directions-btn"
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation size={18} />
          Get Directions
        </a>
        <div className="map-placeholder-card" aria-label="Rithika Hub map location">
          <div className="map-pin-bubble">
            <MapPin size={30} />
          </div>
          <div>
            <strong>{BUSINESS_NAME}</strong>
            <span>{ADDRESS}</span>
          </div>
          <a
            className="directions-btn map-link"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>

      <form className="contact-form" id="contact" onSubmit={handleSubmit}>
        <span className="section-kicker">Quick enquiry</span>
        <h2>Send details on WhatsApp</h2>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" placeholder="Your phone number" />
        </label>
        <label>
          Service
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            {allServices.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Tell us what you need" />
        </label>
        <button className="button button-primary" type="submit">
          <MessageCircle size={18} />
          Submit Enquiry
        </button>
      </form>
    </motion.section>
  );
}
