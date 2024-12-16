import { Button, Col, Navbar, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function AccountBoard(){

    const navigate = useNavigate()
    return(
        <>
          <img
          className="d-block w-100"
          src={require('./slideImg/meals.jpeg') }
          />
            <Navbar className=" justify-content-between" s>
         <Button variant="success" onClick={()=>navigate('/create-rest')} type="submit">Restarunt</Button>
        <Row>
          <Col xs="auto">
          <Button variant="success" onClick={()=>navigate('/create-kitchen')} type="submit">Product</Button>
          </Col>
          
        </Row>
        <Button variant="success" onClick={()=>navigate('/create')} type="submit">Cloud-kitchen</Button>
    </Navbar>
        </>
    )
}