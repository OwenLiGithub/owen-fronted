import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './store/route'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
