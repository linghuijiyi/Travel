<template>
    <div>
        <city-header></city-header>
        <search :cities='cities'></search>
        <city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
        <alphabet :cities='cities' @change='handleLetterChange'></alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/city-header/city-header'
    import Search from './components/Search/Search'
    import CityList from './components/City-list/City-list'
    import Alphabet from './components/Alphabet/Alphabet'
    import axios from 'axios'
    export default {
        data () {
            return {
                hotCities: [],
                cities: {},
                letter: ''
            }
        },
        mounted () {
            axios.get('/api/city.json')
                    .then(this.getCity)
        },
        methods: {
            getCity (res) {
                if(res.data.ret) {
                    this.hotCities = res.data.data.hotCities;
                    this.cities = res.data.data.cities;
                }
            },
            handleLetterChange (letter) {
                this.letter = letter;
            }
        },
        components: {
            CityHeader,
            Search,
            CityList,
            Alphabet
        }
    }
</script>

<style lang='stylus' scoped>
    
</style>