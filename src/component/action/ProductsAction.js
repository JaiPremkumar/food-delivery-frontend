
import axios from 'axios'
import { productCrtFailed, productCrtRequest, productCrtSuccess, productsFailed, productsRequest, productsSuccess, resProductsFailed, resProductsRequest, resProductsSuccess, seacatProductsFailed, seacatProductsRequest, seacatProductsSuccess, seaProductsFailed, seaProductsRequest, seaProductsSuccess } from '../slices/ProductSlice'

export const getProducts = async(dispatch)=>{
    try {
        dispatch(productsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/products`) 
        dispatch(productsSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(productsFailed(error.response.data.message))
    }
}

/*export const createProduct = (addData, category) =>async(dispatch)=>{
    try {
        dispatch(productCrtRequest())
        const config ={
            headers:{
                'Content-type': 'multipart/form-data'
            }
        }*/
       /* const {data} = await axios.post(`/api/v1/product/new/`,{addData,category}) 
        console.log(data)
        dispatch(productCrtSuccess(data))
        
    } catch (error) {
        dispatch(productCrtFailed(error.response.data.message))
    }
}*/

export const searchProducts = name=> async(dispatch)=>{
    try {
        dispatch(seaProductsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/search?keyword=${name}`) 
        dispatch(seaProductsSuccess(data))
    } catch (error) {
        dispatch(seaProductsFailed(error.response.data.message))
    }
}

export const adminProducts = async(dispatch)=>{
    try {
        dispatch(productsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/products`) 
        dispatch(productsSuccess(data))
    } catch (error) {
        dispatch(productsFailed(error.response.data.message))
    }
}

export const searchcatProducts = categroies=> async(dispatch)=>{
    try {
        dispatch(seacatProductsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/category?keys=${categroies}`) 
        dispatch(seacatProductsSuccess(data))
    } catch (error) {
        dispatch(seacatProductsFailed(error.response.data.message)) 
    }
}

export const resProducts = seller=> async(dispatch)=>{  
    try {
        dispatch(resProductsRequest())
        const {data} = await axios.get(`https://backend-food-delivery-3aba.onrender.com/api/v1/seller?keys=${seller}`) 
        dispatch(resProductsSuccess(data))
    } catch (error) {
        dispatch(resProductsFailed(error.response.data.message)) 
    }
}