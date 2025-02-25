module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom : {
          'pink' : '#E83F6F',
          'mint' : '#32936F',
          'orange' : '#FFBF00',
          'indigo' : '#0b1d51'
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      transitionProperty: ['hover', 'focus'],
    }
  },
  plugins: [],
}
