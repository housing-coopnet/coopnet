import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import aaron from '../images/aaron.jpeg'

import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"


class About extends Component {
    render() {
      return (
      <div class="App">
      <NavHeader />


       <Container>
                 <Row>
                   <Col><Jumbotron className="introJumbo" fluid>
                     <h1>About Us</h1>
                     <p>
                       We are on a mission to bring direct investments from development-minded backers to our community.
                     </p>

                   </Jumbotron></Col>
                 </Row>
        </Container>

          <Container>
                   <Row>
                           <Col><Jumbotron className="introJumbo" fluid>
                             <h2>Cooperative Real Estate</h2>
                             <p>
                               CoopNet is a collaboration between .... Lorem ipsum dolor sit amet, in sea fuisset philosophia, sint blandit mandamus pro ne. An dictas inermis dignissim per, ei vix iudico meliore. No duo maiorum habemus, has eu possit dissentias, tritani voluptatum sea ex. In insolens accusata qui, ex zril vidisse sensibus cum, pri an idque putent luptatum. Lorem ipsum dolor sit amet, in sea fuisset philosophia, sint blandit mandamus pro ne. An dictas inermis dignissim per, ei vix iudico meliore. No duo maiorum habemus, has eu possit dissentias, tritani voluptatum sea ex. In insolens accusata qui, ex zril vidisse sensibus cum, pri an idque putent luptatum. Lorem ipsum dolor sit amet, in sea fuisset philosophia, sint blandit mandamus pro ne. An dictas inermis dignissim per, ei vix iudico meliore. No duo maiorum habemus, has eu possit dissentias, tritani voluptatum sea ex. In insolens accusata qui, ex zril vidisse sensibus cum, pri an idque putent luptatum.
                             </p>

                           </Jumbotron></Col>
                           <Col><h2>Cooperative Real Estate</h2></Col>
                         </Row>
                </Container>

    <Container>
                             <Row>
                               <Col><Jumbotron className="introJumbo" fluid>
                                 <h2>Our Team</h2>
                                 <p>
                                   Meet the team behind CoopNet </p>

                               </Jumbotron></Col>
                             </Row>
                             <Row>
                                <Col xs={8} md={5} >
                                <img src={require('../images/aaron.jpeg')} roundedCircle width="250px"/>
                                <h3> <a href="https://www.linkedin.com/in/aaron-scherf-60504873/"> Aaron Scherf </a> </h3>

                                <div class="title">
                                Co-Founder, Finance and Development
                                </div>
                                <div>
                                <p>
                                Interests: Affordable Housing, Alternative Markets, Community Preservation
                                </p>

                                <p>
                                Education / Work:
                                <ul>
                                    <li>UC Berkeley MDP ‘20
                                        <ul>
                                            <li> Goldman School of Public Policy</li>
                                            <li> Division of Data Sciences</li>
                                        </ul>
                                    </li>
                                <li> USAID Southern Africa Regional Mission</li>
                                <li> Universität Heidelberg ‘18</li>
                                <li> Center for European Economic Research</li>
                                <li> Migration Hug Heidelberg</li>
                                <li> US House of Representatives</li>
                                <li> LandLink Analytic Services</li>
                                <li> Mercer University BBA ‘17</li>
                                <li> Linnaeus University ‘15</li>
                                <li> Tembeka Social Investment Corporation</li>
                                </ul></p>
                                <p>
                                Awards / Other:
                                Donald M. Payne International Development Fellow ‘17
                                US Fulbright Scholar ‘17
                                Humanity in Action Senior Fellow ‘17</p>

                                <p>
                                Fun Fact:
                                Has 4 different types of coffee makers</p>
                                </div>

                                </Col>
                                <Col xs={8} md={5} >
                                <img src={require('../images/aaron.jpeg')} roundedCircle width="250px"/>
                                <h3> <a href="https://www.linkedin.com/in/ramsay-boly-637b82100/"> Ramsay Boly </a></h3>
                                </Col>

                                <Col xs={8} md={5} >
                                <img src={require('../images/jinsu.jpeg')} roundedCircle width="250px"/>
                                <h3> <a href="https://www.linkedin.com/in/jinsue/"> Jinsu Elhance </a>  </h3>
                                </Col>

                                <Col xs={8} md={5} >


                                <img src={require('../images/cara.jpeg')} roundedCircle width="250px"/>
                                <h3> <a href="https://www.linkedin.com/in/carawolfe/">  Cara Wolfe </a></h3>
                                </Col>


                             </Row>




                    </Container>

        </div>
   );
}
}


export default About;
