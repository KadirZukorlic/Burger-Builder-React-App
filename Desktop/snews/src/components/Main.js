import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from 'react-bootstrap';

import main1 from '../assets/images/main-1.jpg';
import main2 from '../assets/images/main-2.jpg';
import main3 from '../assets/images/main-3.jpg';
import main4 from '../assets/images/main-4.jpg';

const Main = () => {
  return (
    <Container>
      <div className="main">
        <figure class="main__item main__item--1">
          <Link to="/vijest-1">
            <img src={main1} alt="Vijest-1" className="main__img" />
            <div className="main__item-text">
              <h1> TEST TEST TEST TEST TEST TEST TEST TEST </h1>
              <p>16. April 2021</p>
            </div>
          </Link>
        </figure>

        <figure class="main__item main__item--2">
          <Link>
            <img src={main2} alt="Vijest-2" className="main__img" />
            <div className="main__item-text">
              <h1> TEST TEST TEST TEST TEST TEST TEST TEST </h1>
              <p>16. April 2021</p>
            </div>
          </Link>
        </figure>

        <figure class="main__item main__item--3">
          <Link>
            <img src={main3} alt="Vijest-3" className="main__img" />
            <div className="main__item-text">
              <h1> TEST TEST TEST TEST TEST TEST TEST TEST </h1>
              <p>16. April 2021</p>
            </div>
          </Link>
        </figure>

        <figure class="main__item main__item--4">
          <Link>
            <img src={main4} alt="Vijest-4" className="main__img" />
            <div className="main__item-text">
              <h1> TEST TEST TEST TEST TEST TEST TEST TEST </h1>
              <p>16. April 2021</p>
            </div>
          </Link>
        </figure>
      </div>
    </Container>
  );
};
export default Main;
