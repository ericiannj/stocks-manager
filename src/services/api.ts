import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cloud.iexapis.com/stable',
    timeout: 5000,
})

export default api
