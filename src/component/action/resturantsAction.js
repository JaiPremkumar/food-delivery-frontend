import axios from "axios"
import { newResturantFailed, newResturantRequest, newResturantSuccess, resturantsSingleFailed, resturantsSingleRequest, resturantsSingleSuccess } from "../slices/RestaruntSlice"



export const getSingleResturant =(id)=> async(dispatch)=>{
    try {
        dispatch(resturantsSingleRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/rest/${id}`) 
        dispatch(resturantsSingleSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(resturantsSingleFailed(error.response.data.message))
    }
}

export const createResturant =(formData)=> async(dispatch)=>{
    try {
        dispatch(newResturantRequest())
        const config ={
            headers:{
                'Content-type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post(`https://backend-food-delivery-3aba.onrender.com/api/v1/rest/`,formData,config) 
        dispatch(newResturantSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(newResturantFailed(error.response.data.message))
    }
}