import React, { useState } from 'react';
import { BoxButton, InnerNavHeader, Logo, NavBox, StyledLink, Title } from '../componentStyled';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ITEM_HEIGHT = 48;
const Nav = () => {
  const user = true;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let options=["Delete","Edit"]
  return (
    <NavBox>
      <InnerNavHeader>
        <Title>Platform Launch</Title>
        <Logo>
          <StyledLink to={'/auth'}>
            <BoxButton>
              {user ? (
                <Button variant="contained">+ Add New Task</Button>
              ) : (
                <Button variant="contained">Sign Up</Button>
              )}
            </BoxButton>
          </StyledLink>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Logo>
      </InnerNavHeader>
    </NavBox>
  )
    ;
};

export default Nav;