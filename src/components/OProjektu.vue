<template>
    <div class="oprojektu">
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
            <button id="myButton" class="btn-primary" onclick="alert('Marko Čolak: markocolak1@fpmoz.sum.ba\nDarko Ivanković: darko.ivankovic@fpmoz.sum.ba')">Kontakt</button>
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
    margin-top: 70px;
    color: #007bff;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

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
  
