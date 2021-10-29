import "../styling/LoginForm.css";
import React from 'react';
import { Button } from "@material-ui/core";

function SignInForm() {
    return (
        <div className="signIn">
            <div className="welcomeText">
                <h1>Welcome to Quacker!!!</h1>
            </div>
            <div className="welcomeInstructions">
                <h5>Enter your username and password to start quacking.</h5>
            </div>
            <form className="welcomeForm">
                <label>Username: </label>
                <input type="text" name="usernameInput"></input>
                <label>Password: </label>
                <input type="text" name="passwordInput"></input>
                <a href="/home"><Button variant="outlined" className="loginButton">Login</Button></a>
            </form>
            <p>New to Quacker? <a href="/signup">Sign up!</a></p>


        </div>
    )
}

export default SignInForm
