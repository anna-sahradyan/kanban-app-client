import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
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
    color: #8F868B;

    & b {
        color: #267cb5;
        font-weight: 800;
        font-size: 25px;
    }
`;
export const Dark = styled.div`
    width: 40px;
    height: 40px;
`;
export const Icon = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: rotate(90deg);
    }
`;
export const Logo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
`;
export const InnerHeader = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

export const BoxButton = styled.div`
    width: 200px;
    filter: drop-shadow(3px 3px 10px #1976d2);
`;
export const NavBox = styled.div`
    width: 100%;
   margin-top: 20px;
    
`;
export const InnerNavHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    
`;


