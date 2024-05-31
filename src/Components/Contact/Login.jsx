import React from "react";
import { Button, Card } from "react-bootstrap";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="App login">

            <h1>LOGIN</h1>

            <Button id="btn_fb"><img src={require("./face.png")}></img> Login with Facebook</Button><br></br>
            <Button id="btn_tw"><img src={require("./twitter.png")}></img> Login with Twitter</Button><br></br>
            <h2>Login with email</h2>
            <input type="email" placeholder="E-mail"></input><br></br>
            <input type="password" placeholder="Password"></input><br></br>
            <Button id='btn_login'>LOGIN</Button><br></br>
            <div className="sign">
                <h6>Don't have an account?</h6>
                <h5><Link to='/sign'>SIGN-UP NOW</Link></h5>
            </div>
        </div>
    )
}

export default Login;