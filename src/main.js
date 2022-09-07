import Vue from 'vue'

import '@/styles/index.scss'

import App from './App.vue'

import './plugins'
import store from './store/index'
import router from './router/routes'
import './directives'

import './icons'
import './permission'

const { mockXHR } = require('../mock')
mockXHR()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
