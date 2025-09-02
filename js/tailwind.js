// /** @type {import('tailwindcss').Config} */
tailwind.config = {
    content: ["./**/*.{html,js}",
    "./../pages/**/*.{html.js}",
    "./../**/*.{html,js}",
    "./*.{html,js}"
  ],
    theme: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
        xxxl: '1600px',
    },
      extend: {
        colors: {
          gsBlue: "#0798ff",
          gsLightBlue: "#49D3F2",
          gsDarkBlue: "#093A6B",
          gsGreen: "#7DBF3B",
          gsYellow: "#F2E30F",
          gsDarkYellow: "#C6D93B",
          hrGreen: '#7EBA33',
          themeYellow: '#E0DD0C',
          themeGreen: "#BEFF01",
          // themeGreen: "#c2ed08",
          themeGreenWhite: "#d8ff36",
          themeBlue: "#14b9ef",
        },
      },
    },
    plugins: [],
  }
  