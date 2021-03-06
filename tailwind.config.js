module.exports = {
  purge: ['./public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        darkBlue: '#2d314d',
        limeGreen: '#31d35c',
        brightCyan: '#2bb7da',
        grayishBlue: '#9698a6',
        lightGrayishBlue: '#f3f4f6',
        veryLightGray: '#fafafa',
      },
      fontFamily: {
        main: ['Public Sans', 'sans-serif'],
      },
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
        'hover-none': { raw: '(hover: none)' },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      textDecoration: ['active'],
      opacity: ['active'],
    },
  },
  plugins: [],
};
