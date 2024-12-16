import { useEffect } from "react"
import { validShipping } from "./Shipping"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { createsOrder } from "./action/ordersAction"

export default function ConfirmOrder(){

    const {shippingInfo,items:cartItems}=useSelector(state=>state.cartState)
    const {isAuthenticated, user}=useSelector(state=>state.userState)
    const navigate = useNavigate()
    const dispatch =useDispatch()

    const itemsPrice = cartItems.reduce((acc,item)=>(acc+item.price*item.quantity),0)
    const shippingPrice = itemsPrice >200?0:30
    const taxPrice = Number(0.05*itemsPrice)
     const totalPrice = Number(itemsPrice + shippingPrice + taxPrice) 
    const order={
        orderItem:cartItems,
        shippingInfo
    }
const paymentProcess=()=>{
    const data ={
       itemsPrice,
       taxPrice,
       totalPrice,
       shippingPrice  
    }
    sessionStorage.setItem('orderInfo',JSON.stringify(data))
    navigate('/payment')
}

    useEffect(()=>{
        validShipping( shippingInfo,navigate)
       
    },[])
    return(
        <>
         <Container>
           
                <Row>
                    <Col>
                    {cartItems.map(product=>(
                    <Card style={{ width: '18rem', border:'none',height:'18rem' }} >
                        <Card.Img variant="top" src={product?.image}  style={{ height: '10rem' }} />
                    <Card.Title><h1>Menu: {product.name}</h1></Card.Title>
                    
                  </Card>))}
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem', border:'none',height:'18rem'}}>
      <Card.Body>
        <Card.Title><p>address: {shippingInfo.address}</p></Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted"><h2>city: {shippingInfo.city}</h2></Card.Subtitle>
        <p>state: {shippingInfo.state}</p>
        <Card.Text>
            <p>subTotal: {itemsPrice}</p>
            <br/>
            <p>Tax: {taxPrice}</p>
            <br/>
            <p>Shipping: {shippingPrice}</p>
            <br/>
            <p>Total-Price: {totalPrice}</p>
           
        </Card.Text>
        <Button onClick={paymentProcess}>confirm</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}