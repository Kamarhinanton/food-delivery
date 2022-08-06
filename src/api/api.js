import axios from "axios";


const instance = axios.create({
    baseURL : 'http://localhost:8080/',
})

export const ordersAPI = {
    getOrdersAPI ( offset = 0) {
        return instance.get(`/orders?limit=5&offset=${offset}`, {
        })
            .then(response => {
                return response.data;
            })
    }
}