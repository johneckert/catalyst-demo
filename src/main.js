import Vue from "vue";
import App from "./App.vue";
import "jscatalyst/dist/jscatalyst.min.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
