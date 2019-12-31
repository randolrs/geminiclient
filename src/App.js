import React from 'react';
import logo from './logo.svg';
import './App.css';

import Signup from './app/Signup';

import { getIsLoggedIn, logout, login } from './api/auth';

const loginUser = async () => {
  const loginParams = {
    userEmail: 'r.shane.randolph@gmail.com',
    password: 'xxx',
  };

  await login(loginParams);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p onClick={ loginUser }>Login</p>
      <p onClick={ getIsLoggedIn }>Is Logged In</p>
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
      </header>
    </div>
  );
}

export default App;
