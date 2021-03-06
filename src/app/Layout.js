import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './layout/Nav';
import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';

const Layout = () => {
  return (
    <React.Fragment>
      <Nav/>
      <ContentBody>
        <Router basename="/">
          <Switch>
            <Route path={ '/login' } component={ Login } />
            <Route path={ '/signup' } component={ Signup } />
            <Route path="*" render={() => {
              return <div>I see dead links</div>;
            }} />
          </Switch>
        </Router>
      </ContentBody>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
