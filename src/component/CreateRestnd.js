import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createResturant } from "./action/resturantsAction";
import { useNavigate } from "react-router-dom";

export default function CreateRestnd(){

    const[restarunt,setRestarunt] = useState("")
    const[bookingPrice,setBookingPrice] = useState("")
    const[address,setAddress] = useState("")
    const[city,setCity] = useState("")
    const[state,setState] = useState("")
    const[country,setCountry] = useState("")
    const[cuisine,setCuisine] = useState("")
    const[image,setImage] = useState("")
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isCreated } = useSelector(state=>state.resturantState)
    const handleCreateMenu=()=>{
        const formData = new FormData()
        formData.append('restarunt',restarunt)
        formData.append('cuisine',cuisine)
        formData.append('bookingPrice',bookingPrice) 
        formData.append('address',address)
        formData.append('city',city)
        formData.append('state',state)
        formData.append('country',country)
        formData.append('image',image)
        
     dispatch(createResturant(formData))
     alert(`${restarunt} isCREATED`)
    }

     useEffect(()=>{
            if(isCreated){
                alert('restarunt is created')
              navigate('/')
            }
        },[isCreated])
    return(
        <>
        <h2 className="title">CREATE</h2> 
        <form className="forms " >  
 
            <input type="text"
            name='restarunt'
            value={restarunt}
            onChange={(e)=>setRestarunt(e.target.value)}
            placeholder='RestaruntName' 
            />
         <input type="text"
            name='cuisine' 
            value={cuisine}
            onChange={(e)=>setCuisine(e.target.value)} 
            placeholder='cuisine' 
            />

            <input type="text" 
            name='address'
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            placeholder='address'
            />
             <input type="text"
            name='city'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder='city' 
            />
         
            <input type="text" 
            name='state'
            value={state}
            onChange={e=>setState(e.target.value)}
            placeholder='state'
            />
             <input type="text"
            name='country'
            value={country}
            onChange={e=>setCountry(e.target.value)}
            placeholder='country' 
            />
         
            <input type="text" 
            name='bookingPrice'
            value={bookingPrice}
            onChange={e=>setBookingPrice(e.target.value)}
            placeholder='Booking-Price'
            />
             <input type="file" 
            
            onChange={e=>setImage(e.target.files[0])}
    
            />
           
           
            <Button 
            onClick={(e)=>handleCreateMenu(e)}
            
            >Create</Button>
            
         
        </form>
        </>
    )
}