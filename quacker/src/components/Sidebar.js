import React, { Component } from 'react'
import "../styling/Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SidebarIcon from "./SidebarIcon.js";
import { Button } from "@material-ui/core";

export class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar">
               {/* Logo */}

               {/* SidebarIcons */}
               
               <a href="/home"><SidebarIcon Icon={HomeIcon} text="Home" /> </a>
               <a href="/trends"><SidebarIcon Icon={TrendingUpIcon} text="Trends" /> </a>
               <a href="/profile"><SidebarIcon Icon={PersonIcon} text="Profile" /> </a>
              
               {/* QuackBtn */}
               <Button variant="outlined">Quack!</Button>

            </div>
        )
    }
}

export default Sidebar
