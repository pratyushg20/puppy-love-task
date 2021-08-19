import React from 'react';
import { Form, Button, FormGroup, Label, FormText, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import coverphoto from '../images/coverphoto.jpg';

function Login(props) {

    return(
        <React.Fragment>
            <div className="container coverImageContainer">
                <div className="row justify-content-center">
                    <img src={coverphoto} alt="Cover" className="img-fluid" width="100%" />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-sm-5 about">
                        <h2>About</h2>
                        <p>Who said win-win situations do not exist?</p>
                        <p>Puppy Love helps you meet your crush, anonymously. Express your interest, and both of
                         you will be informed if the interest is mutual. Otherwise, no one will EVER know about 
                         your choice. No, not even the admin, i.e. us.</p>
                        <h2>Salient Features</h2>
                        <p>
                            Your Privacy is our utmost priority.
                            <ul>
                                <li>If you do not match with someone, no one can ever know your choice, not even the administrator.</li>
                                <li>No information will ever leave your browser which lets the administrator or anyone else see your choices.</li>
                                <li>Your login password (of puppy love) will never be sent to the server, even for login. We use secure hashes.</li>
                                <li>Algorithm reviewed by professors and peers in terms of security and confidentiality.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-12 col-sm-1"></div>
                    <div className="col-12 col-sm-6 loginForm">
                        <h2 className="loginHeader">Login</h2>
                        <Form>
                            <FormGroup>
                                <Label for="rollnum">Roll Number</Label>
                                <Input type="number" name="rollnumfield" id="rollnum" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="pwd">Password</Label>
                                <Input type="password" name="pwdfield" id="pwd" />
                            </FormGroup>
                            <FormText className="signupText">
                                Don't have an account? <a href="/" className="signupLink">Sign-up</a> !
                            </FormText>
                            <div className="row justify-content-end">
                                <div className="col-auto">
                                    <Link to="/home"><Button outline color="success" size="lg" className="loginButton">Login</Button></Link>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Login;