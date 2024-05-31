import React from "react";
import './Help.css'
import { Col, Container, Row } from "react-bootstrap";
function Help() {
    return (
        <div className="help">
            <Container>
                <Row>
                    <Col lg='6'></Col>
                    <Col lg='6' md='8' sm='12'>
                        <h1>Support & Help</h1>
                        <h2>24/7</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe iusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <img src={require('./help2.jpg')}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Help;