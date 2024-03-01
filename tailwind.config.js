/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-narrow': "Archivo Narrow",
        'league-spartan': "League Spartan"
      },
      colors: {
        "Black": "#0e0e0c",
        "White": "#ffffff",
        "Light Grey": "#f4f4f4",
        "Charcoal(Text)": {
          "Light": "#eaeae9",
          "Light-hover": "#dfdfdf",
          "Light-active": "#bcbcbc",
          "Normal": "#282827",
          "Normal-hover": "#242423",
          "Normal-active": "#20201f",
          "Dark": "#1e1e1d",
          "Dark-hover": "#181817",
          "Dark-active": "#121212",
          "Darker": "#0e0e0e"
        },
        "Beigeish(BG)": {
          "Normal": "#e1d0bc",
          "Normal-hover": "#cbbba9",
          "Normal-active": "#b4a696",
          "Dark": "#a99c8d",
          "Dark-hover": "#877d71",
          "Dark-active": "#655e55",
          "Darker": "#4f4942",
          "Light": "#fcfaf8",
          "Light-hover": "#fbf8f5",
          "Light-active": "#f6f0ea"
        },
        "Brown(Secondary)": {
          "Light": "#ecebea",
          "Light-hover": "#e3e1e0",
          "Light-active": "#c4c1be",
          "Normal": "#41372d",
          "Normal-hover": "#3b3229",
          "Normal-active": "#342c24",
          "Dark": "#312922",
          "Dark-hover": "#27211b",
          "Dark-active": "#1d1914",
          "Darker": "#171310"
        },
        "Green": {
          "Light": "#edf0ee",
          "Light-hover": "#e4e9e5",
          "Light-active": "#c7d2c9",
          "Normal": "#4a6d51",
          "Normal-hover": "#436249",
          "Normal-active": "#3b5741",
          "Dark": "#38523d",
          "Dark-hover": "#2c4131",
          "Dark-active": "#213124",
          "Darker": "#1a261c"
        }
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.5rem",
        "6xl": "3rem"
      },

      boxShadow: {
        "xxsmall": "0px 1px 2px 0px rgba(0,0,0,0.05)",
        "xsmall": "0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 3px 0px rgba(0,0,0,0.1)",
        "small": "0px 2px 4px -2px rgba(0,0,0,0.06), 0px 4px 8px -2px rgba(0,0,0,0.1)",
        "medium": "0px 4px 6px -2px rgba(0,0,0,0.03), 0px 12px 16px -4px rgba(0,0,0,0.08)",
        "large": "0px 8px 8px -4px rgba(0,0,0,0.03), 0px 20px 24px -4px rgba(0,0,0,0.08)",
        "xlarge": "0px 24px 48px -12px rgba(0,0,0,0.18)",
        "xxlarge": "0px 32px 64px -12px rgba(0,0,0,0.14)"
      },
      borderRadius: {
        "none": "0",
        "xs": "0.1875rem",
        "sm": "0.25rem",
        "default": "0.3125rem",
        "lg": "0.375rem",
        "xl": "0.4375rem",
        "2xl": "0.5rem",
        "3xl": "0.625rem",
        "4xl": "0.75rem",
        "5xl": "0.8125rem",
        "6xl": "1.1875rem",
        "full": "9999px"
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/Ellipse1.svg')",
      },

    },
  },
  plugins: [],
}