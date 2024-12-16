import { createSlice } from "@reduxjs/toolkit";

const kitchensSlice = createSlice({
    name:'kitchens',
    initialState:{
        loading:false,
      
    },
    reducers:{
        kitchensRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        kitchensSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             kitchens:action.payload.kitchens,
            
            }
        },
        kitchensFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
    }
       
})

const{actions, reducer} = kitchensSlice;

export const{kitchensRequest, kitchensSuccess,kitchensFailed} = actions

export default reducer;