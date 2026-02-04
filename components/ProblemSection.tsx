const ProblemSection = () => {
  const problems = [
    {
      title: "The Offer You're Not Seeing",
      description: "Without access to our buyer network, you're missing qualified acquirers who would pay more for your business.",
    },
    {
      title: "The Million You Left Behind",
      description: "Most sellers discover too late that they accepted 20-40% less than what their business was worth to the right buyer.",
    },
    {
      title: "The Time You Can't Get Back",
      description: "Selling without proper preparation extends the process by months, costing you opportunities and time you never recover.",
    },
    {
      title: "The Risk You Didn't Have To Take",
      description: "With zero upfront fees and zero commitment, you can explore better offers without taking on any risk.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-700 text-sm font-semibold rounded-full mb-6">
            Cost of Inaction
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            The Regret of Not Exploring Your Options
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Most business owners later discover they missed opportunities worth millions because they never knew what was possible.
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
                <span>Let's discuss your options</span>
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
            The cost of not knowing your options could be millions. Let's talk about what's possible.
          </p>
          <a
            href="#valuation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-900 text-white font-semibold text-lg hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Your Options
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
