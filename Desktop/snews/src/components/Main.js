import React from 'react';

import main1 from '../assets/images/main-1.jpg';
import main2 from '../assets/images/main-2.jpg';
import main3 from '../assets/images/main-3.jpg';
import main4 from '../assets/images/main-4.jpg';

const Main = () => {
  return (
    <div className="main">
        <figure class="main__item main__item--1">
          <img src={main1} alt="Vijest-1" className="main__img" />
        </figure>

        <figure class="main__item main__item--2">
        <img src={main2} alt="Vijest-1" className="main__img" />
        </figure>

        <figure class="main__item main__item--3">
          <img src={main3} alt="Vijest-1" className="main__img" />
        </figure>

        <figure class="main__item main__item--4">
          <img src={main4} alt="Vijest-1" className="main__img" />
        </figure>
      </div>
  );
};

export default Main;
