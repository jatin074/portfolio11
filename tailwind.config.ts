const tailwindConfig = {
  darkMode: "class", 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '50': '50%',
      },
      fontFamily: {
        poppins: 'Poppins',
        tourney_regular:'Tourney-Regular',
        wild_card:'wild-card'
      },
      colors: {
        theme: 'var(--color-theme)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '1xl': '1400px',
        '2xl': '1536px',
      },
    },
  },
};

export default tailwindConfig;
