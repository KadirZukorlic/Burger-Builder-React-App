import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Sandzak Logo" className="header__logo" />
      <ul>
        <li className="header__item">
          <Link to="/sandzak" className="header__links">
            Sandzak
          </Link>
        </li>

        <li className="header__item">
          <Link to="/dijaspora" className="header__links">
            Dijaspora
          </Link>
        </li>

        <li className="header__item">
          <Link to="/sport" className="header__links">
          Sport
          </Link>
        </li>

        <li className="header__item">
          <Link to="/ekonomija" className="header__links">
            Ekonomija
          </Link>
        </li>

        <li className="header__item">
          <Link to="/tekstovi-nasih-autora" className="header__links">
            Tekstovi nasih autora
          </Link>
        </li>

        <li className="header__item">
          <Link to="/intervjui" className="header__links">
            Intervjui
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
