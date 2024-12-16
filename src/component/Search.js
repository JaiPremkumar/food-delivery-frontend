import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchcatProducts, searchProducts } from "./action/ProductsAction"
import { Button, Card, Col, Container, Form, InputGroup, Nav, Navbar, Row } from "react-bootstrap"
import ProductCart from "./ProductCart"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
};


export default function Search(){

    const dispatch = useDispatch()

    const[search,setSearch] = useState()
    const[veg,setVeg] = useState('vegterion')
    const[nonVeg,setNonVeg] = useState('non-Veg')
  

    const {products} = useSelector(state=>state.productsState)

    const handleclic=(name)=>{
        dispatch(searchProducts(name))
    }

    const handleclick=(categories)=>{
      dispatch(searchcatProducts(categories))
  }
    return(
        < Container>
       
           <Navbar expand="lg" style={{backgroundColor:'transparent'}}>
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-danger'>Search...,</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="d-flex mr-0">
            <input
            type='text'
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="search Menu..."
            variant='outline-danger'
            />
             <Button variant="danger" onClick={()=>handleclic(search)}>Search</Button>
          </Form>
        
      </Container>
    </Navbar>
  
    <div className="slider-container">
         <Slider {...settings}>
          <div>
         <img className="d-block w-100 h-100"
          onClick={()=>handleclic('veg-meals')}
          src={require('./slideImg/png1.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
           </div>

           <div>
         <img className="d-block w-100  h-100"
          onClick={()=>handleclic('dosai')}
          src={require('./slideImg/png2.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         <div>
          <img className="d-block w-100  h-100  "
           onClick={()=>handleclic('idlly')}
          src={require('./slideImg/png3.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100  h-100 pt-5"
           onClick={()=>handleclic('fried-rice')}
          src={require('./slideImg/png4.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         

          <div><img className="d-block w-100  h-100"
           onClick={()=>handleclic('burger')}
          src={require('./slideImg/png7.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100  h-100 pt-5"
          onClick={()=>handleclic('Briyani')}
          src={require('./slideImg/png5.jpg') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100  h-100"
           onClick={()=>handleclic('pizza')}
          src={require('./slideImg/png8.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100  h-100 pt-5"
           onClick={()=>handleclic('chicken')}
          src={require('./slideImg/png6.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>
          </Slider>
         </div>
         <Navbar className="bg-body-tertiary justify-content-between">
         <Button variant="success" onClick={()=>handleclick(veg)} type="submit">Veg</Button>
        <Row>
          <Col xs="auto">
          <Button variant="danger" onClick={()=>handleclick(nonVeg)} type="submit">Non-Veg</Button>
          </Col>
         
        </Row>
      
    </Navbar>
       
    <div className="col">
    {!search||!veg||!nonVeg?(<ProductCart/>):(
         <Row >
        {products?.map(item=>(
          
    <Card className="m-5 " style={{ width: '18rem' }}>
    <Link to={`/product/${item._id}`}><Card.Img variant="top" src={item.image} style={{height:'10rem'}}/></Link>
      <Card.Title>{item.name}</Card.Title>
     <b>{item.price}</b>
    </Card>
    ))}
    </Row>
      
    
    )}
    </div>
    
      </Container>
    )
}