import React, { useState } from 'react';
import {Link, Router} from 'react-router-dom'
import {Button} from './button';
import Dropdown from './dropdown';

// import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const clickHandler = () => setClick(!click)
  console.log(click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className="nav">
      <Link to="/">Vijesti</Link>
      <div className="menu-icon"  onClick={clickHandler}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className="nav__item">
         <Link to="/" className="nav__links" onClick={closeMobileMenu}>
          Pocetna
         </Link>
       </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
