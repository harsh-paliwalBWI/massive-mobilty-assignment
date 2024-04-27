import React from "react";
import { Avatar, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./TopToBottmNav.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import GroupsIcon from "@mui/icons-material/Groups";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import NavComponent from "./NavComponent"; // Import the IconButton component

const TopToBottmNav = () => {
  return (
    <div className="navbar">
      <div className="navbar__topToBottom">
        <div className="navbar__top ">
          <div className='logo'>
            <img src='images/climate-logo.png' alt='cruxLogo' style={{ height: '40px', width:'auto' }}/>
          </div>
          <NavComponent
            icon={<TrendingUpIcon />}
            label="Portfolio"
            to="/portfolio"
          />
          <NavComponent icon={<CurrencyRupeeIcon />} label="Invest" />
          <NavComponent icon={<GroupsIcon />} label="Syndicates" />
          <NavComponent icon={<LibraryBooksIcon />} label="Ledger" />
          <NavComponent icon={<ForumIcon />} label="Messages" />
          <NavComponent icon={<CalendarMonthIcon />} label="Events" />
          <NavComponent icon={<FeedIcon />} label="News & Blogs" />
          <NavComponent icon={<HelpOutlineIcon />} label="Help & Support" />
        </div>
      </div>
    </div>
  );
};

export default TopToBottmNav;
