import React from "react";
import Logo from "./../../assets/e-commerce-logo.png";

import "../styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="firm logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
