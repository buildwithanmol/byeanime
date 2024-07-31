import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2b43",
        secondary: '#ffbade',
        background: '#201f31'
      },
      background: {
        primary: '#2d2b43',
        secondary: '#ffbade',
        background: '#201f31'
      },
      boxShadow: {
        'inner-high': 'inset 0 100px 200px rgba(0, 0, 0, 0.6), inset 0 -100px 200px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
