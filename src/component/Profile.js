import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loadUser } from "./action/authAction"

export default function Profile(){

  const{isAuthenticated, user} = useSelector(state=>state.userState)
  const dispatch = useDispatch()


  useEffect(()=>{
    
      dispatch(loadUser) 
  
  },[])

    return(
      <>
      {isAuthenticated?
        (<div className='row'>
    
        <Card className='m-5' style={{ width: '18rem' }}> 
        <Card.Img variant="top" src={user.avatar??'./0'}   /> 
       
      </Card>

      <Card style={{ width: '25rem', height:'25rem '}}> 
      <Card.Body>
        <Card.Title style={{fontSize:30,marginLeft:"0px"}}>NAME: {user.name}</Card.Title>
  
        <Card.Text style={{fontSize:30}}>
          Email: {user.email}
        </Card.Text>
        <Card.Text style={{fontSize:30}}>
          Role: {user.role}
        </Card.Text>
        <Link to={'/updateDp'}><Card.Title>EDIT-PROFILE</Card.Title></Link>
      </Card.Body>
    </Card>
      </div>)
      :
      <h2>Profile not found</h2>}
      </>
    )
}