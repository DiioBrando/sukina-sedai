import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const isDark =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultScheme = isDark ? 'dark' : 'light';
  const storage =
    typeof localStorage !== 'undefined' && localStorage.getItem('theme');
  const [themeMode, setThemeMode] = useState<string>(storage || defaultScheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return { themeMode, setThemeMode };
};
