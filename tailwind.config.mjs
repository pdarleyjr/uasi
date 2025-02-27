/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#000000',
        'background': '#ffffff',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '1rem',
      },
    },
  },
  plugins: [],
}