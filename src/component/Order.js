import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  decreaseQty, increaseQty, removeItem } from "./slices/CartSlice"
import { Link, useNavigate } from "react-router-dom"
import { Prev } from "react-bootstrap/esm/PageItem"

export default function Order(){

    const {items} = useSelector(state=>state.cartState)
    const dispatch = useDispatch()
    const [cart,setCart] = useState()
    const navigate = useNavigate()

      const increaseQtycart=(item)=>{
       const count =item.quantity
       if(count ==0 ) return
       dispatch(increaseQty(item.product)
       )
      }

      const decreaseQtycart=(item)=>{
        const count =item.quantity
        if(count ==1 ) return
        dispatch(decreaseQty(item.product)
        )
       }
     
   

    const checkout=()=>{
        navigate('/login?redirect=shipping')
    }

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
                                <td><b>{item.price}</b></td>
                                
                                <td>
                                    <div className="w-100">
                                    <button className="btn btn-info "
                                    onClick={()=>decreaseQtycart(item)}
                                    >-</button>
                                   <input type="number" style={{width:'50px'}}
                                   value={item.quantity}
                                   />
                                    <button  className="btn btn-info "
                                    onClick={()=>increaseQtycart(item)}
                                    >+</button>
                                    <br/>
                                    <button  className="btn btn-danger "
                                    onClick={()=>dispatch(removeItem(item.product))}
                                    >Remove</button>
                                    </div>
                                </td>
                            </tr>
                
                    </table>))}
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price:$ {items.reduce((acc,item)=>(acc+item.quantity *item.price),0)}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                
                    >Clear Cart</button>
                    <button  onClick={checkout} className="btn btn-primary m-2">Buy Now</button>
                </div>
            </div>

        </section>)}
        </>
    )
}

