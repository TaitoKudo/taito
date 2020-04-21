import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

import Vuex from 'vuex'
Vue.use(Vuex)
