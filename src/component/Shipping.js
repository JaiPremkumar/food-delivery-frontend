import { useState } from "react";
import { saveShipping } from "./slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const validShipping=(shippingInfo,navigate)=>{
    
    if(
        !shippingInfo.address||
        !shippingInfo.city||
        !shippingInfo.phone||
        !shippingInfo.postal||
        !shippingInfo.state||
        !shippingInfo.country
    ){
        alert("shipping field in valid")
        navigate('/shipping')
    }
}

export default function Shipping(){
     const {shippingInfo={}}=useSelector(state=>state.cartState)

    const[address,setAddress] = useState(shippingInfo.address)
    const[city,setCity] = useState(shippingInfo.city)
    const[phone,setPhone] = useState(shippingInfo.phone)
    const[postal,setPostal] = useState(shippingInfo.postal)
    const[state,setState]=useState(shippingInfo.state)
    const[country,setCountry]=useState(shippingInfo.country)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{ 
        dispatch(saveShipping({address,city,phone,postal,state,country}))
        navigate('/confirm')
    }

    return(
        <>
         
      <h2 className="title">SHIPPING</h2>
         <form className="forms" >
             <input type="text"
             name='address'
             value={address}
             placeholder='address'
             onChange={e=>setAddress(e.target.value)} 
             />
             
             
             <input type="text"
             name='city'
             value={city}
             placeholder='city'
             onChange={e=>setCity(e.target.value)}
             />

          <input type="text"
             name='PhoneNo'
             value={phone}
             placeholder='PhoneNo'
             onChange={e=>setPhone(e.target.value)} 
             />
             
             
             <input type="text"
             name='postalcode'
             value={postal}
             placeholder='Postalcode'
             onChange={e=>setPostal(e.target.value)}
             />

           <input type="text"
             name='postalcode'
             value={state}
             placeholder='state'
             onChange={e=>setState(e.target.value)}
             />

          <input type="text"
             name='postalcode'
             value={country}
             placeholder='country'
             onChange={e=>setCountry(e.target.value)}
             />
             
             <Button onClick={()=>handleSubmit()}>CHECK-OUT</Button>
         </form>
        </>
        
    )
}