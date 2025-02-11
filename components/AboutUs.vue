<script lang="ts" setup>
import perfil from "../../assets/images/perfil-personagem.png"

</script>
<template>
    <div class="container-about" id="session-aboutus">
        <div class="container-text">
            <h2>Sobre Mim</h2>
            <p>
                Olá! Sou o Guilherme, desenvolvedor web com mais de <span class="purple">2 anos de experiência.</span> Ao longo da minha carreira, tenho me especializado em front-end com <span class="purple">TypeScript, Vue.js e Nuxt.js</span>, além de atuar no back-end utilizando <span class="purple">Node.js, Express e MySQL</span>. Tenho também sólidos conhecimentos em SQL e bancos de dados como PostgreSQL, Firebird e outros.
                Gosto de enfrentar desafios e criar novas oportunidades através da tecnologia, sempre buscando entregar soluções eficientes e escaláveis. Dê uma olhada nos meus projetos e vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
            </p>
            <div class="container-button">
                <button>Saiba Mais</button>
            </div>
        </div>
        <div class="container-image">
            <div class="image">
                <img :src="perfil" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-about {
    margin-top: 150px;
    width: 100%;
    height: 72vh;
    display: flex;
    flex-direction: row;
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

.container-text p{
    font-family: var(--principal-font);
    color: var(--text-principal);
    font-weight: 300;
}

.container-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.container-button button {
    padding: 15px 30px;
    font-family: var(--secondary-font);
    border: none;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    color: var(--text-principal);
    background-color: var(--background-buttons);
    cursor: pointer;
    transition: background .2s ease-in;
}

.container-button button:hover{
    border: 1px solid var(--background-buttons);
    background-color: var(--background-principal);
    color: var(--background-buttons);
}

.container-image {
    width: 47%;
    padding: 20px 30px;
}

.container-image .image {
    max-width: 550px;
    width: 100%;
    height: 350px;
    overflow: hidden;
}

.container-image .image img{
    max-width: 100%;
    height: auto;
    display: block;
}

.purple {
    color: var(--background-buttons);
}

@media (max-width: 1100px) {
    .container-image {
        display: none;
    }

    .container-text{
        width: 100%;
    }
}

@media (max-width: 425px) {
    .container-about {
        margin-top: 120px;
        height: 60vh;
    }

    .container-text h2{
        font-size: 2rem;
    }

    .container-button {
        margin-top: 20px;
    }

    .container-button button {
        padding: 15px 20px;
        font-size: 14px;
        outline: none;
    }
}
</style>