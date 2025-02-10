<script lang="ts" setup>
// import { useRoute } from "vue-router";
// import { computed } from "vue";

// const route = useRoute();
// const postPath = computed(() => route.params.slug as string ?? '');
// console.log(route.path);
// const { data: post } = await useAsyncData(route.path, () => {
//     return queryCollection("content").path(route.path).first();
// })
// console.log(post.value);
</script>
<template>
    <div class="container-page">
        <HeaderMenu />
        <!-- <ContentRenderer :value="postPath.value"  /> -->
    </div>
</template>
<style scoped>
.container-page {
    padding: 30px 120px;
    background-color: var(--background-principal);
    scroll-behavior: smooth;
}
</style>