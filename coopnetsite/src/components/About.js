import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron, Tab, Card, Image, ListGroup} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
//import Image from 'react-bootstrap/Image'
//import ListGroup from 'react-bootstrap/ListGroup'


import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"
import FAQ from "../components/FAQ.js"


class About extends Component {
    render() {
      return (
      <div>
      <div class="App">
      <NavHeader />


       <Container>
       <Row>
               <Col>
               <p>
               </p>
           <h1>About Us</h1>

                          </Col>
                        </Row>
       </Container>
       <Container>
                 <Row>
                   <Col><Jumbotron className="introJumbo" fluid>
                     <h2>Our Mission</h2>
                     <p>
                       Our Mission is to make affordable cooperative housing accessible for everyone.
                     </p>

                   </Jumbotron></Col>
                 </Row>
        </Container>

          <Container>
                   <Row>
                           <Col>
                             <h2>The Problem</h2>
                             <p>
                               Our urban communities have become inaccessible and exclusionary. Combined with many other factors, the high cost of property has made home-ownership an unattainable dream for most residents. Only 37% of Millennials own their own home in the United States, down from 45% for Baby Boomers when they were the same age1. In Alameda County, the median home value was $875,000 in 2018, requiring a minimum annual income of $181,130 to qualify for a mortgage2. As a result, more people are forced to rent housing from profit seeking landlords, driving up rental costs. The average rent for a one bedroom apartment in the City of Berkeley increased by 9.5% annually between 2011 and 2019, from $1,371 to $2,408 per month3. For Oakland the same unit increased from $1,264 to $2,567, representing a 12.9% annual increase4. Rising costs of living are not limited to the Bay Area. Across the United States inflation-adjusted rent increased by 12% between 2000 and 2010, while household incomes fell by 7%, causing half of all renters in the country to spend more than 30% of income on rent5.
                             </p>

                           </Col>
                           <Col><h2>Our Vision</h2>

                           <p>A network of diverse cooperative communities in which everyone has a place to call home.
                              </p>
                              <p> Benefits of Co-Op housing</p>
                              <p>
                              Impact Model and Goals</p>

                            </Col>
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
                                <p>
                                </p>
                                </Col>


                             </Row>




                    </Container>

     </div>
     <div ref="team">
        <Container>
        <Row>
             <Col><Jumbotron className="introJumbo" fluid>
                <h2>Our Model</h2>
                    <p>A platform to connect, empower, and finance potential housing cooperatives with the support of socially conscious investors.
 </p>

                    </Jumbotron>
             </Col>
        </Row>


        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#faq1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#faq1"> What is cooperative housing? </ListGroup.Item>
                <ListGroup.Item action href="#faq2"> Why would people like in cooperatives? </ListGroup.Item>
                <ListGroup.Item action href="#faq3"> How does CoopNet come in?</ListGroup.Item>
                <ListGroup.Item action href="#faq4"> How do I join / form a cooperative?</ListGroup.Item>
                <ListGroup.Item action href="#faq5"> Why would people back a cooperative they aren’t living in?</ListGroup.Item>
                <ListGroup.Item action href="#faq6"> How does CoopNet come in?</ListGroup.Item>
                <ListGroup.Item action href="#faq7"> How do I back a cooperative?</ListGroup.Item>
                <ListGroup.Item action href="#faq8"> Are there any limits for backers? What about regulations?</ListGroup.Item>
                <ListGroup.Item action href="#faq9"> How will my investment be treated for tax purposes?</ListGroup.Item>

              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#faq1">
                    <p> What is cooperative housing?</p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq">
                   <p> Why would people like in cooperatives? </p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq3">
                   <p> How does CoopNet come in? </p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq4">
                   <p> How do I join / form a cooperative? </p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq5">
                   <p> Why would people back a cooperative they aren’t living in?</p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq6">
                   <p> How does CoopNet come in?</p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq7">
                   <p> How do I back a cooperative? </p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq8">
                   <p> Are there any limits for backers? What about regulations?</p>
                    <FAQ />
                </Tab.Pane>
                <Tab.Pane eventKey="#faq9">
                   <p> How will my investment be treated for tax purposes?</p>
                    <FAQ />
                </Tab.Pane>



              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>;










        </Container>
        </div>

        <div ref="footer">
        <Footer/>
        </div>
        </div>
   );
}
}


export default About;
