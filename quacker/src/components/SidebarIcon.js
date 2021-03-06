import React from 'react';
import '../styling/SidebarIcon.css';

function SidebarIcon({ text, Icon }) {
    return (
        <div className ="sidebarIcon">
            <Icon />
            <h5>{text}</h5>            
        </div>
    )
}

export default SidebarIcon
