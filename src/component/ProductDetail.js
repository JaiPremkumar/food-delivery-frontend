import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, isReview } from "./action/ProductAction"
import { Link, useParams } from "react-router-dom"
import { addCartItem } from "./action/cartAction"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import store from "./store"
import { loadUser } from "./action/authAction"
import { favourItem } from "./action/FavourAction"


export default function ProductDetail(){
 
    const{loading, product={}} = useSelector(state=>state.productState)
    const{error, isAuthenticated} = useSelector(state=>state.userState)
    const dispatch = useDispatch() 
    const{id} = useParams()
    const[rating,setRating] = useState(0)  
    const[comment,setComment] =useState("") 
    
    const [quantity,setQuantity] = useState(1)

    /*const updateCart =(ID,quantitys)=>{
        setQuantity(ID ==id?(quantitys+1):quantitys)
        dispatch(addCartItem(ID,quantity))*/

        
    const reviewSubmit=(id)=>{
        
        dispatch(isReview(id,rating,comment))


    }

    useEffect(()=>{
        
        dispatch(getProduct(id))
        
    },[])
    return(
        <>
        {loading?<h2>Loading</h2>:(
            <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '30rem', border:'none',height:'30rem' }}>
                  <Card.Img variant="top" src={product.image}  style={{ width: '30rem',height:'30rem' }}></Card.Img>
                  </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '30rem', border:'none',height:'30rem' }}>
      <Card.Body>
        <Card.Title><h1>Menu: {product.name}</h1></Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted"><h2>Price: {product.price}</h2></Card.Subtitle>
        <br></br>
        <Card.Text>
            <h5>description: {product.description}</h5>
            <h5>seller: {product.seller}</h5>
        </Card.Text>
        <form className="forms" >
         <input type="number"
         value={rating}
         onChange={e=>setRating(e.target.value)}
       />
      <input type="text"
      value={comment}
      onChange={e=>setComment(e.target.value)}
      placeholder='comment'
      />
      <Button 
    onClick={()=>reviewSubmit()}
      >submit</Button>
      </form>
        <Button variant="danger" onClick={()=>dispatch(addCartItem(product._id,quantity))} >addToCart</Button>
        <Button variant="danger" onClick={()=>dispatch(favourItem(product._id,quantity))} >Favour</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        )}
        
        </>
    )
}

