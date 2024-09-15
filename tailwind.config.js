/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          // Define your custom colors here
          primary: {
            light: '#c8d9ed',
            DEFAULT: '#4663ac',
            dark: '#314152',
          },
          secondary: {
            light: '#e1f1fd',
            DEFAULT: '#d2deeb',
            dark: '#c1d8f0',
          },
          customGreen: '#32CD32', // Single color without shades
        },
    },
  },
  plugins: [],
}

