import vConsole from 'vconsole'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {Swipe, SwipeItem} from 'vant'
import 'styles/index.css'
import 'styles/iconfont.css'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
import 'swiper/dist/css/swiper.css'
import store from './store'
fastclick.attach(document.body)
Vue.config.productionTip = true
Vue.use(Swipe).use(SwipeItem)
Vue.use(vueg, router)
Vue.use(VueAwesomeSwiper)

// router.beforeEach((to, form, next) => {
//     if (to.meta.requireAuth) {
//         // 判断用户登录token
//         if (store.state.token) {
//             next();
//         } else {
//             next({
//                 path: '/'
//             })
//         }
//     } else {
//         next();
//     }
// })
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})