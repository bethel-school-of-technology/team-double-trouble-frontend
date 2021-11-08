import "../styling/LoginForm.css";
import React from 'react';
import { useState} from 'react';
import { Button } from "@material-ui/core";

function SignInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = { username, password };
        console.log(login);
    }

    return (
        <div className="signIn">
            <div className="welcomeText">
                <h1>Welcome to Quacker!!!</h1>
            </div>
            <div className="welcomeInstructions">
                <h5>Enter your username and password to start quacking.</h5>
            </div>
            <form onSubmit={handleSubmit} className="welcomeForm">
                <label>Username: </label>
                <input 
                    type="text" 
                    name="usernameInput" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />                    
                <label>Password: </label>
                <input 
                    type="password" 
                    name="passwordInput" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
                <button>Submit</button>   
                {/* <a href="/home"><Button variant="outlined" className="loginButton">Login</Button></a> */}
            </form>
            <p>New to Quacker? <a href="/signup">Sign up!</a></p>


        </div>
    )
}

export default SignInForm
