import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { updateProduct } from "./action/ProductAction"
import { useParams } from "react-router-dom"

export default function UpdateProduct(){

    const dispatch = useDispatch()
    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[description,setDescription] = useState("")
    const[image,setImage] = useState("")
    const[seller,setSeller] = useState("")
    const [categories,setCategories] = useState("")
 
    const{id} = useParams()
    const handleSubmit=()=>{
        /*const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('seller',seller)
        formData.append('category',category) 
        formData.append('image',image)*/
        dispatch(updateProduct(id,name,price,image,seller,categories,description))    
    }

    return(
    <>
     <h2 className="title">UPDATE-PRODUCT</h2>
         <form className="forms" >
             <input type="text"
             name='name'
             value={name}
             placeholder='name'
             onChange={e=>setName(e.target.value)} 
             
             />
             
             
             <input type="text"
             name='price'
             value={price}
             placeholder='Price'
             onChange={e=>setPrice(e.target.value)}
             
             />

          <input type="text"
             name='description'
             value={description}
             placeholder='description'
             onChange={e=>setDescription(e.target.value)} 
             
             />

           <input type="text"
            name="image"
            value={image}
            onChange={e=>setImage(e.target.value)}  
            />
         
             
             <select className="form-select" value={categories} onChange={e=>setCategories(e.target.value)}>
                
              <option >select</option>
              <option >non-veg</option>
              <option >veg</option>
            </select>
             <input type="text"
             name='seller'
             value={seller}
             placeholder='seller'
             onChange={e=>setSeller(e.target.value)}
             
             />
             
             <Button 
             onClick={(e)=>handleSubmit(e)}
            >UPDATE</Button>
            
         </form>
    </>
    )
}