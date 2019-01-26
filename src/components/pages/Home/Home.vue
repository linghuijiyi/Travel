<template>
    <div>
        <m-header></m-header>
        <swiper :swiperList='swiperList'></swiper>
        <icons :iconList='iconList'></icons>
        <recommend :recommendList='recommendList'></recommend>
        <weekend :weekendList='weekendList'></weekend>
    </div>
</template>

<script>
    import MHeader from 'base/m-header/m-header'
    import Swiper from 'base/Swiper/Swiper'
    import Icons from 'pages/Icons/Icons'
    import Recommend from 'pages/Recommend/Recommend'
    import Weekend from 'pages/Weekend/Weekend'
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: [],
                lastCity: '',
                a: [1,2,3],
                user: {
                    password: '111111',
                    username: 'admin'
                },
                goods: {
                    goodsId: "9f0fc88cbd5948a4a18d575f15710e62",
                    image: "http://baixing.kuaihejiu.com/homeFloor/20171202/20171202201017_3360.jpg",
                    goodsPrice: 99999
                }
            }
        },
        computed: {
            ...mapGetters([
                'city'
            ])
        },
        mounted () {
            // this.getTest();
            this.lastCity = this.city;
            this.getHomeInfo()
            // this.postTest()
        },
        methods: {
            getHomeInfo () {
                axios.get('/api/index.json?city=' + this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data   
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            },
            getTest () {
                const url = 'http://jspang.com/DemoApi/oftenGoods.php';
                this.http(url, 'get', this.goods)
                    .then((res) => {
                    })
            },
            postTest () {
                const url = 'http://192.168.1.220:8080/account/login';
                this.http(url, 'post', this.user)
                    .then((res) => {
                        console.log(res)
                    })
            },
            http (url, type, data) {
                var option = {
                    url: url,
                    method: type,
                    transformRequest: [
                        function (data) {
                            let result = '';
                            for(let value in data) result += encodeURIComponent(value) + '=' + encodeURIComponent(data[value]) + '&';
                            if (result) result = result.substring(0, result.length - 1);
                            return result;
                        }
                    ],
                    paramsSerializer: (params) => {
                        let result = '';
                        for(let value in params) result += encodeURIComponent(value) + '=' + encodeURIComponent(data[value]) + '&';
                        if (result) result = result.substring(0, result.length - 1);
                        return result;
                    }
                }
                type === 'get' ? option.params = data : option.data = data;
                return new Promise((resolve, reject) => {
                    axios.request((option))
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((err) => {
                            reject(err)
                        })
                });
            }
        },
        activated () {
            if(this.lastCity !== this.city) {
                this.lastCity = this.city;
                this.getHomeInfo();
            }
        },
        components: {
            MHeader,
            Swiper,
            Icons,
            Recommend,
            Weekend
        }
    }
</script>

<style>
    
</style>