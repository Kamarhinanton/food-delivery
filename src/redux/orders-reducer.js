import {ordersAPI} from "../api/api";

const SET_ORDERS = 'SET_ORDERS';

let initialState = {
    orderId: [
        {
            "establishmentId": 1,
            "establishmentName": "Chikers / Чікерс",
            "establishmentLocation": "Ivano-Frankivsk",
            "deliveryCost": 34,
            "ratePercent": 98,
            "createDate": "2022-07-19T21:05:56.939185",
            "updateDate": "2022-07-19T21:05:56.939192",
            "status": "ACTIVE",
            "imageLink": "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/puy3zhtbzjm92qt8d5me"
        },
        {
            "establishmentId": 2,
            "establishmentName": "Burgers & Grill 5niza/5ниця",
            "establishmentLocation": "Ivano-Frankivsk",
            "deliveryCost": 19,
            "ratePercent": 99,
            "createDate": "2022-07-19T21:05:57.020705",
            "updateDate": "2022-07-19T21:05:57.020707",
            "status": "ACTIVE",
            "imageLink": "https://res.cloudinary.com/glovoapp/h_225,f_auto,q_auto/e_blur:400/Stores/jjv42bahfmy7ix2iaoib"
        }
    ],
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS :
            return {...state, orderId: action.orderId}
        default:
            return state;
    }
}

export default orderReducer;

export const setOrderId = (orderId) => ({type: SET_ORDERS, orderId})

export const getOrders = () => (dispatch) =>{
    ordersAPI.getOrders().then(response => {
        dispatch(setOrderId(response.data));
    })
}
