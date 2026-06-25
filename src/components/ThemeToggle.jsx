import { memo, useCallback } from 'react';

const ThemeToggle = memo(({ darkMode, setDarkMode }) => {
  const handleClick = useCallback(() => setDarkMode((d) => !d), [setDarkMode]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle dark mode"
      aria-pressed={darkMode}
      className="relative w-14 h-7 rounded-full p-1 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2"
      style={{
        backgroundColor: darkMode ? '#283593' : '#E2E8F0',
        transition: 'background-color 0.32s ease',
        contain: 'layout paint style',
        isolation: 'isolate',
      }}
    >
      <span
        className="relative block w-5 h-5 rounded-full"
        style={{
          backgroundColor: darkMode ? '#DAA520' : '#FFFFFF',
          transform: darkMode ? 'translate3d(28px,0,0)' : 'translate3d(0,0,0)',
          boxShadow: darkMode
            ? '0 2px 8px rgba(218,165,32,0.4)'
            : '0 2px 8px rgba(0,0,0,0.15)',
          transition: 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <svg
          className="absolute inset-0 m-auto w-3 h-3"
          style={{
            color: '#DAA520',
            opacity: darkMode ? 0 : 1,
            transform: darkMode ? 'scale(0.4) rotate(-90deg)' : 'scale(1) rotate(0deg)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="absolute inset-0 m-auto w-3 h-3"
          style={{
            color: '#0A0F24',
            opacity: darkMode ? 1 : 0,
            transform: darkMode ? 'scale(1) rotate(0deg)' : 'scale(0.4) rotate(90deg)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;