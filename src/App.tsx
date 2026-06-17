/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { KeyboardEvent } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactInquiry from './components/ContactInquiry';
import Footer from './components/Footer';

export default function App() {
  // Navigation callback trigger: scrolls smoothly down to contact inquiry card.
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="applet-core-wrapper" className="min-h-screen bg-beige-gradient text-stone-900 select-none">
      
      {/* Repeated "DEMO" Watermark Overlay (Fixed layer, non-interactive, easily removed) */}
      <div 
        id="demo-watermark"
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.06] select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Ctext x='90' y='90' fill='%236B5E4B' font-family='system-ui, -apple-system, sans-serif' font-size='26' font-weight='800' text-anchor='middle' transform='rotate(-35, 90, 90)'%3EDEMO%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Dynamic SEO Structure Elements: Accessibility bypass */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#faf8f4] focus:text-[#1a1917] focus:border-b-2 focus:border-gold-accent font-mono text-xs uppercase"
      >
        Skip directly to main clinical details
      </a>

      {/* Global Navbar */}
      <Navigation onContactClick={handleScrollToContact} />

      {/* Primary Semantic Body */}
      <main id="main-content" className="relative">
        
        {/* Hero Segment */}
        <Hero onContactClick={handleScrollToContact} />

        {/* Clinician Specialist Profile */}
        <About />

        {/* Dental & Medicare Disciplines */}
        <Services />

        {/* Creative Gallery Carousel */}
        <Gallery />

        {/* Patient Review & Testimonial masonry */}
        <Testimonials />

        {/* Pre-registration Booking & LocatorCoordinates */}
        <ContactInquiry />

      </main>

      {/* Global Footer containing official links */}
      <Footer />
    </div>
  );
}
