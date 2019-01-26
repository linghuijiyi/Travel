import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('@/components/pages/Home/Home')
const City = () =>
    import ('@/components/pages/City/City')
const Detail = () =>
    import ('@/components/pages/detail/Detail')
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'city',
        component: City,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }, ]
})