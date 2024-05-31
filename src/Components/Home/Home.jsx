import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./Home.css"
function Home()
{
    return(
        <div  id='home'>
        <div id='container'>
            <Container>
                <Row id='row'>
                    <Col lg={6} md={8} sm={12}>
                <Card id='card'>
                    <Card.Body>
                            <Card.Title id='card_title'><h1><span>Music</span> for<br></br> Everyone</h1></Card.Title>
                        <Card.Text id='card_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </Card.Text><br></br>
                        <button className='btn_home1'>DOWNLOAD NOW</button>
                        <button className='btn_home2'>START FREE TRAIL</button>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col lg={6} md={8} sm={10}>
                        <img id='card_img' src={require("./home.png")}></img>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className='container_1'>
            <Row>
                <Col lg={1} md={8} sm={10}></Col>
                <Col lg={5} md={8} sm={10}>
                    <h1>Unlimited Access to 100K tracks</h1>
                </Col>
                <Col lg={5} md={8} sm={10}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <button className='btn_home3'>TRY IT NOW</button>
                </Col>
            </Row>
        </Container>
        <Container className='container_2' id='container_2'>
            <h1>How it works</h1><br></br>
            <Row>
                <Col lg={4} md={8} sm={12}>
                    <img src={require("./plan1.png")}></img>
                    <h3>Create an account</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida.</p>
                </Col>
                <Col lg={4} md={8} sm={12}>
                    <img src={require("./plan2.png")}></img>
                    <h3>Choose a plan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida.</p>
                </Col>
                <Col lg={4} md={8} sm={12}>
                    <img src={require("./plan3.png")}></img>
                    <h3>Download music</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida.</p>
                </Col>
            </Row>
        </Container><br></br>
        <Container className='container_3'>
            <Row>
                <Col lg={6} md={8} sm={12}>
                    <h1>Our Concept & artists</h1>
                </Col>
                <Col lg={6} md={8} sm={12}>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row className='App'>
                    <Col lg={3} md={6} sm={12}>
                        <img src={require('./concept1.jpg')}></img>
                        <h3>Soul Music</h3>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={require("./concept2.jpg")}></img>
                        <h3>Live Concerts</h3>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={require("./concept3.jpg")}></img>
                        <h3>DJ sets</h3>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={require("./concept4.jpg")}></img>
                        <h3>Live Streams</h3>
                    </Col>
                </Row>
        </Container><br></br>
        <Container className='container_4'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <h1>Subscription from $15/month</h1>
                    <h3>Start a free trial now</h3>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='btn_home3'>TRY IT NOW</button>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <ul className='container_4_list'>
                        <li>Play any track</li>
                        <li>Listen Offline</li>
                        <li>No ad interruptions</li>
                        <li>Unlimited skips</li>
                        <li>High quality audio</li>
                        <li>Shuffle play</li>
                    </ul>
                </Col>
            </Row>
        </Container><br></br>
        <Container className='container_5'>
            <Row>
                <Col lg={6} md={8} sm={10}>
                    <h1>Why go Premium</h1>
                </Col>
                <Col lg={6} md={8} sm={10}>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row className='App'>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require('./pre1.jpg')}></img><br></br>
                        <h3>No interruptions</h3>
                        <p>Consectetur adipiscing elit</p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./pre2.jpg")}></img>
                        <h3>High Quality</h3>
                        <p>Consectetur adipiscing</p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./pre3.jpg")}></img>
                        <h3>Listen Offline</h3>
                        <p>Consectetur adipiscing</p>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./pre4.jpg")}></img>
                        <h3>Download Music</h3>
                        <p>Consectetur adipiscing</p>
                    </Col>
                </Row>
        </Container><br></br>
        </div>
    )
}
export default Home;