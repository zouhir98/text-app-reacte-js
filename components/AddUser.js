import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom' ;

import {GlobalContext} from '../context/GlobalStat';
import { Form, Button,FormGroup,Input,Label } from "reactstrap";

export const AddUser = () => {
    
    const {users} = useContext(GlobalContext);
    
 
    const history=useHistory();
    const onsubmit = ()=>{
        
        
         history.push('/');

    }

    return (
      <Form style={{margin:"169px 285px 21px 285px"}} onSubmit={onsubmit}>
          <FormGroup>
              <Label>Name:</Label> 
              <Input type="text"  placeholder="Enter name..." ></Input>
              <Label>Code test:</Label> 
              <Input type="text" disabled placeholder="Enter code..." ></Input>
          </FormGroup> 
          <Button type="submit">Submit</Button>
          <Link className="btn btn-danger ml-2" to="/">Cancel</Link>
      </Form>
    )
}
