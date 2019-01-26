<template>
    <div>
        <div class='search'>
            <input type='text' class='search-input' placeholder='输入城市名或拼音' v-model='keyword' />
        </div>
        <div class='search-content' ref='search' v-show='keyword'>
            <ul>
                <li 
                    class='search-item border-bottom' 
                    v-for='item in list' 
                    :key='item.id'
                    @click='handleCityClick(item.name)'
                >
                    {{ item.name }}
                </li>
            </ul>
            <div class='search-no-result' v-if='hasNoData'>没有找到匹配数据...</div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    import { mapMutations } from 'vuex';
    export default {
        props: {
            cities: {
                type: Object,
                default: null
            },
            click: {
                type: Boolean,
                default: true
            },
            probeType: {
                type: Number,
                default: 1
            }
        },
        data () {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoData () {
                return !this.list.length;
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.search, {
                probeType: this.probeType,
                click: this.click
            });
        },
        methods: {
            handleCityClick (city) {
                this.setCity(city);
                this.$router.push('/');
            },
            ...mapMutations({
                'setCity': 'SET_CITY'
            })
        },
        watch: {
            keyword () {
                if(this.timer) clearTimeout(this.timer);
                if(!this.keyword) {
                    this.list = [];
                    return;
                }
                this.timer = setTimeout(() => {
                    const result = [];
                    for(let i in this.cities) {
                        this.cities[i].forEach((item) => {
                            if(item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                                result.push(item);
                            }
                        });
                    }
                    this.list = result;
                }, 100);
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .search
        height .72rem
        padding 0 .1rem
        background-color #00bcd4
        .search-input
            box-sizing border-box
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            font-family '微软雅黑'
            border-radius .06rem
            color #666
            padding 0 .1rem
            letter-spacing 1px
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background-color #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            background-color #fff
            color #66
        .search-no-result
            display flex
            flex-direction column
            justify-content center
            width 100%
            height 100%
            text-align center
            font-size .45rem
            color #666
</style>