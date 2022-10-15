<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { useData } from "vitepress";
import { ref, computed } from "vue";
import PostItem from "./components/PostItem.vue";
import BasePagination from "./components/BasePagination.vue";

const { theme } = useData();
const { pageSize } = theme.value;

// @ts-ignore
import { data as posts } from "./posts.data";
const rawTags = posts.map((item) => item?.tags).flat();

function getCount(arr: string[]) {
    const obj = {};
    arr.forEach((item) => {
        if (item in obj) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });
    return obj;
}

const tagsObj = getCount(rawTags);
const currentTag = ref("");

const filterPosts = computed(() =>
    posts.filter(
        (item) => currentTag.value && item?.tags?.includes(currentTag.value)
    )
);
</script>

<template>
    <h1 class="font-oswald text-xl">TAGS</h1>
    <div class="mt-5">
        <ul>
            <li
                :class="['tag', { 'is-active': currentTag === item }]"
                v-for="item in Object.keys(tagsObj)"
                @click="currentTag = item"
            >
                #{{ item }} · {{ tagsObj[item] }}
            </li>
        </ul>
    </div>
    <div class="mt-5">
        <PostItem
            v-for="item in filterPosts"
            :key="item.href"
            :href="item.href"
            :title="item.title"
            :excerpt="item.excerpt"
        />
    </div>
</template>

<style scoped>
.tag {
    @apply inline-block mr-2 mb-2 px-[10px] py-[2px] bg-gray-500 border border-gray-500 text-white rounded-sm cursor-pointer font-oswald;
}

.tag.is-active {
    @apply border border-gray-500 bg-white text-gray-500;
}
</style>
