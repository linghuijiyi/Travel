<template>
    <div>
        <detail-banner 
            :bannerImg='bannerImg' 
            :sightName='sightName' 
            :gallaryImgs='gallaryImgs'
        >
        </detail-banner>
        <detail-header></detail-header>
        <detail-list :list='list'></detail-list>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/list'
    import axios from 'axios'
    export default {
        data () {
            return {
                bannerImg: '',
                sightName: '',
                gallaryImgs: [],
                list: []
            }
        },
        mounted () {
            this.getDetailInfo();
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                .then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    this.list = data.categoryList;
                    this.bannerImg = data.bannerImg;
                    this.sightName = data.sightName;
                    this.gallaryImgs = data.gallaryImgs;
                }
            }
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        }
    }
</script>

<style scoped lang='stylus'></style>