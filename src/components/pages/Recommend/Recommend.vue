<template>
    <div>
        <div class='title'>热销推荐</div>
        <ul>
            <router-link
                tag='li'
                class='item border-bottom' 
                v-for='(item, index) in recommendList'
                :key='item.id' 
                v-if='recommendList.length'
                :to="'/detail/' + item.id"
            >
                <img class='item-img' :src='item.imgUrl' />
                <div class='item-info'>
                    <p class='item-title' v-text='item.title'></p>
                    <p class='item-desc' v-text='item.desc'></p>
                    <button class='item-button'>查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            recommendList: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .title
        margin-top .2rem
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
            .item-desc
                line-height .4rem
                color #ccc
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
            .item-button
                line-height .44rem
                margin-top .16rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>