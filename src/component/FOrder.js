import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  decreaseQty, increaseQty, removeItem } from "./slices/CartSlice"
import { Link, useNavigate } from "react-router-dom"
import { Prev } from "react-bootstrap/esm/PageItem"

export default function FOrder(){

    const {items} = useSelector(state=>state.favourState)
    const dispatch = useDispatch()
    const [cart,setCart] = useState()
    const navigate = useNavigate()

     

    return(
    <>
    {items.length==0?<h2>Your cart ie Empty</h2>:
        (<section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>cart: {items.length}</h2>
                    {items&&items.map(item=>(
                    <table className="table m-0">
                        
                            <tr >
                                <td>
                                    <img src={item.image} style={{height:"4rem",width:'4rem'}}/>
                                </td>
                                <td><b>{item.name}</b></td>
                                <td><b>{item.restarunt}</b></td>
                                
                                <td>
                                   <div>
                                    <button  className="btn btn-danger "
                                    onClick={()=>dispatch(removeItem(item.product))}
                                    >Remove</button>
                                    </div>
                                </td>
                            </tr>
                
                    </table>))}
             </div>
             </div>

        </section>)}
        </>
    )
}
