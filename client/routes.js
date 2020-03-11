import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'styles/home.scss'

import Home from './views/Home.vue'
import Profile from './views/Profile.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

const siteRoutes = [{
  path: '/',
  component: Home
},
{
  path: '/profile/:idUser',
  component: Profile
}
]

const vueRouter = new VueRouter({
  mode: 'history',
  routes: siteRoutes
})

export default vueRouter
