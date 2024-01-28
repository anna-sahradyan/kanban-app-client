import styled from 'styled-components';

export const SidebarContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    color: white;
   
`;

export const SidebarSection = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 230px;
    height: 100dvh;
    flex-shrink: 0;
    overflow: auto;
    color:#C8C8C8 ;
    transition: all 0.5s;

`;
export const TopSection = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    transition: all 0.5s;
    background-color: $accent;
    height: 70px;

`;
export const Logo = styled.div`
  

`;

export const Bars = styled.div`
    display: flex;
    font-size: 25px;
    cursor: pointer;
    color: $bg-color;
    transition: all 0.3s;
`;

/*Layout*/
export const LayoutContainer = styled.div`
    min-height: 80dvh;
    display: flex;
    
   
`;