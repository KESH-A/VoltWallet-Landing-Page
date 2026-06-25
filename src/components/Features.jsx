import { useState } from 'react';

const Features = ({ darkMode, theme }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Real-Time Expense Tracking',
      description: 'Monitor every transaction instantly with live updates. Categorize spending automatically and stay on top of your finances with millisecond precision.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-amber-400 to-yellow-600',
      stat: '99.9%',
      statLabel: 'Uptime'
    },
    {
      id: 2,
      title: 'Multi-Currency Support',
      description: 'Operate globally with support for 150+ currencies. Real-time exchange rates, automatic conversions, and localized financial insights for international businesses.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-600',
      stat: '150+',
      statLabel: 'Currencies'
    },
    {
      id: 3,
      title: 'AI Budget Forecasting',
      description: 'Leverage machine learning algorithms that analyze spending patterns to predict future expenses, optimize budgets, and suggest smart savings opportunities.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-violet-600',
      stat: '95%',
      statLabel: 'Accuracy'
    },
    {
      id: 4,
      title: 'Bank-Grade Encryption',
      description: 'Your data is protected with AES-256 encryption, biometric authentication, and zero-trust architecture. Security that meets and exceeds financial industry standards.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-emerald-400 to-green-600',
      stat: '256-bit',
      statLabel: 'AES'
    },
    {
      id: 5,
      title: 'Automated Invoicing',
      description: 'Create, send, and track professional invoices in seconds. Set up recurring billing, automatic payment reminders, and reconcile payments effortlessly.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-orange-400 to-red-500',
      stat: '10K+',
      statLabel: 'Invoices'
    },
    {
      id: 6,
      title: 'Team Collaboration',
      description: 'Invite team members, assign roles, set spending limits, and approve expenses collaboratively. Perfect for finance teams and growing businesses.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-cyan-400 to-teal-600',
      stat: '∞',
      statLabel: 'Scalable'
    },
  ];

  return (
    <section 
      id="features"
      className="relative py-24 lg:py-32 transition-colors duration-300 ease-out overflow-hidden"
      style={{ backgroundColor: darkMode ? theme.darkBgAlt : theme.lightBgAlt }}
    >
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? '#FFFFFF' : '#0F172A'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div 
            className="inline-flex items-center px-4 py-1.5 rounded-full border transition-colors duration-300 mb-6"
            style={{ 
              backgroundColor: darkMode ? 'rgba(218, 165, 32, 0.1)' : '#FFF8E1',
              borderColor: darkMode ? 'rgba(218, 165, 32, 0.3)' : '#FFE082',
            }}
          >
            <span className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: '#DAA520' }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: '#DAA520' }}>
              Powerful Features
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-colors duration-300"
            style={{ color: theme.heading }}
          >
            Everything You Need to{' '}
            <span className="relative inline-block">
              <span style={{ color: '#DAA520' }}>Master</span>
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 120 8" 
                fill="none"
                style={{ height: '8px' }}
              >
                <path d="M1 4C40 0 80 0 119 4" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
            {' '}Your Finances
          </h2>
          
          <p 
            className="text-lg sm:text-xl leading-relaxed transition-colors duration-300"
            style={{ color: theme.subtext }}
          >
            Powerful tools designed for modern financial management. From tracking expenses to forecasting growth, VoltWallet empowers every financial decision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl p-8 transition-all duration-300 ease-out cursor-pointer"
              style={{
                backgroundColor: darkMode ? 'rgba(26, 35, 126, 0.2)' : '#FFFFFF',
                borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.6)',
                borderWidth: '1px',
                borderStyle: 'solid',
                boxShadow: hoveredCard === feature.id
                  ? (darkMode 
                    ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(218, 165, 32, 0.3)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(218, 165, 32, 0.3)')
                  : (darkMode 
                    ? '0 4px 20px rgba(0, 0, 0, 0.2)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.04)'),
                transform: hoveredCard === feature.id ? 'translateY(-4px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: hoveredCard === feature.id ? 1 : 0,
                  background: darkMode 
                    ? 'radial-gradient(circle at 50% 0%, rgba(218, 165, 32, 0.1) 0%, transparent 70%)' 
                    : 'radial-gradient(circle at 50% 0%, rgba(218, 165, 32, 0.08) 0%, transparent 70%)'
                }}
              />

              <div className="relative z-10">
                {/* Icon Container */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: darkMode 
                      ? `linear-gradient(135deg, rgba(218, 165, 32, 0.2), rgba(218, 165, 32, 0.1))` 
                      : `linear-gradient(135deg, #FFF8E1, #FFECB3)`,
                    color: '#DAA520'
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title & Description */}
                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: theme.heading }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed mb-6 transition-colors duration-300"
                  style={{ color: theme.subtext }}
                >
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                  <div>
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: '#DAA520' }}
                    >
                      {feature.stat}
                    </span>
                    <span 
                      className="text-xs ml-2"
                      style={{ color: theme.subtext }}
                    >
                      {feature.statLabel}
                    </span>
                  </div>
                  
                  {/* Learn more arrow */}
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: hoveredCard === feature.id 
                        ? (darkMode ? 'rgba(218, 165, 32, 0.2)' : 'rgba(218, 165, 32, 0.1)')
                        : 'transparent',
                      transform: hoveredCard === feature.id ? 'translateX(4px)' : 'translateX(0)'
                    }}
                  >
                    <svg 
                      className="w-4 h-4 transition-colors duration-300" 
                      style={{ color: hoveredCard === feature.id ? '#DAA520' : theme.subtext }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p 
            className="text-sm mb-6 transition-colors duration-300"
            style={{ color: theme.subtext }}
          >
            Join thousands of finance professionals who trust VoltWallet
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center px-8 py-4 text-white text-base font-semibold rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2"
            style={{ 
              backgroundColor: theme.primaryBtn,
              boxShadow: darkMode 
                ? '0 10px 30px rgba(218, 165, 32, 0.3)' 
                : '0 10px 30px rgba(15, 23, 42, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = theme.primaryBtnHover;
              e.target.style.boxShadow = darkMode 
                ? '0 15px 40px rgba(218, 165, 32, 0.5)' 
                : '0 15px 40px rgba(15, 23, 42, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = theme.primaryBtn;
              e.target.style.boxShadow = darkMode 
                ? '0 10px 30px rgba(218, 165, 32, 0.3)' 
                : '0 10px 30px rgba(15, 23, 42, 0.25)';
            }}
          >
            Explore All Features
            <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;