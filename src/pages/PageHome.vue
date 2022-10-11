<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { useData } from 'vitepress';
import { ref, computed } from 'vue';
import ArticleItem from '../components/ArticleItem.vue';
import BasePagination from '../components/BasePagination.vue';

// const { theme } = useData();
// const { pageSize, posts } = theme.value;
// const total = Math.ceil(posts.length / pageSize);
// const current = ref(1);

// const onChange = (page: number) => {
//     current.value = page;
// };

// const filterPosts = computed(() =>
//     posts.slice((current.value - 1) * pageSize, current.value * pageSize)
// );
</script>

<template>
    <main class="w-blog">
        <h1>page home</h1>
        <!-- <ArticleItem
            v-for="item in filterPosts"
            :key="item._path"
            :path="item.regularPath"
            :title="item.frontMatter?.title"
            :description="item.description"
        />
        <div class="mt-[50px]">
            <BasePagination
                :current="current"
                :pageSize="pageSize"
                :total="total"
                @onChange="onChange"
            />
        </div> -->
    </main>
</template>
