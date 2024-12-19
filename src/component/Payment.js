import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderComplete } from './slices/CartSlice'
import { createsOrder } from './action/ordersAction'
import { validShipping } from './Shipping'

export default function Payment(){

    const stripe = useStripe()
    const Element = useElements()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orderInfo=JSON.parse(sessionStorage.getItem('orderInfo'))

    const {shippingInfo,items:cartItems}=useSelector(state=>state.cartState)
    const {isAuthenticated, user}=useSelector(state=>state.userState)

    const PaymentData={
        amount:orderInfo.totalPrice,
         
    }

    const order={
        orderItem:cartItems,
        shippingInfo
    }
    if(orderInfo){
        
        order.itemsPrice= orderInfo.itemsPrice
        order.taxPrice=orderInfo.taxPrice
        order.totalPrice=orderInfo.totalPrice
        order.shippingPrice=orderInfo.shippingPrice
        
    }
    useEffect(()=>{
        validShipping( shippingInfo,navigate)
       
    },[])

    const handleSub= async()=>{
        document.querySelector('#bbtn').disabled=true
        try {
            const {data} = await axios.post('https://backend-food-delivery-1.onrender.com/api/v1/payment',PaymentData)
            const client_secret=data.client_secret
            const res = stripe.confirmCardPayment(client_secret,{
                payment_method:{
                    card:Element.getElement(CardNumberElement),
                    billing_details:{
                        name:user.name,
                        email:user.email
                    }
                }
            })
            if((await res).error){
                alert('payment-failed')
                document.querySelector('#bbtn').disabled=false
            }else{
                if((await res).paymentIntent.status==='succeeded'){
                    alert('payment-success')
                    dispatch(orderComplete())
                    dispatch(createsOrder(order))
                }else{
                    alert('try-again')
                }
            }

        } catch (error) {
            
        }
    }
  
    return(
        <>
          <h2 className="title">LOGIN</h2>
        <form className="forms" >
            <h5>CARD NUMBER</h5>
            <CardNumberElement
            type="number"
            name='email'
           
            placeholder='email'
            />
             <br/>

             <h5>CARD EXPIRE</h5>
             <CardExpiryElement
            type="number"
            name='email'
           
            placeholder='email'
            />
              <br/>
              <h5>CARD cvc</h5>
            <CardCvcElement
            type="number"
            name='email'
           
            placeholder='email'
            />
             <br/>
            <Button
            id='bbtn'
            onClick={handleSub} 
            >PAY-{orderInfo&&orderInfo.totalPrice}</Button>
            </form>
            
        </>
    )
}