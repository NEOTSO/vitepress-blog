import { Theme } from 'vitepress';
import PageHome from './pages/PageHome.vue';
import VPApp from './components/VPApp.vue';
import VPNotFound from './components/VPNotFound.vue';

import 'github-markdown-css';
import './styles/index.css';

// export { default as baseConfig } from './config/baseConfig';
// export { default as themeConfig } from './config/themeConfig';

const VPTheme: Theme = {
    Layout: VPApp,
    NotFound: VPNotFound,
    enhanceApp({ app, router, siteData }) {
        app.component('PageHome', PageHome);
        // app.component("PageAbout", PageAbout);
        // app.component("PageTags", PageTags);
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    }
};

export { VPTheme };
