const Hero = () => {
  return (
    <section id="home" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gold-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10 animate-slide-up">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Trusted by 150+ business owners</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight tracking-tight">
              Don't Leave{' '}
              <span className="gradient-text">Millions</span>{' '}
              on the Table When Selling Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Most business owners sell for <strong className="text-primary-900">20-40% less</strong> than their business is worth.
              Get a confidential valuation and expert guidance to maximize your sale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#valuation"
                className="px-8 py-4 bg-primary-900 text-white font-semibold text-lg hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Request Confidential Valuation
              </a>
              <a
                href="#process"
                className="px-8 py-4 border-2 border-primary-900 text-primary-900 font-semibold text-lg hover:bg-primary-900 hover:text-white transition-all duration-300 text-center"
              >
                See Our Process
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-900">$2.5B+</div>
                <div className="text-sm text-gray-600 mt-1">Deal Value</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary-900">150+</div>
                <div className="text-sm text-gray-600 mt-1">Successful Sales</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary-900">25+</div>
                <div className="text-sm text-gray-600 mt-1">Years Combined Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-primary-100">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl -z-10 opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl -z-10 opacity-20" />

              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">
                    Professional Business Valuation
                  </h3>
                  <p className="text-gray-600">
                    Get the insights you need to make informed decisions about selling your business.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Confidential</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
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
