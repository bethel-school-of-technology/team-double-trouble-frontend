import React from 'react';
import { useHistory } from "react-router-dom";
import "../styling/UserPostList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

import "../styling/PostList.css";

function UserPostList ({ userPosts }) {
     //send delete request 
    const history = useHistory();
    function onDeleteClick(postId){
        fetch('http://localhost:5000/api/post/' + postId, {
            method: 'DELETE'
        })
        console.log(postId);        
    }    
    //push edited text to history stack
    const onEditPost = (postItem) => {
        history.push({
            pathname: '/EditPost',
            postItem : postItem,
        })
    }
    
    return (
        <div className="container my-5">
            <div className="row">            
            {userPosts.map(userPost => (
                <div className="userPost" key={userPost.postId}>
                <h2> { userPost.username } </h2>
                <p> { userPost.text } </p>
                <p className="light"> Posted on: { userPost.date }</p>
                <Button className ="btn btn-secondary" onClick={()=>{onEditPost({
                    username: userPost.username, 
                    text: userPost.text,
                    postId: userPost.postId,
                })}}>Edit</Button>  
                <Button className="btn btn-warning" onClick={() => onDeleteClick(userPost.postId)}>Delete</Button>              
                </div>                
            ))}               
        </div>
        </div>
    )
}

export default UserPostList
