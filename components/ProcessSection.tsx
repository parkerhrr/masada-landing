const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "Initial conversation to understand your business and goals. No obligation, no cost.",
      icon: "💬"
    },
    {
      number: "02",
      title: "Valuation Analysis",
      description: "Comprehensive business valuation with market comparables and strategic positioning.",
      icon: "📊"
    },
    {
      number: "03",
      title: "Buyer Identification",
      description: "Identify and qualify potential buyers from our extensive network of strategic acquirers.",
      icon: "🎯"
    },
    {
      number: "04",
      title: "Deal Management",
      description: "Handle negotiations, due diligence, and closing. You stay focused on running your business.",
      icon: "📋"
    },
    {
      number: "05",
      title: "Successful Close",
      description: "Celebrate your successful sale with maximum value achieved. Your success is our success.",
      icon: "🎉"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-primary-50 via-white to-gold-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100 rounded-full filter blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Simple, Proven, Effective
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selling your business doesn't have to be complicated. We've refined our approach over 20+ years.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Content */}
              <div className="pl-10 md:pl-12 flex items-start gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 text-3xl">
                  {step.icon}
                </div>

                {/* Text */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 bottom-0 w-0.5 h-6 bg-gradient-to-b from-primary-200 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start the process? Let's talk.
          </p>
          <a
            href="#valuation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold text-lg hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
