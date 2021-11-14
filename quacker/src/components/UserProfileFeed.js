import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch.js';
import QuackBox from './QuackBox.js';
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
            {/*Header*/}
            <div className="userFeedHeader">
                <h2>Profile</h2>
            </div>
            
            {/*UserPosts*/}
            { error && <div>{ error }</div> }
            {userPosts && <UserPostList userPosts={userPosts} />}               
        </div>
    )
}

export default UserProfileFeed