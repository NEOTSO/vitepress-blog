<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import PageHome from "./PageHome.vue";
import PageTags from "./PageTags.vue";
import PageAbout from "./PageAbout.vue";
import NotFound from "./PageNotFound.vue";
import PagePost from "./PagePost.vue";

const route = useRoute();
const isIndex = computed(() => route.path.replace(/index.html$/, "") === "/");
const isTags = computed(() => route.path.replace(/tags.html$/, "") === "/");
const isAbout = computed(() => route.path.replace(/about.html$/, "") === "/");
const isNotFound = computed(() => route.component === NotFound);
</script>

<template>
    <div>
        <TheHeader />
        <main class="w-blog">
            <PageHome v-if="isIndex" />
            <PageTags v-else-if="isTags" />
            <PageAbout v-else-if="isAbout" />
            <NotFound v-else-if="isNotFound" />
            <PagePost v-else />
        </main>
        <TheFooter />
    </div>
</template>
