import React, { Component } from 'react'
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import SidebarIcon from "./SidebarIcon.js";
import { Button } from "@material-ui/core";

export class Sidebar extends Component {
    render() {
        return (
            <div>
               {/* Logo */}

               {/* SidebarIcons */}
               
               <SidebarIcon Icon={HomeIcon} text="Home" />
               <SidebarIcon Icon={TrendingUpIcon} text="Trends" />
               <SidebarIcon Icon={PersonIcon} text="Profile" />
              
               {/* QuackBtn */}
               <Button variant="outlined">Quack!</Button>

            </div>
        )
    }
}

export default Sidebar
