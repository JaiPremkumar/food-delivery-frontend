import axios from "axios"
import { allUserFailed, allUserRequest, allUserSuccess, updUserFailed, updUserRequest, updUserSuccess } from "../slices/UsersSlice"

export const adminUser=async (dispatch) => {
    try {
        dispatch(allUserRequest())
        const {data} = await axios.get(`api/v1/alluser`)
        dispatch(allUserSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(allUserFailed(error))
    }
}

export const adminUserUpdate=(id,name,email)=>async (dispatch) => {
    try {
        dispatch(updUserRequest())
        const {data} = await axios.put(`api/v1/update/${id}`,{name,email})
        dispatch(updUserSuccess(data))
        console.log(data)
    } catch (error) {
        dispatch(updUserFailed(error))
    }
}