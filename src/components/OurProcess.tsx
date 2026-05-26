import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    num: '01',
    title: 'Discover the Problem',
    desc: 'We start by learning how your business currently works, where time is being wasted, and which tasks create the most friction.',
  },
  {
    num: '02',
    title: 'Design the Automation',
    desc: 'We map the workflow, choose the right tools, and design a system that fits your business instead of forcing you into a generic solution.',
  },
  {
    num: '03',
    title: 'Build and Test the System',
    desc: 'We build the automation, test the logic, review the customer experience, and make sure the system works before it goes live.',
  },
  {
    num: '04',
    title: 'Launch and Optimize',
    desc: 'We help you launch the system, monitor performance, and improve it over time as your business grows.',
  },
];

const OurProcess: React.FC = () => {
  return (
    <section id="process" className="relative py-24 md:py-28 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-[20%] -right-12 w-[380px] h-[380px] rounded-full bg-electric-teal/[0.04] blur-3xl lf-drift-a" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
            <span className="text-electric-teal text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            A simple process from idea to automation
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We make AI adoption clear and practical by turning business problems into systems your team can actually use.
          </p>
        </Reveal>

        {/* Steps with connector line on lg+ */}
        <div className="relative">
          <div
            className="hidden lg:block pointer-events-none absolute top-[40px] left-[8%] right-[8%] h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(20,184,166,0) 0%, rgba(20,184,166,.35) 15%, rgba(20,184,166,.35) 85%, rgba(20,184,166,0) 100%)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 relative">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 130} y={28}>
                <div className="value-card bg-white border border-slate-100 rounded-2xl p-7 flex flex-col h-full shadow-sm">
                  <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center text-white font-bold text-lg tracking-wide bg-gradient-to-br from-electric-teal to-teal-600 shadow-lg shadow-electric-teal/30">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed flex-1">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <Reveal className="mt-16 md:mt-20 rounded-3xl border border-slate-100 bg-gradient-to-br from-neutral to-white p-8 md:p-10 lg:p-12 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-navy tracking-tight mb-2">
              Start with one workflow
            </h3>
            <p className="text-slate-500 leading-relaxed">
              You don't need to automate your entire business at once. We help you find the best first use case and build from there.
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

export default OurProcess;
