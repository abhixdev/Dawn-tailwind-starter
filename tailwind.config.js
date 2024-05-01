import remToPxPlugin from 'tailwindcss-rem-to-px';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,json,liquid}'],
  theme: {
    extend: {},
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
