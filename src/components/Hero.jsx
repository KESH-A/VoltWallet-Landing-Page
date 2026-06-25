const Hero = ({ darkMode, theme }) => {
  // The right dashboard card is built twice (dark & light) and crossfaded via opacity.
  // This eliminates all repaint‑heavy transitions while delivering a premium smooth effect.

  const CardContent = ({ mode }) => {
    const isDark = mode === 'dark';
    const colors = {
      bg: isDark ? '#1A237E' : '#FFFFFF',
      border: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
      shadow: isDark
        ? '0 25px 60px rgba(0,0,0,0.4)'
        : '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
      heading: isDark ? '#FFFFFF' : '#0F172A',
      subtext: isDark ? '#94A3B8' : '#64748B',
      badgeBg: isDark ? 'rgba(218,165,32,0.2)' : '#FFF8E1',
      badgeColor: '#DAA520',
      chartBarDefault: isDark
        ? 'linear-gradient(to top, #283593, #3949AB)'
        : 'linear-gradient(to top, #C5CAE9, #7986CB)',
      chartBarGold: 'linear-gradient(to top, #FFCA28, #DAA520)',
      borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    };

    const bars = [
      { h: 65, l: 'Jan' },
      { h: 45, l: 'Feb' },
      { h: 85, l: 'Mar' },
      { h: 55, l: 'Apr' },
      { h: 95, l: 'May' },
      { h: 70, l: 'Jun' },
      { h: 88, l: 'Jul' },
    ];

    return (
      <div
        className="rounded-2xl p-6 border flex flex-col h-full justify-between"
        style={{
          backgroundColor: colors.bg,
          borderColor: colors.border,
          boxShadow: colors.shadow,
          minHeight: '420px',
        }}
      >
        {/* Top: header + chart */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-medium" style={{ color: colors.subtext }}>Monthly Revenue</p>
              <p className="text-2xl font-bold mt-1" style={{ color: colors.heading }}>$48,562</p>
            </div>
            <div
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: colors.badgeBg, color: colors.badgeColor }}
            >
              +12.5%
            </div>
          </div>

          {/* Chart bars */}
          <div className="flex items-end space-x-2.5 flex-1">
            {bars.map((b, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center group h-full">
                <div
                  className="w-full rounded-t-lg transition-all duration-300 cursor-pointer group-hover:opacity-90"
                  style={{
                    height: `${b.h}%`,
                    maxHeight: '120px',
                    background: (i === 4 || i === 6) ? colors.chartBarGold : colors.chartBarDefault,
                    boxShadow: (i === 4 || i === 6) ? '0 4px 12px rgba(218,165,32,0.3)' : 'none',
                  }}
                />
                <span className="text-[10px] mt-2" style={{ color: colors.subtext }}>{b.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metrics row – now 3 columns, nothing floats outside */}
        <div
          className="grid grid-cols-3 gap-2 pt-4 border-t"
          style={{ borderColor: colors.borderColor }}
        >
          <div>
            <p className="text-xs" style={{ color: colors.subtext }}>Total Balance</p>
            <p className="text-sm font-bold mt-0.5" style={{ color: colors.heading }}>$128,920</p>
          </div>
          <div className="text-center">
            <p className="text-xs" style={{ color: colors.subtext }}>Active Cards</p>
            <p className="text-sm font-bold mt-0.5" style={{ color: colors.heading }}>•••• 4532</p>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: colors.subtext }}>Saved this month</p>
            <p className="text-sm font-bold" style={{ color: '#DAA520' }}>$2,450</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
      style={{ backgroundColor: theme.bg, transition: 'background-color 200ms ease-out' }}
    >
      {/* Ambient glows – static, no transition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: darkMode ? '#1A237E' : '#E8EAF6', opacity: darkMode ? 0.4 : 0.6 }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: darkMode ? '#DAA520' : '#FFF8E1', opacity: darkMode ? 0.1 : 0.4 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left content – unchanged from previous optimized version */}
          <div className="text-center lg:text-left space-y-8">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full border transition-colors duration-200"
              style={{
                backgroundColor: darkMode ? 'rgba(218,165,32,0.1)' : '#FFF8E1',
                borderColor: darkMode ? 'rgba(218,165,32,0.3)' : '#FFE082',
              }}
            >
              <span className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: '#DAA520' }} />
              <span className="text-xs font-semibold tracking-wide" style={{ color: '#DAA520' }}>
                Next-Gen Financial Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="transition-colors duration-200" style={{ color: theme.heading }}>
                Financial Tracking,{' '}
              </span>
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10" style={{ color: '#DAA520' }}>Supercharged</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none" preserveAspectRatio="none" style={{ height: '12px' }}>
                  <path d="M1 6C80 -2 200 -2 279 6" stroke="#DAA520" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-200" style={{ color: theme.subtext }}>
              Experience intelligent expense tracking, real-time analytics, and bank-grade security – all in one stunning dashboard. Take control of your financial future today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center px-8 py-4 text-white text-base font-semibold rounded-full transition-[background-color,transform] duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2"
                style={{ backgroundColor: theme.primaryBtn, boxShadow: theme.primaryBtnShadow }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = theme.primaryBtnHover;
                  e.target.style.boxShadow = theme.primaryBtnHoverShadow;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = theme.primaryBtn;
                  e.target.style.boxShadow = theme.primaryBtnShadow;
                }}
              >
                Get Started Now
                <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#watch-demo"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full transition-[background-color,border-color,color,transform] duration-200 hover:scale-105 active:scale-95 border-2"
                style={{ color: theme.secondaryBtnText, borderColor: theme.secondaryBtnBorder, backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#DAA520';
                  e.target.style.color = '#DAA520';
                  e.target.style.backgroundColor = darkMode ? 'rgba(218,165,32,0.1)' : 'rgba(218,165,32,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = theme.secondaryBtnBorder;
                  e.target.style.color = theme.secondaryBtnText;
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
                <span className="ml-2 text-sm opacity-75">(2 min)</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
              <div className="flex -space-x-3">
                {['J','M','S','K'].map((letter, i) => (
                  <div key={i}
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold transition-transform duration-200 hover:scale-110 hover:z-10"
                    style={{
                      backgroundColor: ['#3F51B5','#5C6BC0','#7986CB','#9FA8DA'][i],
                      borderColor: theme.bg,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                  >{letter}</div>
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-transform duration-200 hover:scale-110 hover:z-10"
                  style={{
                    backgroundColor: darkMode ? '#283593' : '#E2E8F0',
                    borderColor: theme.bg,
                    color: darkMode ? '#E2E8F0' : '#64748B'
                  }}
                >+9K</div>
              </div>
              <div>
                <p className="text-sm transition-colors duration-200" style={{ color: theme.subtext }}>
                  <span className="font-bold transition-colors duration-200" style={{ color: theme.heading }}>10,000+</span> active users
                </p>
                <div className="flex items-center mt-0.5">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-3.5 h-3.5" style={{ color: '#DAA520' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 text-xs transition-colors duration-200" style={{ color: theme.subtext }}>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column – dual-layer opacity crossfade */}
          <div className="hidden lg:block relative" style={{ minHeight: '420px' }}>
            {/* Dark card layer */}
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: darkMode ? 1 : 0, pointerEvents: darkMode ? 'auto' : 'none' }}
            >
              <CardContent mode="dark" />
            </div>
            {/* Light card layer */}
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: darkMode ? 0 : 1, pointerEvents: darkMode ? 'none' : 'auto' }}
            >
              <CardContent mode="light" />
            </div>
            {/* Decorative shapes (outside the card, static) */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl transform rotate-12 z-0"
              style={{ backgroundColor: darkMode ? 'rgba(218,165,32,0.15)' : 'rgba(218,165,32,0.2)' }}
            />
            <div
              className="absolute -bottom-2 -left-8 w-28 h-28 rounded-full z-0"
              style={{ backgroundColor: darkMode ? 'rgba(26,35,126,0.3)' : 'rgba(26,35,126,0.1)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-1.5" style={{ borderColor: darkMode ? '#475569' : '#CBD5E1' }}>
          <div className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#DAA520' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;