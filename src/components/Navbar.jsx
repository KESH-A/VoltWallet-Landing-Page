import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ darkMode, setDarkMode, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Security', href: '#security' },
    { name: 'FAQ', href: '#faq' },
  ];

  const navBg = isScrolled
    ? darkMode
      ? 'rgba(10,15,36,0.9)'
      : 'rgba(255,255,255,0.9)'
    : 'transparent';

  const linkColor = darkMode ? '#94A3B8' : '#64748B';
  const linkHover = darkMode ? '#FFFFFF' : '#0F172A';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: navBg,
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        boxShadow: isScrolled
          ? darkMode
            ? '0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.05)'
          : 'none',
        borderBottom: isScrolled
          ? `1px solid ${darkMode ? 'rgba(40,53,147,0.3)' : 'rgba(226,232,240,0.8)'}`
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center space-x-2.5 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #FBBF24, #DAA520)',
                boxShadow: '0 4px 12px rgba(218,165,32,0.3)',
              }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight transition-colors duration-300" style={{ color: theme.heading }}>
              Volt<span style={{ color: '#DAA520' }}>Wallet</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group"
                style={{ color: linkColor }}
                onMouseEnter={(e) => {
                  e.target.style.color = linkHover;
                  e.target.style.backgroundColor = darkMode ? 'rgba(26,35,126,0.4)' : 'rgba(15,23,42,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = linkColor;
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {l.name}
                <span
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4"
                  style={{ backgroundColor: '#DAA520', transform: 'translateX(-50%)', left: '50%' }}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-5">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <a
              href="#launch"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full transition-[background-color,transform] duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2"
              style={{ backgroundColor: theme.primaryBtn, color: '#fff', boxShadow: theme.primaryBtnShadow }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.primaryBtnHover;
                e.target.style.boxShadow = theme.primaryBtnHoverShadow;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.primaryBtn;
                e.target.style.boxShadow = theme.primaryBtnShadow;
              }}
            >
              Launch App
              <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              style={{ color: linkColor }}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide & fade */}
      <div
        className="lg:hidden transition-all duration-300 ease-out"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-16px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          maxHeight: mobileOpen ? '500px' : '0',
          backgroundColor: darkMode ? 'rgba(10,15,36,0.98)' : 'rgba(248,250,252,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: `1px solid ${darkMode ? 'rgba(40,53,147,0.3)' : 'rgba(226,232,240,0.8)'}`,
          overflow: 'hidden',
        }}
      >
        <div className="px-4 py-6 space-y-1">
          {links.map((l, i) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
              style={{
                color: linkColor,
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = darkMode ? 'rgba(26,35,126,0.5)' : 'rgba(15,23,42,0.08)';
                e.target.style.color = linkHover;
                e.target.style.paddingLeft = '24px';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = linkColor;
                e.target.style.paddingLeft = '16px';
              }}
            >
              {l.name}
            </a>
          ))}
          <div style={{ opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)', transition: 'all 300ms ease-out', transitionDelay: mobileOpen ? '200ms' : '0ms' }}>
            <a
              href="#launch"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3.5 text-white text-sm font-semibold rounded-full transition-colors duration-200 hover:scale-105 active:scale-95"
              style={{ backgroundColor: theme.primaryBtn, boxShadow: theme.primaryBtnShadow }}
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;