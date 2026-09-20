import React from 'react';
import { Wrench, TrendingUp, Store, Users, Workflow, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const audiences = [
  {
    icon: Wrench,
    title: 'Service Businesses',
    desc: 'Automate appointment booking, lead follow-up, customer questions, reminders, and daily admin work so your team can focus on the actual service.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Professionals',
    desc: 'Use AI to support client communication, organize lead intake, follow up with prospects, and reduce repetitive back-office tasks while keeping the experience professional.',
  },
  {
    icon: Store,
    title: 'Local Businesses',
    desc: 'Turn website visitors, missed calls, form submissions, and old leads into real conversations with simple AI systems that work in the background.',
  },
  {
    icon: Users,
    title: 'Sales Teams',
    desc: 'Improve speed to lead, automate follow-ups, qualify prospects, and keep your pipeline organized without relying on manual tracking.',
  },
  {
    icon: Workflow,
    title: 'Operations Teams',
    desc: 'Build internal workflows that connect your tools, reduce copy-and-paste work, and give your team better visibility into daily processes.',
  },
];

const WhoWeHelp: React.FC = () => {
  return (
    <section id="who-we-help" className="relative bg-white overflow-hidden py-16 md:py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-24 -right-16 w-[480px] h-[480px] rounded-full bg-electric-teal/[0.04] blur-3xl lf-drift-a" />
      <div className="pointer-events-none absolute bottom-0 -left-16 w-[420px] h-[420px] rounded-full bg-navy/[0.04] blur-3xl lf-drift-b" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
            <span className="text-electric-teal text-sm font-medium">Who We Help</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Built for businesses that want smarter systems
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Loftify AI helps business owners and teams use automation to save time, follow up faster, and create a smoother customer experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {audiences.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="group relative bg-white p-7 md:p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                <span className="pointer-events-none absolute top-0 left-5 right-5 h-[3px] rounded-full bg-gradient-to-r from-transparent via-electric-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-electric-teal/10 text-electric-teal group-hover:bg-electric-teal group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-navy mb-2 tracking-tight">{title}</h3>
                <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed flex-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 md:mt-20 rounded-3xl border border-slate-100 bg-gradient-to-br from-neutral to-white p-6 md:p-10 lg:p-12 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-navy tracking-tight mb-2">
              Not sure where AI fits into your business?
            </h3>
            <p className="text-slate-500 leading-relaxed">
              We'll help you find the highest-impact opportunities first.
            </p>
          </div>
          <a
            href="#contact"
            className="cta-button inline-flex items-center justify-center gap-2 bg-electric-teal text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/30 whitespace-nowrap self-start md:self-auto"
          >
            Book a Free AI Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default WhoWeHelp;
