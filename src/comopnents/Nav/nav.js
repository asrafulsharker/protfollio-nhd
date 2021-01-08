
import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
// import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';

function nav() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  variant="dark" className="navbar">
  <Navbar.Brand href="#home"> <Link to="/"> 
  {/* <img className="logo" src={}/> */}
 <h3 className="logo" style={{fontFamily: "Shrikhand, cursive",color:"white",textDecoration:"none"}}>Nahid.</h3>
  </Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav> 
    <Nav>
      <Nav.Link href=""><Link className="navLink" style={{color:"white"}} to="/">Home</Link></Nav.Link>
      <Nav.Link href=""><Link className="navLink" style={{color:"white"}} to="/resume">Resume</Link></Nav.Link>
      <Nav.Link href=""><Link className="navLink" style={{color:"white"}} to="/protfollio">Protfolio</Link></Nav.Link>
      <Nav.Link href=""><Link className="navLink" style={{color:"white"}} to="/contact">Content</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default nav;