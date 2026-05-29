import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { fadeUp, viewportOnce } from '../animations.js';

const reviews = [
  {
    name: 'Priya S.',
    text: 'Very fast Aadhaar update service. Highly recommended.',
  },
  {
    name: 'Karthik R.',
    text: 'Printing and Xerox quality is excellent. Quick service.',
  },
  {
    name: 'Meena K.',
    text: 'Good support for online applications and payments.',
  },
  {
    name: 'Arjun M.',
    text: 'Affordable price and friendly service.',
  },
];

function getWrappedIndex(index) {
  return (index + reviews.length) % reviews.length;
}

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeReview = reviews[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setActiveIndex((current) => getWrappedIndex(current + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  function goToPrevious() {
    setActiveIndex((current) => getWrappedIndex(current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => getWrappedIndex(current + 1));
  }

  return (
    <motion.section
      className="section reviews-section"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-title centered reviews-title">
        <span className="section-kicker">Customer words</span>
        <h2>Reviews from local customers</h2>
        <p>Simple service, clear guidance, and friendly support for everyday needs.</p>
      </div>

      <div className="reviews-carousel" aria-live="polite">
        <button className="review-nav review-nav-left" type="button" aria-label="Previous review" onClick={goToPrevious}>
          <ChevronLeft size={22} />
        </button>

        <motion.article
          className="review-card"
          key={activeReview.name}
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote className="review-quote" size={34} />
          <div className="review-stars" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star fill="currentColor" key={index} size={18} />
            ))}
          </div>
          <p>{activeReview.text}</p>
          <strong>{activeReview.name}</strong>
        </motion.article>

        <button className="review-nav review-nav-right" type="button" aria-label="Next review" onClick={goToNext}>
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="review-dots" aria-label="Review slides">
        {reviews.map((review, index) => (
          <button
            className={index === activeIndex ? 'review-dot review-dot-active' : 'review-dot'}
            key={review.name}
            type="button"
            aria-label={`Show review from ${review.name}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </motion.section>
  );
}
