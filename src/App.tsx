import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import WhatWeBuild from './components/WhatWeBuild';
import OurProcess from './components/OurProcess';
import Results from './components/Results';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhoWeHelp />
        <WhatWeBuild />
        <OurProcess />
        <Results />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
