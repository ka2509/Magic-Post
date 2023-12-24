import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

api.defaults.headers.common['Authorization'] = "Bearer " + window.localStorage.getItem('token')

export default api;