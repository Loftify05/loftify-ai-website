import React from 'react';

const CaseStudy: React.FC = () => {
  const stats = [
    {
      number: '85%',
      label: 'Time Saved on Admin Tasks',
      delay: '0ms'
    },
    {
      number: '3.5x',
      label: 'Average Client ROI',
      delay: '150ms'
    },
    {
      number: '2x',
      label: 'Increase in Customer Touchpoints',
      delay: '300ms'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-navy via-navy to-slate-950 overflow-hidden">
      {/* Premium background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-navy/60 to-slate-950/80" />

      {/* Subtle light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-teal/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Results Our Clients See
          </h2>
          <p className="text-lg text-slate-400 font-light">
            Measured outcomes from real automation deployments
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: stat.delay }}
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-8 md:p-10 rounded-2xl overflow-hidden backdrop-blur-md">
                {/* Semi-transparent background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/3 border border-white/15" />

                {/* Subtle dark shading */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/30" />

                {/* Soft shadow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-electric-teal/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number with gradient underline */}
                  <div className="mb-2">
                    <div className="text-6xl md:text-7xl font-light text-white tracking-tighter leading-none mb-3">
                      {stat.number}
                    </div>
                    {/* Accent underline */}
                    <div className="w-16 h-1 bg-gradient-to-r from-electric-teal to-electric-teal/40 rounded-full" />
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mt-6">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-electric-teal text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/30">
            Start Your Automation Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;