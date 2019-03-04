import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"

var projectTiles = [
  {
    "title" : "Project 1",
    "description" : "This was our first ever project",
    "progress" : 50,
  },
  {
    "title" : "Project 2",
    "description" : "This was our second ever project",
    "progress" : 2,
  },
  {
    "title" : "Project 3",
    "description" : "This was our third ever project",
    "progress" : 10,
  },
  {
    "title" : "Project 4",
    "description" : "This was our fourth ever project",
    "progress" : 20,
  },
  {
    "title" : "Project 5",
    "description" : "This was our fifth ever project",
    "progress" : 90,
  }
]

function ProjectTile(props) {
  return (
    <Col><a href="/project">
      <div class="tile">
        <div class="tile-inner">

          <div class="tile-front">
            <img src="https://i.pinimg.com/originals/15/d9/98/15d998c03f08e570cd70e36f31bdd2d6.png" alt="" />
          </div>
          <div class="tile-back">

            <h1>{props.tile["title"]}</h1>
            <p>{props.tile["description"]}</p>
            <p>Learn more</p>

          </div>

        </div>
        <ProgressBar variant="success" class="projectProgress" animated now={props.tile["progress"]} />
      </div>
    </a>
    </Col>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="App">
      <NavHeader />

        <Carousel>
        <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_12-1500x998.jpg"
        alt=""
      />
  
      <Carousel.Caption>
        <h3>Take an Interest</h3>
        <p>Join us</p>
      </Carousel.Caption>
      <Button className="carouselButton">Sign up</Button>
          </Carousel.Item>
          <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_12-1500x998.jpg"
        alt=""
      />
  
      <Carousel.Caption>
        <h3>Take an Interest</h3>
        <p>Join us</p>
      </Carousel.Caption>
      <Button className="carouselButton">Sign up</Button>
          </Carousel.Item>
          <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thepioneeronline.com/wp-content/uploads/2017/06/GRAFF_12-1500x998.jpg"
        alt=""
      />
  
      <Carousel.Caption>
        <h3>Take an Interest</h3>
        <p>Join us</p>
      </Carousel.Caption>
      <Button className="carouselButton">Sign up</Button>
    </Carousel.Item>

        </Carousel>

        {/* <CarouselSlider/> */}

        <Container>
          <Row>
            <Col><Jumbotron className="introJumbo" fluid>
              <h1>Housing for everyone.</h1>
              <p>
                We are on a mission to bring direct investments from development-minded backers to our community in order to make affordable housing accessible to everyone.
              </p>
              <NavLink to="/"><Button className="introJumboButton" variant="light">Learn more about our mission</Button></NavLink>
            </Jumbotron></Col>
            <Col></Col>
          </Row>
        </Container>

        <Container className="tileContainer" fluid>
          <Row className = "tileRow">
            {projectTiles.map((tile) => <ProjectTile tile={tile}/>)}
          </Row>
          <Row className = "tileRow">
            {projectTiles.map((tile) => <ProjectTile tile={tile}/>)}
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;
