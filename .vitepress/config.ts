import type { UserConfig } from "vitepress";

const config: UserConfig = {
    head: [
        ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "true",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
            },
        ],
    ],
    themeConfig: {
        siteTitle: "TSO",
        nav: [
            { text: "TAGS", link: "/tags" },
            { text: "ABOUT", link: "/about" },
        ],
        pageSize: 8,
    },
};

export default config;
