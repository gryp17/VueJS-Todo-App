import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import routesConfig from './routes'
import storeConfig from './store'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
	routes: routesConfig
})

const store = new Vuex.Store(storeConfig)

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')