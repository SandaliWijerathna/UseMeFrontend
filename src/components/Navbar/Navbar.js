import './Navbar.css';
import React,{Component} from 'react';
import { Nav , Navbar} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  console.log(props);
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Use Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="/LogIn">LogIn</Nav.Link>
                  <Nav.Link href="/Reg">SignUp</Nav.Link>
                  <Nav.Link href="/Products">Products</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  )
}
  
export default  withRouter(Navigation);