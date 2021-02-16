import React from 'react';
import HomePage from './pages/homepage/HomePage'
import Account from './pages/account/Account'
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
        <Route path='/account' component={Account} />
      </Switch>

    </div>

  );
}

export default App;
