import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <>
      <ul
        onClick={clickHandler}
        className={click ? 'dropdown__menu-clicked' : 'dropdown__menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.className}
                to={item.path}
                onClick={() => setClick(false)}
              >
                  {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
