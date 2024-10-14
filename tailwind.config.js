const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')

const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    // extend: {
    fontFamily: {
      nunito: ['nunito']
    },
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      lightBackgroundBlue: '#dfe5ed',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      cgreen: {
        light: '#165b33',
        dark: '#146b3a',
        DEFAULT: '#165b33'
      },
      orange_yellow: '#f8b229',
      cinnabar: '#ea4630',
      firebrick: '#bb2528'
    }
  },
  plugins: [forms]
}

module.exports = config

