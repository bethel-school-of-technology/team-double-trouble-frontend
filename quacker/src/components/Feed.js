import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from './useFetch.js';
import QuackBox from './QuackBox.js';
import "../styling/Feed.css";
import "../styling/PostList.css";
import PostList from './PostList.js';

function Feed() {

    const { error, data: quacks } = useFetch('http://localhost:5000/api/post') 

    return (
        <div className="feed">
            {/*Header*/}
            <div className="feedheader">
                <h2>Home</h2>
            </div>
            
            {/*QuackBox*/}
            <QuackBox />

            {/*Post*/}
            { error && <div>{ error }</div> }
            {quacks && <PostList quacks={quacks} />}               
        </div>
    )
}

export default Feed

