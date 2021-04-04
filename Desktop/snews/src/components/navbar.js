import React, { useState } from 'react';
import {Link, Router} from 'react-router-dom'
import {Button} from './Button';
import Dropdown from './Dropdown';

// import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const clickHandler = () => setClick(!click)
  console.log(click, 'CLICK')
  const closeMobileMenu = () => setClick(false);
  const dropdownHandler = () => setDropdown(!dropdown);

  return (
    <>
    <nav className="nav">
      <Link to="/">Vijesti</Link>
      <div className="menu-icon"  onClick={clickHandler}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className="nav__item">
         <Link to="/pocetna" className="nav__links" onClick={closeMobileMenu}>
          Pocetna
         </Link>
       </li>

       <li className="nav__item">
         <Link to="/politika" className="nav__links" onClick={closeMobileMenu}>
          Politika <i className="fas fa-caret-down"/>
         </Link>
         {dropdown && <Dropdown />}
       </li>

       <li className="nav__item">
         <Link to="/komparacija" className="nav__links" onClick={closeMobileMenu}>
          Komparacija
         </Link>
       </li>

       <li className="nav__item">
         <Link to="/contact-us" className="nav__links" onClick={closeMobileMenu}>
          Kontaktiraj nas
         </Link>
       </li>

       <li className="nav__item">
         <Link to="/sign-up" className="nav__links-mobile" onClick={closeMobileMenu}>
          Registruj se
         </Link>
       </li>
      </ul>
      <Button />
    </nav>
    </>
  );
};

export default Navbar;
