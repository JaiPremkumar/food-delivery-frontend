import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleResturant } from "./action/resturantsAction";
import { resProducts } from "./action/ProductsAction";
import { favourItem, favourResItem } from "./action/FavourAction";

export default function Restarunt(){

    const dispatch = useDispatch()
    const {id} = useParams()
   
    const { restarunt={}} = useSelector(state=>state.resturantState)
    const {products} = useSelector(state=>state.productsState)
    const[res,setRes]=useState()
    
    const handleRes=(seller)=>{
      dispatch(resProducts(seller))
      setRes(seller)
    } 
    useEffect(()=>{
        dispatch(getSingleResturant(id))
    },[])
    return(
        <Container>
        <h1>Restarunt: {restarunt.restarunt}</h1>
           <img
          className="d-block w-100"
          src={restarunt.image}    
          />
          
          <h3>cuisine: {restarunt.cuisine}</h3>
          <b>location: {restarunt.address}</b><br/>
          <b>{restarunt.city}</b>
          <Button variant="danger" 
          onClick={()=>handleRes(restarunt.restarunt)}
          >Menu</Button>
           <Button variant="danger" onClick={()=>dispatch(favourResItem(restarunt._id))} >Favour</Button>
          <Container>
          {!res?<h1>Menu-List</h1>:
          (<div className='row justify-content-center aligen-item-center'> 
        {products?.map((item,_id)=>(
         <Card className='m-5' style={{ width: '18rem' }} key={_id}>
        <Link to={`/product/${item._id}`}><Card.Img variant="top" 
        src={item.image}  style={{ height: '10rem' }} /></Link>
        <Card.Body>
          <Card.Title> {item.name}</Card.Title>
          <b>price: {item.price}</b>
          
        </Card.Body>
      </Card>))}
      </div>)} 
          </Container>

        </Container>
    )
}