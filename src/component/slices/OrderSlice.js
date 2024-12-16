import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
    name:'orders',
  initialState:{
    loading:false,
    orderDetail:{},
    
    
  },
  reducers:{
    getOrderRequest(state,action){
        return{
            loading:true
        }
    },
    getOrderSuccess(state,action){
        return{
            loading:false,
            orders:action.payload.orders

        }
    },
    getOrderFailed(state,action){
        return{
          error:action.payload
        }
    },
    crtOrderRequest(state,action){
      return{
          loading:true
      }
  },
  crtOrderSuccess(state,action){
      return{
          loading:false,
          orderDetail:action.payload

      }
  },
  crtOrderFailed(state,action){
      return{
        error:action.payload
      }
    },
    userOrderRequest(state,action){
      return{
          loading:true
      }
  },
  userOrderSuccess(state,action){
      return{
          loading:false,
          orders:action.payload.orders

      }
  },
  userOrderFailed(state,action){
      return{
        error:action.payload
      }
   },
  
  }
})

const{actions, reducer} = ordersSlice;

export const{getOrderRequest,getOrderSuccess,getOrderFailed,
  crtOrderRequest,crtOrderSuccess,crtOrderFailed, userOrderRequest,userOrderSuccess,userOrderFailed
} = actions;

export default reducer;