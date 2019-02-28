import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sticky="top" bg="light" expand="md">
          <Navbar.Brand className="homeNav" href="#home">CoopNet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="headerCollapse" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button variant="light">About Us</Button>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Our Mission</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Process</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Button variant="light">ABOUT US</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ww2.kqed.org/wp-content/uploads/sites/2/2018/06/OakMural-7-1020x680.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_12-1500x998.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            <Button className="carouselButton">ACTION BUTTON</Button>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_10-1500x998.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <Table className = "tileTable" responsive>
            <tbody>
              <tr>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
                <td className="tileRow"> <a href="index.html">
                    <div className="tile">
                      <div className="tile-inner">

                        <div class="tile-front">
                          <img src="src\images\tile1.jpg" alt=""/>
                        </div>
                        <div class="tile-back">

                          <h1>Project1</h1>
                          <p>This is a description of the project</p>
                          <p>Learn more</p>

                        </div>

                      </div>
                    </div>
                </a></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
