import tailwind from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

export default {
    plugins: [
        tailwind({
            content: [".vitepress/**/*.{js,ts,vue}"],
            theme: {
                extend: {
                    fontFamily: {
                        oswald: ["Oswald", "sans-serif"],
                    },
                },
            },
            plugins: [tailwindTypography],
        }),
    ],
};
