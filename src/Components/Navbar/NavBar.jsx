import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {CartWidget} from '../CartWidget/CartWidget'
import Ecommerce from './assets/Ecommerce.svg'

export const Menu= () => {
  return (
      
            <Navbar expand="lg" bg="primary" variant="dark"  className='justify-content-center' >
        <Container>
          <img src={Ecommerce} alt="logo-ecommerce"  />
          <Nav className="me-auto">
            <Nav.Link href="#Computadoras" >Computadoras</Nav.Link>
            <Nav.Link href="#Videovigilancia" >Videovigilancia</Nav.Link>
            <Nav.Link href="#Hardware" >Hardware</Nav.Link>
            <Nav.Link href="#Software" >Software</Nav.Link>
          </Nav>
<CartWidget cantCart={0}/>

        </Container>
      </Navbar>

      
    
    
  )
}

