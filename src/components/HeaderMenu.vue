<script lang="ts" setup>
import { Github, Linkedin, Send } from "lucide-vue-next";
</script>

<template>
    <div class="container-header">
        <div class="logo-container">
            <span>GUILHERME</span>
            <span style="color: var(--background-buttons)">SCHWENGBER</span>
        </div>
        <nav class="nav-links">
            <li>
                <a href="#session-aboutus">SOBRE MIM</a>
            </li>
            <li>
                <a href="#session-experiences">EXPERIÊNCIAS</a>
            </li>
            <li>
                <a href="#session-projects">PROJETOS</a>
            </li>
            <li>
                <a href="#session-contact">CONTATO</a>
            </li>
            <li>BLOG</li>
        </nav>
        <div class="contacts">
            <a 
                href="https://github.com/GuilhermeSchwengber20"
                target="_blank"
            >
                <Github />
            </a>
            <a 
                href="https://www.linkedin.com/in/guilherme-schwengber/"
                target="_blank"
            >
                <Linkedin />
            </a>
            <a 
                href="https://api.whatsapp.com/send/?phone=5544999335731&text=Ol%C3%A1%2C+quero+saber+mais+sobre+a+seus+servicos.&type=phone_number&app_absent=0"
                target="_blank"
            >
                <Send />
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
    width: 80%;
    position: fixed;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(255, 255, 255, 0.26);
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

.nav-links li{
    list-style: none;
    background: transparent;
    transition: color .2s ease-in;
}
.nav-links li a{
    text-decoration: none;
    color: var(--text-principal)
}

.nav-links li a:hover{
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
</style>