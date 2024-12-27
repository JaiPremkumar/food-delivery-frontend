import axios from "axios"
import { addItemRequest, addItemSuccess } from "../slices/CartSlice"

export const addCartItem= (id,quantity)=>async (dispatch) => {
    try {
        dispatch(addItemRequest())
        const{data} =await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/product/${id}`)
        dispatch(addItemSuccess({
            product:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.image,
            quantity
            
        
        }))
    } catch (error) {
        
    }
}

export const addCartKitchen= (id,quantity)=>async (dispatch) => {
    try {
        dispatch(addItemRequest())
        const{data} =await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/kitchen/${id}`)
        dispatch(addItemSuccess({
            kitchen:data.kitchen._id,
            name:data.kitchen.name,
            price:data.kitchen.price,
            image:data.kitchen.image,
            quantity
            
        
        }))
    } catch (error) {
        
    }
}

