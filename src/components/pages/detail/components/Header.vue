<template>
    <div>
        <router-link 
            tag='div' 
            to='/' 
            class='header-abs'
            v-show='showAbs'
        >
            <div class='iconfont header-abs-back'>&#xe600;</div>
        </router-link>
        <div class='header-fixed' v-show='!showAbs' :style='opacityStyle'>
            <router-link to='/'>
                <div class='iconfont header-abs-back'>&#xe600;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop || window.pageYOffset;
                if(top > 60) {
                    this.showAbs = false;
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = { opacity };
                } else {
                    this.showAbs = true;
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped lang='stylus'>
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .6rem
        height .6rem
        line-height .6rem
        text-align center
        border-radius .3rem
        background-color rgba(0, 0, 0, .6)
        .header-abs-back
            color #fff
            font-size .35rem
    .header-fixed
        z-index 2
        position fixed
        top 0
        left 0
        right 0
        text-align center
        color #fff
        font-size .32rem
        height .86rem
        line-height .86rem
        background-color #00bcd4
        .header-abs-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>