// tailwind.config.ts
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
extend: {
fontFamily: {
sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
},
},
},
plugins: [],
};

export default config;
