import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-mern-kp.herokuapp.com/'
})

export default instance