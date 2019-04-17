import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home.vue'
import LoginPage from '../pages/login.vue'
import ArticlePage from '../pages/article-details.vue'
import TagsPage from '../pages/tagspage.vue'
import ArticleEditor from '../pages/eidor.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/article',
            name: 'article',
            component: ArticlePage,
            children: [
                {
                    path: '/publish',
                    name: 'publish',
                    component: ArticleEditor
                }
            ]
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsPage
        }
    ]
})




