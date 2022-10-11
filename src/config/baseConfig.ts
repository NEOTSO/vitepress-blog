import { defineConfig } from 'vitepress';

export default defineConfig({
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        [
            'link',
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'true'
            }
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap'
            }
        ]
    ]
});
