import axios from 'axios'

const AuthFetch = axios.create({
    baseURL:'https://course-api.com',
    headers:{
        Accept:'application/json'
    }
})

export default AuthFetch

