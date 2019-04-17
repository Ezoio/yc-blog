<template>
    <div class="container">
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                class="mt-2"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                    img-src="https://upload-images.jianshu.io/upload_images/3424642-818588e162a632e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            ></b-carousel-slide >

            <!-- Slides with custom text -->
            <b-carousel-slide  img-src="https://upload-images.jianshu.io/upload_images/3424642-9a20664d7cb764e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">
                <h1>Hello world!</h1>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style scoped>

</style>
