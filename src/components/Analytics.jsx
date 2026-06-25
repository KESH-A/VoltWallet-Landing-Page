const Analytics = ({ darkMode, theme }) => {
  const values = [1200, 1900, 1500, 2500, 2200, 2800];
  const chartWidth = 400;
  const chartHeight = 200;
  const padding = 20;
  const maxVal = Math.max(...values);
  const points = values
    .map((v, i) => {
      const x = padding + (i * (chartWidth - 2 * padding)) / (values.length - 1);
      const y = chartHeight - padding - (v / maxVal) * (chartHeight - 2 * padding);
      return `${x},${y}`;
    })
    .join(' ');
  const areaPoints = `0,${chartHeight - padding} ${points} ${chartWidth},${chartHeight - padding}`;

  return (
    <section
      id="analytics"
      className="relative py-24 lg:py-32 transition-colors duration-300 ease-out overflow-hidden"
      style={{ backgroundColor: darkMode ? '#0F172A' : '#F4F6F9' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left – unchanged rich text */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full border transition-colors duration-200"
              style={{
                backgroundColor: darkMode ? 'rgba(218,165,32,0.1)' : '#FFF8E1',
                borderColor: darkMode ? 'rgba(218,165,32,0.3)' : '#FFE082',
              }}
            >
              <span className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: '#DAA520' }} />
              <span className="text-xs font-semibold tracking-wide" style={{ color: '#DAA520' }}>
                Smart Analytics
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] transition-colors duration-200" style={{ color: theme.heading }}>
              Real‑Time Insights,{' '}
              <span className="relative inline-block">
                <span style={{ color: '#DAA520' }}>Intelligently</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 160 8" fill="none" style={{ height: '8px' }}>
                  <path d="M1 4C50 0 110 0 159 4" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h2>
            <p className="text-lg leading-relaxed transition-colors duration-200" style={{ color: theme.subtext }}>
              VoltWallet’s analytics engine transforms raw transactions into powerful, actionable insights. Monitor spending patterns, forecast future cashflow, and receive AI‑powered budget recommendations – all in a beautiful, real‑time dashboard.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Automated Budgeting', desc: 'Set custom budgets and let our AI adjust them based on your habits.' },
                { title: 'Predictive Forecasting', desc: 'See 30‑day projections powered by machine learning algorithms.' },
                { title: 'Smart Categorisation', desc: 'Transactions automatically sorted into 50+ categories with merchant recognition.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: darkMode ? 'rgba(218,165,32,0.2)' : '#FFF8E1' }}>
                      <svg className="w-4 h-4" style={{ color: '#DAA520' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold transition-colors duration-200" style={{ color: theme.heading }}>{item.title}</p>
                    <p className="text-sm transition-colors duration-200" style={{ color: theme.subtext }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Dashboard card with flow-based layout, zero absolute positioning */}
          <div className="relative h-full">
            <div
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 md:p-8 h-full transition-colors duration-200"
              style={{
                backgroundColor: theme.cardBg,
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
                boxShadow: darkMode ? '0 25px 60px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.06)',
              }}
            >
              {/* Chart section */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs font-medium transition-colors duration-200" style={{ color: theme.subtext }}>Expense Overview</p>
                    <p className="text-2xl font-bold mt-1 transition-colors duration-200" style={{ color: theme.heading }}>$2,480</p>
                  </div>
                  <div className="flex space-x-2">
                    {['D', 'W', 'M'].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all duration-200"
                        style={{
                          backgroundColor: t === 'M' ? '#DAA520' : 'transparent',
                          color: t === 'M' ? '#fff' : theme.subtext,
                          border: t !== 'M' ? `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` : 'none',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chart SVG */}
                <div className="mb-6">
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                    {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                      <line
                        key={i}
                        x1={padding}
                        y1={chartHeight - padding - p * (chartHeight - 2 * padding)}
                        x2={chartWidth - padding}
                        y2={chartHeight - padding - p * (chartHeight - 2 * padding)}
                        stroke={darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}
                        strokeWidth="1"
                      />
                    ))}
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DAA520" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#DAA520" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <polygon points={areaPoints} fill="url(#areaGrad)" />
                    <polyline points={points} fill="none" stroke="#DAA520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {values.map((v, i) => {
                      const x = padding + (i * (chartWidth - 2 * padding)) / (values.length - 1);
                      const y = chartHeight - padding - (v / maxVal) * (chartHeight - 2 * padding);
                      return (
                        <g key={i} className="group cursor-pointer">
                          <circle cx={x} cy={y} r="5" fill="#1A237E" stroke="#DAA520" strokeWidth="2" className="transition-all duration-300 group-hover:r-[7]" />
                          <rect x={x - 15} y={y - 30} width="30" height="20" rx="4" fill={darkMode ? '#1A237E' : '#FFFFFF'} stroke="#DAA520" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <text x={x} y={y - 17} textAnchor="middle" fontSize="10" fill="#DAA520" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">${v}</text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Bottom section: stats row + live badge in a single flex container */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 pt-4 border-t" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 w-full sm:w-auto">
                  <div>
                    <p className="text-xs transition-colors duration-200" style={{ color: theme.subtext }}>Avg/Day</p>
                    <p className="text-sm font-bold transition-colors duration-200" style={{ color: theme.heading }}>$82.66</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs transition-colors duration-200" style={{ color: theme.subtext }}>Forecast</p>
                    <p className="text-sm font-bold" style={{ color: '#DAA520' }}>$2,910</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs transition-colors duration-200" style={{ color: theme.subtext }}>Change</p>
                    <p className="text-sm font-bold text-green-400">+12.4%</p>
                  </div>
                </div>

                {/* EUR/USD Live badge – inline flex, naturally placed */}
                <div
                  className="inline-flex items-center space-x-3 rounded-xl border p-4 transition-transform duration-200 hover:scale-105 w-full sm:w-auto justify-center"
                  style={{
                    backgroundColor: darkMode ? '#1A237E' : '#FFFFFF',
                    borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
                    boxShadow: darkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: darkMode ? 'rgba(218,165,32,0.2)' : '#FFF8E1' }}>
                    <svg className="w-5 h-5" style={{ color: '#DAA520' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium transition-colors duration-200" style={{ color: theme.subtext }}>EUR/USD Live</p>
                    <p className="text-sm font-bold" style={{ color: '#DAA520' }}>1.0845 <span className="text-green-400 text-xs ml-1">+0.12%</span></p>
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

export default Analytics;