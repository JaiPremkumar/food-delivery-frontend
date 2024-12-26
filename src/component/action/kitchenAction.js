import axios from "axios"
import { kitchensFailed, kitchensRequest, kitchensSuccess } from "../slices/KitchensSlice"



export const getKitchen = async(dispatch)=>{
    try {
        dispatch(kitchensRequest())
       
        const {response} = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent('https://backend-food-delivery-1.onrender.com/api/v1/kitchen')}`) 
        dispatch(kitchensSuccess(response))
        console.log(response.contents.kitchens) 
    } catch (error) {
        dispatch(kitchensFailed(error.response.data.message)) 
    }
}

