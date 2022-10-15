/** @type {import('tailwindcss').Config} */
const tailwindTypography = require("@tailwindcss/typography");

module.exports = {
    content: [".vitepress/**/*.{js,ts,vue}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [tailwindTypography],
};
