import { createSlice } from "@reduxjs/toolkit";

const kitchenSlice = createSlice({
    name:'kitchen',
    initialState:{
        loading:false,
        isCreated:false
    },
    reducers:{
        kitchenRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        kitchenSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             kitchen:action.payload.kitchen,
            
            }
        },
        kitchenFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        newkitchenRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        newkitchenSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             isCreated:true,
             kitchen:action.payload.kitchen,
            
            }
        },
        newkitchenFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        updatekitchenRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        updatekitchenSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             kitchen:action.payload.kitchen,
            
            }
        },
        updatekitchenFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
    }
       
})

const{actions, reducer} = kitchenSlice;

export const{kitchenRequest, kitchenSuccess,kitchenFailed,newkitchenSuccess,
    newkitchenRequest,newkitchenFailed,updatekitchenRequest,updatekitchenSuccess,
    updatekitchenFailed
} = actions

export default reducer;