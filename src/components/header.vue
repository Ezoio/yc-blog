<template>
    <div class="bg-dark border-bottom">
        <div class="container px-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-faded px-0">
                <a class="navbar-brand ml-4" href="#">
                    <img class="" src="../assets/images/logo.png" style="width: 40px">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNavDropdown" class="navbar-collapse collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active ">
                            <a class="nav-link text-white" href="/"><i class="material-icons float-left mr-1 ">home</i>首页 <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/article/558">官方文档</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link text-white" href="/videos">视频教程</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#" target="_blank">开源项目</a>
                        </li>
                        <li class="nav-item">
                            <form action="http://zhannei.baidu.com/cse/search">
                                <input class="form-control ml-2" type="text" placeholder="搜索" id="bdcsMain" name="q">
                                <div><input type="hidden" name="s" value="677461576189682531"><input type="hidden" name="entry" value="1"></div></form>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <b-dropdown id="dropdown-1" text="发布" >
                                <b-dropdown-item href="/article/publish">文章</b-dropdown-item>
                                <b-dropdown-item>问答</b-dropdown-item>
                            </b-dropdown>
                        </li>

                        <li class="nav-item ml-4">
                            <a class="btn btn-primary text-white" href="/login">登录</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
        <div class="alert alert-warning alert-dismissible fade" role="alert" style="position: absolute; z-index: 99; right: 20px" id="user-notice">
            你有 <strong id="messageCount"></strong> 条未读消息
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    </div>

</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {

    }
</script>

<style scoped>

</style>
