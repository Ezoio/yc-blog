<template>
    <ul class="card-body">
        <a v-for="tag in tagArr"  :href="tag.href" :class="cls">{{tag.text}}</a>
    </ul>
</template>

<script>
    export default {
        props: {
            tagArr: {
                type: Array,
                require: true
            },
            cls:{
                type: String,
                require: false,
                default:'text-white badge badge-secondary py-1 px-2 mt-2 mr-2 font-weight-normal'
            }
        },
        name: "tags"
    }
</script>

<style scoped>

</style>
