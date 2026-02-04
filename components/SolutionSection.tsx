const SolutionSection = () => {
  const solutions = [
    {
      title: "Widest Buyer Network",
      description: "We connect you with qualified acquirers others can't access, creating competitive pressure that drives higher offers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Zero Commitment",
      description: "Explore your options with no obligation. You decide if moving forward makes sense - we never push.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Success Fee Only",
      description: "Zero upfront payments. We only get paid when you close, so we're completely aligned with your success.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.657 0-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm-1-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full mb-6">
            Why Masada Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Access Offers Others Miss
          </h2>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Our network and approach help you explore opportunities with zero commitment.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-white to-white/80 rounded-xl flex items-center justify-center text-primary-900 mb-6">
                {solution.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-primary-100 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">
              100% confidential. Zero cost to explore.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
