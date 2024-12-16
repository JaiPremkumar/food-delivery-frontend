import { applyMiddleware,combineReducers, configureStore } from'@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import productsReducer from './slices/ProductSlice';
import userReducer from './slices/userSlice';
import productReducer from './slices/ProductsSlice';
import cartReducer from './slices/CartSlice'
import usersReducer from './slices/UsersSlice'
import ordersReducer from './slices/OrderSlice'
import resturantsReducer from './slices/ResturantsSlice'
import resturantReducer from './slices/RestaruntSlice'
import kitchenReducer from './slices/KitchensSlice'
import kitchennReducer from './slices/KitchenSlice'
import favourReducer from './slices/FavourSlice'


const store = configureStore({
    reducer:{
        productsState:productsReducer,
        userState:userReducer,
        productState:productReducer,
        cartState:cartReducer,
        usersState:usersReducer,
        ordersState:ordersReducer,
        resturantsState:resturantsReducer,
        resturantState:resturantReducer,
        kitchensState:kitchenReducer,
        kitchenState:kitchennReducer,
        favourState:favourReducer,
    },
    
}, applyMiddleware(thunk))

export default store; 