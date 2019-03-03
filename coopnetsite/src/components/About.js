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
                             <h2>The Problem</h2>
                             <p>
                               Our urban communities have become inaccessible and exclusionary. Combined with many other factors, the high cost of property has made home-ownership an unattainable dream for most residents. Only 37% of Millennials own their own home in the United States, down from 45% for Baby Boomers when they were the same age1. In Alameda County, the median home value was $875,000 in 2018, requiring a minimum annual income of $181,130 to qualify for a mortgage2. As a result, more people are forced to rent housing from profit seeking landlords, driving up rental costs. The average rent for a one bedroom apartment in the City of Berkeley increased by 9.5% annually between 2011 and 2019, from $1,371 to $2,408 per month3. For Oakland the same unit increased from $1,264 to $2,567, representing a 12.9% annual increase4. Rising costs of living are not limited to the Bay Area. Across the United States inflation-adjusted rent increased by 12% between 2000 and 2010, while household incomes fell by 7%, causing half of all renters in the country to spend more than 30% of income on rent5.
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
