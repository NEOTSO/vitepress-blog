<script setup lang="ts">
interface IProps {
    href: string;
    title: string;
    excerpt: string;
}

defineProps<IProps>();
</script>

<template>
    <div class="post-item">
        <a :href="href">
            <h2 class="title">{{ title }}</h2>
        </a>
        <p v-if="excerpt" class="excerpt" v-html="excerpt"></p>
    </div>
</template>

<style scoped>
.post-item {
    @apply py-[10px];
}

.title {
    @apply leading-relaxed font-bold tracking-wide hover:underline;
}

.excerpt {
    @apply leading-normal;
}
</style>
