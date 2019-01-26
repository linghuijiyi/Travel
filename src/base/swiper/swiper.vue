<template>
    <div class='wrapper'>
        <van-swipe :autoplay='autoplay' :loop='loop' v-if='swiperList.length'>
            <van-swipe-item v-for='(item, index) in swiperList' :key='item.id'>
                <img class='swiper-img' :src='item.imgUrl' />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        props: {
            swiperList: {
                type: Array,
                default: null
            },
            autoplay: {
                type: Number,
                default: 4000
            },
            loop: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .wrapper >>> .van-swipe__indicator--active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        background #eee
        padding-bottom 31.25%
        .swiper-img
            width 100%
</style>
