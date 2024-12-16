import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adminProducts } from "./action/ProductsAction"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { updateProduct } from "./action/ProductAction"

export default function AdminProducts(){


        const dispatch =useDispatch()
        const navigate = useNavigate()


    const{products} = useSelector(state=>state.productsState)

    const handleMove=(id)=>{
        navigate(`/admin/update/${id}`) 
    }

    useEffect(()=>{
        dispatch(adminProducts)
        
    },[])
    return(
        <>
        <section className="py-4 container">
       
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2>products: </h2>
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