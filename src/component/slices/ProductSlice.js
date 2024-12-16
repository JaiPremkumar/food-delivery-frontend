import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        loading:false,
    },
    reducers:{
        productsRequest(state,action){
            return{
                loading:true
            }
        },
        productsSuccess(state,action){
            return{
             loading:false,
             products:action.payload.products
            }
        },
        productsFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },
        seaProductsRequest(state,action){
            return{
                loading:true
            }
        },
        seaProductsSuccess(state,action){
            return{
             loading:false,
             products:action.payload.products
            }
        },
        seaProductsFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },
        seacatProductsRequest(state,action){
            return{
                loading:true
            }
        },
        seacatProductsSuccess(state,action){
            return{
             loading:false,
             products:action.payload.products
            }
        },
        seacatProductsFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },
        resProductsRequest(state,action){
            return{
                loading:true
            }
        },
        resProductsSuccess(state,action){
            return{
             loading:false,
             products:action.payload.products
            }
        },
        resProductsFailed(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },
       
        
    }
})

const{actions, reducer} = productsSlice;

export const{productsRequest,productsSuccess,productsFailed,
    seaProductsRequest,seaProductsSuccess,seaProductsFailed,
    seacatProductsRequest,seacatProductsSuccess,seacatProductsFailed,
    resProductsRequest,resProductsSuccess,resProductsFailed
} = actions;

export default reducer;
