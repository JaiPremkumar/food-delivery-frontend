import { useState } from "react"
import { useDispatch } from "react-redux"
import { adminUserUpdate } from "./action/usersAction"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function AdminUserUpdate(){

    const[name,setName] = useState("")
    const [email,setEmail]=useState("")

    const dispatch = useDispatch()
    const {id}=useParams()

    const handleSubmit=()=>{
       dispatch(adminUserUpdate(id,name,email))
    }
    return(
        <>
         <h2 className="title">update-user</h2> 
        <form className="forms" >  
 
            <input type="text"
            name='name'
            value={name}
            onChange={e=>setName(e.target.value)} 
            placeholder='name' 
            />
         


            <input type="text" 
            name='email'
            value={email}
            onChange={e=>setEmail(e.target.value)} 
            placeholder='email'
            />
           
            <Button onClick={handleSubmit}
            
            >Review</Button>
            
         
        </form>
        </>
    )
}