import { getPosts } from '../utils/server';

export default (async () => {
    return {
        docsDir: 'demo',
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
        siteTitle: 'TSO',
        nav: [
            // { text: "HOME", link: "/" },
            { text: 'TAGS', link: '/tags' },
            { text: 'ABOUT', link: '/about' }
        ],
        // goTop: true,
        posts: await getPosts(),
        pageSize: 8,
    };
})();
