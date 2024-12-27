import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { adminUser } from "./action/usersAction"
import { Link } from "react-router-dom"
import axios from "axios"

export default function AdminUser(){

    const{users} = useSelector(state=>state.usersState)
    const dispatch = useDispatch()

    const handleDelete=async (id) => {
        await axios.delete(`https://backend-food-delivery-1.onrender.com/api/v1/user/${id}`)
        
    }

    useEffect(()=>{
        dispatch(adminUser)
    },[])

    return(
        <>
         <section className="py-4 container">
       
       <div className="row justify-content-center">
           <div className="col-12">
               <h2>products: </h2>
       {users&&users.map((item,_id)=>(
         <div className="row">
             <table className="table mr-1">
                   
                       <tr key={item._id} >
                           <td>
                               <b>{item._id}</b>
                           </td>
                           <td><b>{item.name}</b></td>
                           <td><b>{item.email}</b></td>
                          
                   
                               <Link to={`adminupdate/${item._id}`}><Button
                               
                               >Eidt</Button></Link>
                           
                               <Button  className="btn btn-danger ms-2"
                             onClick={()=>handleDelete(item._id)}
                               >Remove</Button>
                                </tr>
                                </table>
                               </div>))}
          </div>
       </div> 

   </section>
        </>
    )
}