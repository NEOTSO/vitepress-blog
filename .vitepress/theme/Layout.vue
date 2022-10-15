<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import GoTop from "./components/GoTop.vue";
import PagePost from "./PagePost.vue";

const route = useRoute();
const isPost = computed(() => route?.component?.name?.startsWith("posts/"));
</script>

<template>
    <div>
        <TheHeader />
        <main class="w-blog">
            <PagePost v-if="isPost" />
            <Content v-else />
            <GoTop />
        </main>
        <TheFooter />
    </div>
</template>
