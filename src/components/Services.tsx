import React from 'react';
import { Calendar, FileText, Phone, Zap } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    icon: Calendar,
    title: 'AI-Powered Appointment Setting',
    description:
      'Intelligent scheduling that books, confirms, and follows up automatically — around the clock, without admin overhead.',
    benefits: 'Reduce scheduling conflicts by 90%',
  },
  {
    icon: FileText,
    title: 'Automated Invoicing & Reporting',
    description:
      'Generate invoices, chase payments, and produce financial reports without touching a spreadsheet.',
    benefits: 'Cut processing time by 75%',
  },
  {
    icon: Phone,
    title: 'Voice & SMS AI Agents',
    description:
      'AI-powered agents that answer calls, qualify leads, and respond to texts after hours so no opportunity slips through.',
    benefits: 'Capture leads 24/7',
  },
  {
    icon: Zap,
    title: 'Custom Workflow Integrations',
    description:
      'We connect your existing tools — Make.com, Google Workspace, CRMs, ERPs — into a single automated system.',
    benefits: 'One unified operation',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
            <span className="text-electric-teal text-sm font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            What We Build for You
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            End-to-end AI systems that run your back office, capture leads, and close the gaps your team doesn't have time for.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
              <div className="feature-card bg-white p-8 rounded-2xl shadow-lg group h-full">
                <div className="bg-electric-teal/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric-teal group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-electric-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{s.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                <div className="text-electric-teal font-semibold text-sm uppercase tracking-wide">
                  {s.benefits}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
