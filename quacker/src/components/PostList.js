import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
// import { Avatar } from "@material-ui/core";
import "../styling/PostList.css";

function PostList ({ quacks }) {
        
    function onDeleteClick(postId){
        fetch('http://localhost:5000/api/post/' + postId, {
            method: 'DELETE'
        })
        console.log(postId);        
    }        
    
    return (
        <div className="postList">
            {quacks.map(quack => (
                <div className="quack" key={quack.postId}>
                <h2> { quack.username } </h2>
                <p> { quack.text } </p>
                <p> Posted on: { quack.date }</p>
                <p> {quack.postId} </p>
                <button>Edit</button>  
                <button onClick={() => onDeleteClick(quack.postId)}>Delete</button>              
                </div>
            ))}               
        </div>
    )
}

export default PostList
