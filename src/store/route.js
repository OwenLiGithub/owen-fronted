import Vue from 'vue'
import VueRouter from 'vue-router'
import add from '../components/add'
import orderPakage from '../components/orderPakage'
import items from '../components/items'
Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/addPakage',
      name: 'add',
      props: true,
      component: add
    },
    {
      path: '/orderPakage',
      name: 'orderPakage',
      props: true,
      component: orderPakage
    },
    {
      path: '/items',
      name: 'items',
      props: true,
      component: items
    }
  ]
})
