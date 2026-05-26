import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-28 overflow-hidden bg-gradient-to-br from-white via-neutral to-slate-50"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl pointer-events-none lf-drift-a" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none lf-drift-b" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
            <span className="text-electric-teal text-sm font-medium">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.08]">
            Meet the Founder
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait */}
          <Reveal x={-24} y={0} className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-3 bg-electric-teal/10 rounded-3xl blur-2xl pointer-events-none" />
              <img
                src="/founder.jpg"
                alt="Jonathan Loftus, founder of Loftify AI"
                className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl border border-white/60 block"
                onError={(e) => {
                  // Graceful fallback if the image isn't present yet
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal x={24} y={0} delay={120}>
            <p className="text-lg md:text-xl text-slate-600 leading-[1.7] mb-5">
              My name is{' '}
              <span className="font-semibold text-navy">Jonathan Loftus</span>, founder of Loftify AI. I am an MBA student at Villanova University with a background in finance, emerging technology, and business automation.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-[1.7] mb-5">
              I started Loftify AI to help businesses use artificial intelligence in practical ways that save time, improve operations, and create better customer experiences. My focus is not on making AI feel complicated. It is on building simple systems that solve real business problems.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-[1.7] mb-8">
              Through my work and studies, I have developed a strong interest in helping companies modernize the way they operate. Loftify AI was built around that mission. We help business owners adopt AI tools, automation workflows, and smarter digital systems without making the process feel overwhelming or overly technical.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="cta-button inline-flex items-center justify-center gap-2 bg-electric-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/25"
              >
                Book a Free AI Audit
              </a>
              <a
                href="#services"
                className="cta-button inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-semibold text-base hover:border-electric-teal hover:text-electric-teal transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
