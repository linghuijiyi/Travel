<template>
    <ul class='list'>
        <li class='item' 
            v-for='(item, key) of letters' 
            :key='item'
            :ref='item'
            @touchstart.prevent='handleTouchStart'
            @touchmove='handleTouchMove'
            @touchend='handleTouchEnd'
            @click='handleLetterClick'>
            {{ item }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            cities: {
                type: Object,
                default: null
            }
        },
        data () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        computed: {
            letters () {
                const letters = [];
                for(let i in this.cities) {
                    letters.push(i);
                }
                return letters;
            }
        },
        methods: {
            handleLetterClick (e) {
                this.$emit('change', e.target.innerText);
            },
            handleTouchStart () {
                this.touchStatus = true;
            },
            handleTouchMove (e) {
                if(this.touchStatus) {
                    if(this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        // 获取滚动区域距离顶部的距离
                        this.startY = this.$refs['A'][0].offsetTop;
                        // 获取移动距离
                        const touchY = e.touches[0].clientY - 79;
                        // 获取当前移动的元素索引
                        const index = Math.floor((touchY - this.startY)  / 20);
                        if(index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index]);
                        }
                    }, 15);
                }
            },
            handleTouchEnd () {
                this.touchStatus = false;
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color #00bcd4
</style>