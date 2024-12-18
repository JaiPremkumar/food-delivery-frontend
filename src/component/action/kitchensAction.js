import axios from "axios"
import { kitchenFailed, kitchenRequest, kitchenSuccess, newkitchenFailed, newkitchenRequest, newkitchenSuccess } from "../slices/KitchenSlice"


export const getSingleKitchen = (id)=>async(dispatch)=>{
    try {
        dispatch(kitchenRequest())
        const {data} = await axios.get(`https://food-delivery-3-urm7.onrender.com/api/v1/kitchen/${id}`) 
        dispatch(kitchenSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(kitchenFailed(error.response.data.message))
    }
}

export const createKitchen =(formData)=> async(dispatch)=>{
    try {
        dispatch(newkitchenRequest())
         const config ={
                    headers:{
                        'Content-type': 'multipart/form-data'
                    }
                }
        const {data} = await axios.post(`https://food-delivery-3-urm7.onrender.com/api/v1/kitchen`,formData,config) 
        dispatch(newkitchenSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(newkitchenFailed(error.response.data.message))
    }
}

export const updateKitchen =(id,name,price,description,kitchenName,image,categories)=> async(dispatch)=>{
    try {
        dispatch(newkitchenRequest())
        const {data} = await axios.put(`https://food-delivery-3-urm7.onrender.com/api/v1/kitchen/${id}`,{name,price,description,kitchenName,image,categories}) 
        dispatch(newkitchenSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(newkitchenFailed(error.response.data.message))
    }
}