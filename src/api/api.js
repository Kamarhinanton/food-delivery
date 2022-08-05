import axios from "axios";


const instance = axios.create({
    baseURL : 'http://localhost:8080/',
})

export const ordersAPI = {
    getOrdersAPI (limitOrders = 5, offset = 0) {
        return instance.get(`/orders?limit=${limitOrders}&offset=${offset}`, {
        })
            .then(response => {
                return response.data;
            })
    }
}