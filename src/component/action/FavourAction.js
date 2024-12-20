import axios from "axios"
import { favourItemRequest, favourItemSuccess } from "../slices/FavourSlice"

export const favourItem= (id,quantity)=>async (dispatch) => {
    try {
        dispatch(favourItemRequest())
        const{data} =await axios.get(`/api/v1/product/${id}`)
        dispatch(favourItemSuccess({
            product:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.image,
            quantity
            
        
        }))
    } catch (error) {
        
    }
}

export const favourResItem= (id)=>async (dispatch) => {
    try {
        dispatch(favourItemRequest())
        const{data} =await axios.get(`/api/v1/rest/${id}`)
        dispatch(favourItemSuccess({
            restarunt:data.restarunt._id,
            restarunt:data.restarunt.restarunt,
            image:data.restarunt.image,
        
        
        }))
    } catch (error) {
        
    }
}