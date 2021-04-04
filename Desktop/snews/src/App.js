import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';

import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
