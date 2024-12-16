import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminPanel(){
    return(
        <div className="row">
            <Card className='m-4 bg-warning' style={{ width: '18rem',height:'18rem' }} >
    
        <Card.Body>
        <Link to={'/admin/product'}> <h2 className="text-light">Products</h2></Link>
        </Card.Body>
      </Card>

      <Card className='m-4 bg-primary' style={{ width: '18rem',height:'18rem' }} >
    
        <Card.Body>
        <Link to={'/adminuser'}><h2 className="text-light">Users</h2></Link>
        
        </Card.Body>
         </Card>

         <Card className='m-4 bg-success' style={{ width: '18rem',height:'18rem' }} >
    
    <Card.Body>
    <h2 className="text-light">Order</h2>
    </Card.Body>
     </Card>

     <Card className='m-4 bg-danger' style={{ width: '18rem',height:'18rem' }} >
    
    <Card.Body>
    <h2 className="text-light">Delivered</h2>
    </Card.Body>
     </Card>

        </div>
    )
}