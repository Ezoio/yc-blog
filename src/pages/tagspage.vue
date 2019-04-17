<template>
    <div class="container">
        <tags
            :tagArr="tagArr"
            :cls="cls"
        >

        </tags>
    </div>
</template>

<script>
    import tags from '../components/tags.vue'

    export default {
        name: "tagspage",
        data() {
            return {
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
                        "href":"#",
                        "text":"spring boot"
                    }, {
                        "href":"#2",
                        "text":"spring security"
                    }, {
                        "href":"#3",
                        "text":"spring cloud"
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
                        "href":"#",
                        "text":"spring boot"
                    }, {
                        "href":"#2",
                        "text":"spring security"
                    }, {
                        "href":"#3",
                        "text":"spring cloud"
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
                        "href":"#",
                        "text":"spring boot"
                    }, {
                        "href":"#2",
                        "text":"spring security"
                    }, {
                        "href":"#3",
                        "text":"spring cloud"
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
                        "href":"#",
                        "text":"spring boot"
                    }, {
                        "href":"#2",
                        "text":"spring security"
                    }, {
                        "href":"#3",
                        "text":"spring cloud"
                    },

                ],
                cls:"btn btn-sm btn-secondary mr-2 mb-2"
            }
        },
        components: {
            tags
        }
    }
</script>

<style scoped>

</style>
