import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import RegisterUser from './components/RegisterUser.vue'
import RegisterPet from './components/RegisterPet.vue'
import Forgot from './components/Forgot.vue'
import Reset from './components/Reset.vue'
import Search from './components/Search.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/register_user', component: RegisterUser},
        {path: '/register', component: Register},
        {path: '/register_pet', component: RegisterPet},
        {path: '/forgot', component: Forgot},
        {path: '/reset/:token', component: Reset},
        {path: '/search', component: Search}
    ]
})