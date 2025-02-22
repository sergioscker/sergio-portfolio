'use client';

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="dark:bg-neutral-900 bg-slate-50 hover:text-accent-hover text-accent fixed right-3 
    lg:right-40 top-[6.1rem] md:top-36 p-3 border-2 hover:border-slate-400 border-slate-300
     dark:border-neutral-800 dark:hover:border-neutral-500 
     rounded-2xl shadow-lg dark:shadow-black shadow-slate-200 
     transition delay-100 ease-linear z-40"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FaSun size={30} /> : <FaMoon size={30} />}
    </button>
  );
}
