import React from 'react';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from "@material-ui/icons/Forum";
function Header() {
     return (
          <div className="header">
               <IconButton>
               <PersonIcon fontSize="large" className = "header__icon"/>
               </IconButton>
               <img
               className="header__logo"
               src="https://cdn.designrush.com/uploads/inspiration_images/7621/990__1513706351_928_tinder1_bacbf6370ec8.png"
               alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>

          </div>
     )
}

export default Header
