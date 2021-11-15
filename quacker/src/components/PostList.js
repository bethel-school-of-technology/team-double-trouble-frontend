import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styling/PostList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

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
                
                <h2> <Link to={`profile/${quack.userId}`} style={{ textDecoration: 'none' }}>{quack.username}</Link></h2>
                <p> { quack.text } </p>
                <p className="light"> Posted on: { quack.date }</p>
                <div className="edit">
                <Button className ="btn btn-secondary" onClick={()=>{onEditPost({
                    username: quack.username, 
                    text: quack.text,
                    postId: quack.postId,
                })}}>Edit</Button> 
                </div> 
                <div class="pull-right">
                <Button className="btn btn-warning" onClick={() => onDeleteClick(quack.postId)}>Delete</Button>
                </div>             
                
                </div>
                
            ))}               
        </div>
    )
}

export default PostList
