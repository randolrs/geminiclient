import React from 'react';
import styled from 'styled-components';

const Footer = props => (
  <FooterContainer>
    <div className="footer-content">
      Footer
    </div>
  </FooterContainer>
)

export default Footer;

const FooterContainer = styled.div`
  background: #313131;
  padding: 50px 0px;
  color: #fff;

  .footer-content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`;
