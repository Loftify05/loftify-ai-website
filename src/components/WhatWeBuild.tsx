import React from 'react';
import {
  CalendarCheck,
  MessageCircle,
  Database,
  Bot,
  Send,
  Settings,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react';
import Reveal from './Reveal';

const offerings = [
  {
    icon: CalendarCheck,
    title: 'AI Appointment Setters',
    desc: 'Voice and chat agents that help qualify leads, answer basic questions, and guide prospects toward booking a meeting.',
  },
  {
    icon: MessageCircle,
    title: 'Lead Follow-Up Systems',
    desc: 'Automated follow-up workflows that reach out to new leads, old leads, missed calls, and form submissions so opportunities do not get lost.',
  },
  {
    icon: Database,
    title: 'CRM Automation',
    desc: 'Systems that update lead records, organize customer data, track statuses, and keep your pipeline cleaner with less manual work.',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Website assistants that answer common questions, capture contact information, and direct visitors to the next best step.',
  },
  {
    icon: Send,
    title: 'Email and SMS Workflows',
    desc: 'Automated messages for confirmations, reminders, follow-ups, and internal notifications that keep customers and teams aligned.',
  },
  {
    icon: Settings,
    title: 'Internal Operations Automations',
    desc: 'Back-office workflows that connect your apps, reduce manual tasks, and help your team move faster.',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Business Dashboards',
    desc: 'Simple dashboards that show leads, call outcomes, automation activity, and key business data in one place.',
  },
];

const WhatWeBuild: React.FC = () => {
  return (
    <section id="what-we-build" className="relative py-16 md:py-28 bg-neutral overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 -left-16 w-[480px] h-[480px] rounded-full bg-electric-teal/[0.04] blur-3xl lf-drift-a" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
            <span className="text-electric-teal text-sm font-medium">What We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            AI systems built around your business
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We design and build practical automations that help your business respond faster, stay organized, and reduce repetitive work.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {offerings.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group relative bg-white p-7 rounded-2xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl mb-5 flex items-center justify-center bg-electric-teal/10 text-electric-teal group-hover:bg-electric-teal group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 tracking-tight">{title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed flex-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA — dark card */}
        <Reveal className="mt-10 md:mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-slate-900 to-slate-950 p-6 md:p-10 lg:p-12 shadow-2xl">
          <div className="pointer-events-none absolute -top-16 -right-12 w-72 h-72 bg-electric-teal/20 rounded-full blur-3xl lf-drift-a" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 w-60 h-60 bg-electric-teal/10 rounded-full blur-3xl lf-drift-b" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Have a process you want to automate?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Loftify AI can help map the workflow, design the system, and build the automation around your existing tools.
              </p>
            </div>
            <a
              href="#contact"
              className="cta-button inline-flex items-center justify-center gap-2 bg-electric-teal text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/40 whitespace-nowrap self-start md:self-auto"
            >
              Schedule a Free Automation Review
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatWeBuild;
