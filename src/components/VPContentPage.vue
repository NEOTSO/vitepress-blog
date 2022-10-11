<script lang="ts" setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
    <div class="VPContentPage">
        <h1>page type</h1>
        <main>
            <Content />
        </main>
    </div>
</template>
