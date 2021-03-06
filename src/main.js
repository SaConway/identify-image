import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faArrowCircleLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
