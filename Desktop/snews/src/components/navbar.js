import React from 'react';

// import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
      {/* <img src={logo} alt="logo" className="nav__logo"/> */}
      
        <ul className="nav__list">
          <li className="nav__item"><a href="/politika" className="nav__link">Politika</a></li>
          <li className="nav__item"><a href="/vijesti" className="nav__link">Vijesti</a></li>
          <li className="nav__item"><a href="/komparacija" className="nav__link">Komparacija</a></li>
          <li className="nav__item"><a href="/kontakt" className="nav__link">Kontakt</a></li>
        </ul>
        <div className="nav__search">
          <input type="text" placeholder="Search"></input>
          <button>Search</button>
        </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button className="nav__btn">Sign Up</button>
        <button className="nav__btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
