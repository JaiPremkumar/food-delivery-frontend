import { useDispatch, useSelector } from "react-redux"

import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { admOrder } from "./action/ordersAction"



export default function AdminOrder(){

    const{orders={}} = useSelector(state=>state.ordersState)
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(admOrder)
    },[])

    return(
        <>
        <section className="py-4 container">
       
       <div className="row justify-content-center">
           <div className="col-12">
               <h2>products:{orders._id} </h2>
               {Array.isArray(orders)&&orders?.map(order=>(
         <div className="row">
             <table className="table mr-1">
                   
                       <tr key={order._id} >
                           <td>
                               <b>{order._id}</b>
                           </td>
                           <td>
                               <b>{order.user}</b>
                           </td>
                           {order.orderItem.map(item=>(
                           <td>
                            <b>{item.name}</b>
                            <b>{item.price}</b>
                           </td>
                           
                        ))}
                           <td><b>TotalPrice: {order.itemsPrice}</b></td>
                          
                   
                               <Button
                               //onClick={()=>handleMove(item._id)} 
                               >Eidt</Button>
                           
                               <Button  className="btn btn-danger ms-2"
                           
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