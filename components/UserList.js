import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalStat';
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem,Button} from 'reactstrap';


export const UserList = () => {
   const { users,removeUser} = useContext(GlobalContext);

  
   //console.log(users);
    return (
        <ListGroup style={{margin:"-16px 285px 21px 285px"}} >
            {users.map(user=>(
                <ListGroupItem className="d-flex" key={user.id} >
                    
                <strong >{user.name}</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-1"  to={`/edit/
                    ${user.id}`}>Edit</Link>
                    <Button  onClick={() => removeUser(user.id)}
                     color="danger">Delete</Button>
                </div>
                </ListGroupItem>
            ))}  
           
        
        </ListGroup>
    )
}
 