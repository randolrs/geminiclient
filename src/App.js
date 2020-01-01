import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Signup from './app/Signup';
import Update from './app/Update';

import { loginUser, logoutUser } from './redux/action';

const App = ({ loginUser, logoutUser }) => {
  const login = async () => {
    const loginParams = {
      email: 'r.shane.randolph@gmail.com',
      password: 'Secure10',
    };

    await loginUser(loginParams);
  };

  const logout = async () => {
    await logoutUser();
  }

  return (
    <div className="App">
      <header className="App-header">
      <p onClick={ login }>Login</p>
      <p onClick={ null
        // getIsLoggedIn
      }>Is Logged In</p>
      <p onClick={ logout }>Logout</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Signup />
        <Update />
      </header>
    </div>
  );
}

export default connect(null, {
  loginUser,
  logoutUser
})(App);
