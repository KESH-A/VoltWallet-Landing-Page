const Security = ({ darkMode, theme }) => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'AES‑256 Encryption',
      desc: 'Every byte of your data is encrypted using the same standard trusted by global banks and military agencies. Your financial information remains unreadable to anyone but you.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: 'Multi‑Factor Authentication',
      desc: 'Add biometric verification, one‑time passwords, or hardware security keys to your account. Only you can access your financial dashboard.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI Fraud Detection',
      desc: 'Our machine learning models analyse thousands of transactions per second, instantly flagging suspicious activity and alerting you before damage occurs.',
    },
  ];

  return (
    <section
      id="security"
      className="relative py-24 lg:py-32 transition-colors duration-300 ease-out"
      style={{ backgroundColor: darkMode ? '#0A0F24' : '#F8FAFC' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border transition-colors duration-200 mb-6"
            style={{
              backgroundColor: darkMode ? 'rgba(218,165,32,0.1)' : '#FFF8E1',
              borderColor: darkMode ? 'rgba(218,165,32,0.3)' : '#FFE082',
            }}
          >
            <span className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: '#DAA520' }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: '#DAA520' }}>
              Enterprise Security
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-colors duration-200" style={{ color: theme.heading }}>
            Your Security Is Our{' '}
            <span className="relative inline-block">
              <span style={{ color: '#DAA520' }}>Foundation</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 180 8" fill="none" style={{ height: '8px' }}>
                <path d="M1 4C60 0 120 0 179 4" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed transition-colors duration-200" style={{ color: theme.subtext }}>
            We employ the most advanced security protocols to protect your financial data. Sleep soundly knowing your assets are guarded 24/7.
          </p>
        </div>

        {/* 3‑Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-8 border transition-all duration-300 ease-out hover:-translate-y-2"
              style={{
                backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.4)' : '#FFFFFF',
                borderColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(226,232,240,0.6)',
                boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.04)',
                backdropFilter: darkMode ? 'blur(12px)' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = darkMode ? 'rgba(218,165,32,0.4)' : 'rgba(218,165,32,0.4)';
                e.currentTarget.style.boxShadow = darkMode
                  ? '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(218,165,32,0.3)'
                  : '0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(218,165,32,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(226,232,240,0.6)';
                e.currentTarget.style.boxShadow = darkMode ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.04)';
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: 0,
                  background: darkMode
                    ? 'radial-gradient(circle at 50% 0%, rgba(218,165,32,0.08) 0%, transparent 70%)'
                    : 'radial-gradient(circle at 50% 0%, rgba(218,165,32,0.04) 0%, transparent 70%)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: darkMode ? 'rgba(218,165,32,0.15)' : '#FFF8E1', color: '#DAA520' }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-200" style={{ color: theme.heading }}>
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed transition-colors duration-200" style={{ color: theme.subtext }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badge */}
        <div className="mt-16 flex justify-center">
          <div
            className="inline-flex items-center space-x-4 px-6 py-3 rounded-full border transition-colors duration-200"
            style={{
              backgroundColor: darkMode ? 'rgba(26,35,126,0.3)' : '#F8FAFC',
              borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
            }}
          >
            <svg className="w-5 h-5" style={{ color: '#DAA520' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium transition-colors duration-200" style={{ color: theme.subtext }}>
              SOC 2 Type II Certified • GDPR Compliant • PCI DSS Level 1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;