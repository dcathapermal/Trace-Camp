import axios from 'axios'

async function start (){

}

const start = async() => {
        const [nasa1, nasa2] = await Promise.all([
            axios.get('nasaurl'),
            axios.get('nasaurl')
        ])
        const apod = await axios.get('nasaurl'),
        const apod2 = await axios.get('nasaurl'),

        return 'value'
};

start().then().catch()
