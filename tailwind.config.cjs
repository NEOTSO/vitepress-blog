/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".vitepress/**/*.{js,ts,vue}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [],
};
