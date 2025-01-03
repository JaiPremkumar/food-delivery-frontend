import { createSlice } from "@reduxjs/toolkit";

const favourSlice = createSlice({
    name:'cart',
    initialState:{
        items:localStorage.getItem('favourItems')?JSON.parse(localStorage.getItem('favourItems')):[],
        loading:false,
        
    },
    reducers:{
        favourItemRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        favourItemSuccess(state,action){
            const item = action.payload

            const isItemExit = state.items.find(i=>i.product == item.product)

            if(isItemExit){
                state={
                    ...state,
                    loading:false
                }
            }else{
                state={
                    items:[...state.items,item],
                    loading:false

                }
                localStorage.setItem('favourItems',JSON.stringify(state.items))
            }
            return state
        },
        favourResItemRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        favourResItemSuccess(state,action){
            const item = action.payload

            const isItemExit = state.items.find(i=>i.restarunt == item.restarunt)

            if(isItemExit){
                state={
                    ...state,
                    loading:false
                }
            }else{
                state={
                    items:[...state.items,item],
                    loading:false

                }
                localStorage.setItem('favourItems',JSON.stringify(state.items))
            }
            return state
        },
        removeItemfavour(state,action){
            const filterItem = state.items.filter(item=>{
                return item.product !== action.payload
            })
            localStorage.setItem('favourItems',JSON.stringify(filterItem))
            return{
                ...state,
                items:filterItem
            }
        }
    }
})

const{actions, reducer} = favourSlice;

export const{favourItemRequest,favourItemSuccess,favourResItemRequest,favourResItemSuccess,removeItemfavour} = actions;

export default reducer;