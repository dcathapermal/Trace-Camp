//This file is reponsible for getting data from Nasa
import axios from 'axios'

//This is exposed in the user
const API_KEY = 'GLFZe7HDxGfBetRNiLRxlu2gW2H7VEZPOZ57nIyw'

export const getAstroids = (start, end) => {
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}end_date=${end}api_key=${API_KEY}`)
}

