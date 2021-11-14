import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
import { Link } from "react-router-dom";
// import { Avatar } from "@material-ui/core";
import "../styling/PostList.css";

function PostList ({ quacks }) {
        
    const history = useHistory();
    
    function onDeleteClick(postId){
        fetch('http://localhost:5000/api/post/' + postId, {
            method: 'DELETE'
        })        
        console.log(postId);       
    };    
   
    const onEditPost = (postItem) => {
        history.push({
            pathname: '/EditPost',
            postItem : postItem,
        })
    }
    
    return (
        <div className="postList">
            {quacks.map(quack => (
                <div className="quack" key={quack.postId}>
                <h2> <Link to={`profile/${quack.userId}`}>{quack.username}</Link></h2>
                <p> { quack.text } </p>
                <p> Posted on: { quack.date }</p>
                <p> {quack.postId} </p>
                <button onClick={()=>{onEditPost({
                    username: quack.username, 
                    text: quack.text,
                    postId: quack.postId,
                })}}>Edit</button>  
                <button onClick={() => onDeleteClick(quack.postId)}>Delete</button>              
                </div>
            ))}               
        </div>
    )
}

export default PostList
