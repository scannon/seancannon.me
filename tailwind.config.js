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
                melon: '#ffa69e',
                'black-coral': '#596475',
                'light-purple': '#5B5F97',
                'hookers-green': '#4E6E58',
                'sky-blue': '#66CED6',
                cream: '#f7fff7',
                'naples-yellow': '#ffe66d',
                'rich-black': '#0C1824',
                'baby-blue': '#6CA6C1',
                'steel-blue': '#3A7CA5',
            },
        },
    },
    variants: {},
    // plugins: [require('@tailwindcss/typography')],
};
