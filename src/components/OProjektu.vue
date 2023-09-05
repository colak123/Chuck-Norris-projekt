<template>
    <div class="about">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <p>
                Projekt iz kolegija "Informatički projekt 2" na Fakultetu
                prirodoslovno-matematičkih i odgojnih znanosti.
            </p>
            <p>
                Korišten je Vue.js za izradu web aplikacije.
                Podaci su dobiveni korištenjem Axios za pristupanje API-ju.
            </p>
            <h3>Autori: Marko Čolak i Darko Ivanković</h3>
        </div>
        <div class="image-container">
            <img src="@/assets/logo.png" alt="logo" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'OProjektu',
    data() {
        return {
            title: 'O projektu',
        };
    },
};
</script>
  
<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    flex-direction: column;
    background-color: #f0f0f0;
}

.content {
    text-align: center;
    margin-bottom: 20px;
}

.title {
    font-size: 36px;
    height: 30vh;
    color: #007bff;
}

.image-container {
    margin-top: 20px;
}


/* Styling for enhanced visual appeal */
.content p {
    font-size: 18px;
    margin: 10px 0;
}
</style>
  
