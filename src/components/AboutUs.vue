<script lang="ts" setup>
</script>
<template>
    <div class="container-about" id="session-aboutus">
        <div class="container-text">
            <h2>Sobre Mim</h2>
            <p>
                Olá! Sou o Guilherme, desenvolvedor web com mais de 2 anos de experiência. Ao longo da minha carreira, tenho me especializado em front-end com TypeScript, Vue.js e Nuxt.js, além de atuar no back-end utilizando Node.js, Express e MySQL. Tenho também sólidos conhecimentos em SQL e bancos de dados como PostgreSQL, Firebird e outros.

                Gosto de enfrentar desafios e criar novas oportunidades através da tecnologia, sempre buscando entregar soluções eficientes e escaláveis. Dê uma olhada nos meus projetos e vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
            </p>
            <div class="container-button">
                <button>Saiba Mais</button>
            </div>
        </div>
        <div class="container-image">
            <div class="image"></div>
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
    border: 1px solid #FFF;
    width: 100%;
    height: 100%;
}

</style>