<script setup lang="ts">
import { useData } from 'vitepress';
const { theme } = useData();
</script>

<template>
    <header
        class="pt-[80px] pb-[50px] md:pt-[160px] mb:pb-[80px] font-[oswald]"
    >
        <a href="/">
            <h1 class="text-[30px] text-center">{{ theme.siteTitle }}</h1>
        </a>
        <nav class="mt-[40px]">
            <ul class="flex justify-center tracking-wide">
                <li
                    v-for="item in theme.nav"
                    :key="item.link"
                    class="mx-[20px]"
                >
                    <a :href="item.link">{{ item.text }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
nav a {
    @apply hover:underline;
}
</style>
