import React, { Component } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SidebarIcon from "./SidebarIcon.js";

import "../styling/Sidebar.css";

export class Sidebar extends Component {
   
    render() {
        return (
            <div className="sidebar">
              
                {/* SidebarIcons - Previously worked, no longer using */}
               
               <a href="/home"><SidebarIcon Icon={HomeIcon} text="Home" /> </a>
               <a href="/trends"><SidebarIcon Icon={TrendingUpIcon} text="Trends" /> </a>
               <a href="/profile"><SidebarIcon Icon={PersonIcon} text="Profile" /> </a>              
               
            </div>
        )
    }
}

export default Sidebar
