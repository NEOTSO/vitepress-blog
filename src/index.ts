import { Theme } from 'vitepress';

// export { default as VTLayout } from './components/VTLayout.vue';
import PageHome from './pages/PageHome.vue'
import VPApp from './components/VPApp.vue';
import VPNotFound from './components/VPNotFound.vue';

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
