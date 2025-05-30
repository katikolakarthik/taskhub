const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      theme: {
        screens: {
          sm: '500px',
          md: '765px',
        }
      }
    }]
  ],
};

export default config;
