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