import axios from 'axios';
//guides-app-project
const instance = axios.create({
    baseURL : 'https://map-app-rn.firebaseio.com/'
})

export default instance;