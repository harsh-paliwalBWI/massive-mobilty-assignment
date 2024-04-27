import React from 'react';
import { Button } from '@mui/material';
import './NavComponent.css';

const NavComponent = ({ icon, label, to }) => {

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="nav-component">
      <Button>
      <div className="nav-icon">
        {icon}
        <span className="nav-label">{capitalizeFirstLetter(label)}</span>
      </div>
      </Button>
    </div>
  );
};
 
export default NavComponent;



