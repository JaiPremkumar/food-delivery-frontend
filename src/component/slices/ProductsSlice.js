import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        loading:false,
        product:{},
        isCreated:false,
        isUpdate:false,
        reviewed:false
    },
    reducers:{
        productRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        productSuccess(state,action){
            return{
                ...state,
             loading:false,
             product:action.payload.product,
            
            }
        },
        productFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        productCrtRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        productCrtSuccess(state,action){
            return{
             loading:false,
             product:action.payload.product,
             isCreated:true,
            }
        },
        productCrtFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        productUpdRequest(state,action){   
            return{
                ...state,
                loading:true
            }
        },
        productUpdSuccess(state,action){
            return{
                ...state,
             loading:false,
             product:action.payload.product, 
             isUpdate:true
             
            }
        },
        productUpdFailed(state,action){ 
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        },
        reviewRequest(state,action){   
            return{
                ...state,
                loading:true
            }
        },
        reviewSuccess(state,action){
            return{
                ...state,
             loading:false,
             reviewed:true
             
             
            }
        },
        reviewFailed(state,action){ 
            return{
                ...state,
                loading:false,
                error:action.payload
                
            }
        }
        
        
        
    }
})

const{actions, reducer} = productSlice;

export const{productRequest,productSuccess,productFailed,
 productCrtRequest,productCrtSuccess,productCrtFailed,
 productUpdSuccess,productUpdRequest,productUpdFailed,
 reviewRequest,reviewSuccess,reviewFailed
} = actions;

export default reducer;