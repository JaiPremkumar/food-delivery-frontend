import { createSlice } from "@reduxjs/toolkit";

const resturantSlice = createSlice({
    name:' restarunt',
    initialState:{
        loading:false,
        restarunt:{},
        isCreated:false
    },
    reducers:{
        resturantsSingleRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        resturantsSingleSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             restarunt:action.payload.restarunt,
            
            }
        },
        resturantsSingleFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        newResturantRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        newResturantSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             isCreated:true,
             restarunt:action.payload.restarunt,
            
            }
        },
        newResturantFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
    }
       
})

const {actions,reducer} = resturantSlice

export const {resturantsSingleRequest, resturantsSingleSuccess,resturantsSingleFailed,
    newResturantRequest, newResturantSuccess, newResturantFailed
} = actions

export default reducer