import  { useEffect, useState } from 'react' 
import { Button, Card } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './action/ProductsAction'
import { Link } from 'react-router-dom'
import Carosel from './Carosel'



export default function ProductCart(){

    const{loading, error, products} = useSelector((state)=>state.productsState)
    const dispatch = useDispatch()
  

    useEffect(()=>{
        dispatch(getProducts) 
    },[])
    return(
      <>
      
      <div className='row justify-content-center aligen-item-center'>   
        {products && products.map((item,_id)=>(
        <Card className='m-5' style={{ width: '18rem' }} key={_id}>
        <Link to={`/product/${item._id}`}><Card.Img variant="top" src={item.image}  style={{ height: '10rem' }} /> </Link>
        <Card.Body>
          <Card.Title> {item.name}</Card.Title>
          <b>price: {item.price}</b>
          
        </Card.Body>
      </Card>
      ))}
        </div>
        </>
    )
}