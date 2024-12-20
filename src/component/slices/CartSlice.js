import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        loading:false,
        shippingInfo:localStorage.getItem('shippingInfo')?JSON.parse(localStorage.getItem('shippingInfo')):{}
    },
    reducers:{
        addItemRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        addItemSuccess(state,action){
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
                localStorage.setItem('cartItems',JSON.stringify(state.items))
            }
            return state
        },
        increaseQty(state,action){
            state.items = state.items.map(item=>{
                if(item.product == action.payload){
                    item.quantity = item.quantity+1
                }
                return item;
            })
            localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        decreaseQty(state,action){
            state.items = state.items.map(item=>{
                if(item.product == action.payload){
                    item.quantity = item.quantity-1
                }
                return item;
            })
            localStorage.setItem('cartItems',JSON.stringify(state.items))
        },
        removeItem(state,action){
            const filterItem = state.items.filter(item=>{
                return item.product !== action.payload
            })
            localStorage.setItem('cartItems',JSON.stringify(filterItem))
            return{
                ...state,
                items:filterItem
            }
        },
        saveShipping(state,action){
        localStorage.setItem('shippingInfo',JSON.stringify(action.payload))
        return{
           ...state,
           shippingInfo:action.payload
            }
        },
        orderComplete(state,action){
            localStorage.removeItem('shippingInfo')
            localStorage.removeItem('cartItem')
            sessionStorage.removeItem('orderInfo')
            return{
        items:[],
        loading:false,
        shippingInfo:{}
    
            }
        }
           
    }
})

const{actions, reducer} = cartSlice;

export const{addItemRequest,addItemSuccess,increaseQty,decreaseQty,removeItem,
saveShipping,orderComplete} = actions;

export default reducer;