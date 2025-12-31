'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface MProps {
  className?: string;
}

export function ModeToggle({ className }: MProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={onClickMode}
      className={`cursor-pointer rounded-full bg-gray-200 p-2 focus:ring-3 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-amber-300 ${className}`}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
