import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleKitchen } from "./action/kitchensAction"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useEffect } from "react"
import { addCartKitchen } from "./action/cartAction"


export default function KitchenDetail(){

    const{loading, kitchen={}} = useSelector(state=>state.kitchenState)
    const{error, isAuthenticated} = useSelector(state=>state.userState)
    const dispatch = useDispatch() 
    const{id} = useParams()
    

    useEffect(()=>{
        
        dispatch(getSingleKitchen(id))
        
    },[])
    return(
        <>
         <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '30rem', border:'none',height:'30rem' }}>
                  <Card.Img variant="top" src={kitchen.image}  style={{ width: '30rem',height:'30rem' }}></Card.Img>
                  </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '30rem', border:'none',height:'30rem' }}>
      <Card.Body>
          <h1>{kitchen.kitchenName}</h1>
        <Card.Title><h1>Menu: {kitchen.name}</h1></Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted"><h2>Price: {kitchen.price}</h2></Card.Subtitle>
        <br></br>
        <Card.Text>
            <b>description: {kitchen.description}</b>
        </Card.Text>
       
        <Button variant="danger"  onClick={()=>dispatch(addCartKitchen(kitchen._id,quantity))} >addToCart</Button>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        
        </>
    )
}