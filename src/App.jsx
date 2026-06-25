import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const theme = {
    bg: darkMode ? '#0A0F24' : '#F4F6F9',
    bgAlt: darkMode ? '#0F172A' : '#F4F6F9',
    text: darkMode ? '#E2E8F0' : '#1E293B',
    heading: darkMode ? '#FFFFFF' : '#0F172A',
    subtext: darkMode ? '#94A3B8' : '#64748B',
    cardBg: darkMode ? '#1A237E' : '#FFFFFF',
    cardBorder: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(226,232,240,0.8)',
    cardShadow: darkMode
      ? '0 25px 60px rgba(0,0,0,0.4)'
      : '0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
    primaryBtn: darkMode ? '#DAA520' : '#0F172A',
    primaryBtnHover: darkMode ? '#B8860B' : '#1E293B',
    primaryBtnShadow: darkMode
      ? '0 10px 30px rgba(218,165,32,0.3)'
      : '0 10px 30px rgba(15,23,42,0.2)',
    primaryBtnHoverShadow: darkMode
      ? '0 15px 40px rgba(218,165,32,0.5)'
      : '0 15px 40px rgba(15,23,42,0.35)',
    secondaryBtnText: darkMode ? '#E2E8F0' : '#0F172A',
    secondaryBtnBorder: darkMode ? '#475569' : '#CBD5E1',
    gold: '#DAA520',
    goldLight: '#FBBF24',
  };

  return (
    <div
      className="min-h-screen transition-[background-color] duration-300 ease-out"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />
      <Hero darkMode={darkMode} theme={theme} />
      <Features darkMode={darkMode} theme={theme} />
      <Analytics darkMode={darkMode} theme={theme} />
      <Security darkMode={darkMode} theme={theme} />
      <FAQ darkMode={darkMode} theme={theme} />
      <Footer darkMode={darkMode} theme={theme} />
    </div>
  );
}

export default App;