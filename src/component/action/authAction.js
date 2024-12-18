import axios from "axios"
import { allUserFailed, allUserRequest, allUserSuccess, loginFailed, loginRequest, loginSuccess, logOutFailed, logOutSuccess, logUserFailed, logUserRequest, logUserSuccess, registerFailed, registerRequest, registerSuccess, updateUserFailed, updateUserRequest, updateUserSuccess } from "../slices/userSlice"



export const login =(email,password)=>async (dispatch) => {
    try {
        dispatch(loginRequest())
        const {data} = await axios.post(`https://food-delivery-3-urm7.onrender.com/api/v1/login`,{email,password})
        dispatch(loginSuccess(data))
        console.log(data.token)
        const token = data.token
        localStorage.setItem('jsonwebtoken',token)
    } catch (error) {
        dispatch(loginFailed()) 
    }
    
}


export const register =(formData)=>async (dispatch) => {
    try {
        dispatch(registerRequest()) 
        const config ={
            headers:{
                'Content-type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post(`https://food-delivery-3-urm7.onrender.com/api/v1/register`,formData,config)
        dispatch(registerSuccess(data))
        
    } catch (error) {
        dispatch(registerFailed(error.responce.data.message))
    }
    
}



export const loadUser =async (dispatch) => {
    try {
        dispatch(logUserRequest())
        const {data} = await axios.get(`https://food-delivery-3-urm7.onrender.com/api/v1/myDp`) 
        dispatch(logUserSuccess(data))
        
    } catch (error) {
        dispatch(logUserFailed(error.responce.data.message))
    }
    
}


export const logOut =async (dispatch) => {
    try {
        
         await axios.post(`https://food-delivery-3-urm7.onrender.com/api/v1/logout`)
        dispatch(logOutSuccess())
    } catch (error) {
        dispatch(logOutFailed(error.responce.data.message))
    }
    
}

export const updateProfile =(name,email)=>async (dispatch) => {
    try {
        dispatch(updateUserRequest())
        const {data} = await axios.put(`https://food-delivery-3-urm7.onrender.com/api/v1/updateuser`,{name,email})
        dispatch(updateUserSuccess(data))
    } catch (error) {
        dispatch(updateUserFailed(error.responce.data.message))
    }
    
}

