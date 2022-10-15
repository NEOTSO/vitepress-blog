import "./assets/styles/index.css";

import Layout from "./Layout.vue";
import PageNotFound from "./PageNotFound.vue";
import PageHome from "./PageHome.vue";
import PageTags from "./PageTags.vue";
import PageAbout from "./PageAbout.vue";

export default {
    Layout,
    NotFound: PageNotFound,
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
        app.component("PageHome", PageHome);
        app.component("PageTags", PageTags);
        app.component("PageAbout", PageAbout);
    },
};
