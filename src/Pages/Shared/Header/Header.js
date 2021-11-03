import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
          <>
  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home#home"><div className="d-flex"><div><h4 className="logo">WHERE<br></br>TO GO</h4></div><div className="questionMark">?</div></div></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} className="menuBar" to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#guide">Guide</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#mission">Mission</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/home#about">About</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/mybookings">My Bookings</Nav.Link>
      <Nav.Link as={HashLink} className="menuBar" to="/allbookings">All Bookings</Nav.Link>
      { user?.email ? 
           <Navbar.Text>
           <a href="#login" className="text-muted">{user?.image}{user?.displayName}</a><Button onClick={logOut} className=" fw-bold" variant="">Logout</Button>
           </Navbar.Text>:
          <Nav.Link as={Link} className="text-dark fw-bold" to="/login">Login</Nav.Link>}
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>  

    );
};

export default Header;