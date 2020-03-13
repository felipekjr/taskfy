import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Argon from './plugins/argon-kit'
import Transitions from 'vue2-transitions'


Vue.config.productionTip = false;


Vue.use(Argon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Transitions);


new Vue({
  render: h => h(App),
}).$mount('#app');

