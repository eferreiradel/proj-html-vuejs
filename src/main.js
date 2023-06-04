import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

// styles
import "./styles/main.scss";
import "./styles/animations.scss";
import "./styles/assets.scss";
import "./styles/global.scss";
import "./styles/text.scss";

import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).mount("#app");
