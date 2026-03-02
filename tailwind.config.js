/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: '#F7D6E0',
        secondary: '#D0F4DE',
        accent: '#A9DEF9',
        canvas: '#FFF9F4',
        ink: '#4A4A4A',
      },
      boxShadow: {
        soft: '0 12px 30px -14px rgba(74, 74, 74, 0.35)',
      },
    },
  },
  plugins: [],
};
