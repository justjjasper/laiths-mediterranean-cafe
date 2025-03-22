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
        "bg-main-color": '#EFD9C1',
        "bg-secondary-color": "#5F3C1B"
      },
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif']
      }
    },
  },
  plugins: [],
};
