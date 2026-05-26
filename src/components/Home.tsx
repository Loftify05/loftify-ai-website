import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import CaseStudy from './CaseStudy';
import ContactForm from './ContactForm';

const Home: React.FC = () => {
  const location = useLocation();

  // When we arrive on the homepage with a hash (e.g. coming from /about → "/#services"),
  // wait a tick for sections to mount, then smooth-scroll to the target.
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    // Two-pass scroll: first immediately so the user doesn't see a jump from the top,
    // then once more after layout settles (images, fonts).
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 64; // offset for sticky header
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <CaseStudy />
      <ContactForm />
    </>
  );
};

export default Home;
