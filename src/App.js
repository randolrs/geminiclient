import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './app/Layout';
import { updateIsLoggedIn } from './redux/action';

const App = ({ updateIsLoggedIn }) => {

  useEffect(() => {
    updateIsLoggedIn();
  }, []);

  return (
    <>
      <Layout/>
    </>
  );
}

export default connect(null, {
  updateIsLoggedIn,
})(App);
