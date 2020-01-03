import React from 'react';

import Nav from './layout/Nav';
import ContentBody from './layout/ContentBody';
import Footer from './layout/Footer';

const Layout = () => {
  return (
    <React.Fragment>
      <Nav/>
      <ContentBody>
        ContentBodyContent
        {
          // router in here
        }
      </ContentBody>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
