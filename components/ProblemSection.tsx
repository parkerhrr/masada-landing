const ProblemSection = () => {
  const problems = [
    {
      title: "Selling for Too Little",
      description: "Without proper valuation and market knowledge, many owners accept offers 20-40% below market value.",
    },
    {
      title: "Poor Buyer Pool",
      description: "Limited access to qualified buyers means fewer competitive offers and lower sale prices.",
    },
    {
      title: "Complicated Process",
      description: "Selling a business is complex. Mistakes in due diligence or deal structure can cost millions.",
    },
    {
      title: "Post-Sale Regret",
      description: "Many sellers look back and regret not getting expert advice, leaving significant money on the table.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6">
            Common Mistakes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Why Most Sellers Regret Their Sale
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Selling without expert guidance is the biggest mistake business owners make. Here's what they wish they knew.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Decorative border line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>We prevent this</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Don't make these mistakes. Get expert guidance before you sell.
          </p>
          <a
            href="#valuation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold text-lg hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Valuation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
