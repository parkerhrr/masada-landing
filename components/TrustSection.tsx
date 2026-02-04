const TrustSection = () => {
  const metrics = [
    { value: "$2.5B+", label: "Deal Value Generated" },
    { value: "150+", label: "Successful Transactions" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "25+", label: "Years Combined Experience" },
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Manufacturing',
    'Professional Services',
    'Financial Services',
    'Real Estate',
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-6">
            Trusted Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Trusted by Business Owners Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped owners in multiple industries achieve exceptional outcomes.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-white to-primary-50 rounded-2xl border border-primary-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Industry Expertise */}
        <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 md:p-12 border border-primary-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Our Expertise Spans Multiple Industries
            </h3>
            <p className="text-gray-600">
              Deep industry knowledge means better positioning and higher valuations
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white border-2 border-primary-200 hover:border-primary-400 rounded-full text-primary-700 font-semibold text-sm transition-all duration-300 hover:shadow-md cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Expert Advisors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
