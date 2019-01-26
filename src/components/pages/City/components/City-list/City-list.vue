<template>
    <div class='list' ref='wrapper'>
        <div>
            <div class='area'>
                <div class='title border-topbottom'>当前城市</div>
                <div class='button-list'>
                    <div class='button-wrapper'>
                        <div class='button'>{{ this.city }}</div>
                    </div>
                </div>
            </div>
            <div class='area'>
                <div class='title border-topbottom'>热门城市</div>
                <div class='button-list'>
                    <div 
                        class='button-wrapper' 
                        v-for='(item, index) in hotCities' 
                        :key='item.id'
                    >
                        <div class='button' @click='handleCityClick(item.name)' v-text='item.name'></div>
                    </div>
                </div>
            </div>
            <div class='area' 
                v-for='(value, key) of cities' 
                :ref='key' 
                :key='key'
            >
                <div class="title border-topbottom" v-text='key'></div>
                <div 
                    class="item-list" 
                    v-for='(item, index) in value' 
                    :key='index'
                >
                    <div class="item border-bottom" @click='handleCityClick(item.name)' v-text='item.name'></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        props: {
            hotCities: {
                type: Array,
                default: null
            },
            cities: {
                type: Object,
                default: null
            },
            letter: {
                type: String,
                default: ''
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
        computed: {
            ...mapGetters([
                'city'
            ])
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            });
        },
        methods: {
            handleCityClick(city) {
                this.setCity(city);
                this.$router.push('/');
            },
            ...mapMutations({
                'setCity': 'SET_CITY'
            })
        },
        watch: {
            letter () {
                if(this.letter) {
                    this.scroll.scrollToElement(this.$refs[this.letter][0]);
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
            .button
                margin: .1rem
                padding: .1rem 0
                text-align: center
                border: .02rem solid #ccc
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
</style>