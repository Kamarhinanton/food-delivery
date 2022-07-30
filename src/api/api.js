import axios from "axios";


const instance = axios.create({
    baseURL : 'http://localhost:8080/',
})

export const ordersAPI = {
    getOrders(){
        return instance.get('establishments/')
    }
}