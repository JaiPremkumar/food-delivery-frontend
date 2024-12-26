import axios from "axios"
import { kitchensFailed, kitchensRequest, kitchensSuccess } from "../slices/KitchensSlice"



export const getKitchen = async(dispatch)=>{
    try {
        dispatch(kitchensRequest())
       
        const {data} = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://backend-food-delivery-1.onrender.com/api/v1/kitchen')}`) 
        dispatch(kitchensSuccess(data))
        console.log(data.contents.kitchens) 
    } catch (error) {
        dispatch(kitchensFailed(error.response.data.message)) 
    }
}

