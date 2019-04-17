<template>
    <div>
        <ul class="list-group list-group-flush">
            <li v-for="art in articles" :key="art.href" class="list-group-item hover py-4">
                <a :href="art.href">
                    <img :src="art.src"
                         class="rounded float-left mr-2 border border-warning mw-100"
                         style="width: 50px; height: 50px;"></a>
                <a href="/article" target="_blank"
                   class="text-dark font-weight-bold text-truncate">{{art.desc}}</a>
                <div class="card-text text-dark">
                    <a href="/category/1" class="text-white badge badge-info py-1 px-2 mt-2 font-weight-normal">{{art.tab}}</a>
                    <span class="font-weight-light text-secondary badge ml-2">阅读 {{art.readNum}} </span>
                    · <span class="font-weight-light text-secondary badge">评论 {{art.commentNum}}</span>
                    · <span class="font-weight-light text-secondary badge">喜欢 {{art.likeNum}} </span>
                    · <span class="font-weight-light text-secondary badge">{{art.postTime}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props: {
            articles: {
                type: Array,
                require: true
            }
        },
        data() {
            return {}
        },
        name: "article-item"
    }
</script>

<style scoped>

</style>
