import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify'; // Import Vuetify from the package
import 'vuetify/dist/vuetify.min.css'; // Import Vuetify styles

const app = createApp(App);
app.use(router);
app.use(Vuetify);


app.mount('#app');
