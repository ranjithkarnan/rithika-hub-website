import React, { useMemo, useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import ServiceSearch from './ServiceSearch.jsx';
import Services from './Services.jsx';
import FeaturedActions from './FeaturedActions.jsx';
import TrustStrip from './TrustStrip.jsx';
import HowItWorks from './HowItWorks.jsx';
import LocationContact from './LocationContact.jsx';
import Footer from './Footer.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';
import BackToTop from './BackToTop.jsx';
import FloatingParticles from './FloatingParticles.jsx';
import MouseGlow from './MouseGlow.jsx';
import WhyBusinessesChooseUs from './WhyBusinessesChooseUs.jsx';
import { bentoCategories } from './siteData.jsx';

function normalizeFilterValue(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function doesCategoryMatchFilter(category, normalizedFilter) {
  const normalizedCategoryFilter = normalizeFilterValue(category.filter);
  const normalizedCategoryTitle = normalizeFilterValue(category.title);

  return (
    normalizedCategoryFilter === normalizedFilter ||
    normalizedCategoryTitle.includes(normalizedFilter)
  );
}

export default function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedFilter = normalizeFilterValue(activeFilter);
    const shouldShowAll = normalizedFilter === 'all';

    return bentoCategories
      .filter((category) => {
        if (shouldShowAll) {
          return true;
        }

        return doesCategoryMatchFilter(category, normalizedFilter);
      })
      .map((category) => ({
        ...category,
        services: category.services.filter((service) =>
          service.name.toLowerCase().includes(normalizedQuery),
        ),
      }))
      .filter((category) => !normalizedQuery || category.services.length > 0);
  }, [activeFilter, query]);

  return (
    <>
      <MouseGlow />
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <ServiceSearch
          activeFilter={activeFilter}
          query={query}
          onFilterChange={setActiveFilter}
          onQueryChange={setQuery}
        />
        <Services categories={filteredCategories} filterKey={`${activeFilter}-${query}`} />
        <WhyBusinessesChooseUs />
        <FeaturedActions />
        <TrustStrip />
        <HowItWorks />
        <LocationContact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}
