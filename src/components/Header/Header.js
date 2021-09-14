import React from 'react';
import {Navbar,Container, Nav,} from 'react-bootstrap';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import './Header.css';
import Home from '../Navbar/Home';
import Contact from '../Navbar/Contact';
import About from '../Navbar/About';




const Header = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><Link to="/" className="link-text" >Navbar</Link></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link><Link to="/home" className="link-text" >Home</Link></Nav.Link>
                <Nav.Link><Link to="/about" className="link-text">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact" className="link-text">Contact</Link></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            </BrowserRouter>
            
        </div>
    );
};

export default Header;