import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './views/index.vue'
import Vui from '../src/vui'
import Doc from './components'
import routes from './router'
import './css/style.styl'
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vui);
Vue.use(Doc);
const router = new VueRouter({
    routes 
})
const app = new Vue({
    el:'#app',
    router:router,
    render: h => h(App)
});

