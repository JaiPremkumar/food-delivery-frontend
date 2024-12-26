import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./action/authAction"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import RegisterFrm from "./RegisterFrm"
import './Apps.css'

export  default function LoginForm(){

    const initError={
        email:{required:false},
        password:{required:false},
        custom_error:{required:false}
    }
     const dispatch = useDispatch()
    const[email,setEmail] = useState("")
    const[password,setPassword] =useState("")
    const loaction = useLocation()

    const[errors,setErrors] = useState(initError)

    
    const navigate = useNavigate()
   
   const redirect = loaction.search?'/'+ loaction.search.split('=')[1]:'/'
   const{loading, error,isLogin, isAuthenticated, user} = useSelector(state=>state.userState)

    const handleSubmit=()=>{
        let errors =initError
        
      if(email==""){
        errors.email.required=true
        
      }

      if(password==""){
        errors.password.required=true
      
      }

      if(password.length<=5){
        errors.custom_error.required=true
        
      }

      
      dispatch(login(email,password))
      console.log(user.token)
      setErrors(errors)
    }
    
    useEffect(()=>{
      if(isLogin){
        navigate('/home')
      }
    })

    return(
        <>
        
          <h2 className="title">LOGIN</h2>
        <form className="forms" >

            <input type="email"
            name='email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder='email'
            />
            {errors.email.required?
            (<span className='text-danger'>required</span>):null
            }


            <input type="password"
            name='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder='password'
            />
            {errors.password.required?
            (<span className='text-danger'>required</span>):null 
            }
            {errors.custom_error.required?
            (<span className='text-danger'>Must be 6 characters</span>):null
            }

            <Button onClick={handleSubmit} 
            
            >Login</Button>
            <Link to={'/'}><p>NewUser</p></Link>
              
        </form>
        
        </>
    )
}