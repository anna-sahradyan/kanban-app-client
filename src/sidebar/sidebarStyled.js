import styled from 'styled-components';


export const SidebarContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    color: white;
    border: 1px solid red;
`;

export const SidebarSection = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 230px;
    height: 100dvh;
    flex-shrink: 0;
    overflow: auto;
    color: #C8C8C8;
    transition: all 0.5s;


`;
export const TopSection = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    transition: all 0.5s;
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
export const Main = styled.div`

`;
/*SidebarItem*/
export const Title = styled.h3`
    display: flex;
    justify-content: center;
`;
export const SidebarItemBox = styled.div`

`;
export const SidebarItem = styled.div`
    padding: 0.75em 1em;
    display: block;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.15s;
`;


export const SidebarTitle = styled.div`
    display: flex;
    font-size: 1.2em;
    justify-content: space-between;
    align-items: center;
    color: white;

`;
export const Span = styled.span`
{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.5s;
};
`;
export const SpanIcon = styled.div`
    color: white;
    font-size: 20px;
`;
export const Div = styled.div`;
`;


/*Layout*/
export const LayoutContainer = styled.div`
    min-height: 80dvh;
    display: flex;
    background-color: #E0DBDF;
    filter: drop-shadow(3px 3px 10px #1976d2);
`;