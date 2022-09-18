// tailwind.config.js
module.exports = {
    content:[
      "./screens/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./contants/**/*.{js,jsx,ts,tsx}",
      "./**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        sm: '380px',
        md: '420px',
        lg: '680px',
        tablet: '1024px',
      },
    },
  };