import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-back.herokuapp.com'
})
 
export default api;