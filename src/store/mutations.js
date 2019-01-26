import * as types from './mutation-types';

const matutaions = {
    [types.SET_CITY] (state, city) {
        state.city = city;
        try {
            window.localStorage.setItem('city', city);
        } catch (e) {
            
        }
    }
}

export default matutaions;