import axios from "axios";


const instance = axios.create({
    baseURL : 'http://localhost:8080/',
})

export const ordersAPI = {
    getOrdersAPI (offset, limit) {
        return instance.get(`/orders?limit=${limit}&offset=${offset}`, {
        })
            .then(response => {
                return response.data;
            })
    }
}