import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAntd from 'components/index'

import Home from './home/index.vue'
import Component from './component/index.vue'
import DemoBlock from '../widget/demo-block.vue'
import 'components/styles/main/index.scss'
import 'site/assets/style/entry/index.scss'

Vue.use(VueRouter)
Vue.use(VueAntd)
Vue.component(DemoBlock.name, DemoBlock)
const routes = [{
  path: '/',
  redirect: '/component'
}, {
  path: '/home',
  component: Home
}, {
  path: '/component',
  component: Component,
  children: [{
    path: 'icon',
    component: require('docs/icon/index.md')
  }, {
    path: 'button',
    component: require('docs/button/index.md')
  }, {
    path: 'grid',
    component: require('docs/grid/index.md')
  }, {
    path: 'pagination',
    component: require('docs/pagination/index.md')
  }, {
    path: 'radio',
    component: require('docs/radio/index.md')
  }, {
    path: 'checkbox',
    component: require('docs/checkbox/index.md')
  }, {
    path: 'select',
    component: require('docs/select/index.md')
  }, {
    path: 'date-picker',
    component: require('docs/date-picker/index.md')
  }]
}]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  components: {
    App
  }
})
app.$mount('#root')
