<script setup>
const config = { icp: 123 };
</script>

<template>
    <footer class="text-center pt-[100px] pb-[50px] md:py-[100px]">
        <a
            v-if="config?.icp"
            class="text-sm tracking-wider hover:underline"
            href="https://beian.miit.gov.cn/"
            target="_blank"
            >{{ config?.icp }}</a
        >
    </footer>
</template>

<style scoped></style>
