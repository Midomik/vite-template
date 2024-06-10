/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px',

        'mobile-lg': '375px',

        // 'mobile-max': { max: '767px' },

        tablet: '768px',

        // 'tablet-max': { max: '1439px' },
        // 'tablet-only': { min: '768px', max: '1439px' },

        desktop: '1440px',
      },
      colors: {
        white: '#f9f9f9',
        dark: '#141414',
        blue: '#4f92f7',
        green: '#30b94d',
        'gray-68': '#686868',
        'gray-e3': 'rgba(227, 227, 227, 0.3)',
        'gray-26': '#262626',
        'gray-1f': '#1f1f1f',
      },
    },
  },
  plugins: [],
};
