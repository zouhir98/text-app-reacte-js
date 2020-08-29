import React from 'react';
import {Link} from 'react-router-dom' ;
import { Form, Button,FormGroup,Input,Label } from "reactstrap";
export const EditUser = () => {
    return (
        <Form style={{margin:"169px 285px 21px 285px"}}>
            <FormGroup>
                <Label>Name:</Label> 
                <Input type="text"  placeholder="Enter name..." ></Input>
                <Label>Code test:</Label> 
                <Input type="text" disabled placeholder="Enter code..." ></Input>
            </FormGroup> 
            <Button className="btn btn-info ml-2" type="submit">Edit</Button>
            <Link className="btn btn-danger ml-2" to="/">Cancel</Link>
        </Form>
    )
}
