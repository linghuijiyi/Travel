<template>
    <div>
        <div class='title'>周末去哪儿</div>
        <ul>
            <li 
                class='item border-bottom' 
                v-for='(item, index) in weekendList' 
                :key='item.id' 
                v-if='weekendList.length'
            >
                <div class='item-img-wrapper'>
                    <img class='item-img' :src='item.imgUrl' />
                </div>
                <div class='item-info'>
                    <p class='item-title' v-text='item.title'></p>
                    <p class='item-desc' v-text='item.desc'></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            weekendList: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style lang='stylus'>
    .title
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 38.83%
        .item-img
            width 100%
    .item-info
        padding .1rem
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
            
</style>