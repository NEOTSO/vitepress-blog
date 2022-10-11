<script setup lang="ts">
interface IProps {
    path: string;
    title: string;
    description: string;
}

defineProps<IProps>();
</script>

<template>
    <div class="article-item">
        <a :href="path">
            <h2 class="title">{{ title }}</h2>
        </a>
        <p v-if="description" class="excert">{{ description }}</p>
    </div>
</template>

<style scoped>
.article-item {
    @apply py-[10px] hover:underline;
}

.title {
    @apply leading-relaxed font-bold tracking-wide hover:underline;
}

.excert {
    @apply leading-normal;
}
</style>
