<script lang="ts" setup>
import { useData, useRoute } from 'vitepress';
import VPContentPage from './VPContentPage.vue';
// import VPContentDoc from './VPContentDoc.vue';

const route = useRoute();
const { frontmatter } = useData();
console.log('frontmatter222');
console.log(frontmatter);
console.log(frontmatter.value);
</script>

<template>
    <h2>VPContent</h2>
    <div id="VPContent" class="VPContent">
        <VPContentPage v-if="!!frontmatter.page"></VPContentPage>
        <!-- <VPContentDoc v-else>
            <template #content-top><slot name="content-top" /></template>
            <template #content-bottom><slot name="content-bottom" /></template>
            <template #aside-top><slot name="aside-top" /></template>
            <template #aside-mid><slot name="aside-mid" /></template>
            <template #aside-bottom><slot name="aside-bottom" /></template>\
        </VPContentDoc> -->
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .VPContent {
        overflow-x: hidden;
    }
}

@media (min-width: 960px) {
    .VPContent {
        padding-top: var(--vt-nav-height);
    }
    .VPContent.has-sidebar {
        padding-left: var(--vp-sidebar-width-small);
    }
}

@media (min-width: 1440px) {
    .VPContent.has-sidebar {
        padding-left: calc(
            (100vw - var(--vp-screen-max-width)) / 2 +
                var(--vp-sidebar-width-small)
        );
    }
}
</style>
