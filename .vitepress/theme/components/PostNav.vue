<script setup lang="ts">
interface IPost {
    href: string;
    title: string;
}

interface IProps {
    prev: IPost | undefined;
    next: IPost | undefined;
}

defineProps<IProps>();
</script>

<template>
    <div class="flex justify-between items-center">
        <div :class="{ invisible: !prev }">
            ←&nbsp;&nbsp;
            <a class="hover:underline" :href="prev?.href">{{ prev?.title }}</a>
        </div>
        <div :class="{ invisible: !next }">
            <a class="hover:underline" :href="next?.href">{{ next?.title }}</a>
            &nbsp;&nbsp;→
        </div>
    </div>
</template>
