/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Tajawal', 'sans-serif'],
        'mono': ['Overpass Mono', 'monospace'],
      },
      colors: {
        primary: {
          400: "#09090B",
        },
        application: {
          red: {
            400: "#FF5F57",
            500: "#BC4540",
            600: "#720100",
          },
          yellow: {
            400: "#FEBC2E",
            500: "#BE8d23",
            600: "#985601",
          },
          green: {
            400: "#29C840",
            500: "#1F962F",
            600: "#026200",
          },
        },
        overlay: {
          400: "#b2b2b3",
        },
        sql: {
          400: "#0045e5"
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
  darkMode: 'class',
}
