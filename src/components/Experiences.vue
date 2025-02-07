<template>
    <div class="container-experiences" id="session-experiences">
        <div class="container-text">
            <h2>Experiências</h2>
        </div>
        <div class="content-experiences">
            <div class="card-experiences">
                <div class="container-image">
                    <div class="image"></div>
                </div>
                <div class="container-descriptions">
                    <div class="title">
                        <h3>BDS - Informática</h3>
                    </div>
                    <div class="time-work">
                        <span>jan. 2023 - Até o momento</span>
                    </div>
                    <div class="job-description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-experiences">
                <div class="container-image">
                    <div class="image"></div>
                </div>
                <div class="container-descriptions">
                    <div class="title">
                        <h3>BDS - Informática</h3>
                    </div>
                    <div class="time-work">
                        <span>jan. 2023 - Até o momento</span>
                    </div>
                    <div class="job-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt nam consectetur suscipit aliquid sequi omnis veritatis, similique rem architecto asperiores eaque optio placeat doloribus, dolore ut inventore. Eveniet, minima.</p>
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
    height: 100%;
    border: 1px solid #FFF;
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
</style>