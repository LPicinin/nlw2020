import axios from 'axios'

const api =  axios.create({
    baseURL: 'http://192.168.2.16:3333',
})

export default api;