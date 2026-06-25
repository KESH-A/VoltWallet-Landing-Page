import { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  // Temanın tarayıcıda hatırlanmasını sağlayan mantık burada kalıyor
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
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

  return (
    // Burada animasyonu senin istediğin gibi 500ms ve ease-in-out yaptık, arka planı da bağladık
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1A237E] text-slate-800 dark:text-slate-100 transition-colors duration-500 ease-in-out">
      
      {/* Çocuk bileşenler (Navbar ve Hero buraya gelecek) */}
      <main className="flex-1 w-full">
        {/* Navbar'a ve diğer sayfalara bu özellikleri paslayabilmek için children'ı klonluyoruz veya doğrudan basıyoruz */}
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} VoltWallet. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;