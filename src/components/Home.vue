<template>
    <div class="home">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <p>
                Projekt iz kolegija "Informatički projekt 2" na FPMOZ.
            </p>
            <h2>Marko Čolak i Darko Ivanković</h2>
        </div>
        <div class="image-container">
            <img src="@/assets/slika.jpg" alt="slika" class="profile-image" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            title: 'Informatički projekt 2',
        };
    },
};
</script>
  
<style scoped>
.home {
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
    color: #333;
}

.image-container {
    margin-top: 20px;
}

.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
  