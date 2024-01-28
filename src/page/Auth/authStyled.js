import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
`;
export const AuthContainer = styled.div`
  margin: 100px;
  width: 500px;
  background-color: white;
  border-radius: 3%;
  filter: drop-shadow(3px 3px 10px #000052);
`;

export const HeaderBox = styled.div`
  min-width: 1200px;
  position: absolute;
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #1976d2;
  filter: drop-shadow(3px 3px 10px #000052);
`;

export const InputButton = styled(TextField)`
  width: 80%;
  margin: auto;
`;
export const Form = styled.form`
  width: 80%;
  margin: 60px auto;
`;
