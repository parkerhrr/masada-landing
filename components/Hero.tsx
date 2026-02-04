const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-size hero background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.svg"
          alt="Professional business background with modern corporate aesthetic"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-primary-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white/90">Trusted by 150+ business owners</span>
          </div>

          {/* Main Headline - Bold with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              The Offer
            </span>
            <br />
            You're Not Seeing
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            Without access to right buyers, you're missing opportunities that could add <strong className="text-white">millions to your exit.</strong>
            <br />
            Explore your options with <strong className="text-white">zero commitment</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#valuation"
              className="px-6 py-3.5 bg-white text-primary-900 text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Get Valuation
            </a>
            <a
              href="#process"
              className="px-6 py-3.5 text-white/90 text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              See How It Works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">$2.5B+</div>
              <div className="text-sm text-white/70 mt-1">Deal Value</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
              <div className="text-sm text-white/70 mt-1">Successful Sales</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">25+</div>
              <div className="text-sm text-white/70 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
