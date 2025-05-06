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
        },
        midcent : {
          tan: '#F4F1E9',
          orange: '#CD7029',
          yellow: '#DA992A',
          green: '#8F9261',
          'dark-green': '#5F6720',
          blush: '#C8A89C',
          
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
