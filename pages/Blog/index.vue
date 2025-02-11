<script lang="ts" setup>
import { generateMeta } from "@/utils/generateMeta";
import { MoveRight } from 'lucide-vue-next';

useHead({
    title: "Meu blog pessoal",
    meta: generateMeta()
});

const { data: posts } = await useAsyncData("posts", () => {
    return queryCollection('blog').all()
})
console.log(posts);
</script>

<template>
    <div class="container-page">
        <HeaderMenu />
        <div class="container-posts">
            <div class="container-text">
                <h2>Posts Recentes</h2> 
                <!-- pode ser um h1 em cima -->
            </div>
            <div class="content-posts">
                <li v-for="post in posts" :key="post.path" class="card-post">
                    <div class="container-title-tag">
                        <p class="post-title"> {{ post.title }} </p>
                        <span class="post-tag">{{ post.tag }}</span>
                    </div>
                    <p class="post-description">{{ post.description }}</p>
                    <NuxtLink 
                        :to="`${post.path}`" 
                        class="container-link-post"
                    >
                        <div class="link-post">
                            <p>Continuar lendo</p>
                            <MoveRight class="link-icon" />
                        </div>
                    </NuxtLink>
                </li>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-page {
    padding: 30px 120px;
    background-color: var(--background-principal);
    scroll-behavior: smooth;
}
.container-posts {
    height: 100vh;
    padding-top: 120px;
}

.container-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
}

.container-text h2{
    font-family: var(--principal-font);
    color: var(--text-principal);
    font-size: 3rem;
}

.content-posts {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
}
.card-post {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 50%;
}

.post-title {
    color: var(--text-principal);
    font-family: var(--secondary-font);
    font-size: 24px;
}

.post-tag {
    font-family: var(--principal-font);
    font-weight: bold;
    font-size: 14px;
    
    padding: 5px 10px;
    border-radius: 5px;

    background-color: #1e3a8a;
    color: #93c5fd;
}

.container-title-tag{
    display: flex;
    align-items: center;
    gap: 10px;
}

.post-description{
    font-family: var(--principal-font);
    color: var(--text-secondary);
    font-size: 14px;
}

.container-link-post{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    text-decoration: none;
}

.link-post {
    color: #FFF;
    font-family: var(--principal-font);
    display: flex;
    align-items: center;
    gap: 10px;
}

@media (max-width: 425px) {
    .container-page {
        padding: 10px 20px;
        width: 100%;
    }

    .container-text {
        width: 100%;
    }

    .container-text h2{
        font-family: var(--principal-font);
        color: var(--text-principal);
        font-size: 2rem;
    }

    .content-posts {
        width: 100%;
        gap: 40px;
    }

    .card-post {
        width: 100%;
    }

    .container-title-tag{
        flex-wrap: wrap;
    }

    .post-title {
        font-size: 18px;
    }

    .post-description{
        margin-top: 10px;
    }

    .container-link-post{
        margin-top: 10px;
    }
}

</style>