import axios from "axios"
import { productCrtFailed, productCrtRequest, productCrtSuccess, productFailed, productRequest, productSuccess, productUpdRequest, productUpdSuccess, reviewFailed, reviewRequest, reviewSuccess } from "../slices/ProductsSlice"

export const getProduct = id =>async(dispatch)=>{
    try {
        dispatch(productRequest())
        const {data} = await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/product/${id}`) 
        console.log(data)
        dispatch(productSuccess(data))
        
    } catch (error) {
        dispatch(productFailed(error.response.data.message))
    }
}

export const createProduct = (formData)=>async(dispatch)=>{
    try {
        dispatch(productCrtRequest())
        const config ={
            headers:{
                'Content-type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post(`https://backend-food-delivery-3aba.onrender.com/api/v1/product/new/`,formData,config) 
        console.log(data)
        dispatch(productCrtSuccess(data))
        
    } catch (error) {
        dispatch(productCrtFailed(error.response.data.message))
    }
}

export const updateProduct = (id,name,price,image,seller,categories,description)=>async(dispatch)=>{
    try {
        dispatch(productCrtRequest()) 
       
        const {data} = await axios.put(`https://backend-food-delivery-3aba.onrender.com/api/v1/update/${id}`,{name,price,image,seller,categories,description}) 
        console.log(data)
        dispatch(productCrtSuccess(data))
        
    } catch (error) {
        dispatch(productCrtFailed(error.response.data.message))
    }
}

export const isReview=(id,rating,comment)=> async(dispatch)=>{ 
    try {
        dispatch(reviewRequest()) 
       
        const {data} = await axios.put(`https://backend-food-delivery-3aba.onrender.com/api/v1/review`,{rating,comment,id}) 
        console.log(data)
        dispatch(reviewSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(reviewFailed(error.response.data.message)) 
    }
}

