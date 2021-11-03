import React from 'react';
import { Avatar } from "@material-ui/core";
import "../styling/PostList.css";

function PostList ({ quacks }) {
    return (
        <div className="postList">
            {quacks.map(quack => (
                <div className="quack" key={quack.id} >
                <Avatar src= { quack.avatar }></Avatar>
                <h2> { quack.name } </h2>
                <p> { quack.post } </p>                
                </div>
            ))}                
        </div>
    )
}

export default PostList
