import React from 'react';
import './News.css'
import { Button, Col, Container, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
function News()
{
    return(
        <div>
            <Container className='news'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img src={require('./1.jpg.webp')}></img>
                        <h6>May 06,1999</h6>
                        <h3> Top 10 best songs in May</h3>
                        <pre>by <span>TSR</span> in<span> Music</span></pre>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>  
                    </Col>
                </Row>
            </Container>
            <Container className='news'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img src={require('./2.jpg.webp')}></img>
                        <h6>May 06,1999</h6>
                        <h3> Top 10 best songs in May</h3>
                        <pre>by <span>TSR</span> in<span> Music</span></pre>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>  
                    </Col>
                </Row>
            </Container>
            <Container className='news'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img src={require('./3.jpg.webp')}></img>
                        <h6>May 06,1999</h6>
                        <h3> Top 10 best songs in May</h3>
                        <pre>by <span>TSR</span> in<span> Music</span></pre>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>  
                    </Col>
                </Row>
            </Container>
            <Pagination>
                <Pagination.First/>
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Last/>
            </Pagination>
        </div>
    )
}

export default News;