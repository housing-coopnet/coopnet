import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Footer from "../components/Footer.js"

function NavHeader(props) {
  return(
    <Navbar sticky="top" bg="light" expand="md">
    <NavLink to="/"><Navbar.Brand className="homeNav" href="/">CoopNet</Navbar.Brand></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="headerCollapse" id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavLink to="/"><Button variant="light">Projects</Button></NavLink>
        <NavLink to="/"><Button variant="light">For Investors</Button></NavLink>
        <Button variant="light"><NavDropdown title="About Us" id="basic-nav-dropdown">
        <NavLink to="/"><NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item></NavLink>
          <NavDropdown.Divider />
          <NavLink to="/"><NavDropdown.Item href="#action/3.1">Our Mission</NavDropdown.Item></NavLink>
          <NavLink to="/"><NavDropdown.Item href="#action/3.2">Our Process</NavDropdown.Item></NavLink>
          <NavLink to="/"><NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item></NavLink>
          </NavDropdown></Button>
          <NavLink to="/signup"><Button variant = "light">Sign Up</Button></NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}
class Signup extends Component {
  render() {
    return (
      <div id = "Signup" className="Signup">
      <NavHeader />


        <Footer />
        {/* <Container className="footer" fluid>
          <Row>
            <Col>
              <Jumbotron className="footerJumbo" fluid>
                <h1>CoopNet Footer</h1>
                <p>Thanks for checking us out idk.</p>
              </Jumbotron>
            </Col>
            <Col>
              <h2>
                Get started
            </h2>
              <ul className="footerLinks">
                <li>
                  <a href="#index">INVESTMENTS</a>
                </li>
                <li>
                  <a href="#index">OUR IMPACT</a>
                </li>
                <li>
                  <a href="#index">HOW IT WORKS</a>
                </li>
                <li>
                  <a href="#index">RISKS</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>
                Company
            </h2>
              <ul className="footerLinks">
                <li>
                  <a href="#index">ABOUT</a>
                </li>
                <li>
                  <a href="#index">CAREERS</a>
                </li>
                <li>
                  <a href="#index">COOPTALK</a>
                </li>
                <li>
                  <a href="#index">CONTACT</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>
                Legal
            </h2>
              <ul className="footerLinks">
                <li>
                  <a href="#index">DISCLAIMER</a>
                </li>
                <li>
                  <a href="#index">T&CS</a>
                </li>
                <li>
                  <a href="#index">ISA T&CS</a>
                </li>
                <li>
                  <a href="#index">COMPLAINTS</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h2>
                Support
            </h2>
              <ul className="footerLinks">
                <li>
                  <a href="#index">HELP CENTER</a>
                </li>
                <li>
                  <a href="#index">ISSUER ENQUIRIES</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Signup;
