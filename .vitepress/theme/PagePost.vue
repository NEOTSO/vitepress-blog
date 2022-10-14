<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";
import PostNav from "./components/PostNav.vue";
// @ts-ignore
import { data as posts } from "./posts.data";

const { frontmatter, theme } = useData();
const { excerpt } = theme.value;

const route = useRoute();

function findCurrentIndex() {
    return posts.findIndex((p) => encodeURI(p.href) === route.path);
}

const prevPost = computed(() => posts[findCurrentIndex() - 1]);
const nextPost = computed(() => posts[findCurrentIndex() + 1]);
</script>

<template>
    <article>
        <h1 class="text-2xl mb-4">{{ frontmatter.title }}</h1>
        <Content
            :class="['prose', 'max-w-none', { 'hide-excerpt': !excerpt }]"
        />
        <PostNav class="mt-20" :prev="prevPost" :next="nextPost" />
    </article>
</template>

<style scoped>
::v-deep(.hide-excerpt) > div > h2:first-child {
    @apply hidden;
}

.prose :where(h2):not(:where([class~="not-prose"] *)) {
    @apply relative;
}

::v-deep(.header-anchor) {
    @apply absolute -left-[1em] opacity-0;
}

::v-deep(.header-anchor:hover) {
    @apply opacity-100;
}
</style>
