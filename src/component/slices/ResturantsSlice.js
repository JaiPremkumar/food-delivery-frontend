import { createSlice } from "@reduxjs/toolkit";

const resturantsSlice = createSlice({
    name:' restarunts',
    initialState:{
        loading:false,
        
      
    },
    reducers:{
        resturantsRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        resturantsSuccess(state,action){ 
            return{
                ...state,
             loading:false,
             restarunts:action.payload.restarunts,
            
            }
        },
        resturantsFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
    }
       
})

const{actions, reducer} = resturantsSlice;

export const{resturantsRequest,resturantsSuccess,resturantsFailed} = actions

export default reducer;