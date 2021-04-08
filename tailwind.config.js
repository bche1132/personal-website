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
          'pink' : '#F8BEBA',
          'mint' : '#39BDAA',
          'orange' : '#FAB752',
          'indigo' : '#435eaa'
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
