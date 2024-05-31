import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, FormGroup,Row} from 'react-bootstrap';
import './Contact.css'

function Contact()
{
    const [name,setName]=useState(' ')
    const [mail,setMail]=useState(' ')
    
    return(
        <div>
            <Container className='contact'>
                <Row>
                    <Col lg={6} md={10} sm={12}>
                    {/* <img src={require("./map.png")}  id='map'></img> */}
                    <map>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1955.937816607629!2d77.71721947536341!3d11.343793517894838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3998053453%3A0x7ba00457d4d7cf91!2sNurture%20Infotech%20-%20Erode%20(Python%20%7C%20Java%20%7C%20Fullstack%20%7C%20Web%20Design%20%7C%20Graphic%20Design%20%7C%20Internship%20%7C%20Tally%20%7C%20Data%20Analytics%20%7C%20ML)!5e0!3m2!1sen!2sin!4v1717077327123!5m2!1sen!2sin" width="600" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </map>
                    </Col>
                    <Col lg={6} md={10} sm={12}>
                        <h1>Get in Touch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe iusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <address>Main Road ,No 25/11  <br></br>+34 556788 3221  <br></br>contact@solmusic.com</address>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col lg='6' md='6' sm='12'>
                                <FormControl id='form_name' type='text'  placeholder='Your name' onChange={(e)=>setName(e.target.value)}></FormControl><p>{name}</p></Col>
                                <Col lg='6' md='6' sm='12'><FormControl id='form_mail' type='email' placeholder='Your E-mail'  onChange={(e)=>setMail(e.target.value)}></FormControl><b>{mail}</b></Col></Row>
                                <FormControl  id='form_sub'type='text' placeholder='Subject'></FormControl><br></br>
                                <FormControl id='form_msg' type='text' placeholder='Message'></FormControl><br></br>
                            </FormGroup>
                            <Button className='btn_home3'>SEND MESSAGE</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;