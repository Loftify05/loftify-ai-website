import React from 'react';
import { Calendar, Zap, MessageSquare, CheckCircle2 } from 'lucide-react';

const workflows = [
  {
    icon: Calendar,
    name: 'Appointment Scheduling',
    desc: 'Synced across 4 calendars',
    status: 'Active',
    statusClass: 'bg-emerald-500/15 text-emerald-400',
    iconClass: 'bg-electric-teal/80',
  },
  {
    icon: MessageSquare,
    name: 'AI Voice & SMS Agent',
    desc: 'Handled 38 inquiries today',
    status: 'Running',
    statusClass: 'bg-blue-500/15 text-blue-400',
    iconClass: 'bg-blue-500/70',
  },
  {
    icon: Zap,
    name: 'Invoice Automation',
    desc: 'Last run: 2 minutes ago',
    status: 'Live',
    statusClass: 'bg-violet-500/15 text-violet-400',
    iconClass: 'bg-violet-500/70',
  },
];

const HeroDashboard: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-full max-w-md bg-gradient-to-br from-navy via-slate-900 to-slate-950 rounded-2xl p-6 shadow-2xl border border-white/10 overflow-hidden">
      {/* background glow — drifts slowly */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-electric-teal/10 rounded-full blur-3xl pointer-events-none lf-drift-a" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none lf-drift-b" />

      {/* header row */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">Automation Dashboard</p>
          <p className="text-white font-semibold text-sm mt-0.5">Active Workflows</p>
        </div>
        <div className="flex items-center gap-1.5 bg-electric-teal/15 border border-electric-teal/30 rounded-full px-3 py-1 lf-pill">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
          <span className="text-electric-teal text-xs font-medium">Live</span>
        </div>
      </div>

      {/* workflow rows — staggered entry */}
      <div className="space-y-2.5 mb-5">
        {workflows.map((w, i) => (
          <div
            key={w.name}
            className="flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-200 rounded-xl p-3 border border-white/[0.07] lf-in"
            style={{ animationDelay: `${1100 + i * 140}ms` }}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${w.iconClass}`}>
              <w.icon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium leading-tight truncate">{w.name}</p>
              <p className="text-slate-500 text-xs mt-0.5">{w.desc}</p>
            </div>
            <span className={`flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full font-medium ${w.statusClass} lf-pill`}>
              {w.status}
            </span>
          </div>
        ))}
      </div>

      {/* stats row */}
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { value: '24/7', label: 'Uptime' },
          { value: '85%', label: 'Time Saved' },
          { value: '3.5x', label: 'Avg ROI' },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-3 text-center">
            <p className="text-electric-teal text-xl font-bold leading-none">{s.value}</p>
            <p className="text-slate-500 text-[11px] mt-1.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* bottom tag */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/[0.07]">
        <CheckCircle2 className="w-3.5 h-3.5 text-electric-teal flex-shrink-0" />
        <p className="text-slate-500 text-xs">All systems operational · Updated just now</p>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-white via-neutral to-slate-50"
    >
      {/* drifting background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl pointer-events-none lf-drift-a" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none lf-drift-b" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* left: copy — staggered entrance */}
          <div className="text-center lg:text-left">
            <div className="lf-in lf-d-1 inline-flex items-center gap-2 bg-electric-teal/10 border border-electric-teal/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-teal animate-pulse" />
              <span className="text-electric-teal text-sm font-medium">AI Automation Agency</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.08] tracking-tight mb-6">
              <span className="lf-in lf-d-2 block">Smarter Systems.</span>
              <span className="lf-in lf-d-3 block text-electric-teal">Stronger Business.</span>
            </h1>

            <p className="lf-in lf-d-4 text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Loftify AI designs and deploys intelligent workflows that save time, reduce costs, and unlock growth — without adding headcount.
            </p>

            <div className="lf-in lf-d-5 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="cta-button bg-electric-teal text-white px-8 py-4 rounded-xl text-base font-semibold text-center hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-electric-teal/20"
              >
                Book a Free AI Audit
              </a>
              <a
                href="#services"
                className="cta-button border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-base font-semibold text-center hover:border-electric-teal hover:text-electric-teal transition-all duration-300"
              >
                See Our Services
              </a>
            </div>
          </div>

          {/* right: dashboard — slides in + floats gently */}
          <div className="lf-in-right lf-d-4 lg:h-[420px] h-auto">
            <div className="lf-float h-full">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
