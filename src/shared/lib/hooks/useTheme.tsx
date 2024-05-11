import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultScheme = isDark ? 'dark' : 'light';
  const [themeMode, setThemeMode] = useState<string>(
    localStorage.getItem('theme') || defaultScheme,
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return { themeMode, setThemeMode };
};
