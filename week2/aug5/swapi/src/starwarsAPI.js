import axios from 'axios'



export const getPlanets = (planet_name) => {
    return axios.get(`https://swapi.co/api/planets/?page=${planet_name}`)
}

// function getPlanets (param) {
//     return;
// }
// const getPlanets = planet_name => axios.get()
// const getPlanets = (planet_name) => {
//     return axios.get();
// }
// 
// const myObject = {
//     getPlanets: function() {

//     },
//     getPlanets() {
//         return;
//     },
//     getPlanets: () => {}
// }