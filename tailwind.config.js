const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      orange: colors.orange,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      },
      height: {
        '80': '20rem',
        '100': '25rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}
