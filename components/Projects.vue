<script lang="ts" setup>
import { MoveRight } from 'lucide-vue-next';
</script>
<template>
    <div class="container-projects" id="session-projects">
        <div class="container-text">
            <h2>Projetos</h2>
        </div>
        <div class="content-projects">
            <div class="card-project">
                <div class="container-image">
                    <div class="image">
                    </div>
                </div>
                <div class="project-description">
                    <div class="title">
                        <h3>MVP - Loja Virtual</h3>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio cum dicta ipsa repellat explicabo quos, autem saepe ipsam reprehenderit officiis sapiente minus quidem atque nisi nihil dolorem eos accusantium deleniti!
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                        <div class="container-button">
                            <button>
                                <MoveRight />
                            </button>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badge green">
                            Node.js
                        </div>
                        <div class="badge blue">
                            Typescript
                        </div>
                        <div class="badge green">
                            Vue.js
                        </div>
                        <div class="badge yellow">
                           JavaScript
                        </div>
                        <div class="badge red">
                            Express
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-project">
                <div class="container-image">
                    <div class="image">
                    </div>
                </div>
                <div class="project-description">
                    <div class="title">
                        <h3>MVP - Loja Virtual</h3>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio cum dicta ipsa repellat explicabo quos, autem saepe ipsam reprehenderit officiis sapiente minus quidem atque nisi nihil dolorem eos accusantium deleniti!
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                        <div class="container-button">
                            <button>
                                <MoveRight />
                            </button>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badge green">
                            Node.js
                        </div>
                        <div class="badge blue">
                            Typescript
                        </div>
                        <div class="badge green">
                            Vue.js
                        </div>
                        <div class="badge yellow">
                           JavaScript
                        </div>
                        <div class="badge red">
                            Express
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-project">
                <div class="container-image">
                    <div class="image">
                    </div>
                </div>
                <div class="project-description">
                    <div class="title">
                        <h3>MVP - Loja Virtual</h3>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio cum dicta ipsa repellat explicabo quos, autem saepe ipsam reprehenderit officiis sapiente minus quidem atque nisi nihil dolorem eos accusantium deleniti!
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                        <div class="container-button">
                            <button>
                                <MoveRight />
                            </button>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badge green">
                            Node.js
                        </div>
                        <div class="badge blue">
                            Typescript
                        </div>
                        <div class="badge green">
                            Vue.js
                        </div>
                        <div class="badge yellow">
                           JavaScript
                        </div>
                        <div class="badge red">
                            Express
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-project">
                <div class="container-image">
                    <div class="image">
                    </div>
                </div>
                <div class="project-description">
                    <div class="title">
                        <h3>MVP - Loja Virtual</h3>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio cum dicta ipsa repellat explicabo quos, autem saepe ipsam reprehenderit officiis sapiente minus quidem atque nisi nihil dolorem eos accusantium deleniti!
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                        <div class="container-button">
                            <button>
                                <MoveRight />
                            </button>
                        </div>
                    </div>
                    <div class="badges">
                        <div class="badge green">
                            Node.js
                        </div>
                        <div class="badge blue">
                            Typescript
                        </div>
                        <div class="badge green">
                            Vue.js
                        </div>
                        <div class="badge yellow">
                           JavaScript
                        </div>
                        <div class="badge red">
                            Express
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.container-projects {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    gap: 40px;
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

.container-projects {
    display: flex;
    flex-direction: column;
}

.content-projects {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.card-project {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.container-image {
    width: 40%;
    height: 300px;
    padding: 10px 10px;
}
.container-image .image {
    width: 100%;
    height: 100%;
    border: 1px solid #FFF;
    border-radius: 12px;
}

.project-description {
    padding: 10px 10px;
    width: 55%;
}

.title h3 {
    font-family: var(--secondary-font);
    color: var(--text-principal);
    font-size: 20px;
}

.description{
    height: 225px;
    display: flex;
    gap: 10px;
}
.description p {
    color: var(--text-secondary);
    font-family: var(--principal-font);
    font-size: 14px;
    font-weight: 400;
    height: 215px;
    overflow: auto;
}

.container-button {
    display: flex;
    width: 15%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.container-button button {
    width: 65px;
    height: 65px;
    outline: none;
    border: none;
    border-radius: 100%;
    background-color: var(--background-buttons);
    color: var(--text-principal);
    transition: background .2s ease-in;
}


.container-button button:hover{
    border: 1px solid var(--background-buttons);
    background-color: var(--background-principal);
    color: var(--background-buttons);
}

.badges{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-family: var(--principal-font);
    font-weight: bold;
    font-size: 14px;
}

.badge {
    padding: 5px 10px;
    border-radius: 5px;
}

.blue{
    background-color: #1e3a8a;
    color: #93c5fd;
}

.green{
    background-color: #064e3b;
    color: #6ee7b7;
}

.yellow {
    color: #fcd34d;
    background-color: #78350f;
}

.red {
    color: #fca5a5;
    background-color: #7f1d1d;;
}


@media (max-width: 425px) {
    .container-text h2{
        font-size: 2rem;
    }

    .card-project{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .container-image{
        width: 100%;
        height: 200px;
    }

   
    .container-image .image {
        width: 100%;
        height: 100%;
        border: 1px solid #FFF;
        border-radius: 12px;
    }

    .project-description {
        width: 100%;
    }
    
    .badges{
        display: flex;
        flex-wrap: wrap;
    }

    
    .description{
        display: flex;
        flex-direction: column;
    }
    .container-button {
        display: flex;
        width: 100%;
        height: 100px;
        padding: 10px;
    }

    .container-button button {
        width: 100%;
        border-radius: 10px;
    }
}
</style>