import axios from "axios"
import { kitchensFailed, kitchensRequest, kitchensSuccess } from "../slices/KitchensSlice"



export const getKitchen = async(dispatch)=>{
    try {
        dispatch(kitchensRequest())
       // `https://api.allorigins.win/get?url=${encodeURIComponent('https://backend-food-delivery-1.onrender.com/api/v1/kitchen')}`
        const {data} = await axios.get('https://backend-food-delivery-1.onrender.com/api/v1/kitchen') 
        dispatch(kitchensSuccess(data))
        console.log(data) 
    } catch (error) {
        dispatch(kitchensFailed(error.response.data.message)) 
    }
}

