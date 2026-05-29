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

export default function App() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return bentoCategories
      .filter((category) => activeFilter === 'All' || category.filter === activeFilter)
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
        <Services categories={filteredCategories} />
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
