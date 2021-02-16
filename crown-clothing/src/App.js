import React from 'react';
import HomePage from './pages/homepage/HomePage'
import Account from './pages/account/Account'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import Header from './components/header/Header'

import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // auth subscriber for persistence of logged-in user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (

      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path='/account' component={Account} />
        </Switch>
      </div>

    )
  }
}

export default App;
