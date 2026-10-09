import React from 'react';
import Hero from './Hero.tsx';
import Pillars from './Pillars.tsx';
import Storytelling from './Storytelling.tsx';
import ExploreCountriesSection from './ExploreCountriesSection.tsx';
import CoffeeSelector from './CoffeeSelector.tsx';
import Catalog from './Catalog.tsx';
import HowItWorks from './HowItWorks.tsx';
import Experience from './Experience.tsx';
import ShippingSection from './ShippingSection.tsx';
import OrderStatus from './OrderStatus.tsx';
import FAQ from './FAQ.tsx';
import CtaClosing from './CtaClosing.tsx';

/**
 * Official Colombia Landing Page
 * Concept: "Descubre Colombia, una taza a la vez"
 * Preserves 100% of the existing sections, photography, components, and e-commerce functionalities,
 * while integrating the new "Un mundo de café por descubrir" international exploration section.
 */
export default function ColombiaLanding() {
  return (
    <>
      {/* 1. Hero Section: "Descubre Colombia, una taza a la vez" */}
      <Hero />

      {/* 2. Core Experience Pillars: Descubrir Colombia, Descubrir tu café, Disfrutar en casa */}
      <Pillars />

      {/* 3. Narrative Experience: Del Origen a Casa (Origen, Descubrimiento, Tu Ritual) */}
      <Storytelling />

      {/* 4. NEW INTEGRATED SECTION: "Un mundo de café por descubrir" -> Direct invitation to explore international origins */}
      <ExploreCountriesSection />

      {/* 5. Interactive Sensory Coffee Matcher: 4-Step Quiz */}
      <CoffeeSelector />

      {/* 6. Curated Single Origin Catalog with Size & Grind Variant Selectors */}
      <Catalog />

      {/* 7. How it Works: 01 Descubre, 02 Elige, 03 Disfruta */}
      <HowItWorks />

      {/* 8. The Experience at Home & Tasting Flight Teaser */}
      <Experience />

      {/* 9. International Delivery to US & Canada & Postal Code Calculator */}
      <ShippingSection />

      {/* 10. Real-Time Order Status & Shipping Tracker */}
      <OrderStatus />

      {/* 11. Comprehensive FAQ Accordion */}
      <FAQ />

      {/* 12. High-Impact Emotional Commercial Closing */}
      <CtaClosing />
    </>
  );
}
