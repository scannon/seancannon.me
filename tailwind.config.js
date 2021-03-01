module.exports = {
    purge: {
        content: ['./resources/**/*.antlers.html', './resources/**/*.blade.php', './content/**/*.md'],
    },
    important: true,
    theme: {
        fontFamily: {
            sans: [
                'Inter',
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
        extend: {
            colors: {
                background: '#232946',
                headline: '#fffffe',
                paragraph: '#b8c1ec',
                'paragraph-white': '#fefefe',
                button: '#eebbc3',
                'button-text': '#232946',
                stroke: '#121629',
                main: '#b8c1ec',
                highlight: '#eebbc3',
                secondary: '#fffffe',
                tertiary: '#eebbc3',
            'light-background': '#d4d8f0',
                'light-accent': '#f0e2e1',

                'rich-black': '#0C1824',
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
