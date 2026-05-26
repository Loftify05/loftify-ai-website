import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img
                src="/loftify-logo.png"
                alt="Loftify AI"
                className="h-10 w-auto mb-4 block"
              />
              <p className="text-slate-400 leading-relaxed max-w-md">
                Transforming businesses through intelligent automation. We design and deploy AI workflows that save time, reduce costs, and unlock growth.
              </p>
            </div>

            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/jonathan-loftus-a1b9b61b7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 p-3 rounded-lg hover:bg-electric-teal transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://instagram.com/loftifyai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 p-3 rounded-lg hover:bg-electric-teal transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:jonloftus@loftifyai.com"
                aria-label="Email us"
                className="bg-white/10 p-3 rounded-lg hover:bg-electric-teal transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">About</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">Services</a></li>
              <li><a href="#who-we-help" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">Who We Help</a></li>
              <li><a href="#what-we-build" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">What We Build</a></li>
              <li><a href="#process" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">Our Process</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jonloftus@loftifyai.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-electric-teal transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 text-electric-teal flex-shrink-0" />
                  jonloftus@loftifyai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Loftify AI. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            AI Automation · Workflow Design · Intelligent Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
