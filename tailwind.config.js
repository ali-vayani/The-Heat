/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'text': '#f0e3de',
        'background': '#110808',
        'primary': '#5d2c2c',
        'secondary': '#684638',
        'accent': '#b87960',
        'redd': '#a95050',
        'selected': '#744836'
       },       
             
       
    },
    screens: {
      'xs': '300px',
      'sm': '770px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontSize: {
      'xxs': '0.5rem',
      'sm': '0.875rem',    // 14px
      'base': '1rem',      // 16px
      'lg': '1.125rem',    // 18px
      'xl': '1.25rem',     // 20px
      '2xl': '1.5rem',     // 24px
      '3xl': '1.875rem',   // 30px
      '4xl': '2.25rem',    // 36px
      '5xl': '3rem',       // 48px
      '6xl': '4rem', 
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    }
  },
  plugins: [],
};
