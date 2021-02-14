module.exports = {
    purge: {
        content: ['./resources/**/*.antlers.html', './resources/**/*.blade.php', './content/**/*.md'],
    },
    important: true,
    theme: {
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
        extend: {
            colors: {
                grey: '#f2f2f2',
                onyx: '#444444',
                melon: '#ffa69e',
                'black-coral': '#596475',
                'sky-blue': '#66CED6',
                'naples-yellow': '#ffe66d',
                'rich-black': '#0C1824',
            },
        },
    },
    variants: {},
};
