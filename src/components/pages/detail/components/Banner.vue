<template>
    <div>
        <div class='banner' @click='handleBannerClick'>
            <img class='banner-img' :src='bannerImg'>
            <div class='banner-info'>
                <div class='banner-title'>{{sightName}}</div>
                <div class='banner-number'>
                    <span class='iconfont banner-icon'>&#xe63a;</span>
                    109
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
                v-show='showGallary'
                :gallaryImgs='gallaryImgs'
                @close='handleGallaryClose'
            >
            </common-gallary>
        </fade-animation>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary';
    import FadeAnimation from 'common/fade/FadeAnimation';
    export default {
        props: {
            bannerImg: {
                type: String,
                default: ' '
            },
            sightName: {
                type: String,
                default: ' '
            },
            gallaryImgs: {
                type: Array,
                default: null
            }
        },
        data () {
            return {
                showGallary: false
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true;
            },
            handleGallaryClose () {
                this.showGallary = false;
            }
        },
        components: {
            CommonGallary,
            FadeAnimation
        }
    }
</script>

<style scoped lang='stylus'>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 50%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
                font-family '微软雅黑'
            .banner-number
                margin-right .2rem
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .2rem
                font-size .24rem
                background-color rgba(0, 0, 0, .6)
                .banner-icon
                    font-size .24rem
</style>