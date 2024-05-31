import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Category.css'
function Category()
{
    return(
        <div> 
            <Container className='category_1'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={6} md={10} sm={12}>
                        <h1>Live Concert Playlists</h1>
                    </Col>
                    <Col lg={1} md={4} sm={12}>
                        <h6>Genres</h6>
                    </Col>
                    <Col lg={1} md={4} sm={12}>
                        <h6>Artists</h6>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <h6>All Playlists</h6>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg='5' md='12' sm='12'>
                        <div id='category1'>
                            <div>
                            <img src={require('./1.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>A R Rahman</h3>
                                <p>Naetru Aval</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='12' sm='12'>
                        <audio controls>
                            <source src={require('./1.mp3')}></source>
                        </audio>
                    </Col>
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img>
                    </Col>
                    <Col lg='5' md='12' sm='12'>
                        <div id='category1'>
                            <div>
                            <img src={require('./4.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>Anirudh</h3>
                                <p>Life of Pazham</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <audio controls>
                        <source src={require('./3.mp3')}></source>
                        </audio>
                    </Col>
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img>
                    </Col>
                    <Col lg='5'>
                        <div id='category1'>
                            <div>
                            <img src={require('./3.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>Harris</h3>
                                <p>Paartha Mudhal</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <audio controls>
                        <source src={require('./1.mp3')}></source>
                            </audio>  
                    </Col>
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img>
                    </Col>
                    <Col lg='5'>
                        <div id='category1'>
                            <div>
                            <img src={require('./2.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>GV Prakash</h3>
                                <p>Pookal Pookum</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <audio controls>
                        <source src={require('./2.mp3')}></source>

                        </audio>
                    </Col>
                    
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img>
                    </Col>
                    <Col lg='5'>
                        <div id='category1'>
                            <div>
                            <img src={require('./5.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>Ilayaraja</h3>
                                <p>Nilave Vaa</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <audio controls>
                        <source src={require('./3.mp3')}></source>

                        </audio>
                    </Col>
                    
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img>
                    </Col>
                    <Col lg='5'>
                        <div id='category1'>
                            <div>
                            <img src={require('./4.jpg.webp')}></img></div>
                            <div id='cat'>
                                <h3>Santhosh</h3>
                                <p>Kannamma</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <audio controls>
                        <source src={require('./2.mp3')}></source>

                        </audio>
                    </Col>
                    <Col lg='2' className='down'>
                        <img src={require('./down1.png')}></img>
                        <img src={require('./down2.png')}></img>
                        <img src={require('./down3.png')}></img> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Category;