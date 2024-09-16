import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import "animate.css";
import 'aos/dist/aos.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

library.add(faUserSecret);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

