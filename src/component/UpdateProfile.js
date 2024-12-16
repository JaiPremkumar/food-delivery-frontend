import { useEffect, useState } from "react"
import {  updateProfile } from "./action/authAction"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";
import './Apps.css'

export default function UpdateProfile(){ 

   
     const dispatch = useDispatch() 
     const navigate = useNavigate()
     const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    

  const handleSubmit=()=>{
    dispatch(updateProfile(name,email))
  }
    
    return(
        <>
         
        <h2 className="title">UPDATE PROFILE</h2>
        <form className="forms" >
            <input type="name"
            name='name'
            value={name}
            placeholder='name'
            onChange={e=>setName(e.target.value)} 
            
            />
            
            
            <input type="email"
            name='email'
            value={email}
            placeholder='email'
            onChange={e=>setEmail(e.target.value)}
            
            />
            
            <Button onClick={(e)=>handleSubmit(e)}>Register</Button>
           
        </form>
        
        </>
    )
}