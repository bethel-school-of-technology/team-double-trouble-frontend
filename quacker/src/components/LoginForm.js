import "../styling/LoginForm.css";
import React from 'react';
import { useState } from 'react';
import { Button } from "@material-ui/core";

function SignInForm() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [token, setToken] = useState();
    const [id, setId] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const login = { Username, Password };

        fetch('http://localhost:5000/users/authenticate', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login)
        }).then((response) => {
            console.log(response);
        })
    }

    const onHandleRegister = (e) => {
        e.preventDefault();

        const registration = { Username, Password };

        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registration)
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="signIn">
            <div className="welcomeText">
                <h1>Welcome to Quacker!!!</h1>
            </div>
            <div className="welcomeInstructions">
                <h5>Enter your username and password to start quacking.</h5>
            </div>
            <form onSubmit={onHandleSubmit} className="welcomeForm">
                <label>Username: </label>
                <input
                    type="text"
                    name="usernameInput"
                    required
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password: </label>
                <input
                    type="password"
                    name="passwordInput"
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Submit</button>
                {/* <a href="/home"><Button variant="outlined" className="loginButton">Login</Button></a> */}
            </form>
            <p>New to Quacker?</p> <button onClick={onHandleRegister}>Sign up!</button>


        </div>
    )
}

export default SignInForm
