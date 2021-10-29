import React from 'react';
import QuackBox from './QuackBox.js';
import "../styling/Feed.css";
import "../styling/Post.css";
import Post from './Post.js';

function Feed() {
    return (
        <div className="feed">
            {/*Header*/}
            <div className="feedheader">
                <h2>Home</h2>
            </div>
            
            {/*QuackBox*/}
            <QuackBox />

            {/*Post*/}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />     
               
        </div>
    )
}

export default Feed
