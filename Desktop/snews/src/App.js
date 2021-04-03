import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';

import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
