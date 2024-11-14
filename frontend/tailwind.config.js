/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2c3262',
        green: '#B0E212',
        white: '#FFFFFF',
        black: '#000000',
      },
      keyframes: {
        textSlideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-25%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        imageSlideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(25%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleUp: {
          from: {
            transform: 'scale(0.5)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
        slideDown: {
          from: {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        carousel: {
          '0%': {
            transform: 'translateX(150%)',
            opacity: '0',
          },
          '15%, 85%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-150%)',
            opacity: '0',
          },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.1)', opacity: 0 },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft .8s ease-in-out',
        slideInRight: 'slideInRight .8s ease-in-out',
        scaleUp: 'scaleUp .8s ease-in-out',
        slideDown: 'slideDown .8s ease-out',
        carousel: 'carousel 5s ease-in-out infinite',
        scaleIn: 'scaleIn .8s ease-in-out forwards',
        scaleOut: 'scaleOut .8s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};