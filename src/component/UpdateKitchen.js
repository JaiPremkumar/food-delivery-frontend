import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export default function updateKitchen(){

        
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescrition]=useState("")
    const[kitchenName,setKitchenName]=useState("")
    const[image,setImage]=useState("")
    const[categories,setCategories]=useState("")

    const dispatch = useDispatch()
    const{id}=useParams()
  
    const handleSubmit=()=>{
        dispatch(updateKitchen(id,name,price,description,kitchenName,image,categories))
    }
   

    return(
        <>
             <h2 className="title">Menu</h2> 
        <form className="forms ml-0"  >  
 
            <input type="text"
            name='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Dish' 
            />
         


            <input type="text" 
            name='price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder='Price'
            />
             <input type="text"
            name='description'
            value={description}
            onChange={(e)=>setDescrition(e.target.value)}
            placeholder='Menu-Description' 
            />

           <input type="text"
            name='description'
            value={kitchenName}
            onChange={(e)=>setKitchenName(e.target.value)}
            placeholder='kitchen-Name' 
            />

             <input type="text"
            name='image'
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            placeholder='image' 
            />
              <input type="text"
            name='image'
            value={categories}
            onChange={(e)=>setCategories(e.target.value)}
            placeholder='category' 
            />

            <Button
            onClick={(e)=>handleSubmit(e)}
            >Create-Kitchen</Button>
            </form>
            
        </>
    )
}