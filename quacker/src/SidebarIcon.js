import React from 'react';
import './SidebarIcon.css';
import Icon from "./Sidebar.js";

function SidebarIcon({ text, Icon }) {
    return (
        <div className ="sidebarIcon">
            <Icon />
            <h5>{text}</h5>            
        </div>
    )
}

export default SidebarIcon
