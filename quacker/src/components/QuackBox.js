import React from 'react';
import { useState, setState } from 'react';
import '../styling/QuackBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const QuackBox = () => {
    const [username, setUsername] = useState('User3');
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('3');
      
    const handleSubmit = (e) => {
                               
        const quack = {username, text, userId };

        fetch('http://localhost:5000/api/post/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quack)
        }).then(() => {
            console.log(quack);
        })
        setText("");                
    }
   
    return (
        <div className="quackBox">
            <form>
                <div className="quackBox_input">
                    <input onSubmit={handleSubmit}
                    className="quackInput"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What's quackin?">                                        
                    </input>
                    <Button onClick={handleSubmit}>Quack!</Button>                    
                </div>
            </form>
        </div>
    )
}

export default QuackBox