import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { filters } from './siteData.jsx';
import { fadeUp, viewportOnce } from './animations.js';

export default function ServiceSearch({ activeFilter, query, onFilterChange, onQueryChange }) {
  return (
    <motion.section className="search-section" aria-label="Service search" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
      <div className="search-panel">
        <div className="search-copy">
          <span className="section-kicker">Find your service</span>
          <h2>Search before you visit</h2>
        </div>
        <label className="search-box">
          <Search size={20} />
          <input
            type="search"
            value={query}
            placeholder="Search for Aadhaar, Xerox, Recharge..."
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>
        <div className="filter-chips" aria-label="Service filters">
          {filters.map((filter) => (
            <motion.button
              className={activeFilter === filter ? 'chip chip-active' : 'chip'}
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
