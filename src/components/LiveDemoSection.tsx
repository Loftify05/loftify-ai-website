import React from 'react';
import { Wrench, Scale, MessageCircle, Languages, Phone, ArrowRight, Info } from 'lucide-react';
import Reveal from './Reveal';

const PHONE_DISPLAY = '(610) 215-2076';
const PHONE_TEL = 'tel:+16102152076';

interface Scenario {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lead: string;
  line: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'hvac',
    icon: Wrench,
    title: 'HVAC & Home Services',
    lead: 'Say this to Carly:',
    line: "Carly, pretend you're answering the phone for my HVAC company. My air conditioner stopped working.",
  },
  {
    id: 'law',
    icon: Scale,
    title: 'Law Firms',
    lead: 'Say this to Carly:',
    line: "Carly, pretend you're a law firm's receptionist. I was involved in a car accident and need to schedule a consultation.",
  },
  {
    id: 'loftify',
    icon: MessageCircle,
    title: 'Ask About Loftify',
    lead: 'Say this to Carly:',
    line: 'Carly, I own a small business. Can you explain how Loftify AI could help me?',
  },
  {
    id: 'spanish',
    icon: Languages,
    title: 'Test Her Spanish',
    lead: "After Carly's greeting, say:",
    line: 'Spanish.',
  },
];

const ScenarioCard: React.FC<{ scenario: Scenario }> = ({ scenario: s }) => (
  <div className="bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
    <div className="w-9 h-9 rounded-lg mb-3 flex items-center justify-center bg-electric-teal/10 text-electric-teal flex-shrink-0">
      <s.icon className="w-[18px] h-[18px]" />
    </div>
    <h3 className="text-sm font-bold text-navy mb-2 tracking-tight leading-snug">{s.title}</h3>
    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">{s.lead}</p>
    <p className="text-[13px] text-navy/80 leading-relaxed italic flex-1">"{s.line}"</p>
  </div>
);

const LiveDemoSection: React.FC = () => {
  return (
    <section id="live-demo" className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl border-2 border-electric-teal/20 bg-gradient-to-br from-electric-teal/[0.03] to-white shadow-xl shadow-slate-200/60 p-6 md:p-10 overflow-hidden">
            {/* Top row: eyebrow + AI indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-teal animate-pulse" />
                <span className="text-electric-teal text-sm font-semibold tracking-wide">Live Demo</span>
              </div>
              <span className="text-slate-400 text-xs font-medium">
                Live AI voice agent — not a recording
              </span>
            </div>

            {/* Headline + phone CTA */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Call</span>
              <a
                href={PHONE_TEL}
                className="cta-button inline-flex items-center gap-2 bg-electric-teal text-white text-2xl md:text-3xl font-bold px-5 py-2 rounded-xl hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-teal focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-2xl">
              Meet Carly, Loftify AI's virtual receptionist. Pick a scenario below and hear how she handles it — live.
            </p>

            {/* Scenario cards — mobile/tablet grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
              {SCENARIOS.map((s) => (
                <ScenarioCard key={s.id} scenario={s} />
              ))}
            </div>

            {/* Scenario cards — desktop row with connectors */}
            <div className="hidden lg:flex items-stretch gap-3">
              {SCENARIOS.map((s, i) => (
                <React.Fragment key={s.id}>
                  <div className="flex-1">
                    <ScenarioCard scenario={s} />
                  </div>
                  {i < SCENARIOS.length - 1 && (
                    <div className="flex items-center justify-center flex-shrink-0 text-slate-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-start gap-2 mt-6 pt-5 border-t border-slate-200/70">
              <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                This is a live simulated demo. No appointments are booked, no technicians are dispatched, and no legal advice is given.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LiveDemoSection;
