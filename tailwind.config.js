/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require('daisyui')],
  theme: {
    extend: {
      backgroundColor: {
        snow: "#f0f1f3",
        black_olive: "#1F271B",
        saffron: "#FAC748",
        vista_blue: "#8390FA",
        delft_blue: "#1D2F6F",
        hover_vista_blue: "#5568ff",
      },
      textColor: {
        snow: "#f0f1f3",
        black_olive: "#1F271B",
        saffron: "#FAC748",
        vista_blue: "#8390FA",
        hover_vista_blue: "#5568ff",
        delft_blue: "#1D2F6F",
      },
      borderColor: {
        snow: "#f0f1f3",
        black_olive: "#1F271B",
        saffron: "#FAC748",
        vista_blue: "#8390FA",
        delft_blue: "#1D2F6F",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
};
