import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CallToActions from './components/CallToActions';
import MarketplacePreview from './components/MarketplacePreview';
import Testimonials from './components/Testimonials';
import SadcAlignment from './components/SadcAlignment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <CallToActions />
      <MarketplacePreview />
      <Testimonials />
      <SadcAlignment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;