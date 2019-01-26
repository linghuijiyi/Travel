let defaultCity = '北京';
try {
    if(window.localStorage.city) {
        defaultCity = window.localStorage.getItem('city');
    }
} catch (e) {

}
const state = {
    city: defaultCity
}

export default state;