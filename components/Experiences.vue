<template>
    <div class="container-experiences" id="session-experiences">
        <div class="container-text">
            <h2>Experiências</h2>
        </div>
        <div class="content-experiences">
            <div class="card-experiences">
                <div class="container-image">
                    <div class="image">
                        <NuxtImg
                            src="/images/logo-bds.png"
                            alt="Logo da empresa BDS informática"
                        />
                    </div>
                </div>
                <div class="container-descriptions">
                    <div class="title">
                        <h3>BDS - Informática - Programador</h3>
                    </div>
                    <div class="time-work">
                        <span>jan. 2023 - Até o momento</span>
                    </div>
                    <div class="job-description">
                        <p>
                            Atuo no desenvolvimento de um sistema ERP web, colaborando com a equipe e utilizando Vue.js, Node.js e TypeScript no frontend, além de implementar rotas e dar manutenção em uma API com Java e Spring Boot no backend. Planejo e implemento soluções eficientes, mantendo o código organizado e aprimorando constantemente a usabilidade com base no feedback dos usuários. Também sou responsável pela manutenção e atualização do sistema, garantindo estabilidade e novas funcionalidades. Meu trabalho resultou em uma navegação mais intuitiva, redução de bugs e um ambiente de equipe mais colaborativo, impulsionando a competitividade da empresa.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-experiences">
                <div class="container-image">
                    <div class="image">
                        <NuxtImg
                            src="/images/logo-bds.png"
                            alt="Logo da empresa BDS informática"
                        />
                    </div>
                </div>
                <div class="container-descriptions">
                    <div class="title">
                        <h3>BDS - Informática - Estágio</h3>
                    </div>
                    <div class="time-work">
                        <span>jun. 2022 - jan. 2023</span>
                    </div>
                    <div class="job-description">
                        <p>
                            Atuei no desenvolvimento de interfaces responsivas com Vue.js, contribuindo para a otimização de desempenho e aplicação de práticas modernas de front-end. Participo de discussões e reuniões, trazendo novas perspectivas e colaborando na resolução de problemas técnicos. Além disso, implemento melhorias com base em feedbacks e análises críticas, garantindo interfaces mais eficientes. Também auxilio na criação de descritivos de mercado para vagas da área e aprimoro minhas habilidades através de projetos do mundo real. Meu comprometimento com o aprendizado contínuo e a adaptação rápida ao ambiente profissional impulsionam meu crescimento e contribuição para a equipe.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-experiences">
                <div class="container-image">
                    <div class="image">
                        <NuxtImg
                            src="/images/logo-orcamenteiro.png"
                            alt="Logo da empresa orçamenteiro solar"
                        />
                    </div>
                </div>
                <div class="container-descriptions">
                    <div class="title">
                        <h3>Orçamenteiro Solar - Freelance</h3>
                    </div>
                    <div class="time-work">
                        <span>jan. 2023 - Até o momento</span>
                    </div>
                    <div class="job-description">
                        <p>
                            Desenvolvi funcionalidades inovadoras para um sistema web de orçamentos em sistemas fotovoltaicos, incluindo relatórios detalhados para auxiliar vendedores na análise de dados e tomada de decisões. Contribuí para a implementação de um kanban integrado, melhorando a eficiência, e para a integração de um módulo de CRM ao sistema. Além disso, criei propostas dinâmicas em formato PDF e landing page, permitindo que os usuários as configurem diretamente no sistema. Participei ativamente de discussões para identificar e implementar soluções inovadoras, garantindo melhorias na usabilidade e na experiência do usuário. Com flexibilidade para adaptar-me às necessidades do projeto, assegurei a entrega pontual de funcionalidades de alta qualidade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-experiences {
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

.content-experiences {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.card-experiences {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
}

.container-image {
    width: 200px;
    height: 140px;
    padding: 10px 10px;
}

.container-image .image{
    width: 100%;
    max-width: 250px;
    height: 100%;
    overflow: hidden;
}

.container-image .image img{
    max-width: 100%;
    height: auto;
    display: block;
}

.container-descriptions{
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    width: 80%;
    gap: 5px;
}
.container-descriptions .title h3 {
    font-family: var(--secondary-font);
    color: var(--text-principal);
    font-weight: 400;
}

.time-work span{
    font-family: var(--principal-font);
    color: var(--text-secondary);
    font-weight: 700;
    font-size: 14px;
}

.job-description {
    font-family: var(--principal-font);
    color: var(--text-secondary);
    font-size: 16px;
}

@media (max-width: 425px) {
    .container-experiences {
        padding: 0px 0px;
    }

    .container-text h2 {
        font-size: 2rem;
    }
    
    .card-experiences {
        display: flex;
        flex-direction: column;
    }

    .container-image {
        width: 150px;
        height: 60px;
    }

    .container-descriptions{
        width: 100%;
    }
}
</style>