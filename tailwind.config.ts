import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/sedai-services/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggleDefault: 'spin 1s linear infinite',
        wiggleSlow: 'spin 1.5s linear infinite',
      },
      backgroundColor: {
        'grayTransparent': 'rgba(173,173,173,0.5)',
      },
      borderColor: {
        customBorderWhite:'#CCC',
      },
    },
  },
  plugins: [],
};
export default config;
