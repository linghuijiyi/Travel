<template>
    <div class='icons'>
        <van-swipe :show-indicators='false'>
            <van-swipe-item v-for='(page, index) in pages' :key='index'>
                <div class='icon' v-for='(item, index) in page' :key='item.id'>
                    <div class='icon-img'>
                        <img class='icon-img-content' :src="item.imgUrl">
                    </div>
                    <p class='icon-dese' v-text='item.desc'></p>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        props: {
            iconList: {
                type: Array,
                default: null
            }
        },
        computed: {
            pages () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages;
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .icons
        border none
        height 0
        padding-bottom 50%
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    height 100%
                    margin 0 auto
            .icon-dese
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                font-size .18rem
                color #333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
</style>