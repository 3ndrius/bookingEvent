import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect,  Switch} from 'react-router-dom';


import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';

import AuthContext from './context/auth-context';


class App extends Component {

  state ={
    token: null,
    userId: null
  }
  login = (token, userId, tokenExpiration) => {
    this.setState({token:token, userId: userId});
  }
  logout = () => {
    this.setState({token: null, userId:null})
  }
  render() {
    return (
      <BrowserRouter>
      <AuthContext.Provider value={
        {token: this.state.token, userId: this.state.userId , login: this.login, logout:this.logout}
      }>
        <MainNavigation/>
        <main className="main-content">
        <Switch>
            <Redirect path="/" to="/auth" exact />
            <Route path="/auth" component={Auth} />
            <Route path="/events"  component={Events} />
            <Route path="/bookings" component={Bookings} />
          </Switch>
        </main>
     </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
