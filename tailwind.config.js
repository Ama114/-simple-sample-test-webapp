/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                romantic: {
                    pink: '#FF1493',      // Deep pink
                    purple: '#9D4EDD',    // Rich purple
                    light: '#E0B0FF',     // Mauve
                    dark: '#4A0E4E',      // Deep purple-black
                    accent: '#FF69B4',    // Hot pink
                    bg: '#1A0B1F',        // Very dark purple
                },
            },
            fontFamily: {
                handwritten: ['Pacifico', 'cursive'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'shake': 'shake 0.5s ease-in-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
                },
            },
        },
    },
    plugins: [],
}
