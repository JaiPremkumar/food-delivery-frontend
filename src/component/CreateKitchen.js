import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createKitchen } from "./action/kitchensAction"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function CreateKitchen(){

    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescrition]=useState("")
    const[kitchenName,setKitchenName]=useState("")
    const[image,setImage]=useState("")
    const[categories,setCategories]=useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const{isCreated} = useSelector(state=>state.kitchenState)
    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('image',image)
        formData.append('kitchenName',kitchenName)
        formData.append('categories',categories)
        dispatch(createKitchen(formData))
        alert(`${kitchenName} isCREATED`)
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
            name='kitchenName'
            value={kitchenName}
            onChange={(e)=>setKitchenName(e.target.value)}
            placeholder='kitchen-Name' 
            />

             <input type="file"
            
            onChange={(e)=>setImage(e.target.files[0])}
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