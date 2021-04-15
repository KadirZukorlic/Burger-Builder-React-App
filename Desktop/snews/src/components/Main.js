import React from 'react';

import main1 from '../assets/images/main-1.jpg';
import main2 from '../assets/images/main-2.jpg';
import main3 from '../assets/images/main-3.jpg';
import main4 from '../assets/images/main-4.jpg';

const Main = () => {
  return (
    <div className="main">
      <img src={main1} alt="vijest-1" className="main__img-1" />
      <div className="main__text-1">
        <h2>Test Test Test Test Test Test Test </h2>
        <p>15. April 2021</p>
      </div>

      <img src={main2} alt="vijest-2" className="main__img-2" />
      <div className="main__text-2">
        <h2>Test Test Test Test Test Test Test </h2>
        <p>15. April 2021</p>
      </div>
    </div>
  );
};

export default Main;
