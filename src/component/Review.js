import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, isReview } from "./action/ProductAction"
import { useParams } from "react-router-dom"

export default function Review(){

    const[rating,setRating] = useState()
    const[comment,setComment] =useState() 
    const dispatch = useDispatch()

    
    const {id} = useParams()

    
    const{loading, product={}} = useSelector(state=>state.productState)
    const handleSubmit=()=>{
      dispatch(isReview(id,rating,comment))
    }
      useEffect(()=>{
        if(product._id){
        getProduct(id)
        }
      })
   
    return(
    <>
      <h2 className="title">LOGIN</h2> 
        <form className="forms" >  
 
            <input type="text"
            name='rating'
            value={rating}
            onChange={e=>setRating(e.target.value)} 
            placeholder='review' 
            />
         


            <input type="text" 
            name='comment'
            value={comment}
            onChange={e=>setComment(e.target.value)} 
            placeholder='comment'
            />
           
            <Button onClick={handleSubmit}
            
            >Review</Button>
            
         
        </form>
    </>
    )
}