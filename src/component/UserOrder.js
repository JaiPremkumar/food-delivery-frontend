import { useEffect, useState } from "react"
import { validShipping } from "./Shipping"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { createsOrder, myOrder } from "./action/ordersAction"

export default function UserOrder(){

   
    const dispatch =useDispatch()
    
    const{orders={}} = useSelector(state=>state.ordersState)
   
      const [data,setData] = useState([])    
    useEffect(()=>{
    
        dispatch(myOrder)
        setData(orders)
        
    },[dispatch])

   
    return(
       <>
         <Container>
            {Array.isArray(data)&&data?.map(product=>(
                <Row>
                    <Col>
                    {Array.isArray(product?.orderItem)&&product?.orderItem?.map(pro=>(
                    <Card style={{ width: '18rem', border:'none',height:'18rem' }}>
                        <Card.Img variant="top" src={pro?.image}  style={{ height: '10rem' }} />
                    <Card.Title><h1>Menu: {pro?.name}</h1></Card.Title>
                    
                  </Card>))}
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem', border:'none',height:'18rem'}}>
      <Card.Body>
        <Card.Title><b>userID: {product.user}</b></Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted"><h2>Price: {product.itemsPrice}</h2></Card.Subtitle>
        <br></br>
        <Card.Text>
            <b>ordersStatus: {product.orderStatus}</b>
        </Card.Text>
       
       
      </Card.Body>
    </Card>
                    </Col>
                </Row>))}
            </Container>
       </>
    )
}