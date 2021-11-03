import "../styling/WelcomePhoto.css"
import React from 'react'
import QuackPhoto from "../images/quackphoto.jpg";

function WelcomePhoto() {
    return (
        <div>
            <img src={QuackPhoto} alt="Where's the duck?" className="welcomePic"></img>
        </div>
    )
}

export default WelcomePhoto
