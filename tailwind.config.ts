import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'black': '#000000',
      'blue': '#0000ee',
      'white': '#ffffff',
      'gray': '#9d9d9c',
      'background': '#efede5',
      'foreground': '#000000',
      'secondary-foreground': "#353535",
      'primary': '#bd2026',
      'primary-shadow': '#c0392b',

    },
    transitionDuration: {
      '2000': "2000ms",
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
