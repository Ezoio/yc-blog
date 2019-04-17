<template>
    <div class="container">
        <Carousel></Carousel>
        <div class="row mt-2">
            <div class="col-sm-9">
                <div id="recent-article" class="card border-light">
                    <articleItem
                            :articles="articles">
                    </articleItem>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="btn-group-vertical btn-block bg-light">
                    <a class="btn btn-success border-bottom disabled text-white">系列教程</a>
                    <a href="#" target="_blank"
                       class="btn btn-outline-success font-weight-light btn-sm py-2">Spring Boot</a>
                    <a href="#" target="_blank"
                       class="btn btn-outline-success font-weight-light btn-sm py-2">Spring Cloud</a>
                    <a href="#" target="_blank"
                       class="btn btn-outline-success font-weight-light btn-sm py-2">Spring Security</a>
                    <a href="#" target="_blank"
                       class="btn btn-outline-success font-weight-light btn-sm py-2">Spring Data JPA </a>
                </div>
                <div class="card border-light mt-2">
                    <div class="card-header bg-transparent border-success font-weight-bold px-2">
                        <div class="d-inline-block">推荐作者</div>
                    </div>
                    <div class="card-body text-center">
                        <a href="/common/user/10">
                        <img src="../assets/images/logo.png"
                             class="rounded-circle float-left mr-2 mb-2 border border-warning mw-100"
                             style="width: 45px; height: 45px;"></a><a href="/common/user/8490">
                        <img src="../assets/images/logo.png"
                             class="rounded-circle float-left mr-2 mb-2 border border-warning mw-100"
                             style="width: 45px; height: 45px;"></a><a href="/common/user/8858">
                    </a>
                    </div>
                </div>
                <div class="card border-light mt-2">
                    <div class="card-header bg-transparent border-success font-weight-bold px-2">
                        <div class="d-inline-block">热门标签</div>
                        <div class="float-right text-white ">
                            <a href="/tags"
                               class="badge badge-pill badge-success py-2 px-3 font-weight-normal">全部</a>
                        </div>
                    </div>
                    <Tags
                    :tagArr="tagArr"
                    >
                    </Tags>
                </div>
                <div class="mt-2">
                    <img src="http://springforall.ufile.ucloud.com.cn/images/wxcode.jpg"
                         class="img-thumbnail"></div>
                <div class="card border-light mt-2">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    import Carousel from '../components/carousel.vue'
    import articleItem from '../components/article-item.vue'
    import Tags from '../components/tags.vue'

    export default {
        data() {
            return {
                articles: [
                    {
                        "href": "#",
                        "desc": "违法格尔发）",
                        "tab": "spring boot",
                        "readNum": 33,
                        "src":"http://springforall.ufile.ucloud.com.cn/images/wxcode.jpg",
                        "commentNum": 12,
                        "likeNum": 21,
                        "postTime": "3 分钟前"
                    },
                    {
                        "href": "#1",
                        "desc": "Mybatis-Plus 真好用",
                        "tab": "spring boot",
                        "readNum": 33,
                        "src":"http://springforall.ufile.ucloud.com.cn/images/wxcode.jpg",
                        "commentNum": 12,
                        "likeNum": 21,
                        "postTime": "3 分钟前"
                    },
                    {
                        "href": "#2",
                        "desc": "数据库中间件 Sharding-JDBC 源码分析 —— 分布式事务（一）之最大努力型",
                        "tab": "spring data",
                        "readNum": 13,
                        "src":"http://springforall.ufile.ucloud.com.cn/images/wxcode.jpg",
                        "commentNum": 0,
                        "likeNum": 0,
                        "postTime": "3 天前"
                    }],
                tagArr:[
                    {
                        "href":"#",
                        "text":"spring boot"
                    }, {
                        "href":"#2",
                        "text":"spring security"
                    }, {
                        "href":"#3",
                        "text":"spring cloud"
                    },
                    {
                        "href":"#4",
                        "text":"spring data"
                    }
                ],
                cls:"btn btn-sm btn-secondary mr-2 mb-2"
            }
        },
        components: {
            Header,
            Footer,
            Carousel,
            articleItem,
            Tags
        }
    }
</script>

<style scoped>

</style>
