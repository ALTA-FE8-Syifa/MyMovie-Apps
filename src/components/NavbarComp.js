import {Nav, Navbar, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NowPlaying from './NowPlaying';
import Favorite from './Favorite';


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div><>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">My Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to = {"/nowPlaying"}>Now Playing</Nav.Link>
            <Nav.Link as={Link} to = {"/favorite"}>Favorite</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </></div>
    <div>
    <Routes>
        <Route path="/nowPlaying" element={<NowPlaying/>} />
        <Route path="/favorite" element={<Favorite/>} />
    </Routes>
    </div>
    </Router>
      
    )
  }
}
