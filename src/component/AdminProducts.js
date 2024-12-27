import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adminProducts } from "./action/ProductsAction"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { updateProduct } from "./action/ProductAction"
import axios from "axios"
import { adminResturant } from "./action/resturantAction"
import { adminKitchen } from "./action/kitchenAction"

export default function AdminProducts(){


        const dispatch =useDispatch()
        const navigate = useNavigate()


    const{products} = useSelector(state=>state.productsState)
    const{ restarunts} = useSelector((state)=>state.resturantsState) 
      const{kitchens} = useSelector((state)=>state.kitchensState) 

    const handleMove=(id)=>{
        navigate(`/admin/update/${id}`) 
    }
    const handleDelete=async (id) => {
        await axios.delete(`https://backend-food-delivery-1.onrender.com/api/v1/product/${id}`)
    }
    const deleteKitchen=async (id) => {
        await axios.delete(`https://backend-food-delivery-1.onrender.com/api/v1/kitchen/${id}`)
    }
    const deleteRes=async (id) => {
        await axios.delete(`https://backend-food-delivery-1.onrender.com/api/v1/rest/${id}`)
    }

    useEffect(()=>{
        dispatch(adminProducts)
        dispatch(adminResturant)
        dispatch(adminKitchen)
        
    },[])
    return(
        <>
        <section className="py-4 container">
       
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>products </h2>
            {products&&products.map((item,_id)=>(
              <div className="row">
                  <table className="table mr-1">
                        
                            <tr key={item._id} >
                                <td>
                                    <b>{item._id}</b>
                                </td>
                                <td><b>{item.name}</b></td>
                                <td><b>{item.price}</b></td>
                               
                        
                                    <Button
                                    onClick={()=>handleMove(item._id)} 
                                    >Eidt</Button>
                                
                                    <Button  className="btn btn-danger ms-2"
                                     onClick={()=>handleDelete(item._id)}
                                    >Remove</Button>
                                     </tr>
                                     </table>
                                    </div>))}
               </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>products </h2>
            {kitchens&&kitchens.map((item,_id)=>(
              <div className="row">
                  <table className="table mr-1">
                        
                            <tr key={item._id} >
                                <td>
                                    <b>{item._id}</b>
                                </td>
                                <td><b>{item.name}</b></td>
                                <td><b>{item.price}</b></td>
                               
                        
                                    <Button
                                    
                                    >Eidt</Button>
                                
                                    <Button  className="btn btn-danger ms-2"
                                     onClick={()=>deleteKitchen(item._id)}
                                    >Remove</Button>
                                     </tr>
                                     </table>
                                    </div>))}
               </div>
            </div> 

            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>products </h2>
            {restarunts&&restarunts.map((item,_id)=>(
              <div className="row">
                  <table className="table mr-1">
                        
                            <tr key={item._id} >
                                <td>
                                    <b>{item._id}</b>
                                </td>
                                <td><b>{item.restarunt}</b></td>
                        
                                    <Button
                            
                                    >Eidt</Button>
                                
                                    <Button  className="btn btn-danger ms-2"
                                     onClick={()=>deleteRes(item._id)}
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