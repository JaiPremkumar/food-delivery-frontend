import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import FOrder from "./FOrder";

export default function Favour(){
    
          const [show, setShow] = useState(false);

       const {items:cartItems} = useSelector(state=>state.cartState)
return(
   <>
     
 <Button variant="dark" onClick={()=>setShow(!show)}> 
   favour{cartItems.length}
 </Button>

 <Offcanvas show={show} onHide={()=>setShow(!show)} placement={'start'}>
   <Offcanvas.Header closeButton>
     <Offcanvas.Title>Cart</Offcanvas.Title>
   </Offcanvas.Header>
   <Offcanvas.Body>
     <FOrder/>
   </Offcanvas.Body>
 </Offcanvas>
        </>
    )
}