import React from 'react';
import {Link} from 'react-router-dom';
import{Navbar,NavItem,Nav,Container,NavbarBrand} from 'reactstrap';

export const Heading = () => {
    return (
        <Navbar style={{margin:"92px 285px 21px 285px"}} color="dark" dark>
            <Container>
                <NavbarBrand href="/">
                    All users off Green
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">
                            Add User
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
            
        </Navbar>
    )
}
