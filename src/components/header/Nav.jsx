import React, { useState } from 'react';
import { BoxButton, InnerNavHeader, Logo, NavBox, StyledLink, Title } from '../componentStyled';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logOutAsyncThunk } from '../../redux/features/authSlice';


const ITEM_HEIGHT = 48;
const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = true;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let options = ['Delete', 'Edit', 'LogOut'];
  const handleClose = (selectedOption) => {
    setAnchorEl(null);
    if (selectedOption === 'LogOut') {
      dispatch(logOutAsyncThunk());
      navigate('/');
    }
    if (selectedOption === 'Edit') {

    }
    if (selectedOption === 'Delete') {

    }

  };

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
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={() => handleClose(option)}>
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