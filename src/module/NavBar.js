import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const MyNavBar = () => {
  return (
    <Navbar expand = 'lg' bg = 'danger'>
        <Container fluid>
            <h4 className = 'fw-bolder text-light'>Socket Task</h4>
        </Container>
    </Navbar>
  )
}

export default MyNavBar;