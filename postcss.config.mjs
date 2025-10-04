/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- O jeito novo e correto!
    autoprefixer: {},
  },
};

export default config;
