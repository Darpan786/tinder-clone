import axios from 'axios'

const instance = axios.create({
     baseURL: "https://tinder-clone12345.herokuapp.com/"
})
export default instance;