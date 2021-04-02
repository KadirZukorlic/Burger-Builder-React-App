import React from 'react';

import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo"/>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/politika" className="nav__link">Politika</a></li>
          <li className="nav__item"><a href="/vijesti" className="nav__link">Vijesti</a></li>
          <li className="nav__item"><a href="/komparacija" className="nav__link">Komparacija</a></li>
          <li className="nav__item"><a href="/kontakt" className="nav__link">Kontakt</a></li>
        </ul>
      </nav>
      <button class="btn-signup">Sign Up</button>
    </header>
  );
};

export default Navbar;
