/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './comp/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange213: '#F4992D',
      },
      customClasses: {
        'nav-item': 'block text-2xl sm:text-3xl lg:text-4xl text-center p-3 px-5 sm:px-10 lg:px-20 no-underline font-bold',
      },
    },
  },
  plugins: [],
};
