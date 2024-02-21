/** @type {import('tailwindcss').Config} */
module.exports = {
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

      "success": "#125000",
      "error": "#9d0000",
      "warning": "#9d9d00",
      "info": "#002150",

      'background': '#efede5',
      'secondary-background': '#f2f2f2',

      'foreground': '#353535',
      'secondary-foreground': "#000000",

      'primary': '#bd2026',
      'primary-shadow': '#c0392b',

    },
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Futura', 'sans-serif']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '14rem',
      '8xl': '16rem',
      '9xl': '18rem',
    },
    listStyleType: {
      'square': 'square',
    }
  },
  plugins: [],
}

