import React from 'react';
import { LayoutContainer } from '../sidebar/sidebarStyled';
import Nav from '../components/header/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <LayoutContainer>
        {children}
      </LayoutContainer>

    </>
  );
};

export default Layout;
