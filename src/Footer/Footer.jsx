import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { Link, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Components/Home/Home';
function Footer()
{
    return(
        <div>
            <Router>
            <Container className='footer'>
            <Row>
                <Col lg={1}></Col>
                <Col lg={5} md={10} sm='12'>
                    <img src={require("./navlogo.png")}></img><br></br>
                    <p>COPYRIGHT ©2023 ALL RIGHTS RESERVED TEMPLATE IS MADE WITH  BY COLORLIB</p>
                    <ul id="footer_list">
                        <li><img src={require("./1.png")}></img></li>
                        <li><img src={require("./2.png")}></img></li>
                        <li><img src={require("./3.png")}></img></li>
                        <li><img src={require("./4.png")}></img></li>
                        <li><img src={require("./5.png")}></img></li>
                    </ul>
                </Col>
                <Col lg={2} md={4} sm={4}>
                    <ul id="footer_list_1">ABOUT US
                        <li>Our Story</li>
                        <li>Sol Music Blog</li>
                        <li>History</li>
                    </ul>
                </Col>
                <Col lg={2} md={4} sm={4}>
                    <ul id="footer_list_1">PRODUCTS
                        <li>Music</li>
                        <li>Subscription</li>
                        <li>Custom Music</li>
                        <li>Footage</li>
                    </ul>
                </Col>
                <Col lg={2} md={4} sm={4}>
                    <ul id="footer_list_1">PLAYLISTS
                        <li>Newsletter</li>
                        <li>Carrers</li>
                        <li>Press</li>
                        {/* <Link to='/contact'><li>Contact</li></Link> */}
                    </ul>
                </Col>
            </Row>
        </Container>
        <Routes>
            <Route path='/contac' element={<Home></Home>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
        </Router>
        </div>
    )
}
export default Footer;