module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'accent': {
                    DEFAULT: '#107DAC',
                    '50': '#6BD5F1',
                    '100': '#5BCFF0',
                    '200': '#3AC2ED',
                    '300': '#1AB3EA',
                    '400': '#1398CD',
                    '500': '#107DAC',
                    '600': '#0D638B',
                    '700': '#0A4A6B',
                    '800': '#07324A',
                    '900': '#041B29'
                },
                'background': {
                    DEFAULT: '#343536',
                    'light': '#494949',
                },
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
