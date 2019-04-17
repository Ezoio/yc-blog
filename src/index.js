import Vue from 'vue'
import App from './app.vue'
import router from './router/index.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(BootstrapVue)
const root = document.createElement('div')
const ico = document.createElement('link')
// ico.href('./assets/images/favicon-96x96.png')
ico.href='favicon-96x96.png'
document.body.appendChild(root)
document.head.appendChild(ico)
new Vue({
    router,
    data() {
        return { value: '' }
    },
    render: (h) => h(App),

}).$mount(root)
