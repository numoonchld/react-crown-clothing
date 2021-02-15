import React from 'react';
import HomePage from './pages/homepage/HomePage'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'


function App() {
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>

    </div>

  );
}

export default App;
