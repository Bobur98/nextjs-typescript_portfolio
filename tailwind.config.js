module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  content: [],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      kaushan: ['Kaushan Script'],
    },
    boaxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        darkblue: {
          DEFAULT: ' #3a6073',
        },
        blue: {
          DEFAULT: '#3a7bd5',
        },
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#222222',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
