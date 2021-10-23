import React from 'react';
import './QuackBox.css';
import { Button, Avatar } from "@material-ui/core";

function QuackBox() {
    return (
        <div className="quackBox">
            <form>
                <div className="quackBox_input">
                    <Avatar></Avatar>
                    <input placeholder="What's quackin?"></input>                
                </div>
                <Button variant="outlined" className="quackButton">Quack!</Button>
            </form>
        </div>
    )
}

export default QuackBox
