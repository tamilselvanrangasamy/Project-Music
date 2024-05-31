import React from 'react';
import { Button, Col, Container,Row } from 'react-bootstrap';
import './About.css'
function About()
{
    return(
        <div>
            <div className='App about_main'>
                <h1>About Us</h1>
                <p>Events every night, join with us! Lorem ipsum dolor sit<br></br> amet, consectetur adipisicing elit. Adipisci, ad!</p>
                <Button  className='btn_home1'>JOIN US</Button>
            </div>
            <Container className='about'>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={5} md={8} sm={12}>
                        <img src={require("./1.jpg")}></img>
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg={5} md="8" sm='12'>
                        <h2>We Love Music</h2>
                        <h6>Join with us Today</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <Button  className='btn_home1'>JOIN US</Button>
                    </Col>
                </Row><br></br>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={5} md={8} sm={12}>
                        <img src={require("./person_1.jpg.webp")}></img>
                    </Col>
                    <Col lg="1"></Col>
                    <Col lg={5} md="8" sm='12'>
                        <h2>All about Music</h2>
                        <h6>Join with us Today</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <Button  className='btn_home1'>JOIN US</Button>
                    </Col>
                </Row>
            </Container>
            <Container className='about1 App'><h1 className='App'>Our Team</h1><br></br>
                <Row>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_1.jpg.webp")}></img>
                    </Col>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_2.jpg.webp")}></img>
                    </Col>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_3.jpg.webp")}></img>
                    </Col>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_4.jpg.webp")}></img>
                    </Col>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_5.jpg.webp")}></img>
                    </Col>
                    <Col lg="4" md='6' sm='6'>
                        <img src={require("./person_6.jpg.webp")}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;