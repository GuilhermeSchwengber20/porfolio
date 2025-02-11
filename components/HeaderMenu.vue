<script lang="ts" setup>
import { Github, Linkedin, Send, Menu } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const isMenuOpen = ref(false);

const menuMobile = ref(null)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if(menuMobile.value) {
        menuMobile.value.style.top = isMenuOpen.value ? "60px" : "999px";
    }
};

</script>

<template>
    <div class="container-header">
        <NuxtLink
            class="logo-container"
            to="/"
        >
            <span>GUILHERME</span>
            <span style="color: var(--background-buttons)">SCHWENGBER</span>

        </NuxtLink>
        <div class="hamburger">
            <Menu @click="toggleMenu" />
        </div>
        <nav class="nav-links">
            <a v-if="route.name !== 'Blog'" href="#session-aboutus">
                SOBRE MIM
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-experiences">
                EXPERIÊNCIAS
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-projects">
                PROJETOS
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-contact">
                CONTATO
            </a>
            <a v-if="route.name !== 'Blog'">
                <NuxtLink to="/blog">
                    BLOG
                </NuxtLink>
            </a>
        </nav>
        <div class="contacts">
            <a 
                href="https://github.com/GuilhermeSchwengber20"
                aria-label="Acesse o github e conheça um pouco mais dos meus projetos e projetos open source que já participei"
                target="_blank"
            >
                <Github />
            </a>
            <a 
                href="https://www.linkedin.com/in/guilherme-schwengber/"
                aria-label="Acesse o linkedin e conheça um pouco mais das minhas experiências, e pessoas que já trabalhei"
                target="_blank"
            >
                <Linkedin />
            </a>
            <a 
                href="https://api.whatsapp.com/send/?phone=5544999335731&text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+seus+servicos.&type=phone_number&app_absent=0"
                aria-label="Envie uma mensagem para saber mais sobre os valores, produtos e serviços"
                target="_blank"
            >
                <Send />
            </a>
        </div>
        <div class="container-menu-mobile" ref="menuMobile">
            <a v-if="route.name !== 'Blog'" href="#session-aboutus">
                SOBRE MIM
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-experiences">
                EXPERIÊNCIAS
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-projects">
                PROJETOS
            </a>
            <a v-if="route.name !== 'Blog'" href="#session-contact">
                CONTATO
            </a>
            <a v-if="route.name !== 'Blog'">
                <NuxtLink to="/blog">
                    BLOG
                </NuxtLink>
            </a>
        </div>
    </div>
</template>
<style scoped>
.container-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 50px;
    justify-content: space-between;
    height: 80px;
    width: 100%;  /* Deixe o container ocupar 100% da largura */
    max-width: 1100px;  /* Tamanho máximo para evitar que o menu fique muito largo */
    margin: 0 auto;  /* Centraliza o container */
    position: fixed;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(255, 255, 255, 0.26);
    z-index: 999;
}

.logo-container{
    display: flex;
    flex-direction: column;
    font-family: var(--secondary-font);
    color: var(--text-principal);
    line-height: 15px;
    font-weight: bold;
    font-size: 20px;
    background: transparent;
    text-decoration: none;
}

.logo-container span {
    background: transparent;
    user-select: none;
    cursor: pointer;
}

.nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-family: var(--secondary-font);
    color: var(--text-principal);
    cursor: pointer;
    background: transparent;
    user-select: none;
}

.nav-links a{
    background: transparent;
    transition: color .2s ease-in;
    text-decoration: none;
    list-style: none;
    color: var(--text-principal)
}


.nav-links a:hover{
    color: var(--background-buttons);
}
.contacts {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    
}

.contacts a{
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    transition: color .2s ease-in;
}

.contacts a:hover {
    color: var(--background-buttons);
}

.hamburger{
    color: #FFF;
    display: none;
}

.container-menu-mobile {
    position: fixed;
    top: -999px;
    z-index: -1;
    left: 0px;
    width: 100%;
    background-color: #000;
    font-family: var(--secondary-font);
    color: var(--text-principal);
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.container-menu-mobile li{
    list-style: none;
    background: transparent;
    transition: color .2s ease-in;
}
.container-menu-mobile li a{
    text-decoration: none;
    color: var(--text-principal)
}

.container-menu-mobile li a:hover{
    color: var(--background-buttons);
}

@media (max-width: 1100px) {
    .nav-links {
        display: none;
    }
    .hamburger {
        display: flex;
    }
    .contacts {
        display: none;
    }
    
    .container-header {
        max-width: 850px;
    }
    
}

@media (max-width: 425px) {
    .container-header {
        max-width: 350px;
    }
}
</style>