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
    <Col><a href="index.html">
      <div class="tile">
        <div class="tile-inner">

          <div class="tile-front">
            <img src="src\images\tile1.jpg" alt="" />
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

function HomeCarousel(props) {
  return (
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.slide["image"]}
      alt=""
    />

    <Carousel.Caption>
      <h3>{props.slide["header"]}</h3>
      <p>{props.slide["text"]}</p>
    </Carousel.Caption>
    <Button className="carouselButton">{props.slide["button"]}</Button>
  </Carousel.Item>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="App">
      <NavHeader />

        <CarouselSlider/>

        <Container>
          <Row>
            <Col><Jumbotron className="introJumbo" fluid>
              <h1>Housing for everyone.</h1>
              <p>
                We are on a mission to bring direct investments from development-minded backers to our community.
              </p>
              <Button className="introJumboButton" variant="light">Learn more about our mission</Button>
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
