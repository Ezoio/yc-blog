<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from './components/header.vue'
    import Footer from './components/footer.vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import './assets/styles/global.styl'
    export default {
        components: {
            Header,
            Footer,
        },
    }
</script>

<style lang="stylus" scoped>

</style>


