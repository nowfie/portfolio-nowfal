/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/static_components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            lineHeight: {
                xs: '3.7rem',
                sm: '4.3rem'
            },
            padding: {
                mine: '5rem'
            },
            screens: {
                'xxs': '375px',
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            fontFamily: {
                heading: ["Anton", "serif"]
            },
            colors: {
                'blur': '#595b731a',
                primary: {
                    default: '#CD512F',
                    light: '#CD512F',
                    dark: '#CD512F'
                },
                secondary: {
                    default: '#18191D',
                    light: '#18191D',
                    dark: '#18191D'
                },
                tertiary: {
                    default: '',
                    light: '',
                    dark: ''
                },
                background: {
                    default: '#000000',
                    light: '#000000',
                    dark: '#000000'
                },
                foreground: {
                    default: '#F0F0F0',
                    light: '#F0F0F0',
                    dark: '#F0F0F0'
                },
                middleground: {
                    default: '#FFF7F1',
                    light: '#FFF7F1',
                    dark: '#FFF7F1'
                },
                boxground: {
                    default: '#051819',
                    light: '#051819',
                    dark: '#051819'
                },
                heading: {
                    default: '#D2D2D0',
                    light: '#D2D2D0',
                    dark: '#D2D2D0'
                },
                extra: {
                    default: '#ffffffcc',
                    light: '#ffffffcc',
                    dark: '#ffffffcc'
                },
                paragraph: {
                    default: '#d2d2d099',
                    light: '#d2d2d099',
                    dark: '#d2d2d099'
                },
            },
            backgroundImage: {
                'gradient-text': 'linear-gradient(90deg, #2cf8ff 0%, #18ffb0 100%)',
            },
            backgroundClip: {
                'text': 'text'
            },
            textFillColor: {
                'transparent': 'transparent'
            },
            backdropBlur: {
                '40': '40px',
            },
        },
        boxShadow: {
            minimal: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        }

    },
    variants: {
        extend: {
            backdropBlur: ['responsive'],
        },
    },
    plugins: [],
};

export default tailwindConfig;