import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggleDefault: 'spin 1s linear infinite',
        wiggleSlow: 'spin 1.5s linear infinite',
      },
      backgroundColor: {
        grayTransparent: 'rgba(173,173,173,0.5)',
      },
      borderColor: {
        customBorderWhite: '#CCC',
      },
      boxShadow: {
        customInner: 'inset 0 0 6px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
