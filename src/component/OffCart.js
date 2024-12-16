import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Order from "./Order";
import { useSelector } from "react-redux";

export default function OffCart(){

    const [show, setShow] = useState(false);

     const {items:cartItems} = useSelector(state=>state.cartState)
    return(
        <>
          
      <Button variant="dark" onClick={()=>setShow(!show)}> 
        Cart {cartItems.length}
      </Button>

      <Offcanvas show={show} onHide={()=>setShow(!show)} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order/>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}