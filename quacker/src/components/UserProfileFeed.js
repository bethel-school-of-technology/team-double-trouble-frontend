import React from 'react';
import useFetch from './useFetch.js';
import { useParams } from 'react-router-dom'
import "../styling/Feed.css";
import "../styling/PostList.css";

import UserPostList from './UserPostList.js';

function UserProfileFeed() {
    let params = useParams();
    let id = params.id; 
    console.log(params)
    const { error, data: userPosts } = useFetch('http://localhost:5000/api/post/userposts/' + id) 

    return (
        <div className="userFeed">
                    
            {/*UserPosts*/}
            { error && <div>{ error }</div> }
            {userPosts && <UserPostList userPosts={userPosts} />}               
        </div>
    )
}

export default UserProfileFeed