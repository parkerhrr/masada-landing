'use client';

import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    revenue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Zero commitment required",
    "Zero upfront payment",
    "Success fee only when you close",
    "100% confidential discussion"
  ];

  return (
    <section id="valuation" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full mb-6">
                Risk Free
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                See What Offers Are Available
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our network connects you with opportunities you're missing. Zero commitment to explore.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl border border-white/20">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm font-medium">
                100% confidential. No obligation to proceed.
              </span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Explore Your Options - Confidentially
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="professional-services">Professional Services</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Annual Revenue
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select revenue range</option>
                  <option value="1-5">$1M - $5M</option>
                  <option value="5-10">$5M - $10M</option>
                  <option value="10-25">$10M - $25M</option>
                  <option value="25-50">$25M - $50M</option>
                  <option value="50+">$50M+</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Tell Us About Your Business (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Brief description of your business and goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 rounded-xl"
              >
                Explore My Options - Confidentially
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" clipRule="evenodd" />
                </svg>
                <span>Your information is 100% confidential</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
