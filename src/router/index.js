import Vue from 'vue'
import VueRouter from 'vue-router'
import ListeCandidats from '../components/ListeCandidats'
import Candidat from '../components/Candidat'
import AjouterCandidat from '../components/AjouterCandidat'
import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import Chart from '../components/Chart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ListeCandidats
  },
   {
    path: '/login',
    name: 'Login',
    component: SignIn
  },
   {
    path: '/candidat',
    name: 'Candidat',
    component: Candidat
  },
  {
    path: '/addcandidat',
    name: 'Ajout',
    component: AjouterCandidat
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
