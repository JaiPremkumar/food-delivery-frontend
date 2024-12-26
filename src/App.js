import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import ProductCart from './component/ProductCart';
import Carosel from './component/Carosel';
import store from './component/store';
import { useEffect, useState } from 'react';
import { loadUser } from './component/action/authAction';
import Profile from './component/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import RegisterFrm from './component/RegisterFrm';
import UpdateProfile from './component/UpdateProfile';
import ProductDetail from './component/ProductDetail';
import ConfirmOrder from './component/ConfirmOrder';
import Shipping from './component/Shipping';
import CreateProduct from './component/CreateProduct';
import Search from './component/Search';
import AdminProducts from './component/AdminProducts';
import UpdateProduct from './component/UpdateProduct';
import Review from './component/Review';
import AdminPanel from './component/AdminPanel';
import AdminUser from './component/AdminUser';
import AdminUserUpdate from './component/AdminUserUpdate';
import AdminOrder from './component/AdminOrder';
import UserOrder from './component/UserOrder';
import Google from './component/Google';
import Slide from './component/slide';
import Restarunt from './component/Restarunt';
import KitchenDetail from './component/KitchenDetail';
import CreateRestnd from './component/CreateRestnd';
import CreateKitchen from './component/CreateKitchen';
import { useSelector } from 'react-redux';
import AccountBoard from './component/AccountBoard';
import axios from 'axios';
import{ Elements } from '@stripe/react-stripe-js'
import Payment from './component/Payment';
import { loadStripe } from '@stripe/stripe-js';


function App() {
  const[stripe,setStripe]=useState("")
 const{isAuthenticated, isLogin} = useSelector(state=>state.userState)
  useEffect(()=>{
    if(isAuthenticated){
        store.dispatch(loadUser)
    }
  
    async function getStripe() {
      const{data}=await axios.get(`https://backend-food-delivery-1.onrender.com/api/v1/stripe`)
      setStripe(data.stripeApiKey)
    }
    getStripe()
    },[isAuthenticated])  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<RegisterFrm/>}/> 
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/home' element={<Carosel/>}/>
        <Route path='/Dp' element={<Profile/>}/>
        <Route path='/updateDp' element={<UpdateProfile/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
       <Route path='/confirm' element={<ConfirmOrder/>}/>
       <Route path='/create' element={<CreateProduct/>}/>
       <Route path='/search' element={<Search/>}/>
       <Route path='/admin/product' element={<AdminProducts/>}/>
       <Route path='/admin/update/:id' element={<UpdateProduct/>}/>
       <Route path='/review/:id' element={<Review/>}/>
       <Route path='/adminpanel' element={<AdminPanel/>}/>
       <Route path='/adminuser' element={<AdminUser/>}/>
       <Route path='/adminupdate/:id' element={<AdminUserUpdate/>}/>
       <Route path='/order' element={<AdminOrder/>}/>
       <Route path='/userorder' element={<UserOrder/>}/>
       <Route path='/rest/:id' element={<Restarunt/>}/>
       <Route path='/kitchen/:id' element={<KitchenDetail/>}/>
       <Route path='/create-rest' element={<CreateRestnd/>}/>
       <Route path='/create-kitchen' element={<CreateKitchen/>}/>
       <Route path='/account' element={<AccountBoard/>}/>
       {stripe&&<Route path='/payment' element={<Elements stripe={loadStripe(stripe)}><Payment/></Elements> }/>}
      </Routes>
    
      </BrowserRouter>
     
      
     
    </div>
  );
}

export default App;
 