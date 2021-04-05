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

  const onMouseEnter = () => {
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)
    // if(window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(true);
    // }
  };

  const onMouseLeave = () => {
    // window.innerWidth < 960 ? setDropdown(false) : setDropdown(false)
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <nav className="nav">
      <div className="menu-icon"  onClick={clickHandler}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav__menu active' : 'nav__menu'}>
       <li className="nav__item">
         <Link to="/pocetna" className="nav__links" onClick={closeMobileMenu}>
          Pocetna
         </Link>
       </li>

       <li className="nav__item">
         <Link to="/vijesti" className="nav__links" onClick={closeMobileMenu}>
          Vijesti
         </Link>
       </li>
       
       <li className="nav__item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
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
          Sign Up
         </Link>
       </li>
      </ul>
      <Button />
    </nav>
    </>
  );
};

export default Navbar;
