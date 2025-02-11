<script lang="ts" setup>
// import { useRoute } from "vue-router";
// import { computed } from "vue";

const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
    return queryCollection("blog").path(route.path).first();
})
console.log(post);
</script>
<template>
    <div class="container-page">
        <HeaderMenu />
        <div class="container-post">
            <article class="markdown">
                <ContentRenderer :value="post" v-if="post"/>
            </article>
        </div>
    </div>
</template>
<style scoped>
.container-page {
    padding: 30px 120px;
    background-color: var(--background-principal);
    scroll-behavior: smooth;
}

.container-post {
    height: 100%;
    padding-top: 120px;
    overflow-y: auto;
}

</style>