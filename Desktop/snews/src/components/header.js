import React from 'react';

import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Sandzak Logo" className="header__logo" />
      <h1 className="header__h1">SNEWS PORTAL</h1>
    </div>
  );
};

export default Header;
