import React from 'react';
import { Avatar } from "@material-ui/core";
import "../styling/Post.css";

function Post({
    displayName,
    username,
    text,
    profilePic
}) {
    return (
        <div className="post">
            <div className="profilePic">
                <Avatar></Avatar>    
            </div>
            <div className="postBody">
                <div className="postHeader"></div>
                    <div className="headerText">
                        <h4>David Shelly</h4>
                    </div>
                <div className="postText">This is my first quack!</div>
                <div className="postFooter">Icons will go here.</div>
            </div>            
        </div>
    )
}

export default Post
