import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
  initialState:{
    loading:false,
    isAuthenticated:false,
    isLogin:true
  },
  reducers:{
    registerRequest(state,action){
        return{
            ...state,
            loading:true
        }   
    },
    registerSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            isLogin:false,
            user:action.payload.user
        }   
    },
    registerFailed(state,action){
        return{
            ...state,
            error:action.payload
            
        }   
    },
    loginRequest(state,action){
        return{
            ...state,
            loading:true
        }   
    },
    loginSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            isLogin:true,
            user:action.payload.user
        }   
    },
    loginFailed(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
            
        }   
    },
    logUserRequest(state,action){
        return{
            ...state,
            isAuthenticated:false,
            loading:true
        }   
    },
    logUserSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            isLogin:true,
            user:action.payload.user
        }   
    },
    logUserFailed(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
            
        }   
    },
    
    logOutSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:false
        
        }   
    },
    logOutFailed(state,action){
        return{
            ...state,
            error:action.payload
            
        }   
    },
    updateUserRequest(state,action){
        return{
            ...state,
            isAuthenticated:false,
            loading:true
        }   
    },
    updateUserSuccess(state,action){
        return{
            loading:false,
            isAuthenticated:true,
            isLogin:true,
            user:action.payload.user
        }   
    },
    updateUserFailed(state,action){
        return{
            ...state,
            loading:false,
            error:action.payload
            
        }   
    }
            
         


  }
})

const{actions,reducer} = userSlice;

export const{registerRequest,registerSuccess,registerFailed,
    loginRequest,loginSuccess,loginFailed,logUserRequest,
    logUserSuccess,logUserFailed,logOutSuccess,logOutFailed,
    updateUserRequest,updateUserSuccess,updateUserFailed,
    
} = actions;

export default reducer;