import React, { useState } from 'react';
import { AuthContainer, Form, HeaderBox, Wrapper, Title } from './authStyled';
import { Button, Grid } from '@mui/material';
import Input from './Input';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginAsyncThunk, registerAsyncThunk, signInAsync, signUpAsync } from '../../redux/features/authSlice';

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { firstName, lastName, password, email, confirmPassword } = formData;
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignup) {
      dispatch(registerAsyncThunk(formData))
        .unwrap()
        .then(() => {
          toast.success("Registration successful");
          navigate('/board');
        })
        .catch((error) => {
          toast.error(error.message || "Registration failed");
        });
    } else {
      dispatch(loginAsyncThunk({ email, password }))
        .unwrap()
        .then(() => {
          toast.success("Login successful");
          navigate('/board');
        })
        .catch((error) => {
          toast.error(error.message || "Login failed");
        });
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Wrapper>
      <HeaderBox>
        <Title>{isSignup ? 'Log In' : 'Sign Up'}</Title>
      </HeaderBox>
      <AuthContainer style={{ height: !isSignup ? '80%' : '55%' }}>
        <Form>
          <Grid container spacing={3}>
            {!isSignup && (
              <>
                <Input
                  name='firstName'
                  label={'First Name'}
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name='lastName'
                  label={'Last Name'}
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label={'Email '}
              handleChange={handleChange}
              type={'email'}
            />
            <Input
              name="password"
              label={'Password'}
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {!isSignup && (
              <Input
                name='confirmPassword'
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            color={'primary'}
            style={{ marginTop: '5px' }}
            onClick={handleSubmit}
          >
            {!isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={switchMode} >
                {!isSignup
                  ? 'Already have an account ? Sign In  '
                  : 'Don\'t have an account ? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </AuthContainer>
    </Wrapper>
  );
};

export default Auth;
