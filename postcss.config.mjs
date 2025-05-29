const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      screens: {
        sm: '400px',
        md: '700px',
        lg: '1024px',
        xl: '1280px',
      } 
    }
  }
};

export default config;
