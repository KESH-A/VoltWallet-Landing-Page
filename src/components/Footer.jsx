const Footer = ({ darkMode, theme }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative pt-20 pb-10 transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? '#020617' : '#FFFFFF',
        borderTop: `1px solid ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 – Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center space-x-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #FBBF24, #DAA520)',
                  boxShadow: '0 4px 12px rgba(218,165,32,0.3)',
                }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: theme.heading }}>
                Volt<span style={{ color: '#DAA520' }}>Wallet</span>
              </span>
            </a>
            <p className="text-sm mb-6 transition-colors duration-200" style={{ color: theme.subtext }}>
              The next generation of intelligent financial tracking. Secure, global, and beautifully simple.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3">
              {['Twitter', 'LinkedIn', 'GitHub'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : '#F1F5F9',
                    color: theme.subtext,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? 'rgba(218,165,32,0.2)' : '#FFF8E1';
                    e.currentTarget.style.color = '#DAA520';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.05)' : '#F1F5F9';
                    e.currentTarget.style.color = theme.subtext;
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Products */}
          <div>
            <h4 className="text-sm font-bold mb-4 transition-colors duration-200" style={{ color: theme.heading }}>Products</h4>
            <ul className="space-y-2.5">
              {['Digital Wallet', 'Analytics', 'High‑Yield Yields', 'Security Core'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors duration-200 hover:text-[#DAA520]" style={{ color: theme.subtext }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 transition-colors duration-200" style={{ color: theme.heading }}>Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors duration-200 hover:text-[#DAA520]" style={{ color: theme.subtext }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Newsletter */}
          <div>
            <h4 className="text-sm font-bold mb-4 transition-colors duration-200" style={{ color: theme.heading }}>Stay Updated</h4>
            <p className="text-xs mb-4 transition-colors duration-200" style={{ color: theme.subtext }}>
              The latest financial tips and product updates, straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-l-full border border-r-0 outline-none transition-colors duration-200"
                style={{
                  backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : '#F1F5F9',
                  borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
                  color: theme.heading,
                }}
              />
              <button
                className="px-5 py-2.5 text-sm font-semibold rounded-r-full transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: '#DAA520',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 15px rgba(218,165,32,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8860B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#DAA520';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t transition-colors duration-200" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
          <p className="text-xs mb-4 sm:mb-0 transition-colors duration-200" style={{ color: theme.subtext }}>
            © {new Date().getFullYear()} VoltWallet. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-xs font-medium transition-colors duration-200 hover:text-[#DAA520]"
            style={{ color: theme.subtext }}
          >
            <span>Back to top</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;