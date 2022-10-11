<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { useData } from 'vitepress';
import { ref, computed } from 'vue';
import VPPostItem from '../components/VPPostItem.vue';
import VPPagination from '../components/VPPagination.vue';

const { theme } = useData();
const { pageSize, posts } = theme.value;
const total = Math.ceil(posts.length / pageSize);
const current = ref(1);

const onChange = (page: number) => {
    current.value = page;
};

const filterPosts = computed(() =>
    posts.slice((current.value - 1) * pageSize, current.value * pageSize)
);
</script>

<template>
    <main class="w-blog">
        <VPPostItem
            v-for="item in filterPosts"
            :key="item._path"
            :path="item.regularPath.replace(theme.docsDir, '')"
            :title="item.frontMatter?.title"
            :description="item.description"
        />
        <div class="mt-[50px]">
            <VPPagination
                :current="current"
                :pageSize="pageSize"
                :total="total"
                @onChange="onChange"
            />
        </div>
    </main>
</template>
