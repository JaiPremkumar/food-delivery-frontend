
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OffCart from './OffCart';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { loadUser, logOut } from './action/authAction';
import { Link } from 'react-router-dom'
import Favour from './Favour';
import { useEffect } from 'react';

export default function Header(){ 

  const{isAuthenticated, user} = useSelector(state=>state.userState) 

  const dispatch = useDispatch()

  const handlelogOut=()=>{
    dispatch(logOut)
  }
  
/*useEffect(()=>{
   
    dispatch(loadUser)
  
},[])*/
    return(
        <>
          <Navbar expand="lg" className="bg-danger" style={{top:"0px",position:"sticky",zIndex:1}}>
      <Container>
        <Navbar.Brand className='text-light text-bold'>INDIA-Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home"  className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link"  className='text-light'>Product</Nav.Link>
            <Nav.Link href="#home"  className='text-light'>ABOUT</Nav.Link>
            <Nav.Link href="#link"  className='text-light'>Contact</Nav.Link>
            {isAuthenticated?
            (
              <DropdownButton  id="dropdown-basic-button" title="Profile"  variant="dark">
                <img src={user.avatar??'./0'} style={{width:"5px",height:"5px"}}></img>
              <Dropdown.Item href="#/action-1"  >{user.name}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{user.role}</Dropdown.Item>
              
              <Link to={'/Dp'}><Dropdown.Item >Profile</Dropdown.Item></Link>
              <Link to={'/userorder'}><Dropdown.Item >MyOrder</Dropdown.Item></Link>
              <Dropdown.Item onClick={handlelogOut}>Logout</Dropdown.Item>
            </DropdownButton>
            )
            :
            <Link to={'/login'}>Login</Link> 
            }
           <OffCart/>
           <Favour/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}