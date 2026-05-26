import React from 'react';
import Reveal from './Reveal';
import CountUp from './CountUp';

const stats = [
  { to: 85, decimals: 0, suffix: '%', label: 'Time Saved on Admin Tasks' },
  { to: 3.5, decimals: 1, suffix: 'x', label: 'Average Client ROI' },
  { to: 2, decimals: 0, suffix: 'x', label: 'Increase in Customer Touchpoints' },
];

const Results: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-navy via-navy to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-navy/60 to-slate-950/80" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl lf-drift-a" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-teal/[0.03] rounded-full blur-3xl lf-drift-b" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Results Our Clients See
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Measured outcomes from real automation deployments
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 140}>
              <div className="group h-full">
                <div className="relative h-full p-8 md:p-10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/15 group-hover:border-electric-teal/40 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/30 pointer-events-none" />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-electric-teal/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="relative z-10">
                    <div className="mb-2">
                      <CountUp
                        to={stat.to}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                        className="text-6xl md:text-7xl font-light text-white tracking-tighter leading-none mb-3 block"
                      />
                      <div className="w-16 h-1 bg-gradient-to-r from-electric-teal to-electric-teal/40 rounded-full" />
                    </div>
                    <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mt-6">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-20 text-center" delay={200}>
          <a
            href="#contact"
            className="cta-button inline-flex items-center gap-2 bg-electric-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/30"
          >
            Start Your Automation Journey
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Results;
