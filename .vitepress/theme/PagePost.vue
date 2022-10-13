<script setup lang="ts">
import { useData } from "vitepress";
// @ts-ignore
import { data as posts } from "./posts.data";
console.log(posts);
const { frontmatter, theme } = useData();
const { excerpt } = theme.value;
console.log(excerpt);
</script>

<template>
    <article>
        <h1 class="text-2xl mb-4">{{ frontmatter.title }}</h1>
        <Content
            :class="['prose', 'max-w-none', { 'hide-excerpt': !excerpt }]"
        />
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
