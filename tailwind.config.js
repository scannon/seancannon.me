const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: ['./resources/**/*.antlers.html', './resources/**/*.blade.php', './content/**/*.md'],
    },
    important: true,
    theme: {
        extend: {
          fontFamily: {
            sans: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
            mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
          },
            colors: {
              'rich-black': '#0C1824',
              'eerie-black': '#222222',
              'jet-black': '#333333',
              'link-blue': '#457B9D',
              'blue-green': '#77CBB9',
              orange: '#FFA552'

            },
        },
    },
    variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],

};
