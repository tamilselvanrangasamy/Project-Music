import React from 'react';
import './Sign.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function SignUp()
{
    return(
        <div className='App signup'>
            <h1>Create an Account</h1>
            <div className='bg_sign'>
            <input type='text' placeholder='Enter your Username'></input><br></br>
            <input type='email' placeholder='Enter your E-mail'></input><br></br>
            <input type='password'  placeholder='Enter your Password'></input><br></br>
            <input type='number' placeholder='Enter your Number'></input><br></br>
            <input id='check' type='checkbox'></input> I Agree to all the Terms&Conditions<br></br>
            <Button id='btn_sign'>SIGN-UP</Button><br></br><br></br>
            <h6>Have an account? <span><Link to='/login'> Login Now!</Link></span></h6>
            </div>
        </div>
    )
}

export default SignUp;