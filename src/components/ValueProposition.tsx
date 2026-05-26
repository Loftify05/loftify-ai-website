import React from 'react';
import { Search, Wrench, TrendingUp } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Search,
      title: '1. Discover',
      description: 'We audit your operations to pinpoint exactly where automation saves the most time and money.',
      delay: '0ms'
    },
    {
      icon: Wrench,
      title: '2. Build',
      description: 'We design and deploy custom AI agents and workflows integrated with your existing tools.',
      delay: '200ms'
    },
    {
      icon: TrendingUp,
      title: '3. Scale',
      description: 'We expand automations across your business as results compound and your team grows.',
      delay: '400ms'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            Our Process
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A proven three-step methodology to find, build, and scale automation that delivers real ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card bg-neutral p-8 rounded-2xl text-center group"
              style={{
                animationDelay: value.delay,
                animation: `slideUp 0.8s ease-out forwards ${value.delay}`
              }}
            >
              <div className="bg-electric-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-electric-teal/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-electric-teal" />
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;