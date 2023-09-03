import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params:{
        key : '9e0d196b52a34b4daf6b3102108c7fe3'
    }
})

