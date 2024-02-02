// Header.js
import React from 'react';
import '../styles.css';

import mainLogo from './cropped-logo-new.png';

function Header() {
  return (
    <header>
      <div className="main-content">
        <div className="left-column">
          <div className='logo01'><img src={mainLogo} alt="Header Image" /></div>   
        </div>
        <div className="center-column">
        &nbsp;
        </div>
        <div className="right-column">
          <p className='contact-link'><a href='#Contact'>Contact</a></p>
        </div>
      </div>
    </header>
  );
}

export default Header;