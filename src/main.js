import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import "jscatalyst/dist/jscatalyst.min.js";
import { ClientTable } from "vue-tables-2";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(ClientTable);

new Vue({
  render: h => h(App)
}).$mount("#app");
