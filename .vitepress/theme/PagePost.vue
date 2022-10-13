<script setup lang="ts">
import { useData } from "vitepress";
// @ts-ignore
import { data as posts } from "./posts.data";
console.log(posts);
const { frontmatter } = useData();
</script>

<template>
    <article>
        <h1>{{ frontmatter.title }}</h1>
        <Content class="prose dark:prose-invert" />
    </article>
</template>

<style scoped></style>
