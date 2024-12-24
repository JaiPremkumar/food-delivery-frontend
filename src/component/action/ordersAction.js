import axios from "axios"
import { getOrderFailed, getOrderRequest, getOrderSuccess, userOrderFailed, userOrderRequest, userOrderSuccess } from "../slices/OrderSlice"



export const admOrder=async (dispatch) => {
    try {
        dispatch(getOrderRequest())
        const {data} = await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/order`)  
        dispatch(getOrderSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(getOrderFailed(error.response.data.message))
    }
}

export const createsOrder=(order)=>async (dispatch) => {
    try {
        dispatch(getOrderRequest())
        const {data} = await axios.post(`https://backend-food-delivery-1.onrender.com/api/v1/order`,order) 
        dispatch(getOrderSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(getOrderFailed(error.response.data.message))
    }
}

export const myOrder=async (dispatch) => {
    try {
        dispatch(userOrderRequest())
        const {data} = await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/myOrder`) 
        dispatch(userOrderSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(userOrderFailed(error.response.data.message))
    }
}