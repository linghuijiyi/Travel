import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutations.js';
import * as getters from './getters.js';
import createLogger from 'vuex/dist/logger';
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})