<script setup lang="ts">
const goTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};
</script>

<template>
    <div
        class="fixed bottom-[100px] left-1/2 text-3xl cursor-pointer translate-x-[500px]"
        @click="goTop"
    >
        ↑
    </div>
</template>

<style scoped></style>
