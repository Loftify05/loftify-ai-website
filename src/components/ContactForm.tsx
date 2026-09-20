import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://hook.us2.make.com/kiqgp7sahsh5jbr1c25dr7lpjma412tm';

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  companySize: string;
}

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  role: '',
  companyName: '',
  companyWebsite: '',
  companySize: '',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear inline validation message as the user types
    if (validationError) setValidationError('');
  };

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return false;
    }
    if (!formData.role.trim()) {
      setValidationError('Please enter your role.');
      return false;
    }
    if (!formData.companyName.trim()) {
      setValidationError('Please enter your company name.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      source: 'loftify_ai_client_survey',
      submitted_at: new Date().toISOString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      role: formData.role.trim(),
      company: formData.companyName.trim(),
      company_website: formData.companyWebsite.trim(),
      company_size: formData.companySize,
      status: 'new',
      notes: '',
    };

    try {
      if (import.meta.env.DEV) {
        console.log('[ContactForm] Submitting payload:', payload);
      }

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }

      if (import.meta.env.DEV) {
        console.log('[ContactForm] Submission successful');
      }

      setSubmitStatus('success');
      setFormData(EMPTY_FORM);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('[ContactForm] Submission error:', error);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Let's Talk Automation
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Tell us about your business and we'll map out exactly where AI can save you time and money.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral p-6 md:p-12 rounded-2xl shadow-sm border border-slate-100 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="form-field">
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Phone Number <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="form-field">
              <label htmlFor="role" className="block text-sm font-semibold text-navy mb-2">
                Role in Company *
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="CEO, Operations Manager, etc."
              />
            </div>

            <div className="form-field">
              <label htmlFor="companyName" className="block text-sm font-semibold text-navy mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="companyWebsite" className="block text-sm font-semibold text-navy mb-2">
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="companySize" className="block text-sm font-semibold text-navy mb-2">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-teal focus:border-transparent transition-all duration-300"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            {validationError && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-300 text-amber-700 rounded-lg flex items-center gap-2 justify-center text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {validationError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button bg-electric-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  Let's Talk
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2 justify-center">
                <Check className="w-5 h-5 flex-shrink-0" />
                Thanks, we received your request and will be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2 justify-center">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                Something went wrong. Please try again or email us at{' '}
                <a href="mailto:jonloftus@loftifyai.com" className="underline font-medium">jonloftus@loftifyai.com</a>.
              </div>
            )}

            <p className="mt-5 text-xs text-slate-400 text-center">
              We respect your privacy. Your information is never shared or sold.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;