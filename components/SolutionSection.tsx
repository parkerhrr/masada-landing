const SolutionSection = () => {
  const solutions = [
    {
      title: "Free Valuation Range",
      description: "Get a comprehensive business valuation at no cost. Know your true market value before making decisions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Expert Buyer Network",
      description: "Access our vetted network of qualified buyers. Create competitive pressure to maximize your sale price.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Full Process Guidance",
      description: "From valuation to closing, we guide you every step. Navigate due diligence and negotiations with confidence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
          <span className="inline-block px-4 py-1.5 bg-gold-500/20 text-gold-400 text-sm font-semibold rounded-full mb-6">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Masada Partners Approach
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We help business owners sell for maximum value with a proven, systematic approach.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
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
              Proven track record of maximizing business value
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
