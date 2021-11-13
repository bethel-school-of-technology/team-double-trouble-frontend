import React, {useState, useEffect} from 'react';
import { useHistory, useParams, useLocation } from "react-router-dom";
import "../styling/EditPost.css";

import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';

const EditPost = (props) => {
    const param = useParams();
    const location  = useLocation();
    const history = useHistory();
    const postItem = location.postItem;
    const [username, setUsername] = useState(postItem?.username);
    const [postText, setPostText] = useState(postItem?.text);
    const postId = postItem?.postId;


    const handleSubmit = async () => {
        // call Put api here
        const data = {
            username, 
            text: postText,
            PostId: postId,
        }
        fetch('http://localhost:5000/api/post/' + postId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }) 
        history.push("/home") 
    }

    return (
        <div className="container">
            <div className="form-container">
            <h1>Edit Post</h1>
                <h3> {username} </h3>
                    
                <TextField
                    required
                    id="outlined-required"
                    label="Post Description:"
                    required
                    className="form-item"
                    style={{margin:20}}
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
                <Button variant='contained' color="primary" style={{margin:10}} onClick={handleSubmit}>Submit Change</Button> 
                <Button variant='contained' color="primary" style={{margin:10}} onClick={() => history.push('/home')}>Cancel</Button>   
                </div>
        </div>
    )
}

export default EditPost; 
