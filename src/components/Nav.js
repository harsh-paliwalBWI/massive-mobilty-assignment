import React from 'react';
import {Avatar,  TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Nav.css';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Nav = () => {
  return (
    <div className="navbar__leftToRight">
      <div className='navLeft'>
        <TextField
          placeholder="Search by company name..."
          style = {{width: 350}}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              </InputAdornment>
          ),
            }}
          />
        </div>
        <div className='navRight'>
        <div className='notification'>
        <NotificationsNoneIcon/>
        </div>
     
          <Avatar/>
          <div className='height'>
          <h6>Shailesh Vickram</h6>
          <p>Investor</p>
          </div>
          
          < ArrowDropDownIcon />
        </div>
      </div>
    
)};

export default Nav;
