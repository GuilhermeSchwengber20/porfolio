<script lang="ts" setup>
import { ref } from "vue";
const email = ref('');
const nome = ref('');
const description = ref('');

const sendEmail = async () => {
    try {
        const res = await $fetch("http://localhost:3030/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: `Pelo site portfolio do Guilherme Schwengber enviado de: <${email.value}>`,
                to: "schwengberdeveloper@gmail.com",
                subject: "Contato para trabalhar com você",
                text: description.value,
                html: description.value,
            })
        })
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div class="container-contact" id="session-contact">
        <div class="container-text">
            <h2>Entre em contato</h2>
        </div>
        <div class="container-form">
            <div class="content-form">
                <div class="container-input">
                    <label>
                        Nome
                    </label>
                    <input v-model="nome" type="text"/>
                </div>
                <div class="container-input">
                    <label>
                        Contato
                    </label>
                    <input
                        v-model="email"
                        type="text"
                        placeholder="contato.guilhermeschwengber@gmail.com"
                    />
                </div>
                <div class="container-input">
                    <label>Escreva uma mensagem</label>
                    <textarea v-model="description">
                    </textarea>
                </div>
                <div class="container-buttons">
                    <button @click="sendEmail">Enviar</button>
                    <div class="container-divider">
                        <div class="divider"></div>
                        <span class="or">ou</span>
                        <div class="divider"></div>

                    </div>
                    <button>Mande uma mensagem!</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-contact {
    margin-top: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
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

.container-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
}
.content-form {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;
}

.container-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.container-input label {
    font-size: 16px;
    font-family: var(--principal-font);
    color: var(--text-principal)
}

.container-input input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid var(--text-secondary);
    border-radius: 12px;
    color: var(--text-principal);
    font-family: var(--principal-font);
    background-color: transparent;
    outline: none;
}

.container-input textarea{
    font-size: 14px;
    border: 1px solid var(--text-secondary);
    border-radius: 12px;
    color: var(--text-principal);
    font-family: var(--principal-font);
    background-color: transparent;
    outline: none;
    padding: 5px 5px;
    height: 225px;
    resize: none;
}

.container-buttons{
    display: flex;
    flex-direction: column;
    width: 100%;
}



.container-buttons button{
    width: 100%;
    padding: 10px 0px;
    font-size: 16px;
    font-family: var(--principal-font);
    border: none;
    outline: none;
    border-radius: 12px;
    background-color: var(--background-buttons);
    color: var(--text-principal);
    cursor: pointer;
    transition: background .2s ease-in;
}

.container-buttons button:hover {
    color: var(--background-buttons);
    border: 1px solid var(--background-buttons);
    background-color: transparent;
}



.container-divider{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px 15px;
}
.divider {
    width: 50%;
    background-color: var(--text-secondary);
    height: 1px;
}

.or {
    color: var(--text-principal);
    font-family: var(--principal-font);
    font-size: 16px;
    font-weight: 300;
}
</style>