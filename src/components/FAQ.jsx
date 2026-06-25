import { useState } from 'react';

const FAQ = ({ darkMode, theme }) => {
  const faqs = [
    {
      q: 'How does VoltWallet secure my financial assets?',
      a: 'We use AES‑256 bank‑grade encryption for all data at rest and in transit. Our infrastructure is hosted in SOC 2 Type II certified data centres, with continuous third‑party penetration testing and real‑time threat monitoring.',
    },
    {
      q: 'What are the transaction fees?',
      a: 'VoltWallet offers zero fees on internal transfers and a flat 0.5% on international payments. Premium users enjoy unlimited free transactions and priority processing.',
    },
    {
      q: 'Can I connect international bank accounts?',
      a: 'Absolutely. We support 150+ currencies and integrate with over 10,000 financial institutions worldwide through secure Open Banking APIs.',
    },
    {
      q: 'Is my personal data shared with third parties?',
      a: 'Never. VoltWallet follows strict GDPR and CCPA guidelines. Your data is encrypted and anonymised; we never sell or share it with external advertisers.',
    },
    {
      q: 'How does AI Budget Forecasting work?',
      a: 'Our machine learning engine analyses your past spending patterns, categorises recurring transactions, and predicts future cashflow with 95% accuracy, giving you smart budget suggestions weekly.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 transition-colors duration-300 ease-out"
      style={{ backgroundColor: darkMode ? '#0A0F24' : '#F8FAFC' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border transition-colors duration-200 mb-6"
            style={{
              backgroundColor: darkMode ? 'rgba(218,165,32,0.1)' : '#FFF8E1',
              borderColor: darkMode ? 'rgba(218,165,32,0.3)' : '#FFE082',
            }}
          >
            <span className="w-2 h-2 rounded-full mr-2.5" style={{ backgroundColor: '#DAA520' }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: '#DAA520' }}>
              Help Center
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-colors duration-200" style={{ color: theme.heading }}>
            Frequently Asked{' '}
            <span className="relative inline-block">
              <span style={{ color: '#DAA520' }}>Questions</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 180 8" fill="none" style={{ height: '8px' }}>
                <path d="M1 4C60 0 120 0 179 4" stroke="#DAA520" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden"
              style={{
                backgroundColor: darkMode ? 'rgba(26,35,126,0.2)' : '#FFFFFF',
                borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(226,232,240,0.8)',
              }}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                style={{ color: theme.heading }}
              >
                <span className="text-lg font-semibold pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="#DAA520"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === idx ? '300px' : '0',
                  opacity: openIndex === idx ? 1 : 0,
                  overflow: 'hidden',
                }}
              >
                <div
                  className="px-6 pb-5 text-base leading-relaxed transition-colors duration-200"
                  style={{ color: theme.subtext }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;