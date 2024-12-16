import { useEffect } from "react";
import { Button, Card, Carousel, Col, Container, Form, InputGroup, Navbar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "./action/ProductsAction";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getResturant } from "./action/resturantAction";
import { getKitchen } from "./action/kitchenAction";
import Favour from "./Favour";


export default function Carosel(){

  const{loading, error, products} = useSelector((state)=>state.productsState) 
  const{  restarunts} = useSelector((state)=>state.resturantsState) 
  const{  kitchens} = useSelector((state)=>state.kitchensState) 

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(()=>{
      dispatch(getProducts)
      dispatch(getResturant)
      dispatch(getKitchen)
    
    },[])

    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };

    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2
    };
    const settingss = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const settingse = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return(
      <div>
         <Container fluid>
        <div className="bg-dark">
        <img
          className="d-block w-100"
          src={require('./slideImg/meals.jpeg') }
          style={{ height: '25rem',opacity:'0.5' }}/>
          
            <Link to={`/search`}><Form inline style={{marginTop:'-50px',zIndex:2}} >
        <InputGroup>
          <InputGroup.Text id="basic-addon1" className="bg-danger text-light">search</InputGroup.Text>
          <Form.Control
            variant='outline-danger'
            placeholder="Menu...,"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form></Link>
          </div>
          </Container>
        <Container>
            <Row className="justify-content-center aligen-item-center">
                <Col lg={12}>
           
                <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={require('./slideImg/image4.webp') }
          style={{ height: '25rem' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-success">Pizza</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./slideImg/image5.jpg')}
          style={{ height: '25rem' }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-light">BURGER</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./slideImg/image6.jpg')}
          style={{ height: '25rem' }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-light">Chicken-Briyani</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               </Col>
            </Row>
        </Container>
        
        <div className='row justify-content-center aligen-item-center '> 
        {products && products.map((item,_id)=>(
        <Card className=' m-3 ' style={{ width: '18rem' }} key={_id}>
        <Link to={`/search`}><Card.Img variant="top" src={item.image}  style={{ height: '10rem' }} /> </Link>
        <Card.Body>
          <Card.Title> {item.name}</Card.Title>
        
        </Card.Body>
      </Card>
      ))}
        </div>
        <Container >
         <div className="slider-container  ">
         <Slider {...setting}>
          <div >
         <img className="d-block w-100 h-100"
          src={require('./slideImg/png1.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
           </div>

           <div>
         <img className="d-block w-100  h-100"
          src={require('./slideImg/png2.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100  h-50 pt-5"
          src={require('./slideImg/png4.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         <div>
          <img className="d-block w-100  h-100"
          src={require('./slideImg/png3.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

        

         <div><img className="d-block w-100  h-50 pt-4"
          src={require('./slideImg/png5.jpg') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>
          </Slider>
         </div>
         

         <Container > 
         <div className="slider-container">
         <Slider {...settingss}>
         { restarunts&& restarunts?.map((item,_id)=>(
          <div className="row justify-content-center aligen-item-center">
          
          <Card className=' m-1 ' style={{ width: '18rem' }} key={_id}>
        <Link to={`/rest/${item._id}`}><Card.Img variant="top" src={item.image}  style={{ height: '10rem' }} /> </Link>
        <Card.Body>
          <Card.Title> {item.restarunt}</Card.Title>
        
        </Card.Body>
      </Card>
           </div>))}
           </Slider>
           </div>
           </Container>
          
           <div className="row justify-content-center aligen-item-center">
          { kitchens&& kitchens?.map((item,_id)=>(
          <Card className=' m-5 ' style={{ width: '18rem' }} key={_id}>
        <Link to={`/kitchen/${item._id}`}><Card.Img variant="top" src={item.image}  style={{ height: '10rem' }} /> </Link>
        <Card.Body>
          <Card.Title> {item.kitchenName}</Card.Title>
        
        </Card.Body>
      </Card>))}
           </div>
        
          
         <div className="slider-container">
         <Slider {...settings}>
          <div>
         <img className="d-block w-100 h-100"
          src={require('./slideImg/png1.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
           </div>

           <div>
         <img className="d-block w-100 h-100"
          src={require('./slideImg/png2.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

          <div><img className="d-block w-100 h-100 pt-5"
          src={require('./slideImg/png4.webp') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

         <div>
          <img className="d-block w-100 h-100"
          src={require('./slideImg/png3.png') }
          style={{ height: '12rem',width:'5rem' }}/>
          </div>

        

         <div><img className="d-block w-100 h-100 pt-4"
          src={require('./slideImg/png5.jpg') }  
          style={{ height: '12rem',width:'5rem' }}/>
          </div>
          </Slider>
         </div>
         </Container>
         <Navbar className=" justify-content-between w-100"
          style={{backgroundColor:'transparent'}}>
         <Button variant="danger"  type="submit" onClick={()=>navigate('/account')}>CreateAccount</Button>
        
          
    </Navbar>
        </div>
    )
}