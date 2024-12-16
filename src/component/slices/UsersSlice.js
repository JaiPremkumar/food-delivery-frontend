import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'users',
  initialState:{
    loading:false,
    isAuthenticated:false
  },
  reducers:{
    allUserRequest(state,action){
        return{
            ...state,
            loading:true
        } 
    },
    allUserSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            users:action.payload.users
        }   
    },
    allUserFailed(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
            
        }   
    },
    updUserRequest(state,action){
        return{
            ...state,
            loading:true
        } 
    },
    updUserSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            users:action.payload.users
        }   
    },
    updUserFailed(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
            
        }   
    },


  }
})

const{actions,reducer} = usersSlice;

export const{
    allUserRequest,allUserSuccess,allUserFailed,updUserRequest, updUserSuccess,updUserFailed
} = actions;

export default reducer;