/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "pastel-pink": "#FFE1E6",
        "pastel-purple": "#E8D5FF",
        "pastel-blue": "#D1E7FF",
        "pastel-green": "#D4F1D4",
        "pastel-yellow": "#FFF2D1",
        "soft-pink": "#FF9BB5",
        "soft-purple": "#C49AFF",
        "soft-blue": "#9AC8FF",
        "soft-green": "#9AE69A",
      },
    },
  },
  plugins: [],
};
