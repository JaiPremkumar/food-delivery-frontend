import axios from "axios"
import { resturantsFailed, resturantsRequest, resturantsSuccess } from "../slices/ResturantsSlice"


export const getResturant = async(dispatch)=>{
    try {
        dispatch(resturantsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/rest`) 
        dispatch(resturantsSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(resturantsFailed(error.response.data.message))
    } 
}