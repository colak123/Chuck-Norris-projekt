<template>
    <div class="chuck-norris">
        <h1>CHUCK NORRIS VICEVI</h1>
        <div class="image-container">
            <img :src="currentPhoto" alt="Chuck Norris" class="chuck-norris-image" />
        </div>
        <div class="fact-container">
            <p>{{ fact }}</p>
        </div>
        <button @click="getNewFact">KLIKNI ZA NOVI VIC I SLIKU</button>

        <div class="fact-container">
            <input v-model="searchTerm" placeholder="Pretraži viceve" class="search-input" />
        </div>

        <!-- Display current facts with pagination -->
        <div class="fact-boxes">
            <div v-for="(fact, index) in currentFacts" :key="index" class="fact-box">
                <p>{{ fact }}</p>
            </div>
        </div>




        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 0">Previous</button>
            <button @click="nextPage" :disabled="currentPage === maxPage">Next</button>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/slika.jpg";

export default {

    data() {
        return {
            photos: [photo1, photo2, photo3, photo4, photo5, photo6],
            currentPhotoIndex: 0,
            fact: "KLIKNI DUGME ZA VIC",
            facts: [],
            currentPage: 0,
            searchTerm: "",
            pageSize: 3,
        };
    },
    computed: {
        currentPhoto() {
            return this.photos[this.currentPhotoIndex];
        },
        maxPage() {
            return Math.ceil(this.facts.length / this.pageSize) - 1;
        },
        currentFacts() {
            const startIndex = this.currentPage * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.searchTerm
                ? this.facts.filter((fact) =>
                    fact.toLowerCase().includes(this.searchTerm.toLowerCase())
                )
                : this.facts.slice(startIndex, endIndex);
        },
    },
    methods: {
        async getNewFact() {
            try {
                const response = await axios.get(
                    "https://api.chucknorris.io/jokes/random"
                );
                const newFact = response.data.value;
                this.fact = newFact;

                this.facts.push(newFact);

                this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
            } catch (error) {
                console.error(error);
            }
        },

        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.updateCurrentPhotoIndex();
            }
        },
        nextPage() {
            if (this.currentPage < this.maxPage) {
                this.currentPage++;
            }
        },
        updateCurrentPhotoIndex() {
            this.currentPhotoIndex = this.currentPage % this.photos.length;
        },
        handleSearch(searchTerm) {
            this.searchTerm = searchTerm;
        },
    },
};
</script>
  
<style scoped>
.chuck-norris {
    text-align: center;
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

div {
    padding: 15px;
}

.image-container {
    margin-bottom: 20px;
}

.chuck-norris-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.fact-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.fact-boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.fact-box {
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 30%;
}

.pagination {
    margin-top: 20px;
}

.pagination button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
}

.pagination button:hover {
    background-color: #0056b3;
}

.pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .fact-boxes {
        flex-direction: column;
        align-items: center;
    }

    .fact-box {
        width: 80%;
    }
}

.search-input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>

  