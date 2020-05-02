import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('views/Home.vue')
const Category = ()=> import('views/Category.vue')
const Cart = ()=> import('views/Cart.vue')
const Profile = ()=> import('views/Profile.vue')
const Detail = ()=> import('views/Detail.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home',
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    name:"Detail",
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
