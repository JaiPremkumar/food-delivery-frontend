import axios from "axios"
import { kitchensFailed, kitchensRequest, kitchensSuccess } from "../slices/KitchensSlice"



export const getKitchen = async(dispatch)=>{
    try {
        dispatch(kitchensRequest())
       
        const {data} = await axios.get(`/api/v1/kitchen`) 
        dispatch(kitchensSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(kitchensFailed(error.response.data.message))
    }
}

