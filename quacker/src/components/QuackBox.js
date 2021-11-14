import React from 'react';
import { useState, setState } from 'react';
import '../styling/QuackBox.css';
import { Button, Avatar } from "@material-ui/core";

const QuackBox = () => {
    const [username, setUsername] = useState('Dave');
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('1');
    //const [date, setDate] = useState('11/7/21');   
  
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
                    <Avatar></Avatar>
                    <input onSubmit={handleSubmit}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What's quackin?">                                        
                    </input>
                    <button onClick={handleSubmit}>Quack!</button>                    
                </div>
            </form>
        </div>
    )
}

export default QuackBox
