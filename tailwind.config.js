/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand-color))",
        },
        thinBlack: {
          DEFAULT: "hsl(var(--text-color))",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",

        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
