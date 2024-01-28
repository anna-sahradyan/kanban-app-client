import React from 'react';
import {
  Nav,
  Logo,
  Title,
  StyledLink,
  InnerHeader,
  BoxButton,
  Dark,
  Icon,
} from '../componentStyled';
import { Button } from '@mui/material';

const Header = () => {
  const user = true;
  return (
    <>
      <Nav>
        <InnerHeader>
          <Dark>
            <Icon src={'/img/dark.png'}></Icon>
          </Dark>
          <Title>
            Organize, Prioritize, Achieve: <b>ToDoGenius</b>
          </Title>
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
      </Nav>
    </>
  );
};

export default Header;
