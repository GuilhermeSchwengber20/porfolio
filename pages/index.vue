<script lang="ts" setup>
import { generateMeta } from "@/utils/generateMeta";
useHead({
    title: "Guilherme Schwengber Portfolio",
    htmlAttrs: {
        lang: 'pt-BR'
    },
    meta: generateMeta({
        pageTitle: "Guilherme Schwengber Portfolio",
        description: "Portofio de desenvolvedor web full stack com quase 3 anos de experiência, trabalha com Nuxt.js Vue 3 e Typescript",
        contentType: 'website',
        url: "https://porfolio-five-murex.vercel.app/"
    })
});
</script>

<template>
    <div class="container-page">
        <HeaderMenu />
        <AboutUs />
        <Experiences />
        <Projects />
        <Contact />
    </div>
</template>
<style scoped>
.container-page {
    padding: 30px 120px;
    background-color: var(--background-principal);
    scroll-behavior: smooth;
}

@media (max-width: 1100px) {
   .container-page {
        padding: 10px 40px;
    }
}

@media (max-width: 425px) {
    .container-page {
        padding: 10px 20px;
        width: 100%;
    }
}
</style>