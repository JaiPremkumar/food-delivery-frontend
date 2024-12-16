import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { createProduct } from "./action/ProductAction"
import { useNavigate } from "react-router-dom"


export default function CreateProduct(){

    const dispatch = useDispatch()
    const[name,setName] = useState("") 
    const[price,setPrice] = useState("")
    const[description,setDescription] = useState("")
    const[image,setImage] = useState("")
    const[seller,setSeller] = useState("")
    const [categories,setCategories] = useState("")
        
    
      const navigate = useNavigate()
    const{isCreated} = useSelector(state=>state.productState)
    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('seller',seller)
        formData.append('categories',categories) 
        formData.append('image',image)
        dispatch(createProduct(formData))   
        alert(`${name} isCREATED`) 
    }

     useEffect(()=>{
            if(isCreated){
                alert('product is created')
              navigate('/')
            }
        },[isCreated])

    return(
        <>
         <h2 className="title">CREATE-PRODUCT</h2>
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

           <input type="file"
            
            onChange={e=>setImage(e.target.files[0])}  
            />
         
         <input type="text"
             name='categories'
             value={categories}
             placeholder='categories'
             onChange={e=>setCategories(e.target.value)} 
             
             />
           
             <input type="text"
             name='seller'
             value={seller}
             placeholder='seller'
             onChange={e=>setSeller(e.target.value)}
             
             />
             
             <Button onClick={(e)=>handleSubmit(e)}>Create</Button>
            
         </form>
        </>
    )
}