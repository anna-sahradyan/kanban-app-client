import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    //border: 1px solid red;
    height: 100dvh;
`;
/*Header*/


export const Nav = styled.div`
  text-align: center;
  align-items: center;
  height: auto;
`;
export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-bottom: 25px;
  color: wheat;

  & b {
    color: #267cb5;
    font-weight: 800;
    font-size: 25px;
  }
`;

export const Logo = styled.div``;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const InnerHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const BoxButton = styled.div`
  width: 150px;
  filter: drop-shadow(3px 3px 10px #1976d2);
`;
