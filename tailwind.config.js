/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInDelay: 'fadeIn 1.5s ease-in-out',
        fadeInLongDelay: 'fadeIn 2s ease-in-out',
        slideInRight: 'slideInRight 1s ease-out',
       
          zoomIn: 'zoomIn 1s ease-out',
        
      },
    },
  },
  plugins: [  require('@tailwindcss/forms')],
}

