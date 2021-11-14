import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
import "../styling/PostList.css";

function UserPostList ({ userPosts }) {
        
    const history = useHistory();
    function onDeleteClick(postId){
        fetch('http://localhost:5000/api/post/' + postId, {
            method: 'DELETE'
        })
        console.log(postId);        
    }    
    
    const onEditPost = (postItem) => {
        history.push({
            pathname: '/EditPost',
            postItem : postItem,
        })
    }
    
    return (
        <div className="userPostList">
            {userPosts.map(userPost => (
                <div className="userPost" key={userPost.postId}>
                <h2> { userPost.username } </h2>
                <p> { userPost.text } </p>
                <p> {userPost.postId} </p>
                <button onClick={()=>{onEditPost({
                    username: userPost.username, 
                    text: userPost.text,
                    postId: userPost.postId,
                })}}>Edit</button>  
                <button onClick={() => onDeleteClick(userPost.postId)}>Delete</button>              
                </div>
            ))}               
        </div>
    )
}

export default UserPostList
