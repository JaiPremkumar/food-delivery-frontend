import { useEffect, useState } from "react"
import { register } from "./action/authAction"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";
import './Apps.css'

export default function RegisterFrm(){

    const initError={
        email:{required:false},
        name:{required:false},
        password:{required:false},
        custom_error:{required:false}
    }
     const dispatch = useDispatch()
     const navigate = useNavigate()
    const[errors,setErrors] = useState(initError)
    
    const{error, isAuthenticated} = useSelector(state=>state.userState)
    const handleSubmit =(e)=>{
        let errors = initError
        
        if(inputs.name==""){
            errors.name.required=true
            
        }

        if(inputs.email==""){
            errors.email.required=true
            
        }

        if(inputs.password==""){
            errors.password.required=true
        
        }

        if(inputs.password<=5){
            errors.custom_error.required=true
            
        }

        const formData = new FormData()
        formData.append('name',inputs.name)
        formData.append('email',inputs.email)
        formData.append('password',inputs.password)
        formData.append('avatar',avatar)

        
            dispatch(register(formData))
            console.log(formData)
        

        setErrors(errors)
    }
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    })

    const[avatar,setAvatar]=useState("")
    const[prev,setPrev] = useState("")

    const handleInput=(e)=>{
        /*if(e.target.name ==="avatar"){ 
            const reader = new FileReader
            reader.onload=()=>{
                if(reader.readyState===2){
                    setPrev(reader.result)
                    setAvatar(e.target.files[0])
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }else{*/

        setInputs({...inputs,[e.target.name]:e.target.value})
        
    }
   
    useEffect(()=>{
        if(isAuthenticated){
        navigate('/login')
        }
    })
    return(
        <>
         
        <h2 className="title">Register</h2>
        <form className="forms" >
            <input type="name"
            name='name'
            value={inputs.name}
            placeholder='name'
            onChange={handleInput} 
            
            />
             {errors.name.required?
            (<span className='text-danger'>required</span>):null
            }
            
            <input type="email"
            name='email'
            value={inputs.email}
            placeholder='email'
            onChange={handleInput}
            
            />
             {errors.email.required?
            (<span className='text-danger'>required</span>):null
            }

            <input type="password"
            name='password'
            value={inputs.password}
            placeholder='password'
            onChange={handleInput}
            />
             {errors.password.required?
            (<span className='text-danger'>required</span>):null
            }

            <input type="file"
            onChange={(e)=>setAvatar(e.target.files[0])}  
            />

            <Button onClick={(e)=>handleSubmit(e)}>Register</Button>
            {errors.custom_error.required?
            (<span className='text-danger'>must be 6 character</span>):null
            }
        </form>
        
        </>
    )
}