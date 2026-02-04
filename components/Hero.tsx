const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-600">Trusted by 150+ business owners</span>
            </div>

            {/* Main Headline - Bold Gradient Like Offdeal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 bg-clip-text text-transparent">
                The Offer
              </span>
              <br />
              You're Not Seeing
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Without access to right buyers, you're missing opportunities that could add <strong className="text-gray-900">millions to your exit.</strong>
              <br />
              Explore your options with <strong className="text-gray-900">zero commitment</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#valuation"
                className="px-6 py-3.5 bg-primary-900 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 transition-colors"
              >
                Get Valuation
              </a>
              <a
                href="#process"
                className="px-6 py-3.5 text-gray-700 text-sm font-medium hover:text-primary-900 transition-colors flex items-center gap-2"
              >
                See How It Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">$2.5B+</div>
                <div className="text-sm text-gray-500 mt-0.5">Deal Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500 mt-0.5">Successful Sales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-500 mt-0.5">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Card Like Offdeal */}
          <div className="relative">
            <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
              {/* Decorative gradient blob */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary-900 to-primary-700 rounded-full opacity-10 blur-3xl" />

              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Explore Your Value
                  </h3>
                  <p className="text-gray-600">
                    Get insights you need to make informed decisions about selling.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Free, No Obligation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">Expert Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
