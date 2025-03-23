/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color": '#EFD9C1',
        "secondary-color": "#5F3C1B",
        "header-black": "#3A4A3A",
        "cta-primary": "#DE6132"
      },
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif']
      },
      screens: {
        xsm: '560px'
      }
    },
  },
  plugins: [],
};
