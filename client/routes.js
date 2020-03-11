import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'styles/home.scss'

import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Register from './views/Register.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

const siteRoutes = [{
  path: '/',
  component: Home
},
{
  path: '/profile/:idUser',
  component: Profile
},
{
  path: '/register',
  component: Register
}
]

const vueRouter = new VueRouter({
  mode: 'history',
  routes: siteRoutes
})

export default vueRouter
