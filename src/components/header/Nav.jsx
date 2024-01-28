import React from 'react';
import { BoxButton, InnerHeader, Logo, NavBox, StyledLink } from '../componentStyled';
import { Button } from '@mui/material';

const Nav = () => {
  const user = true;
  return (
    <NavBox>
      <InnerHeader>
        <Logo>
          <StyledLink to={'/auth'}>
            <BoxButton>
              {user ? (
                <Button variant='contained'>log In</Button>
              ) : (
                <Button variant='contained'>Sign Up</Button>
              )}
            </BoxButton>
          </StyledLink>
        </Logo>
      </InnerHeader>
    </NavBox>
)
  ;
};

export default Nav;