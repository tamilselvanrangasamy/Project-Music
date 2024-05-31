import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Playlists.css'
function Playlists() {
    return (
        <div>
            <Container className="playlist1">
                <Row>
                    <Col lg={1} md={4} sm={6}></Col>
                    <Col lg={4} md={6} sm={4}>
                        <h1>Playlists</h1>
                    </Col>
                    <Col lg={1} md={4} sm={4}>
                        <p>Genres</p>
                    </Col>
                    <Col lg={1} md={4} sm={4}>
                        <p>Artists</p>
                    </Col>
                    <Col lg={2} md={4} sm={4}>
                        <p>Music Soundtracks</p>
                    </Col>
                    <Col lg={1} md={4} sm={4}>
                        <p>Lables</p>
                    </Col>
                    <Col lg={2} md={4} sm={4}>
                        <p>All playlists</p>
                    </Col>
                </Row>
            </Container>
            <Container className="playlist2 App">
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./1.jpg.webp")}></img>
                        <h3>Live Concerts</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./2.jpg.webp")}></img>
                        <h3>Dj Sets</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./3.jpg.webp")}></img>
                        <h3>Recorded Live</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./4.jpg.webp")}></img>
                        <h3>Oldies</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./5.jpg.webp")}></img>
                        <h3>Rock & Roll</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./6.jpg.webp")}></img>
                        <h3>Classic Music</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./7.jpg.webp")}></img>
                        <h3>Rock</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./8.jpg.webp")}></img>
                        <h3>Alternative</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./9.jpg.webp")}></img>
                        <h3>Country</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./10.jpg.webp")}></img>
                        <h3>EDM</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./11.jpg.webp")}></img>
                        <h3>Pop Culture</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./12.jpg.webp")}></img>
                        <h3>The 90's</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./13.jpg.webp")}></img>
                        <h3>Jass & Blues</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./14.jpg.webp")}></img>
                        <h3>Live Concerts</h3>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <img src={require("./15.jpg.webp")}></img>
                        <h3>Minimal</h3>
                    </Col>
                </Row>
            </Container><br></br>
            <Container className="playlist3">
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={5} md={12} sm={12}>
                        <h1>Need Help to find music?</h1>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </Col>
                    <Col  lg={5} md={10} sm={12}>
                    <div id="playlist">
                        <input type="text"placeholder="Hit it"></input>
                        <button>Send</button>
                    </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Playlists;