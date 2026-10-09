import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Sun, Moon, Laptop } from 'lucide-react';

export default function FloatingThemeWidget() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <aside
      aria-label="Selector de tema flotante"
      className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-1 p-1 bg-white/90 dark:bg-[#141816]/90 backdrop-blur-md border border-black/10 dark:border-white/15 rounded-full shadow-lg text-xs"
    >
      <span className="sr-only">Tema visual</span>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all cursor-pointer flex items-center justify-center ${
          theme === 'light'
            ? 'bg-[#FAF8F5] text-[#E85D04] shadow-xs font-semibold ring-1 ring-[#E85D04]/30'
            : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white'
        }`}
        title="Modo Claro"
        aria-label="Activar modo claro"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all cursor-pointer flex items-center justify-center ${
          theme === 'dark'
            ? 'bg-[#1E2521] text-[#E85D04] shadow-xs font-semibold ring-1 ring-[#E85D04]/30'
            : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white'
        }`}
        title="Modo Oscuro"
        aria-label="Activar modo oscuro"
      >
        <Moon className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-all cursor-pointer flex items-center justify-center ${
          theme === 'system'
            ? 'bg-[#FAF8F5] dark:bg-[#1E2521] text-[#E85D04] shadow-xs font-semibold ring-1 ring-[#E85D04]/30'
            : 'text-[#606863] dark:text-[#9DA7A1] hover:text-[#141816] dark:hover:text-white'
        }`}
        title="Automático (sigue tu sistema)"
        aria-label="Seguir preferencia del sistema"
      >
        <Laptop className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
