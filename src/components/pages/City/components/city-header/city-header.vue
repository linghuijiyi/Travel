<template>
    <div class='header'>
        城市选择
        <div class='iconfont header-back' @click='back'>&#xe600;</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                vuegConfig: {
                    forwardAnim: 'fadeInUp'
                }
            }
        },
        methods: {
            back () {
                this.$router.back();
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .header
        position relative
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        background-color #00bcd4
        color #fff
        font-size .32rem
        .header-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>