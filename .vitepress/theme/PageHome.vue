<script setup lang="ts">
import { computed, ref } from "vue";
import { useData } from "vitepress";
import PostItem from "./components/PostItem.vue";
import BasePagination from "./components/BasePagination.vue";
// @ts-ignore
import { data as posts } from "./posts.data";
interface IThemeConfig {
    pageSize: number;
}
const { theme } = useData();
const { pageSize } = theme.value;
const total = Math.ceil(posts.length / pageSize);
const current = ref(1);
const filterPosts = computed(() =>
    posts.slice((current.value - 1) * pageSize, current.value * pageSize)
);

const onChange = (page: number) => {
    current.value = page;
};
</script>

<template>
    <PostItem
        v-for="item in filterPosts"
        :key="item.href"
        :href="item.href"
        :title="item.title"
        :excerpt="item.excerpt"
    />
    <div class="mt-[50px]">
        <BasePagination
            :current="current"
            :pageSize="pageSize"
            :total="total"
            @onChange="onChange"
        />
    </div>
</template>

<style scoped></style>
