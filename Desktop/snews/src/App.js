import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Vijesti from './components/pages/Vijesti';

import Navbar from './components/Navbar';
import Header from './components/Header';

import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/vijesti" component={Vijesti} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
